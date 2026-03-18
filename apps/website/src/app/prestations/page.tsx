import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { CtaSection } from "@/components/sections/cta-section";
import { prestations } from "@/data/prestations";

export const metadata: Metadata = {
  title:
    "Prestations — Coupe, coloration végétale, soins naturels",
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
              ({ icon: Icon, title, description, badge, items }, i) => (
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
                      <div className="mb-5 flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b8983e]/10 transition-all duration-300 group-hover:bg-[#b8983e]/20">
                          <Icon
                            className="h-5 w-5 text-[#b8983e]"
                            stroke={1.5}
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="font-serif text-xl font-medium">
                              {title}
                            </h2>
                            <Badge
                              variant="secondary"
                              className="bg-[#b8983e]/10 text-[#b8983e] font-medium"
                            >
                              {badge}
                            </Badge>
                          </div>
                          <p className="mt-1 text-sm text-[#2d4a4a]/55">
                            {description}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-[#2d4a4a]/70"
                          >
                            <span className="h-1 w-1 shrink-0 rounded-full bg-[#b8983e]/40" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              )
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
                  Tarifs sur demande
                </span>{" "}
                — Pauline propose un bilan capillaire gratuit lors de votre
                première visite.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CtaSection
        title="Envie d'essayer ?"
        subtitle="Réservez une consultation."
        buttonText="Réserver une consultation"
      />
    </div>
  );
}
