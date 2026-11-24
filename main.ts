// The Long Roast: Lawmakers and the File They Cannot Convert
// Entry for make.fun bounty u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
//
// One satirical sentence, at most 320 characters, roasting lawmakers who
// would regulate AI, crypto or the internet but cannot convert a file to PDF.
// The program writes that single sentence to /output/entry.txt.
//
// Deterministic: no network, no randomness, no clock, no file reads.
// The same sentence is written on every run, byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "The senator who spent three hearings grilling AI CEOs about the future asked his staff to turn the AI bill into a PDF, so they printed it out and scanned it back in.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// Exactly the sentence, no trailing newline: the gate counts characters,
// so the file must hold the 165-character sentence and nothing else.
writeFileSync(join(outDir, "entry.txt"), ROAST.trim(), "utf8");
