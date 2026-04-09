import Image from "next/image";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/interactive-hover-button";
import { IconArrowRight, IconChevronDown } from "@tabler/icons-react";

export function Hero({
  bookingHref,
}: {
  bookingHref: string;
}) {

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden">
      {/* Fond décoratif */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#b8983e]/5 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-112 w-md rounded-full bg-[#b8983e]/4 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-[#2d4a4a]/3 blur-3xl" />
      </div>

      {/* Contenu */}
      <div className="relative mx-auto flex max-w-6xl flex-1 items-center px-6 pb-24 pt-12 md:pt-16">
        <div className="grid w-full items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Texte */}
          <div className="space-y-7 text-center">
            {/* Logo */}
            <div className="animate-in fade-in zoom-in-95 duration-1000 fill-mode-[both] flex justify-center">
              <Image
                src="/images/logo.png"
                alt="Logo L'Artisane à Dinard"
                width={240}
                height={240}
                className="h-32 w-32 md:h-44 md:w-44"
                priority
              />
            </div>

            <div className="space-y-3">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-[both]">
                <h1 className="font-serif text-5xl font-light tracking-tight md:text-6xl lg:text-7xl">
                  <span className="text-gold-gradient">L&apos;Artisane</span>
                  <span className="mt-1 block text-[#2d4a4a]">à Dinard</span>
                </h1>
              </div>
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-[both]">
                <p className="font-serif text-xl tracking-wide text-[#2d4a4a]/70 md:text-2xl">
                  Pauline Besnard — coloriste experte
                </p>
              </div>
            </div>

            <div className="animate-in fade-in duration-700 delay-500 fill-mode-[both]">
              <p className="mx-auto max-w-md text-[15px] leading-relaxed text-[#2d4a4a]/65">
                Ici, on prend le temps. Le temps de comprendre vos cheveux, de
                choisir la bonne formule, et de vous offrir un moment rien
                qu&apos;à vous avec des produits doux et respectueux.
              </p>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 fill-mode-[both]">
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={bookingHref}
                  target={bookingHref.startsWith("http") ? "_blank" : undefined}
                  rel={
                    bookingHref.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  <InteractiveHoverButton className="shadow-lg">
                    Prendre rendez-vous
                  </InteractiveHoverButton>
                </a>
                <Button
                  nativeButton={false}
                  render={<a href="/prestations" />}
                  size="lg"
                  variant="ghost"
                  className="cursor-pointer rounded-full px-8 text-sm tracking-wide text-[#2d4a4a] transition-all duration-300 hover:bg-[#2d4a4a]/5"
                >
                  Nos prestations
                  <IconArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Illustration façade */}
          <div className="flex justify-center">
            <div className="animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-[both]">
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-[#b8983e]/8 shadow-xl shadow-[#2d4a4a]/5" />
                <div className="animate-float">
                  <Image
                    src="/images/facade-illustration-clean.png"
                    alt="Illustration de la façade du salon L'Artisane à Dinard"
                    width={480}
                    height={560}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="relative rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-in fade-in duration-1000 delay-1000 fill-mode-[both] absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#valeurs"
          className="animate-bounce-subtle inline-block text-[#2d4a4a]/25 transition-colors hover:text-[#2d4a4a]/50"
          aria-label="Défiler vers le bas"
        >
          <IconChevronDown className="h-6 w-6" stroke={1.5} />
        </a>
      </div>
    </section>
  );
}
