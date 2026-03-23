import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "Conditions générales de vente du salon de coiffure L'Artisane à Dinard.",
  robots: { index: false, follow: false },
};

export default function CGVPage() {
  const lastUpdated = "22 mars 2026";

  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-4 font-serif text-3xl font-light md:text-4xl">
          Conditions générales de vente
        </h1>
        <p className="mb-12 text-xs text-[#2d4a4a]/40">
          Dernière mise à jour : {lastUpdated}
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-[#2d4a4a]/70">
          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">Article 1 — Objet et champ d&apos;application</h2>
            <p>Les présentes conditions générales de vente (ci-après &laquo; CGV &raquo;) régissent l&apos;ensemble des prestations de services et ventes de produits réalisées par le salon de coiffure {siteConfig.name}, exploité par {siteConfig.owner.name}, {siteConfig.legal.status}, SIRET {siteConfig.legal.siret}, sis au {siteConfig.address.full}.</p>
            <p className="mt-3">Toute prise de rendez-vous ou toute prestation effectuée au salon implique l&apos;acceptation sans réserve des présentes CGV par le client. Ces conditions sont consultables à tout moment au salon et sur le site internet <a href={siteConfig.url} className="underline underline-offset-4 transition-colors hover:text-[#b8983e]">{siteConfig.url.replace("https://", "")}</a>.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">Article 2 — Prestations proposées</h2>
            <p>Le salon {siteConfig.name} propose des prestations de coiffure comprenant notamment : coupes femme et homme, brushings, colorations classiques et végétales, balayages, mèches, soins capillaires bio et bilans capillaires. La liste complète des prestations et leurs tarifs sont affichés en vitrine et à l&apos;intérieur du salon, conformément à l&apos;arrêté du 3 décembre 1987.</p>
            <p className="mt-3">Les prestations sont réalisées par {siteConfig.owner.name}, coloriste experte disposant de 20 ans d&apos;expérience professionnelle, ou par tout collaborateur qualifié exerçant sous son contrôle effectif et permanent.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">Article 3 — Tarifs</h2>
            <p>Les prix des prestations sont exprimés en euros toutes taxes comprises (TTC). {siteConfig.legal.tva}.</p>
            <p className="mt-3">Les tarifs en vigueur sont ceux affichés au salon au jour de la prestation. Le salon se réserve le droit de modifier ses tarifs à tout moment, sans préavis. Toute prestation en cours sera facturée au tarif convenu au moment de la prise de rendez-vous ou de l&apos;acceptation du devis.</p>
            <p className="mt-3">Conformément à l&apos;article L.441-1 du Code de commerce, un devis détaillé est proposé pour toute prestation combinée ou personnalisée.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">Article 4 — Prise de rendez-vous</h2>
            <p>Les rendez-vous peuvent être pris par téléphone au <a href={siteConfig.owner.phoneHref} className="underline underline-offset-4 transition-colors hover:text-[#b8983e]">{siteConfig.owner.phone}</a>, directement au salon, ou via la plateforme de réservation en ligne accessible depuis le site internet. La prise de rendez-vous vaut acceptation des présentes CGV.</p>
            <p className="mt-3">Les clients sans rendez-vous sont accueillis dans la mesure des disponibilités du salon.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">Article 5 — Annulation et retard</h2>
            <p>En cas d&apos;empêchement, le client est prié de prévenir le salon au moins 24 heures à l&apos;avance afin de permettre la réorganisation du planning. Toute annulation tardive ou absence répétée sans justification pourra entraîner un refus de prise de rendez-vous ultérieure.</p>
            <p className="mt-3">En cas de retard supérieur à 15 minutes sans avoir prévenu le salon, le rendez-vous pourra être reporté ou annulé selon les disponibilités.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">Article 6 — Paiement</h2>
            <p>Le paiement est exigible à la fin de chaque prestation. Le salon accepte les moyens de paiement suivants : espèces, carte bancaire et chèque.</p>
            <p className="mt-3">Conformément à l&apos;arrêté du 3 octobre 1983, une note détaillée est remise au client pour toute prestation d&apos;un montant supérieur à 25 euros, ou sur simple demande pour un montant inférieur.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">Article 7 — Droit de rétractation</h2>
            <p>Conformément à l&apos;article L.221-28 du Code de la consommation, le droit de rétractation ne s&apos;applique pas aux prestations de services de coiffure pleinement exécutées avant la fin du délai de rétractation. Les prestations réalisées au salon ne sont ni remboursables ni échangeables.</p>
            <p className="mt-3">En cas d&apos;insatisfaction, le client est invité à en faire part immédiatement à la fin de la prestation afin qu&apos;une solution puisse être proposée (retouche, ajustement).</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">Article 8 — Tests d&apos;allergie et précautions</h2>
            <p>Certaines prestations (colorations chimiques, permanentes) utilisent des produits pouvant provoquer des réactions allergiques. Un test cutané préalable (test &laquo; touche d&apos;essai &raquo;) peut être proposé 48 heures avant la prestation. Le client s&apos;engage à informer le salon de toute allergie connue, sensibilité particulière, traitement médical en cours ou grossesse.</p>
            <p className="mt-3">Le salon {siteConfig.name} privilégie les colorations végétales sans ammoniaque et les produits naturels et bio, mais cela n&apos;exclut pas tout risque de réaction. Le salon décline toute responsabilité en cas de réaction allergique si le client n&apos;a pas signalé ses antécédents ou a refusé le test préalable.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">Article 9 — Responsabilité</h2>
            <p>Le salon s&apos;engage à apporter tout le soin et l&apos;attention nécessaires à l&apos;exécution de ses prestations, dans le respect des règles de l&apos;art de la coiffure.</p>
            <p className="mt-3">La responsabilité du salon ne saurait être engagée en cas de résultat ne correspondant pas aux attentes du client si la prestation a été réalisée conformément aux règles professionnelles.</p>
            <p className="mt-3">Le salon ne peut être tenu responsable de la perte, du vol ou de la détérioration des effets personnels du client au sein de l&apos;établissement.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">Article 10 — Produits en vente</h2>
            <p>Le salon peut proposer à la vente des produits capillaires (shampoings, soins, masques). Ces produits bénéficient de la garantie légale de conformité (articles L.217-4 et suivants du Code de la consommation) et de la garantie contre les vices cachés (articles 1641 et suivants du Code civil).</p>
            <p className="mt-3">En cas de défaut de conformité, le client dispose d&apos;un délai de 2 ans à compter de la livraison pour agir. Le produit sera échangé ou remboursé sur présentation du ticket de caisse.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">Article 11 — Hygiène et sécurité</h2>
            <p>Le salon respecte l&apos;ensemble des normes d&apos;hygiène et de sécurité applicables aux établissements recevant du public (ERP) et aux salons de coiffure, conformément au Code de la santé publique. Le matériel est désinfecté entre chaque client. Les serviettes et peignoirs sont lavés à haute température après chaque utilisation.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">Article 12 — Protection des données personnelles</h2>
            <p>Les données personnelles collectées dans le cadre de la prise de rendez-vous sont utilisées exclusivement pour la gestion des rendez-vous et la relation client. Conformément au RGPD et à la loi Informatique et Libertés, le client dispose d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition sur ses données.</p>
            <p className="mt-3">Pour exercer ces droits, le client peut contacter le salon par téléphone au <a href={siteConfig.owner.phoneHref} className="underline underline-offset-4 transition-colors hover:text-[#b8983e]">{siteConfig.owner.phone}</a> ou directement au salon. Aucune donnée n&apos;est transmise à des tiers. Pour plus d&apos;informations, consulter la page <a href="/mentions-legales" className="underline underline-offset-4 transition-colors hover:text-[#b8983e]">Mentions légales</a>.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">Article 13 — Réclamations et médiation</h2>
            <p>Pour toute réclamation, le client est invité à s&apos;adresser directement au salon par téléphone ou sur place. Le salon s&apos;engage à traiter toute réclamation dans un délai raisonnable et à proposer une solution amiable.</p>
            <p className="mt-3">Conformément à l&apos;article L.612-1 du Code de la consommation, en cas de litige non résolu, le client peut recourir gratuitement au service de médiation de la consommation. Le médiateur compétent est le <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 transition-colors hover:text-[#b8983e]">Centre de Médiation de la Consommation de Conciliateurs de Justice (CM2C)</a>.</p>
            <p className="mt-3">Le client peut également adresser sa réclamation sur la plateforme européenne de résolution des litiges en ligne : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 transition-colors hover:text-[#b8983e]">ec.europa.eu/consumers/odr</a>.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-medium text-[#2d4a4a]">Article 14 — Droit applicable</h2>
            <p>Les présentes conditions générales de vente sont soumises au droit français. En cas de litige, et après échec de toute tentative de résolution amiable, les tribunaux compétents seront ceux du ressort du siège social du salon.</p>
          </section>

          <section className="rounded-xl bg-[#b8983e]/[0.07] px-6 py-5">
            <p className="text-sm font-medium text-[#b8983e]">{siteConfig.name} — {siteConfig.owner.name}</p>
            <p className="mt-1 text-xs text-[#2d4a4a]/40">{siteConfig.address.full} — {siteConfig.legal.status} — SIRET {siteConfig.legal.siret}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
