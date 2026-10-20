import { mkdirSync, writeFileSync } from "node:fs";
import { svg } from "ascii.rest/svg";
import { scramble } from "ascii.rest/pieces";

mkdirSync(".github", { recursive: true });

const scrambleOpts = {
  options: {
    phrases: [
      "cyber deception",
      "Agentic Threat Intelligence",
      "Cyber Threat Intelligence",
      "Adversary Generated Threat Intelligence",
      "machine learning",
    ],
  },
  seconds: 18.8,
  fps: 12,
  scale: 10,
  label: "Focus areas decoding, in ascii",
};

writeFileSync(".github/scramble.svg", svg(scramble, scrambleOpts));
writeFileSync(".github/scramble.dark.svg", svg(scramble, { ...scrambleOpts, dark: true }));

console.log("wrote scramble light/dark SVGs");

