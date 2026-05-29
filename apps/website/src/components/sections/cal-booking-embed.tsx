"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

interface CalBookingEmbedProps {
  /** Le path Cal.com sous la forme "username" ou "username/event-type" */
  calLink: string;
}

/**
 * Calendrier Cal.com embarqué directement dans la page.
 * Permet aux clientes de réserver sans quitter le site.
 *
 * Couleurs alignées sur la charte L'Artisane :
 *   - accent or : #b8983e
 *   - vert sombre : #2d4a4a
 */
export function CalBookingEmbed({ calLink }: CalBookingEmbedProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: {
          branding: { brandColor: "#b8983e" },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "100%", minHeight: "640px" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
