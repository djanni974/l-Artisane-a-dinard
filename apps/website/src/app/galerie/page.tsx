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
  category: Exclude<CategoryId, "all">;
}[] = [
  {
    src: "/images/logo-gold.png",
    alt: "Coloration végétale — résultat chaleureux",
    category: "colorations",
  },
  {
    src: "/images/logo-hair-golden.png",
    alt: "Balayage naturel — reflets dorés",
    category: "colorations",
  },
  {
    src: "/images/combs-logo-gold.png",
    alt: "Peignes en bois naturels",
    category: "soins",
  },
  {
    src: "/images/pink-flowers-logo.png",
    alt: "Produits et ambiance naturelle",
    category: "soins",
  },
  {
    src: "/images/facade-illustration-clean.png",
    alt: "Façade du salon L'Artisane",
    category: "salon",
  },
  {
    src: "/images/carte-visite.png",
    alt: "Carte de visite L'Artisane",
    category: "salon",
  },
  {
    src: "/images/logo-teal.png",
    alt: "Ambiance du salon — tons verts",
    category: "salon",
  },
  {
    src: "/images/logo-lavender.png",
    alt: "Détail décoration — lavande",
    category: "salon",
  },
  {
    src: "/images/logo-full-gold.png",
    alt: "Coloration dorée — avant/après",
    category: "colorations",
  },
];

export default function GaleriePage() {
  const [activeFilter, setActiveFilter] = useState<CategoryId>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? photos
      : photos.filter((p) => p.category === activeFilter);

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
        </div>
      </section>

      {/* ═══════════════════════ FILTRES ═══════════════════════ */}
      <section className="pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(({ id, label }) => (
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
              </Button>
            ))}
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
                  className="group aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={500}
                    height={625}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
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
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200}
              height={800}
              className="h-auto max-h-[85vh] w-full rounded-lg object-contain"
            />
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
            <p className="mt-5 text-sm leading-relaxed text-[#2d4a4a]/55">
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
        title="Envie du même résultat ?"
        subtitle="Prenez rendez-vous."
        buttonText="Prendre rendez-vous"
      />
    </div>
  );
}
