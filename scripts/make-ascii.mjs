import { mkdirSync, writeFileSync } from "node:fs";
import { svg } from "ascii.rest/svg";
import { dissolve, scramble } from "ascii.rest/pieces";

mkdirSync(".github", { recursive: true });

// dissolve period = words.length * (HOLD 1.6 + TRANS 2.6)
const dissolveWords = ["MORAN", "CYBER", "AI", "SEC"];
const dissolveSeconds = dissolveWords.length * (1.6 + 2.6);

const dissolveOpts = {
  options: { words: dissolveWords },
  seconds: dissolveSeconds,
  fps: 12,
  scale: 8,
  label: "Moran — cyber, AI, security, in ascii",
};

const scrambleOpts = {
  options: {
    phrases: [
      "cyber security research",
      "AI reasoning systems",
      "honeypot analysis",
      "machine learning",
    ],
  },
  // full phrase cycle (~13s); slightly padded so the loop lands cleanly
  seconds: 13.2,
  fps: 12,
  scale: 10,
  label: "Focus areas decoding, in ascii",
};

writeFileSync(".github/dissolve.svg", svg(dissolve, dissolveOpts));
writeFileSync(".github/dissolve.dark.svg", svg(dissolve, { ...dissolveOpts, dark: true }));
writeFileSync(".github/scramble.svg", svg(scramble, scrambleOpts));
writeFileSync(".github/scramble.dark.svg", svg(scramble, { ...scrambleOpts, dark: true }));

console.log(
  `wrote dissolve (${dissolveSeconds}s) and scramble (13.2s) light/dark SVGs`,
);
