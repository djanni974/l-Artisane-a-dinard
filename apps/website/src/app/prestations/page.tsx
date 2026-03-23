import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { CtaSection } from "@/components/sections/cta-section";
import { prestations } from "@/data/prestations";

export const metadata: Metadata = {
  title:
    "Prestations — Coupe, coloration végétale, soins naturels | L'Artisane Dinard",
  description:
    "Découvrez toutes les prestations de L'Artisane à Dinard : coupe, coloration végétale sans ammoniaque, balayage, soins capillaires bio. Bilan capillaire gratuit.",
};

export default function PrestationsPage() {
  return (
    <div>
      {/* ═══════════════════════ HEADER ═══════════════════════ */}
      <section className="pb-16 pt-20 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-in slide-in-from-bottom-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#b8983e]">
              Nos prestations
            </p>
            <h1 className="font-serif text-3xl font-light leading-snug md:text-4xl lg:text-5xl">
              Des prestations pensées pour vos cheveux, pas pour le catalogue.
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════ CATÉGORIES ═══════════════════════ */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {prestations.map(
              (
                {
                  icon: Icon,
                  title,
                  description,
                  badge,
                  startingPrice,
                  highlight,
                  kydra,
                  items,
                },
                i,
              ) => (
                <AnimateOnScroll
                  key={title}
                  animation="fade-in slide-in-from-bottom-6"
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
                  <Card className="group h-full rounded-2xl border-0 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="p-8">
                      {/* En-tête : icône + titre + badge */}
                      <div className="mb-4 flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b8983e]/10 transition-all duration-300 group-hover:bg-[#b8983e]/20">
                          <Icon
                            className="h-5 w-5 text-[#b8983e]"
                            stroke={1.5}
                          />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h2 className="font-serif text-xl font-medium text-[#2d4a4a]">
                              {title}
                            </h2>
                            <Badge
                              variant="secondary"
                              className="bg-[#b8983e]/10 font-medium text-[#b8983e]"
                            >
                              {badge}
                            </Badge>
                          </div>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-[#2d4a4a]/65">
                            {description}
                          </p>
                        </div>
                      </div>

                      <Separator className="my-5" />

                      {/* Prix d'appel */}
                      <div className="mb-5 flex items-end justify-between">
                        <p className="text-xs text-[#2d4a4a]/60">
                          Selon longueur et nature des cheveux
                        </p>
                        <p className="text-right font-serif text-lg font-medium text-[#b8983e]">
                          À partir de {startingPrice}&nbsp;€
                        </p>
                      </div>

                      {/* Liste des prestations avec prix */}
                      <ul className="space-y-3">
                        {items.map((item) => {
                          const isFree = item.price === "Offert";
                          return (
                            <li
                              key={item.name}
                              className="flex items-baseline justify-between gap-4 text-sm"
                            >
                              <span className="flex items-center gap-2 text-[#2d4a4a]/70">
                                <span className="mt-px h-1 w-1 shrink-0 rounded-full bg-[#b8983e]/40" />
                                {item.name}
                              </span>
                              <span className="min-w-4 flex-1 border-b border-dotted border-[#2d4a4a]/10" />
                              <span
                                className={
                                  isFree
                                    ? "shrink-0 font-semibold text-[#b8983e]"
                                    : "shrink-0 tabular-nums font-medium text-[#2d4a4a]"
                                }
                              >
                                {item.price}
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      {/* Badge highlight (ex: Bilan capillaire offert) */}
                      {highlight && (
                        <div className="mt-5 flex justify-end">
                          <Badge className="bg-[#b8983e]/15 text-[#b8983e] hover:bg-[#b8983e]/20">
                            {highlight}
                          </Badge>
                        </div>
                      )}

                      {/* Mention Kydra */}
                      {kydra && (
                        <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-[#2d4a4a]/[0.03] px-4 py-3">
                          <Image
                            src="/images/kydra-logo.png"
                            alt="Kydra"
                            width={24}
                            height={24}
                            className="mt-0.5 h-4 w-4 shrink-0 object-contain opacity-50"
                          />
                          <p className="text-[11px] leading-relaxed text-[#2d4a4a]/50">
                            {kydra}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ),
            )}
          </div>

          {/* Mention tarifs */}
          <AnimateOnScroll
            animation="fade-in"
            delay="delay-500"
            className="mt-14 text-center"
          >
            <div className="mx-auto max-w-lg rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm leading-relaxed text-[#2d4a4a]/65">
                <span className="font-medium text-[#2d4a4a]">
                  Tarifs indicatifs
                </span>{" "}
                — les prix peuvent varier selon la longueur et la nature de vos
                cheveux. Un diagnostic capillaire vous est offert lors de
                votre première visite.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════ PARTENAIRE KYDRA ═══════════════════════ */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateOnScroll animation="fade-in slide-in-from-bottom-4">
            <div className="flex flex-col items-center gap-6 rounded-2xl bg-white p-8 text-center shadow-sm md:flex-row md:gap-10 md:text-left">
              <a
                href="https://kydralesalon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 transition-opacity hover:opacity-80"
              >
                <Image
                  src="/images/kydra-logo.png"
                  alt="Kydra Le Salon — produits professionnels éco-conçus"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </a>
              <div>
                <p className="text-sm leading-relaxed text-[#2d4a4a]/70">
                  <span className="font-medium text-[#2d4a4a]">
                    Salon partenaire Kydra Le Salon
                  </span>{" "}
                  — concrètement, pour vous, ça veut dire : moins d&apos;odeur,
                  plus de brillance, et des formules plus douces pour le cuir
                  chevelu. Tous les produits sont fabriqués en France, certifiés
                  ECOCERT, vegan et sans ammoniaque.
                </p>
                <a
                  href="https://kydralesalon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs font-medium text-[#b8983e] underline underline-offset-4 transition-colors hover:text-[#2d4a4a]"
                >
                  Découvrir Kydra
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CtaSection
        title="Bilan capillaire offert"
        subtitle="30 minutes pour faire le point sur vos cheveux."
        description="Pauline prend le temps de comprendre votre routine, vos envies et la nature de vos cheveux — sans engagement."
        buttonText="Prendre rendez-vous"
      />
    </div>
  );
}
