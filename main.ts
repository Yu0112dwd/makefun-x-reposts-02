// makefun-x-reposts-02 entry (Node 22, standard library only).
//
// The entry is the X posts themselves, not this program. All main.ts does
// is copy POSTS.json from the repository root to /output/POSTS.json, where
// the house reads the list of post addresses and fetches each post's
// reposts, quotes and likes from X. Nothing this program writes is scored.
// It takes no input but POSTS.json, reads no network and no clock, so both
// of the grader's runs write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'POSTS.json'), join(OUTPUT_DIR, 'POSTS.json'));
} catch (err) {
  console.error(`Could not copy POSTS.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
