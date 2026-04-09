import {
  IconScissors,
  IconPalette,
  IconLeaf,
  IconDroplet,
} from "@tabler/icons-react";

export const iconMap = {
  scissors: IconScissors,
  palette: IconPalette,
  leaf: IconLeaf,
  droplet: IconDroplet,
} as const;

export type IconSlug = keyof typeof iconMap;
