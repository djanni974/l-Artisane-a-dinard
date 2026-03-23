import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { IconArrowRight } from "@tabler/icons-react";
import { prestations } from "@/data/prestations";

export function PrestationsPreview() {
  return (
    <section id="prestations" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll
          animation="fade-in slide-in-from-bottom-4"
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#b8983e]">
            Nos prestations
          </p>
          <h2 className="font-serif text-3xl font-light md:text-4xl">
            Des soins pensés pour vos cheveux.
          </h2>
        </AnimateOnScroll>

        <div className="grid gap-5 sm:grid-cols-2">
          {prestations.map(({ icon: Icon, title, description, badge }, i) => (
            <AnimateOnScroll
              key={title}
              animation="fade-in slide-in-from-bottom-6 zoom-in-95"
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
              <Card className="group cursor-default rounded-2xl border-0 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex items-start gap-5 p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b8983e]/10 transition-all duration-300 group-hover:bg-[#b8983e]/20">
                    <Icon
                      className="h-5 w-5 text-[#b8983e] transition-transform duration-300 group-hover:rotate-6"
                      stroke={1.5}
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center gap-2">
                      <h3 className="font-serif text-lg font-medium">
                        {title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="bg-[#b8983e]/10 text-[#b8983e] font-medium"
                      >
                        {badge}
                      </Badge>
                    </div>
                    <p className="text-sm leading-relaxed text-[#2d4a4a]/65">
                      {description}
                    </p>
                  </div>
                </CardContent>
              </Card>
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
            render={<Link href="/prestations" />}
            variant="outline"
            className="cursor-pointer rounded-full border-[#2d4a4a]/15 px-8 text-sm tracking-wide transition-all duration-300 hover:border-[#2d4a4a] hover:bg-[#2d4a4a] hover:text-white"
          >
            Voir toutes les prestations
            <IconArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
