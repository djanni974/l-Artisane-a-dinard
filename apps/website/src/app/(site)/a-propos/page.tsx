import type { Metadata } from "next";
import Image from "next/image";
import {
  IconLeaf,
  IconEar,
  IconSparkles,
  IconRecycle,
} from "@tabler/icons-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "À propos — Pauline Besnard, coloriste experte à Dinard",
  description:
    "Découvrez Pauline Besnard, coloriste experte avec 20 ans d'expérience. Spécialisée en coloration végétale et soins naturels à Dinard.",
};

const valeurs = [
  { icon: IconLeaf, label: "Naturel", description: "Des produits végétaux, sans ammoniaque ni composants agressifs, pour respecter vos cheveux et votre santé." },
  { icon: IconEar, label: "Écoute", description: "Chaque visite commence par un échange pour comprendre vos envies, votre routine et vos besoins. C'est pour cela qu'un diagnostic capillaire vous est offert lors de votre première visite." },
  { icon: IconSparkles, label: "Soin du détail", description: "Du diagnostic à la touche finale, chaque geste est pensé pour un résultat sur mesure." },
  { icon: IconRecycle, label: "Éco-responsabilité", description: "Des emballages réduits, des formules biodégradables et une démarche respectueuse de l'environnement." },
];

export default function AProposPage() {
  return (
    <div>
      {/* ═══════════════════════ HEADER ═══════════════════════ */}
      <section className="relative pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <AnimateOnScroll animation="fade-in slide-in-from-left-12" duration="duration-1000">
              <div className="aspect-3/4 overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/pauline.png"
                  alt="Pauline Besnard dans son salon L'Artisane à Dinard"
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>
            </AnimateOnScroll>

            <div className="space-y-6">
              <AnimateOnScroll animation="fade-in slide-in-from-right-8" delay="delay-200">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#b8983e]">
                  À propos
                </p>
                <h1 className="mt-3 font-serif text-3xl font-light leading-snug md:text-4xl lg:text-5xl">
                  L&apos;Artisane, c&apos;est une histoire de passion et de
                  savoir-faire.
                </h1>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ HISTOIRE ═══════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateOnScroll animation="fade-in">
            <div className="space-y-6 text-[15px] leading-relaxed text-[#2d4a4a]/70">
              <p>
                Pauline Besnard a passé 20 ans à affiner son art dans des salons
                de coiffure avant d&apos;ouvrir, en 2024, son propre espace au
                cœur du quartier Newquay à Dinard.
              </p>
              <p>
                Ce qui la motive&nbsp;? Prendre le temps avec chaque personne,
                accompagner sur la durée et voir ses clients repartir en se
                sentant vraiment eux-mêmes.
              </p>
              <p>
                Son positionnement est clair&nbsp;: une coiffure artisanale,
                naturelle et personnalisée. Chaque client repart avec une coupe
                et une couleur pensées pour lui, réalisées avec des produits
                respectueux de l&apos;environnement et de la santé.
              </p>
              <p>
                Spécialisée en coloration végétale, balayages et soins naturels,
                Pauline s&apos;est également formée aux soins du cuir chevelu
                et à la cosmétique naturelle, pour une approche globale du
                bien-être capillaire.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════ CITATION ═══════════════════════ */}
      <section className="bg-[#2d4a4a] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateOnScroll animation="fade-in slide-in-from-bottom-4">
            <blockquote className="text-center">
              <div className="mx-auto mb-6 h-px w-12 bg-[#b8983e]/40" />
              <p className="font-serif text-xl font-light italic leading-relaxed text-white/85 md:text-2xl">
                &laquo;&nbsp;Après 20 ans à exercer mon métier avec passion,
                j&apos;ai voulu créer l&apos;endroit dont je rêvais&nbsp;: un
                salon à taille humaine, ancré dans des valeurs de soin, de
                naturel et d&apos;authenticité.&nbsp;&raquo;
              </p>
              <div className="mx-auto mt-6 h-px w-12 bg-[#b8983e]/40" />
              <footer className="mt-6 text-sm font-medium text-[#b8983e]">
                — Pauline Besnard
              </footer>
            </blockquote>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════ VALEURS ═══════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <AnimateOnScroll
            animation="fade-in slide-in-from-bottom-4"
            className="mb-14 text-center"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#b8983e]">
              Nos valeurs
            </p>
            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Ce qui nous guide au quotidien.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {valeurs.map(({ icon: Icon, label, description }, i) => (
              <AnimateOnScroll
                key={label}
                animation="fade-in zoom-in-95"
                delay={
                  i === 0
                    ? ""
                    : i === 1
                      ? "delay-150"
                      : i === 2
                        ? "delay-300"
                        : "delay-[450ms]"
                }
              >
                <div className="group flex h-full flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#b8983e]/10 transition-all duration-300 group-hover:bg-[#b8983e]/20">
                    <Icon
                      className="h-6 w-6 text-[#b8983e]"
                      stroke={1.5}
                    />
                  </div>
                  <p className="font-serif text-sm font-medium">{label}</p>
                  <p className="text-xs leading-relaxed text-[#2d4a4a]/65">{description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Envie de découvrir le salon ?"
        subtitle="Prenez soin de vous."
        description="30 minutes pour faire le point sur vos cheveux, comprendre vos envies et vous proposer un soin adapté — bilan capillaire offert."
        buttonText="Prendre rendez-vous"
        secondaryLink={{ label: "Voir les prestations", href: "/prestations" }}
      />
    </div>
  );
}
