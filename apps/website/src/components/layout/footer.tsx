import Link from "next/link";
import Image from "next/image";
import {
  IconMapPin,
  IconPhone,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative bg-[#2d4a4a] pt-16 pb-10 text-white/65">
      <div className="pointer-events-none absolute -top-px left-0 right-0 h-16 bg-gradient-to-b from-[#f5ebe0] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Colonne 1 — Logo & tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo.png"
              alt="Logo L'Artisane"
              width={80}
              height={80}
              className="h-20 w-20 opacity-80"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="mt-3 font-serif text-lg font-light text-white/90">
              L&apos;Artisane
            </p>
            <p className="mt-1 text-xs tracking-wide">
              Salon de coiffure artisanal à Dinard
            </p>
          </div>

          {/* Colonne 2 — Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#b8983e]">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/mentions-legales"
                className="text-sm transition-colors duration-300 hover:text-white"
              >
                Mentions légales
              </Link>
              <Link
                href="/cgv"
                className="text-sm transition-colors duration-300 hover:text-white"
              >
                CGV
              </Link>
              <Link
                href="/plan-du-site"
                className="text-sm transition-colors duration-300 hover:text-white"
              >
                Plan du site
              </Link>
            </nav>
          </div>

          {/* Colonne 3 — Contact */}
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#b8983e]">
              Contact
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <span className="inline-flex items-center gap-2">
                <IconMapPin className="h-4 w-4 shrink-0" stroke={1.5} />
                {siteConfig.address.full}
              </span>
              <a
                href={siteConfig.owner.phoneHref}
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
                aria-label="Appeler le salon"
              >
                <IconPhone className="h-4 w-4 shrink-0" stroke={1.5} />
                {siteConfig.owner.phone}
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#E1306C]"
                aria-label="Suivre L'Artisane sur Instagram"
              >
                <IconBrandInstagram
                  className="h-4 w-4 shrink-0"
                  stroke={1.5}
                />
                @{siteConfig.owner.instagram}
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <p className="text-center text-[10px] tracking-wide text-white/45">
          © 2026 L&apos;Artisane à Dinard — Tous droits réservés — Site réalisé
          par{" "}
          <a
            href={siteConfig.developer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white/50"
          >
            {siteConfig.developer.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
