// TODO: intégrer le pixel Meta et Google Analytics

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  IconLeaf,
  IconScissors,
  IconHeart,
  IconPalette,
  IconDroplet,
  IconPhone,
  IconMapPin,
  IconBrandInstagram,
  IconArrowRight,
} from "@tabler/icons-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#2c1810]">
      {/* ─── HERO ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                L&apos;Artisane à Dinard
              </h1>
              <p className="text-lg font-medium text-[#7c9a7e] md:text-xl">
                Coloriste experte &amp; soins naturels au cœur de Dinard.
              </p>
              <p className="max-w-lg text-[#2c1810]/70">
                Un salon artisanal où chaque geste est pensé pour sublimer vos
                cheveux — avec des produits naturels, bio, et une attention toute
                particulière à vous.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="rounded-full bg-[#7c9a7e] px-6 text-white hover:bg-[#6b8a6d]"
                >
                  <a href="#reservation">Prendre rendez-vous</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-[#7c9a7e] text-[#7c9a7e] hover:bg-[#7c9a7e]/10"
                >
                  <a href="/prestations">Découvrir les prestations</a>
                </Button>
              </div>
            </div>

            {/* TODO: remplacer ce placeholder par la vraie photo du salon */}
            <div
              className="aspect-video rounded-2xl bg-[#d4b896]/30"
              role="img"
              aria-label="Salon L'Artisane Dinard"
            />
          </div>
        </div>
      </section>

      {/* ─── ARGUMENTS CLÉS ─── */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {[
            {
              icon: IconLeaf,
              title: "100 % naturel",
              text: "Colorations végétales, soins bio, formules douces pour vos cheveux et votre santé.",
            },
            {
              icon: IconScissors,
              title: "20 ans d'expertise",
              text: "Un savoir-faire affûté en coloration, balayage et soin capillaire.",
            },
            {
              icon: IconHeart,
              title: "Un salon rien que pour vous",
              text: "Une ambiance intime, sans précipitation, pensée pour votre bien-être.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <Card
              key={title}
              className="rounded-xl border shadow-sm transition hover:shadow-md"
            >
              <CardContent className="space-y-3 p-6">
                <Icon className="h-8 w-8 text-[#7c9a7e]" stroke={1.5} />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-[#2c1810]/70">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ─── À PROPOS ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            {/* TODO: remplacer ce placeholder par le portrait de Pauline */}
            <div
              className="aspect-[3/4] rounded-2xl bg-[#d4b896]/30"
              role="img"
              aria-label="Pauline Besnard, fondatrice de L'Artisane"
            />

            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                Une coiffeuse, une passion, un savoir-faire.
              </h2>
              <p className="text-[#2c1810]/70">
                Pauline Besnard a passé 20 ans à affiner son art avant
                d&apos;ouvrir, en 2024, son propre espace au cœur du quartier
                Newquay à Dinard. Son positionnement&nbsp;: une coiffure
                artisanale, naturelle et personnalisée.
              </p>
              <blockquote className="border-l-4 border-[#7c9a7e] pl-4 italic text-[#2c1810]/80">
                &laquo;&nbsp;Après 20 ans à exercer mon métier avec passion,
                j&apos;ai voulu créer l&apos;endroit dont je rêvais&nbsp;: un
                salon à taille humaine, ancré dans des valeurs de soin, de
                naturel et d&apos;authenticité.&nbsp;&raquo;
                <footer className="mt-2 not-italic font-medium text-[#2c1810]">
                  — Pauline Besnard
                </footer>
              </blockquote>
              <a
                href="/a-propos"
                className="inline-flex items-center gap-1 font-medium text-[#7c9a7e] hover:underline"
              >
                En savoir plus sur Pauline
                <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRESTATIONS ─── */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-10 px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Des prestations pensées pour vos cheveux.
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: IconScissors,
                title: "Coupe & Brushing",
                text: "Un moment rien que pour vous, adapté à votre style.",
              },
              {
                icon: IconPalette,
                title: "Coloration & Balayage",
                text: "Lumière, dimension et couleur sur mesure.",
              },
              {
                icon: IconLeaf,
                title: "Coloration végétale",
                text: "Des pigments naturels pour une couleur douce et respectueuse.",
              },
              {
                icon: IconDroplet,
                title: "Soins capillaires bio",
                text: "Hydratation, nutrition et réparation en profondeur.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <Card
                key={title}
                className="rounded-xl border shadow-sm transition hover:shadow-md"
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <Icon
                    className="mt-0.5 h-7 w-7 shrink-0 text-[#7c9a7e]"
                    stroke={1.5}
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-[#2c1810]/70">{text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/prestations"
              className="inline-flex items-center gap-1 font-medium text-[#7c9a7e] hover:underline"
            >
              Voir toutes les prestations
              <IconArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── RÉSERVATION ─── */}
      <section id="reservation" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">
              Prenez rendez-vous
            </h2>
            <p className="text-[#2c1810]/70">
              En ligne à tout moment, ou par téléphone pendant les heures
              d&apos;ouverture.
            </p>

            {/* TODO: intégrer le lien de réservation SumUp Bookings ou Fresha selon choix client */}
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#7c9a7e] px-8 text-white hover:bg-[#6b8a6d]"
            >
              <a href="#">Réserver en ligne</a>
            </Button>

            <div className="flex flex-col items-center gap-3 pt-4 text-sm text-[#2c1810]/70">
              <a
                href="tel:+33618385486"
                className="inline-flex items-center gap-2 hover:text-[#2c1810]"
                aria-label="Appeler le salon"
              >
                <IconPhone className="h-4 w-4" stroke={1.5} />
                06 18 38 54 86
              </a>
              <span className="inline-flex items-center gap-2">
                <IconMapPin className="h-4 w-4" stroke={1.5} />
                1 Place de Newquay, 35800 Dinard
              </span>
            </div>

            <p className="text-sm font-medium text-[#7c9a7e]">
              Bilan capillaire gratuit pour votre première visite.
            </p>
          </div>
        </div>
      </section>

      {/* TODO: ajouter la carte Google Maps dans la section contact */}

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#2c1810]/10 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center text-sm text-[#2c1810]/60">
          <p className="font-semibold text-[#2c1810]">
            L&apos;Artisane à Dinard
          </p>
          <p>1 Place de Newquay, 35800 Dinard</p>
          <a
            href="tel:+33618385486"
            className="hover:text-[#2c1810]"
            aria-label="Appeler le salon"
          >
            06 18 38 54 86
          </a>
          <a
            href="https://instagram.com/l.artisane_a_dinard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#2c1810]"
            aria-label="Suivre L'Artisane sur Instagram"
          >
            <IconBrandInstagram className="h-4 w-4" stroke={1.5} />
            @l.artisane_a_dinard
          </a>
          <p className="pt-2 text-xs">© 2024 L&apos;Artisane à Dinard</p>
        </div>
      </footer>
    </div>
  );
}
