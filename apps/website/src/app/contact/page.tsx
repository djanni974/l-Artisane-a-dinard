import type { Metadata } from "next";
import {
  IconPhone,
  IconMapPin,
  IconBrandInstagram,
  IconClock,
} from "@tabler/icons-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { CtaButton } from "@/components/layout/cta-button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Réservation — 1 Place de Newquay",
  description:
    "Prenez rendez-vous en ligne ou par téléphone au L'Artisane à Dinard. 1 Place de Newquay, 35800 Dinard. Bilan capillaire gratuit à la première visite.",
};

export default function ContactPage() {
  return (
    <div>
      {/* ═══════════════════════ HEADER ═══════════════════════ */}
      <section className="pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-in slide-in-from-bottom-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#b8983e]">
              Contact
            </p>
            <h1 className="font-serif text-3xl font-light leading-snug md:text-4xl lg:text-5xl">
              Prenez rendez-vous — en ligne ou par téléphone.
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════ BOUTON RÉSERVATION ═══════════════════════ */}
      <section className="pb-16">
        <div className="mx-auto max-w-md px-6 text-center">
          <AnimateOnScroll animation="fade-in zoom-in-95">
            <CtaButton className="shadow-lg text-base">
              Réserver en ligne
            </CtaButton>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════ INFOS CONTACT ═══════════════════════ */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Colonne gauche — Contact */}
            <AnimateOnScroll animation="fade-in slide-in-from-left-8">
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.25em] text-[#b8983e]">
                  Coordonnées
                </p>
                <div className="space-y-5">
                  <a
                    href={siteConfig.owner.phoneHref}
                    className="flex items-center gap-3 text-sm text-[#2d4a4a]/70 transition-colors hover:text-[#2d4a4a]"
                    aria-label="Appeler le salon"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#b8983e]/10">
                      <IconPhone
                        className="h-4 w-4 text-[#b8983e]"
                        stroke={1.5}
                      />
                    </div>
                    {siteConfig.owner.phone}
                  </a>
                  <div className="flex items-center gap-3 text-sm text-[#2d4a4a]/70">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#b8983e]/10">
                      <IconMapPin
                        className="h-4 w-4 text-[#b8983e]"
                        stroke={1.5}
                      />
                    </div>
                    {siteConfig.address.full}
                  </div>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-[#2d4a4a]/70 transition-colors hover:text-[#E1306C]"
                    aria-label="Suivre L'Artisane sur Instagram"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#b8983e]/10">
                      <IconBrandInstagram
                        className="h-4 w-4 text-[#b8983e]"
                        stroke={1.5}
                      />
                    </div>
                    @{siteConfig.owner.instagram}
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Colonne droite — Horaires */}
            <AnimateOnScroll
              animation="fade-in slide-in-from-right-8"
              delay="delay-150"
            >
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-2">
                  <IconClock
                    className="h-4 w-4 text-[#b8983e]"
                    stroke={1.5}
                  />
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#b8983e]">
                    Horaires d&apos;ouverture
                  </p>
                </div>
                <ul className="space-y-3">
                  {siteConfig.hours.map(({ day, hours, closed }) => (
                    <li
                      key={day}
                      className={`flex items-center justify-between text-sm ${
                        closed ? "text-[#2d4a4a]/35" : "text-[#2d4a4a]/70"
                      }`}
                    >
                      <span className="font-medium">{day}</span>
                      <span>{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ GOOGLE MAPS ═══════════════════════ */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <AnimateOnScroll animation="fade-in">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=L%27Artisane+1+Place+de+Newquay+35800+Dinard+France&z=16&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="L'Artisane à Dinard — 1 Place de Newquay"
                className="h-[200px] w-full md:h-[300px]"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════ MENTION ═══════════════════════ */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-md px-6 text-center">
          <AnimateOnScroll animation="fade-in">
            <div className="rounded-xl bg-[#b8983e]/[0.07] px-6 py-4">
              <p className="text-sm font-medium text-[#b8983e]">
                Bilan capillaire gratuit pour votre première visite
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
