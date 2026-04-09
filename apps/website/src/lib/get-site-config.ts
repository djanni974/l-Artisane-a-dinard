import { reader } from "./keystatic";
import { siteConfig } from "@/data/site";

export async function getSalonInfo() {
  const info = await reader.singletons.salonInfo.read();
  if (!info) return null;

  return {
    name: info.nom,
    description: info.description,
    url: siteConfig.url,
    owner: {
      name: info.ownerName,
      title: info.ownerTitle,
      phone: info.telephone,
      phoneHref: `tel:+33${info.telephone.replace(/\s/g, "").slice(1)}`,
      instagram: info.instagram,
    },
    address: {
      street: info.adresseRue,
      city: info.adresseVille,
      postalCode: info.adresseCodePostal,
      country: "France",
      full: `${info.adresseRue}, ${info.adresseCodePostal} ${info.adresseVille}`,
    },
    booking: {
      url: info.bookingUrl || "",
      provider: "Fresha" as const,
    },
    social: {
      instagram: `https://www.instagram.com/${info.instagram}`,
    },
    hours: info.horaires.map((h) => ({
      day: h.jour,
      hours: h.heures,
      closed: h.ferme,
    })),
    // Static fields from code
    legal: siteConfig.legal,
    analytics: siteConfig.analytics,
    developer: siteConfig.developer,
  };
}
