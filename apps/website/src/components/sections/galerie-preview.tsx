import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { IconArrowRight } from "@tabler/icons-react";
import { reader } from "@/lib/keystatic";

export async function GaleriePreview() {
  const realisations = await reader.collections.realisations.all();
  const featured = realisations
    .filter((r) => r.entry.enAvant)
    .sort((a, b) => (a.entry.ordre ?? 0) - (b.entry.ordre ?? 0))
    .slice(0, 4);

  const photos = featured.map((r) => ({
    src: r.entry.image || "",
    alt: r.entry.titre,
  }));

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll
          animation="fade-in slide-in-from-bottom-4"
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#b8983e]">
            Galerie
          </p>
          <h2 className="font-serif text-3xl font-light md:text-4xl">
            Le travail parle de lui-même.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#2d4a4a]/65">
            Chaque détail du salon reflète notre exigence d&apos;artisanat et
            d&apos;élégance.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {photos.map(({ src, alt }, i) => (
            <AnimateOnScroll
              key={src}
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
              <div className="group aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={src}
                  alt={alt}
                  width={400}
                  height={533}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll
          animation="fade-in"
          delay="delay-500"
          className="mt-12 text-center"
        >
          <Button
            nativeButton={false}
            render={<Link href="/galerie" />}
            variant="outline"
            className="cursor-pointer rounded-full border-[#2d4a4a]/15 px-8 text-sm tracking-wide transition-all duration-300 hover:border-[#2d4a4a] hover:bg-[#2d4a4a] hover:text-white"
          >
            Voir la galerie
            <IconArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
