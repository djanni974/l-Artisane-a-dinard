/**
 * Extrait le "calLink" (username/event-type) depuis une URL Cal.com complète.
 *
 * Accepte les formats :
 *  - https://cal.com/lartisane-dinard
 *  - https://cal.com/lartisane-dinard/coupe-couleur
 *  - http://cal.com/...
 *  - cal.com/...
 *
 * Retourne null si l'URL est vide ou n'est pas une URL Cal.com reconnue
 * (ex: domaine personnalisé) : dans ce cas, on garde le CTA externe classique.
 */
export function getCalLink(url: string | undefined | null): string | null {
  if (!url) return null;

  const trimmed = url.trim();
  if (!trimmed) return null;

  // Normalise l'URL pour le parsing (ajoute https:// si manquant)
  const normalized = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  let parsed: URL;
  try {
    parsed = new URL(normalized);
  } catch {
    return null;
  }

  if (parsed.hostname !== "cal.com" && parsed.hostname !== "www.cal.com") {
    return null;
  }

  // Strip leading/trailing slashes
  const path = parsed.pathname.replace(/^\/+|\/+$/g, "");
  return path || null;
}
