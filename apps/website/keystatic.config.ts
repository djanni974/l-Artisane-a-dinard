import { config, collection, singleton, fields } from "@keystatic/core";

export default config({
  storage: process.env.NODE_ENV === "development" ? { kind: "local" } : { kind: "cloud" },
  cloud: { project: "l-artisane-a-dinard/l-artisane-a-dinard" },

  singletons: {
    salonInfo: singleton({
      label: "Infos du salon",
      path: "apps/website/content/salon-info",
      schema: {
        nom: fields.text({ label: "Nom du salon" }),
        description: fields.text({
          label: "Description courte",
          multiline: true,
          description: "2-3 phrases qui présentent votre activité",
        }),
        ownerName: fields.text({ label: "Nom de la gérante" }),
        ownerTitle: fields.text({
          label: "Titre / spécialité",
          description: 'Ex: "Coloriste experte"',
        }),
        telephone: fields.text({ label: "Téléphone" }),
        email: fields.text({ label: "Email" }),
        instagram: fields.text({
          label: "Identifiant Instagram",
          description: "Sans le @, ex: l.artisane_a_dinard",
        }),
        bookingUrl: fields.url({
          label: "Lien de réservation (Fresha)",
        }),
        adresseRue: fields.text({ label: "Adresse — Rue" }),
        adresseVille: fields.text({ label: "Adresse — Ville" }),
        adresseCodePostal: fields.text({ label: "Adresse — Code postal" }),
        horaires: fields.array(
          fields.object({
            jour: fields.text({ label: "Jour" }),
            heures: fields.text({
              label: "Horaires",
              description: 'Ex: "9h – 19h" ou "Fermé"',
            }),
            ferme: fields.checkbox({
              label: "Fermé ce jour",
              defaultValue: false,
            }),
          }),
          {
            label: "Horaires d'ouverture",
            itemLabel: (props) => props.fields.jour.value || "Jour",
          }
        ),
      },
    }),

    aPropos: singleton({
      label: "À propos",
      path: "apps/website/content/a-propos",
      schema: {
        titre: fields.text({ label: "Titre de la page" }),
        contenu: fields.markdoc({
          label: "Contenu",
          description: "Votre histoire, votre parcours",
        }),
        photo: fields.image({
          label: "Photo de vous / du salon",
          directory: "apps/website/public/images/a-propos",
          publicPath: "/images/a-propos",
        }),
      },
    }),
  },

  collections: {
    services: collection({
      label: "Services",
      slugField: "nom",
      path: "apps/website/content/services/*",
      schema: {
        nom: fields.slug({ name: { label: "Nom du service" } }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
        badge: fields.text({
          label: "Badge",
          description: 'Ex: "Sur mesure", "Expertise", "Végétal"',
        }),
        icone: fields.select({
          label: "Icône",
          options: [
            { label: "Ciseaux", value: "scissors" },
            { label: "Palette", value: "palette" },
            { label: "Feuille", value: "leaf" },
            { label: "Goutte", value: "droplet" },
          ],
          defaultValue: "scissors",
        }),
        prixDepart: fields.integer({
          label: "Prix de départ (€)",
          description: "Le prix le plus bas de cette catégorie",
        }),
        kydra: fields.text({
          label: "Texte partenaire Kydra (optionnel)",
          multiline: true,
        }),
        ordre: fields.integer({
          label: "Ordre d'affichage",
          defaultValue: 0,
        }),
        items: fields.array(
          fields.object({
            nom: fields.text({ label: "Nom de la prestation" }),
            prix: fields.text({
              label: "Prix",
              description: 'Ex: "38 €" ou "Offert"',
            }),
          }),
          {
            label: "Prestations & tarifs",
            itemLabel: (props) => props.fields.nom.value || "Prestation",
          }
        ),
      },
    }),

    realisations: collection({
      label: "Réalisations",
      slugField: "titre",
      path: "apps/website/content/realisations/*",
      schema: {
        titre: fields.slug({ name: { label: "Titre" } }),
        image: fields.image({
          label: "Photo",
          directory: "apps/website/public/images/galerie",
          publicPath: "/images/galerie",
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
        categorie: fields.select({
          label: "Catégorie",
          options: [
            { label: "Colorations & Balayages", value: "colorations" },
            { label: "Soins naturels", value: "soins" },
            { label: "Le salon", value: "salon" },
          ],
          defaultValue: "colorations",
        }),
        enAvant: fields.checkbox({
          label: "Mettre en avant sur la page d'accueil",
          defaultValue: false,
        }),
        ordre: fields.integer({
          label: "Ordre d'affichage",
          defaultValue: 0,
        }),
      },
    }),
  },
});
