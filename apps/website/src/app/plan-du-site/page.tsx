import type { Metadata } from "next";
import Link from "next/link";
import {
  IconHome,
  IconUser,
  IconScissors,
  IconPhoto,
  IconMail,
  IconFileText,
  IconScale,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Plan du site",
  description:
    "Plan du site L'Artisane à Dinard — retrouvez toutes les pages du site.",
  robots: { index: false, follow: true },
};

const pages = [
  {
    label: "Accueil",
    href: "/",
    description: "Bienvenue chez L'Artisane, salon de coiffure artisanal à Dinard.",
    icon: IconHome,
  },
  {
    label: "À propos",
    href: "/a-propos",
    description: "Découvrez Pauline Besnard, coloriste experte depuis 20 ans.",
    icon: IconUser,
  },
  {
    label: "Prestations",
    href: "/prestations",
    description: "Coupes, colorations végétales, soins capillaires et tarifs.",
    icon: IconScissors,
  },
  {
    label: "Galerie",
    href: "/galerie",
    description: "Nos réalisations en images : couleurs, coupes et coiffages.",
    icon: IconPhoto,
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Prenez rendez-vous ou contactez le salon.",
    icon: IconMail,
  },
  {
    label: "Mentions légales",
    href: "/mentions-legales",
    description: "Informations légales et politique de confidentialité.",
    icon: IconFileText,
  },
  {
    label: "CGV",
    href: "/cgv",
    description: "Conditions générales de vente du salon.",
    icon: IconScale,
  },
];

export default function PlanDuSitePage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#b8983e]">
          Navigation
        </p>
        <h1 className="mt-3 mb-12 font-serif text-3xl font-light md:text-4xl">
          Plan du site
        </h1>

        <div className="grid gap-4 sm:grid-cols-2">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group flex items-start gap-4 rounded-xl border border-[#2d4a4a]/10 bg-white p-5 transition-all duration-300 hover:border-[#b8983e]/30 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2d4a4a]/5 transition-colors duration-300 group-hover:bg-[#b8983e]/10">
                <page.icon
                  className="h-5 w-5 text-[#2d4a4a]/50 transition-colors duration-300 group-hover:text-[#b8983e]"
                  stroke={1.5}
                />
              </div>
              <div>
                <p className="font-serif text-lg font-medium text-[#2d4a4a] transition-colors duration-300 group-hover:text-[#b8983e]">
                  {page.label}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#2d4a4a]/60">
                  {page.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
