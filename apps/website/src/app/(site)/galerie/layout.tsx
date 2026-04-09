import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie — Réalisations coiffure & colorations",
  description:
    "Découvrez les réalisations de L'Artisane à Dinard : colorations végétales, balayages, coupes et soins naturels. Avant/après en photos.",
};

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
