import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of the gadget I use every day: my phone's battery
// gives up at 4pm, like it has a curfew.
const LINE = "My phone's battery has a 4pm curfew.";

// The gate allows 1 to 200 characters: fail loudly instead of
// submitting an invalid line if this ever changes.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`roast line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
