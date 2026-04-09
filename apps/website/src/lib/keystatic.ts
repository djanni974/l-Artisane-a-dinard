import path from "path";
import { createReader } from "@keystatic/core/reader";
import config from "../../keystatic.config";

// En monorepo, les chemins Keystatic sont relatifs à la racine du repo
// process.cwd() = apps/website/, on remonte de 2 niveaux
const repoRoot = path.resolve(process.cwd(), "../..");

export const reader = createReader(repoRoot, config);
