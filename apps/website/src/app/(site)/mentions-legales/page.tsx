import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site L'Artisane à Dinard.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-12 font-serif text-3xl font-light md:text-4xl">
          Mentions légales
        </h1>

        <div className="space-y-10 text-sm leading-relaxed text-[#2d4a4a]/70">
          {/* ══════════ 1. Éditeur du site ══════════ */}
          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">
              Éditeur du site
            </h2>
            <p>
              {siteConfig.name}
              <br />
              {siteConfig.owner.name} — {siteConfig.owner.title}
              <br />
              {siteConfig.legal.status}
              <br />
              SIRET : {siteConfig.legal.siret}
              <br />
              {siteConfig.address.full}
              <br />
              Téléphone :{" "}
              <a
                href={siteConfig.owner.phoneHref}
                className="underline underline-offset-4 transition-colors hover:text-[#b8983e]"
              >
                {siteConfig.owner.phone}
              </a>
            </p>
          </section>

          {/* ══════════ 2. Directeur de la publication ══════════ */}
          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">
              Directeur de la publication
            </h2>
            <p>{siteConfig.owner.name}</p>
          </section>

          {/* ══════════ 3. Hébergement ══════════ */}
          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">
              Hébergement
            </h2>
            <p>
              Vercel Inc.
              <br />
              440 N Bayard St Suite 202, Wilmington, DE 19801, États-Unis
              <br />
              Site :{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-[#b8983e]"
              >
                vercel.com
              </a>
            </p>
          </section>

          {/* ══════════ 4. Conception et réalisation ══════════ */}
          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">
              Conception et réalisation
            </h2>
            <p>
              <a
                href={siteConfig.developer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-[#b8983e]"
              >
                {siteConfig.developer.name}
              </a>
            </p>
          </section>

          {/* ══════════ 5. Propriété intellectuelle ══════════ */}
          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logos,
              photographies, illustrations) est la propriété exclusive de{" "}
              {siteConfig.name} ou de ses partenaires. Toute reproduction,
              représentation, modification, publication ou adaptation de tout ou
              partie des éléments du site, quel que soit le moyen ou le procédé
              utilisé, est interdite sans autorisation écrite préalable de{" "}
              {siteConfig.owner.name}.
            </p>
          </section>

          {/* ══════════ 6. Données personnelles & cookies ══════════ */}
          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">
              Données personnelles & cookies
            </h2>
            <p>
              Ce site n&apos;utilise aucun cookie tiers et ne collecte aucune
              donnée personnelle. Les statistiques de fréquentation sont
              réalisées via{" "}
              <a
                href="https://plausible.io"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-[#b8983e]"
              >
                Plausible Analytics
              </a>
              , un outil respectueux de la vie privée, conforme au RGPD, qui ne
              dépose pas de cookies et ne collecte aucune donnée personnelle
              identifiante.
            </p>
            <p className="mt-3">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez
              d&apos;un droit d&apos;accès, de rectification, de suppression et
              d&apos;opposition sur vos données. Pour exercer ces droits, vous
              pouvez nous contacter par téléphone au{" "}
              <a
                href={siteConfig.owner.phoneHref}
                className="underline underline-offset-4 transition-colors hover:text-[#b8983e]"
              >
                {siteConfig.owner.phone}
              </a>{" "}
              ou directement au salon.
            </p>
          </section>

          {/* ══════════ 7. TVA ══════════ */}
          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">
              TVA
            </h2>
            <p>{siteConfig.legal.tva}</p>
          </section>

          {/* ══════════ 8. Crédits photographiques ══════════ */}
          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">
              Crédits photographiques
            </h2>
            <p>
              Photographies : {siteConfig.owner.name} / {siteConfig.name}
            </p>
          </section>

          {/* ══════════ 9. Litiges ══════════ */}
          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">
              Règlement des litiges
            </h2>
            <p>
              En cas de litige, le client peut recourir gratuitement au service
              de médiation de la consommation. Le médiateur compétent est le{" "}
              <a
                href="https://www.mediation-conso.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-[#b8983e]"
              >
                Centre de Médiation de la Consommation de Conciliateurs de
                Justice (CM2C)
              </a>
              . Conformément à l&apos;article L.612-1 du Code de la
              consommation, tout consommateur a le droit de recourir
              gratuitement à un médiateur en vue de la résolution amiable du
              litige qui l&apos;oppose au professionnel.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
