import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";

// Route désactivée : ce site est un concept non officiel. Aucun message
// n'est envoyé ni stocké, toute demande doit aller directement au salon.
// L'ancienne implémentation (envoi via Resend) reste dans l'historique git
// pour la future version officielle.
export function POST() {
  return NextResponse.json(
    {
      error: `Le formulaire de contact est désactivé. Pour toute demande, appelez le salon au ${siteConfig.owner.phone}.`,
    },
    { status: 410 }
  );
}
