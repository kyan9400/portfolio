import fs from "node:fs";
import path from "node:path";

/** Matches `scripts/capture-repo-screenshots.mjs` filename sanitization. */
export function repoScreenshotBasename(repoName: string): string {
  return String(repoName).replace(/[^a-zA-Z0-9._-]/g, "_");
}

/** Public URL if a capture exists under `public/repo-screenshots/`. */
export function publicPathForRepoScreenshot(repoName: string): string | undefined {
  const safe = repoScreenshotBasename(repoName);
  const dir = path.join(process.cwd(), "public", "repo-screenshots");
  if (!fs.existsSync(dir)) return undefined;
  for (const ext of [".png", ".webp"] as const) {
    const abs = path.join(dir, `${safe}${ext}`);
    if (fs.existsSync(abs)) {
      return `/repo-screenshots/${safe}${ext}`;
    }
  }
  return undefined;
}
