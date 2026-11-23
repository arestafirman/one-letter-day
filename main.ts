import { mkdirSync, writeFileSync } from "node:fs";

// One Letter for Your Day — entry letter Z.
//
// Why Z: the judge guesses the word behind the letter, and Z's dominant
// guesses are almost all vivid, funny and true at once — zombie, zero sleep,
// zonked, zapped. The competition description itself names "Z for zero sleep".
// No vague mood word competes for the judge's first guess, so the
// letter-to-word fit is as sharp as a single letter gets. Fallbacks, in
// order, would have been H (hangry), U (undead), F (fried) — never X, which
// stands for no day's word at all.
//
// The program writes exactly one byte, "Z", to /output/entry.txt.
// No trailing newline: a newline would make the file 2 bytes and invalid.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Z", "utf8");
