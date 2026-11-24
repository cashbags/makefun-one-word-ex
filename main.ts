// One Word From Your Ex — make.fun entry.
// Writes exactly one word, the word the entrant's ex would use to
// describe them, to /output/entry.txt. Nothing else.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "fixer-upper";
const OUT = "/output/entry.txt";

// The gate allows 1-24 characters of UTF-8 text, not only whitespace,
// and the judge brief requires exactly one word. Fail loudly instead
// of writing something that could never be judged.
if (!/^[^\s]{1,24}$/.test(WORD)) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, WORD, "utf8");

// Read it back and confirm the bytes on disk are exactly the word:
// no trailing newline, no extra whitespace, nothing appended.
const written = readFileSync(OUT, "utf8");
if (written !== WORD) {
  throw new Error(
    `wrote ${JSON.stringify(written)}, expected ${JSON.stringify(WORD)}`,
  );
}
