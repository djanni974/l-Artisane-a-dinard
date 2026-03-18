import {
  IconScissors,
  IconPalette,
  IconLeaf,
  IconDroplet,
} from "@tabler/icons-react";

export const prestations = [
  {
    icon: IconScissors,
    title: "Coupe & Brushing",
    description:
      "Un moment rien que pour vous, adapté à votre style et à la nature de vos cheveux.",
    badge: "Sur mesure",
    items: ["Coupe femme / homme", "Coupe + brushing", "Brushing seul"],
  },
  {
    icon: IconPalette,
    title: "Coloration & Balayage",
    description:
      "Des reflets qui bougent avec la lumière, posés avec précision pour un résultat qui vous ressemble.",
    badge: "Expertise",
    items: [
      "Coloration complète",
      "Balayage",
      "Mèches",
      "Retouche couleur",
    ],
  },
  {
    icon: IconLeaf,
    title: "Coloration végétale",
    description:
      "Une couleur douce et brillante, à base de pigments végétaux — sans ammoniaque, sans compromis.",
    badge: "Végétal",
    items: ["Coloration 100% végétale, sans ammoniaque"],
  },
  {
    icon: IconDroplet,
    title: "Soins capillaires bio",
    description:
      "Vos cheveux sont secs, ternes ou fragilisés ? On trouve le bon soin et on prend le temps de l'appliquer.",
    badge: "Sur mesure",
    items: [
      "Soin nutrition",
      "Soin réparateur",
      "Masque",
      "Bilan capillaire",
    ],
  },
] as const;
