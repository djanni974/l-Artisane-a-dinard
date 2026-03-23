import Image from "next/image";
import { IconLeaf, IconScissors, IconHeart } from "@tabler/icons-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const items = [
  {
    icon: IconLeaf,
    title: "Le choix du végétal",
    text: "Des colorations végétales et des soins doux, pensés pour vos cheveux comme pour votre santé.",
    delay: "",
  },
  {
    icon: IconScissors,
    title: "20 ans d\u2019expertise",
    text: "Pauline a passé 20 ans à affiner son art — coloration, balayage et soin capillaire.",
    delay: "delay-150",
  },
  {
    icon: IconHeart,
    title: "Un salon rien que pour vous",
    text: "Une ambiance intime, sans précipitation, pensée pour votre bien-être.",
    delay: "delay-300",
  },
];

export function Arguments() {
  return (
    <section id="valeurs" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateOnScroll
          animation="fade-in slide-in-from-bottom-4"
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-3xl font-light md:text-4xl">
            Pourquoi on revient.
          </h2>
        </AnimateOnScroll>

        <div className="grid gap-10 md:grid-cols-3 md:gap-14">
          {items.map(({ icon: Icon, title, text, delay }) => (
            <AnimateOnScroll
              key={title}
              animation="fade-in slide-in-from-bottom-6"
              delay={delay}
            >
              <div className="group text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#b8983e]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#b8983e]/15 group-hover:shadow-lg group-hover:shadow-[#b8983e]/10">
                  <Icon className="h-7 w-7 text-[#b8983e]" stroke={1.5} />
                </div>
                <h3 className="mb-2 font-serif text-xl font-medium">{title}</h3>
                <p className="text-sm leading-relaxed text-[#2d4a4a]/65">
                  {text}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Partenaire */}
        <AnimateOnScroll
          animation="fade-in"
          delay="delay-500"
          className="mt-16"
        >
          <div className="mx-auto max-w-xs border-t border-[#2d4a4a]/10 pt-6">
            <a
              href="https://kydralesalon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 transition-opacity duration-300 hover:opacity-70"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#2d4a4a]/35">
                Salon partenaire
              </span>
              <span className="h-3 w-px bg-[#2d4a4a]/15" />
              <Image
                src="/images/kydra-logo.png"
                alt="Kydra Le Salon — produits professionnels éco-conçus"
                width={80}
                height={80}
                className="h-8 w-8 object-contain opacity-45"
              />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
