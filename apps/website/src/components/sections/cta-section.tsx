import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { CtaButton } from "@/components/layout/cta-button";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  secondaryLink?: { label: string; href: string };
}

export function CtaSection({
  title = "Votre première visite ?",
  subtitle = "On commence par se connaître.",
  description = "Pauline prend le temps de comprendre vos cheveux, votre routine et vos envies. Bilan capillaire offert.",
  buttonText = "Prendre rendez-vous",
  secondaryLink,
}: CtaSectionProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll animation="fade-in zoom-in-95">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-[#2d4a4a] px-8 py-14 text-center shadow-lg md:px-16 md:py-20">
            {/* Filigrane */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt=""
                width={400}
                height={400}
                className="h-80 w-80 opacity-[0.04]"
                style={{ filter: "brightness(0) invert(1)" }}
                aria-hidden="true"
              />
            </div>

            <div className="relative">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#b8983e]">
                {title}
              </p>
              <h2 className="mb-4 font-serif text-3xl font-light text-white md:text-4xl">
                {subtitle}
              </h2>
              {description && (
                <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-white/65">
                  {description}
                </p>
              )}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CtaButton className="shadow-lg">{buttonText}</CtaButton>
                {secondaryLink && (
                  <a
                    href={secondaryLink.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors duration-300 hover:text-[#b8983e]"
                  >
                    {secondaryLink.label}
                    <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
