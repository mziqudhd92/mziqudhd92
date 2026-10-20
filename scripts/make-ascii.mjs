import { mkdirSync, writeFileSync } from "node:fs";
import { svg } from "ascii.rest/svg";
import { dissolve, scramble } from "ascii.rest/pieces";

mkdirSync(".github", { recursive: true });

// dissolve period = words.length * (HOLD 1.6 + TRANS 2.6)
const dissolveWords = [
  "Cyber Deception",
  "CyberHalluciNet",
  "A.I",
  "C.T.I",
  "M.L",
  "Research",
];
const dissolveSeconds = dissolveWords.length * (1.6 + 2.6);

const dissolveOpts = {
  options: { words: dissolveWords },
  seconds: dissolveSeconds,
  fps: 10,
  scale: 8,
  label: "Cyber Deception, CyberHalluciNet, A.I, C.T.I, M.L, Research",
};

const scrambleOpts = {
  options: {
    phrases: [
      "cyber deception",
      "AI threat defense",
      "cyber threat intel",
      "machine learning",
    ],
  },
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
