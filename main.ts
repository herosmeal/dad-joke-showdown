// Writes the entry line to /output/entry.txt for the make.fun gate.
import { writeFileSync, mkdirSync } from 'node:fs';

const line = "I asked my dad why he always carries a pencil. He said, 'In case I need to draw the line somewhere.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + '/entry.txt', line);
