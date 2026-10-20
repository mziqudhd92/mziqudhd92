import { mkdirSync, writeFileSync } from "node:fs";
import { svg } from "ascii.rest/svg";
import { scramble } from "ascii.rest/pieces";

mkdirSync(".github", { recursive: true });

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

writeFileSync(".github/scramble.svg", svg(scramble, scrambleOpts));
writeFileSync(".github/scramble.dark.svg", svg(scramble, { ...scrambleOpts, dark: true }));

console.log("wrote scramble light/dark SVGs");

