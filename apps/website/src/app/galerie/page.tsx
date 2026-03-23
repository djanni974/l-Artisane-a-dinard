"use client";

import { useState } from "react";
import Image from "next/image";
import {
  IconBrandInstagram,
  IconArrowRight,
  IconX,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { CtaSection } from "@/components/sections/cta-section";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "Tout" },
  { id: "colorations", label: "Colorations & Balayages" },
  { id: "soins", label: "Soins naturels" },
  { id: "salon", label: "Le salon" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

const photos: {
  src: string;
  alt: string;
  description: string;
  category: Exclude<CategoryId, "all">;
}[] = [
  {
    src: "/images/logo-gold.png",
    alt: "Coloration végétale cuivrée sur base châtain",
    description:
      "Idéale pour apporter de la lumière sans abîmer le cheveu — pigments végétaux, sans ammoniaque.",
    category: "colorations",
  },
  {
    src: "/images/logo-hair-golden.png",
    alt: "Balayage naturel aux reflets dorés",
    description:
      "Balayage en technique libre pour un fondu naturel — pigments végétaux, zéro ammoniaque.",
    category: "colorations",
  },
  {
    src: "/images/combs-logo-gold.png",
    alt: "Peignes en bois naturels",
    description:
      "Antistatiques et doux pour le cuir chevelu, ils respectent la fibre capillaire sans plastique.",
    category: "soins",
  },
  {
    src: "/images/pink-flowers-logo.png",
    alt: "Produits naturels et bio",
    description:
      "Soins certifiés bio, sélectionnés pour leur efficacité et leur respect du cheveu et de l'environnement.",
    category: "soins",
  },
  {
    src: "/images/facade-illustration-clean.png",
    alt: "Façade du salon L'Artisane à Dinard",
    description:
      "Un écrin chaleureux au cœur de Dinard, pensé pour un moment de détente et de soin.",
    category: "salon",
  },
  {
    src: "/images/carte-visite.png",
    alt: "Carte de visite L'Artisane",
    description:
      "L'identité artisanale du salon : un savoir-faire sur mesure, une approche personnalisée.",
    category: "salon",
  },
  {
    src: "/images/logo-teal.png",
    alt: "Ambiance du salon — tons verts apaisants",
    description:
      "Palette naturelle inspirée de la Côte d'Émeraude — couleurs douces et matières brutes.",
    category: "salon",
  },
  {
    src: "/images/logo-lavender.png",
    alt: "Détail décoration — lavande et douceur",
    description:
      "Touches de lavande et textures végétales pour une atmosphère cocooning.",
    category: "salon",
  },
  {
    src: "/images/logo-full-gold.png",
    alt: "Coloration dorée — avant/après",
    description:
      "Passage d'une base terne à un doré lumineux grâce à une coloration 100 % végétale.",
    category: "colorations",
  },
];

const ctaByCategory: Record<
  CategoryId,
  { title: string; subtitle: string }
> = {
  all: {
    title: "Envie du même résultat ?",
    subtitle: "Prenez rendez-vous.",
  },
  colorations: {
    title: "Envie d'une couleur lumineuse et naturelle ?",
    subtitle: "Prenez rendez-vous.",
  },
  soins: {
    title: "Envie d'un soin profond et naturel ?",
    subtitle: "Prenez rendez-vous.",
  },
  salon: {
    title: "Envie de découvrir le salon ?",
    subtitle: "Prenez rendez-vous.",
  },
};

export default function GaleriePage() {
  const [activeFilter, setActiveFilter] = useState<CategoryId>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? photos
      : photos.filter((p) => p.category === activeFilter);

  const cta = ctaByCategory[activeFilter];

  return (
    <div>
      {/* ═══════════════════════ HEADER ═══════════════════════ */}
      <section className="pb-10 pt-20 md:pb-14 md:pt-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#b8983e]">
            Galerie
          </p>
          <h1 className="font-serif text-3xl font-light leading-snug md:text-4xl lg:text-5xl">
            Le travail parle de lui-même.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#2d4a4a]/65">
            Colorations végétales, soins naturels, ambiance du salon —
            découvrez le savoir-faire artisanal de Pauline.
          </p>
        </div>
      </section>

      {/* ═══════════════════════ FILTRES ═══════════════════════ */}
      <section className="pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(({ id, label }) => {
              const count =
                id === "all"
                  ? photos.length
                  : photos.filter((p) => p.category === id).length;
              return (
                <Button
                  key={id}
                  variant={activeFilter === id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(id)}
                  className={cn(
                    "cursor-pointer rounded-full px-5 text-xs tracking-wide transition-all duration-300",
                    activeFilter === id
                      ? "bg-[#2d4a4a] text-white hover:bg-[#2d4a4a]/90"
                      : "border-[#2d4a4a]/15 text-[#2d4a4a]/60 hover:border-[#2d4a4a] hover:bg-[#2d4a4a] hover:text-white"
                  )}
                >
                  {label}
                  <span className="ml-1.5 opacity-50">{count}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ GRILLE ═══════════════════════ */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {filtered.map((photo, i) => (
              <AnimateOnScroll
                key={photo.src}
                animation="fade-in zoom-in-95"
                delay={i < 3 ? "" : "delay-150"}
              >
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={500}
                    height={625}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-10 text-left opacity-0 transition-all duration-500 group-hover:opacity-100 max-sm:opacity-100">
                    <p className="text-sm font-medium text-white">
                      {photo.alt}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-white/75">
                      {photo.description}
                    </p>
                  </div>
                </button>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ LIGHTBOX ═══════════════════════ */}
      <Dialog
        open={lightbox !== null}
        onOpenChange={(open) => !open && setLightbox(null)}
      >
        <DialogContent
          className="max-w-[90vw] max-h-[90vh] bg-black/95 p-2 sm:max-w-4xl"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">
            {lightbox !== null ? filtered[lightbox]?.alt : "Photo"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Photo de la galerie de L&apos;Artisane
          </DialogDescription>
          {lightbox !== null && filtered[lightbox] && (
            <div>
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1200}
                height={800}
                sizes="(max-width: 896px) 90vw, 56rem"
                className="h-auto max-h-[75vh] w-full rounded-lg object-contain"
              />
              <div className="px-4 py-3">
                <p className="text-sm font-medium text-white">
                  {filtered[lightbox].alt}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/60">
                  {filtered[lightbox].description}
                </p>
              </div>
            </div>
          )}
          <DialogClose
            render={
              <button className="absolute top-3 right-3 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20" />
            }
          >
            <IconX className="h-5 w-5" stroke={1.5} />
            <span className="sr-only">Fermer</span>
          </DialogClose>
        </DialogContent>
      </Dialog>

      {/* ═══════════════════════ INSTAGRAM ═══════════════════════ */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimateOnScroll animation="fade-in slide-in-from-bottom-4">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg">
              <IconBrandInstagram
                className="h-7 w-7 text-white"
                stroke={1.5}
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#2d4a4a]/65">
              Suivez{" "}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#2d4a4a] underline underline-offset-4 transition-colors hover:text-[#b8983e]"
              >
                @{siteConfig.owner.instagram}
              </a>{" "}
              pour encore plus de réalisations.
            </p>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#2d4a4a]/5 px-6 py-2.5 text-sm font-medium text-[#2d4a4a] transition-all duration-300 hover:bg-[#2d4a4a] hover:text-white"
            >
              Voir sur Instagram
              <IconArrowRight className="h-3.5 w-3.5" />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <CtaSection
        title={cta.title}
        subtitle={cta.subtitle}
        buttonText="Prendre rendez-vous"
      />
    </div>
  );
}
