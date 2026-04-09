import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg, #f5ebe0 0%, #ede0d0 100%)", fontFamily: "serif" }}>
        <div style={{ position: "absolute", top: 24, left: 24, right: 24, bottom: 24, border: "1px solid rgba(184, 152, 62, 0.25)", borderRadius: 16, display: "flex" }} />
        <div style={{ position: "absolute", top: 24, left: "50%", transform: "translateX(-50%)", width: 80, height: 3, background: "#b8983e", borderRadius: 2, display: "flex" }} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ fontSize: 64, fontWeight: 400, color: "#2d4a4a", lineHeight: 1.1, textAlign: "center" }}>L&apos;Artisane</div>
          <div style={{ fontSize: 32, fontWeight: 300, color: "#b8983e", textAlign: "center" }}>a Dinard</div>
        </div>
        <div style={{ width: 40, height: 1, background: "#b8983e", margin: "24px 0", display: "flex" }} />
        <div style={{ fontSize: 20, color: "#2d4a4a", opacity: 0.7, textAlign: "center", maxWidth: 500, lineHeight: 1.5 }}>Salon de coiffure naturel &amp; coloration vegetale</div>
        <div style={{ position: "absolute", bottom: 48, display: "flex", alignItems: "center", gap: 16, fontSize: 14, color: "#2d4a4a", opacity: 0.5 }}>
          <span>1 Place de Newquay, 35800 Dinard</span>
          <span style={{ color: "#b8983e" }}>•</span>
          <span>Pauline Besnard — Coloriste experte</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
