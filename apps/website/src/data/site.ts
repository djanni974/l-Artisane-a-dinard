export const siteConfig = {
  name: "L'Artisane",
  description: "Salon de coiffure artisanal à Dinard",
  url: "https://lartisane-dinard.fr",
  owner: {
    name: "Pauline Besnard",
    title: "Coloriste experte",
    phone: "06 18 38 54 86",
    phoneHref: "tel:+33618385486",
    instagram: "l.artisane_a_dinard",
  },
  legal: {
    status: "Micro-entreprise", // TODO: confirmer le statut juridique
    siret: "XXX XXX XXX XXXXX", // TODO: renseigner le numéro SIRET
    tva: "Non assujettie à la TVA (article 293 B du CGI)", // TODO: adapter si assujettie
  },
  address: {
    street: "1 Place de Newquay",
    city: "Dinard",
    postalCode: "35800",
    country: "France",
    full: "1 Place de Newquay, 35800 Dinard",
  },
  booking: {
    url: "", // À remplir avec le lien Fresha de Pauline
    provider: "Fresha" as const,
  },
  analytics: {
    plausibleDomain: "lartisane-dinard.fr",
  },
  social: {
    instagram: "https://www.instagram.com/l.artisane_a_dinard",
  },
  hours: [
    { day: "Lundi", hours: "Fermé", closed: true },
    { day: "Mardi", hours: "9h – 19h", closed: false },
    { day: "Mercredi", hours: "9h – 19h", closed: false },
    { day: "Jeudi", hours: "9h – 19h", closed: false },
    { day: "Vendredi", hours: "9h – 19h", closed: false },
    { day: "Samedi", hours: "9h – 17h", closed: false },
    { day: "Dimanche", hours: "Fermé", closed: true },
  ],
  developer: {
    name: "Djanni Studio",
    url: "https://djannistudio.fr",
  },
} as const;
