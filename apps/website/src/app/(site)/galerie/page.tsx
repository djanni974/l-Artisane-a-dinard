import { reader } from "@/lib/keystatic";
import { getSalonInfo } from "@/lib/get-site-config";
import { GalleryContent, type GalleryPhoto } from "./gallery-content";

export default async function GaleriePage() {
  const [realisations, salonInfo] = await Promise.all([
    reader.collections.realisations.all(),
    getSalonInfo(),
  ]);

  const photos: GalleryPhoto[] = realisations
    .sort((a, b) => (a.entry.ordre ?? 0) - (b.entry.ordre ?? 0))
    .map((r) => ({
      src: r.entry.image || "",
      alt: r.entry.titre,
      description: r.entry.description,
      category: r.entry.categorie as GalleryPhoto["category"],
    }));

  return (
    <GalleryContent
      photos={photos}
      instagramUrl={salonInfo?.social.instagram || "https://www.instagram.com/l.artisane_a_dinard"}
      instagramHandle={salonInfo?.owner.instagram || "l.artisane_a_dinard"}
    />
  );
}
