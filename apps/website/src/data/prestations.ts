import {
  IconScissors,
  IconPalette,
  IconLeaf,
  IconDroplet,
} from "@tabler/icons-react";

// ⚠️ TOUS LES PRIX SONT DES PLACEHOLDERS — à remplacer après le RDV du 25 mars.

export const prestations = [
  {
    icon: IconScissors,
    title: "Coupe & Brushing",
    description:
      "On prend le temps de comprendre votre style, la texture de vos cheveux et ce qui vous met en valeur au quotidien.",
    badge: "Sur mesure",
    startingPrice: 25,
    highlight: null,
    kydra: null,
    items: [
      { name: "Coupe femme", price: "38 €" },
      { name: "Coupe homme", price: "25 €" },
      { name: "Coupe + brushing", price: "52 €" },
      { name: "Brushing seul", price: "28 €" },
    ],
  },
  {
    icon: IconPalette,
    title: "Coloration & Balayage",
    description:
      "Des reflets posés avec précision, qui bougent avec la lumière. Formules sans ammoniaque, adaptées à votre base naturelle.",
    badge: "Expertise",
    startingPrice: 45,
    highlight: null,
    kydra: "Pauline travaille avec Kydra Jelly Gloss — kératine végétale + acide hyaluronique, +50\u00a0% de brillance.",
    items: [
      { name: "Coloration complète", price: "65 €" },
      { name: "Balayage", price: "75 €" },
      { name: "Mèches", price: "55 €" },
      { name: "Retouche couleur", price: "45 €" },
    ],
  },
  {
    icon: IconLeaf,
    title: "Coloration végétale",
    description:
      "Idéale pour les cuirs chevelus sensibles ou en transition depuis la chimique : pas d'ammoniaque, pas d'odeur forte — juste de la brillance et des reflets naturels. Gamme fabriquée en France.",
    badge: "Végétal",
    startingPrice: 55,
    highlight: null,
    kydra: "Pauline travaille avec la coloration Kydra Botanique — 91\u00a0% naturelle, aux 5 plantes tinctoriales françaises.",
    items: [{ name: "Coloration 100\u00a0% végétale", price: "55 €" }],
  },
  {
    icon: IconDroplet,
    title: "Soins capillaires bio",
    description:
      "Cheveux secs, ternes ou fragilisés ? Pauline diagnostique et applique le soin adapté, avec des produits naturels sans ammoniaque.",
    badge: "Sur mesure",
    startingPrice: 20,
    highlight: null,
    kydra: "Pauline travaille avec les Élixirs Botaniques Kydra — jusqu'à 95\u00a0% naturels, personnalisés selon votre diagnostic capillaire.",
    items: [
      { name: "Soin nutrition", price: "25 €" },
      { name: "Soin réparateur", price: "30 €" },
      { name: "Masque", price: "20 €" },
      { name: "Bilan capillaire", price: "Offert" },
    ],
  },
] as const;
