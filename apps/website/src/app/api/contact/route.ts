import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { siteConfig } from "@/data/site";
import { getContactRateLimit } from "@/lib/rate-limit";

// ─── Types ───────────────────────────────────────────────────
interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// ─── Sanitization ─────────────────────────────────────────────
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ─── Validation ──────────────────────────────────────────────
function validate(body: unknown): ContactPayload | string {
  if (!body || typeof body !== "object") return "Corps de la requête invalide.";

  const { name, email, phone, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2)
    return "Le nom doit contenir au moins 2 caractères.";
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return "Adresse email invalide.";
  if (typeof message !== "string" || message.trim().length < 10)
    return "Le message doit contenir au moins 10 caractères.";
  if (message.trim().length > 2000)
    return "Le message ne doit pas dépasser 2000 caractères.";

  return {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: typeof phone === "string" ? phone.trim() : undefined,
    message: message.trim(),
  };
}

// ─── CSRF Origin Check ──────────────────────────────────────
function isValidOrigin(request: Request): boolean {
  // In development, skip origin check entirely
  if (process.env.NODE_ENV === "development") return true;

  const allowedHost = new URL(siteConfig.url).host;
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  if (origin) {
    try {
      return new URL(origin).host === allowedHost;
    } catch {
      return false;
    }
  }

  if (referer) {
    try {
      return new URL(referer).host === allowedHost;
    } catch {
      return false;
    }
  }

  return false;
}

// ─── Retry Helper ───────────────────────────────────────────
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  maxRetries = 3
): Promise<Response> {
  const backoff = [500, 1000, 2000];
  let lastError: Error | undefined;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const res = await fetch(url, options);
      // Don't retry on client errors (4xx) — only on server errors (5xx) or network issues
      if (res.ok || (res.status >= 400 && res.status < 500)) {
        return res;
      }
      // Server error — retry
      lastError = new Error(`Resend API returned ${res.status}`);
    } catch (err) {
      // Network error — retry
      lastError = err instanceof Error ? err : new Error(String(err));
    }

    if (attempt < maxRetries - 1) {
      await new Promise((resolve) => setTimeout(resolve, backoff[attempt]));
    }
  }

  throw lastError;
}

// ─── Handler ─────────────────────────────────────────────────
export async function POST(request: Request) {
  try {
    // CSRF: verify Origin/Referer
    if (!isValidOrigin(request)) {
      return NextResponse.json(
        { error: "Requête non autorisée." },
        { status: 403 }
      );
    }

    // Rate limiting (skip if Upstash not configured — dev mode)
    const rateLimit = getContactRateLimit();
    if (rateLimit) {
      const headersList = await headers();
      const ip =
        headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        "anonymous";
      const { success, remaining } = await rateLimit.limit(ip);

      if (!success) {
        return NextResponse.json(
          {
            error:
              "Trop de messages envoyés. Réessayez dans quelques minutes.",
          },
          { status: 429, headers: { "X-RateLimit-Remaining": String(remaining) } }
        );
      }
    }

    const body = await request.json();
    const result = validate(body);

    if (typeof result === "string") {
      return NextResponse.json({ error: result }, { status: 400 });
    }

    const { name, email, phone, message } = result;

    // Sanitize all user input before injecting into HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : undefined;
    const safeMessage = escapeHtml(message);

    // Send email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Configuration serveur manquante." },
        { status: 500 }
      );
    }

    const recipientEmail =
      process.env.CONTACT_EMAIL || "contact@lartisane-dinard.fr";

    const res = await fetchWithRetry("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: `L'Artisane — Site Web <onboarding@resend.dev>`,
        to: [recipientEmail],
        reply_to: email,
        subject: `Nouveau message de ${safeName} — lartisane-dinard.fr`,
        html: `
          <div style="font-family: -apple-system, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; background: #ffffff;">
            <!-- Header -->
            <div style="background: #2d4a4a; padding: 28px 32px; border-radius: 12px 12px 0 0;">
              <h1 style="margin: 0; font-size: 18px; font-weight: 400; color: #ffffff; letter-spacing: 0.05em;">
                L'Artisane
              </h1>
              <p style="margin: 6px 0 0; font-size: 11px; color: #ffffff; opacity: 0.5; text-transform: uppercase; letter-spacing: 0.15em;">
                Nouveau message
              </p>
            </div>

            <!-- Body -->
            <div style="border: 1px solid #e8e0d4; border-top: none; border-radius: 0 0 12px 12px; padding: 32px;">
              <!-- Contact info -->
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; font-size: 11px; color: #2d4a4a; opacity: 0.45; text-transform: uppercase; letter-spacing: 0.1em; width: 90px; vertical-align: top;">Nom</td>
                  <td style="padding: 6px 0; font-size: 15px; color: #2d4a4a; font-weight: 600;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 11px; color: #2d4a4a; opacity: 0.45; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Email</td>
                  <td style="padding: 6px 0; font-size: 14px;">
                    <a href="mailto:${safeEmail}" style="color: #b8983e; text-decoration: none;">${safeEmail}</a>
                  </td>
                </tr>
                ${
                  safePhone
                    ? `<tr>
                  <td style="padding: 6px 0; font-size: 11px; color: #2d4a4a; opacity: 0.45; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Tél.</td>
                  <td style="padding: 6px 0; font-size: 14px;">
                    <a href="tel:${safePhone}" style="color: #b8983e; text-decoration: none;">${safePhone}</a>
                  </td>
                </tr>`
                    : ""
                }
              </table>

              <!-- Separator -->
              <div style="border-top: 1px solid #e8e0d4; margin: 20px 0;"></div>

              <!-- Message -->
              <p style="margin: 0 0 8px; font-size: 11px; color: #2d4a4a; opacity: 0.45; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
              <div style="background: #f8f4ef; border-radius: 8px; padding: 20px; border-left: 3px solid #b8983e;">
                <p style="margin: 0; font-size: 14px; line-height: 1.7; white-space: pre-wrap; color: #2d4a4a;">${safeMessage}</p>
              </div>

              <!-- Reply button -->
              <div style="margin-top: 24px; text-align: center;">
                <a href="mailto:${safeEmail}" style="display: inline-block; background: #2d4a4a; color: #ffffff; font-size: 13px; font-weight: 500; padding: 12px 32px; border-radius: 50px; text-decoration: none;">
                  Répondre à ${safeName}
                </a>
              </div>
            </div>

            <!-- Footer -->
            <p style="font-size: 11px; color: #999; margin: 20px 0 0; text-align: center;">
              Via le formulaire de contact · <a href="https://lartisane-dinard.fr" style="color: #b8983e; text-decoration: none;">lartisane-dinard.fr</a>
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error("Resend error:", errorData);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi. Réessayez ou appelez-nous." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Réessayez plus tard." },
      { status: 500 }
    );
  }
}
