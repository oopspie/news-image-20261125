// news-image-20261125 — entry runner.
//
// This is a small, self-contained Node 22 program. It takes the finished
// front-page image stored next to this file (entry.png) and places a copy of
// it where the bounty grader looks for it. Nothing is generated or fetched:
// the image is the entry, and this file only moves it.
//
// Where the copy lands is chosen by the MAKEFUN_OUTPUT_DIR environment
// variable. If that variable is not set, the grader's default location
// (/output) is used. When run outside the grader container, point it at a
// folder of your own, for example:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The copy is byte-for-byte identical every time, so the result is fully
// deterministic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the directory that holds this file, then the image next to it.
const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, "entry.png");

// Pick the destination directory: the environment variable wins, and the
// grader's default is the fallback when it is missing, blank, or only
// whitespace. Either way the value ends up as a plain folder path.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";

// Make sure the destination folder exists before writing into it, creating
// any missing parent folders as needed.
mkdirSync(outputDir, { recursive: true });

// Read the entry image into memory and write it out unchanged.
const imageBytes = readFileSync(sourceImage);
writeFileSync(join(outputDir, "entry.png"), imageBytes);
