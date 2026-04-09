import type { Metadata } from "next";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Hero } from "@/components/sections/hero";
import { Arguments } from "@/components/sections/arguments";
import { PrestationsPreview } from "@/components/sections/prestations-preview";
import { GaleriePreview } from "@/components/sections/galerie-preview";
import { CtaSection } from "@/components/sections/cta-section";
import { Separator } from "@/components/ui/separator";
import { IconBrandInstagram, IconArrowRight } from "@tabler/icons-react";
import { getSalonInfo } from "@/lib/get-site-config";

export const metadata: Metadata = {
  title:
    "L'Artisane à Dinard | Salon de coiffure naturel & coloration végétale",
  description:
    "Salon de coiffure artisanal à Dinard. Pauline Besnard, coloriste experte spécialisée en coloration végétale, balayage et soins naturels. Réservation en ligne.",
};

/* ─── Bandeau défilant ─── */
function Marquee() {
  const item =
    "Douceur  ✦  Savoir-faire  ✦  Éclat  ✦  Sur mesure  ✦  Dinard  ✦  Sérénité  ✦  ";
  const text = item.repeat(4);
  return (
    <div className="relative overflow-hidden border-y border-[#b8983e]/15 bg-[#2d4a4a] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-[#2d4a4a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-[#2d4a4a] to-transparent" />
      <div className="animate-marquee flex w-max whitespace-nowrap">
        <span className="font-serif text-[13px] tracking-[0.35em] text-[#b8983e] md:text-sm">
          {text}
        </span>
        <span className="font-serif text-[13px] tracking-[0.35em] text-[#b8983e] md:text-sm">
          {text}
        </span>
      </div>
    </div>
  );
}

export default async function HomePage() {
  const salonInfo = await getSalonInfo();
  const bookingHref = salonInfo?.booking.url || salonInfo?.owner.phoneHref || "tel:+33618385486";
  const instagramUrl = salonInfo?.social.instagram || "https://www.instagram.com/l.artisane_a_dinard";
  const instagramHandle = salonInfo?.owner.instagram || "l.artisane_a_dinard";

  return (
    <div className="animate-[page-enter_0.8s_ease-out]">
      <Hero bookingHref={bookingHref} />

      <Marquee />

      <Arguments />

      {/* ═══════════════════════ IMAGE IMMERSIVE ═══════════════════════ */}
      <AnimateOnScroll animation="fade-in" duration="duration-1000">
        <section className="mx-4 md:mx-8 lg:mx-auto lg:max-w-6xl">
          <div className="grid overflow-hidden rounded-3xl md:grid-cols-2">
            <div className="relative min-h-[450px] md:min-h-[500px]">
              <Image
                src="/images/logo-hair-golden.png"
                alt="L'Artisane — sublimer votre couleur naturellement"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center bg-[#2d4a4a] p-10 md:p-16">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b8983e]">
                Coloration végétale
              </p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-snug text-white md:text-4xl">
                Sublimer votre couleur, sans compromis.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/65">
                Des pigments végétaux, zéro ammoniaque, et un résultat lumineux
                qui respecte vos cheveux sur la durée.
              </p>
              <div className="mt-8">
                <a
                  href="/prestations"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#b8983e] transition-colors duration-300 hover:text-[#d4b85c]"
                >
                  En savoir plus
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <PrestationsPreview />

      {/* ═══════════════════════ BANNIÈRE CITATION ═══════════════════════ */}
      <AnimateOnScroll animation="fade-in" duration="duration-1000">
        <section className="mx-auto max-w-md px-6 md:max-w-lg">
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/combs-logo-gold.png"
              alt="Peignes en bois naturels avec le logo L'Artisane"
              width={800}
              height={1067}
              sizes="(max-width: 768px) 100vw, 28rem"
              className="w-full"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#2d4a4a]/80 via-[#2d4a4a]/50 to-transparent px-6 pb-8 pt-20 text-center md:px-10 md:pb-10 md:pt-28">
              <div className="mx-auto h-px w-10 bg-white/30" />
              <p className="mt-4 font-serif text-xl font-light leading-relaxed text-white md:text-2xl">
                &laquo;&nbsp;Chaque couleur raconte une histoire. Mon travail, c&apos;est de trouver la vôtre.&nbsp;&raquo;
              </p>
              <div className="mx-auto mt-4 h-px w-10 bg-white/30" />
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#d4b85c]">
                Pauline Besnard
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <GaleriePreview />

      {/* ═══════════════════════ INSTAGRAM ═══════════════════════ */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimateOnScroll animation="fade-in">
            <p className="text-sm text-[#2d4a4a]/65">
              Plus de réalisations sur{" "}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[#2d4a4a] underline underline-offset-4 transition-colors hover:text-[#b8983e]"
              >
                <IconBrandInstagram className="h-5 w-5" stroke={2} />
                @{instagramHandle}
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="flex justify-center py-3">
        <Separator className="max-w-[120px] bg-[#b8983e]/20" />
      </div>

      <CtaSection
        title="Votre première visite ?"
        subtitle="Bilan capillaire gratuit."
        buttonText="Prendre rendez-vous"
      />
    </div>
  );
}
