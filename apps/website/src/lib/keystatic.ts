import path from "path";
import { createReader } from "@keystatic/core/reader";
import config from "../../keystatic.config";

// En local, cwd = apps/website/, paths = content/...  → cwd suffit
// En prod (cloud), paths = apps/website/content/...    → on remonte à la racine du repo
const basePath =
  process.env.NODE_ENV === "development"
    ? process.cwd()
    : path.resolve(process.cwd(), "../..");

export const reader = createReader(basePath, config);
