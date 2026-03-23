"use client";

import { useState } from "react";
import { IconMapPin } from "@tabler/icons-react";
import { useThirdPartyCookiesAllowed } from "@/components/cookie-banner";

const MAPS_SRC =
  "https://www.google.com/maps?q=L%27Artisane+1+Place+de+Newquay+35800+Dinard+France&z=16&output=embed";
const MAPS_LINK =
  "https://www.google.com/maps/search/L'Artisane+1+Place+de+Newquay+35800+Dinard+France";

export function ConsentMap() {
  const allowed = useThirdPartyCookiesAllowed();
  const [manualConsent, setManualConsent] = useState(false);

  const showMap = allowed || manualConsent;

  if (showMap) {
    return (
      <div className="overflow-hidden rounded-2xl shadow-sm">
        <iframe
          src={MAPS_SRC}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="L'Artisane à Dinard — 1 Place de Newquay"
          className="h-[200px] w-full md:h-[300px]"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white px-6 py-12 shadow-sm text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b8983e]/10">
        <IconMapPin className="h-5 w-5 text-[#b8983e]" stroke={1.5} />
      </div>
      <div>
        <p className="text-sm font-medium text-[#2d4a4a]">
          1 Place de Newquay, 35800 Dinard
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-[#2d4a4a]/50">
          La carte Google Maps nécessite votre consentement pour les cookies tiers.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => setManualConsent(true)}
          className="cursor-pointer rounded-full bg-[#2d4a4a] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#2d4a4a]/85"
        >
          Afficher la carte
        </button>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-5 py-2.5 text-xs font-medium text-[#2d4a4a]/50 transition-colors hover:bg-[#2d4a4a]/5 hover:text-[#2d4a4a]"
        >
          Ouvrir dans Google Maps
        </a>
      </div>
    </div>
  );
}
