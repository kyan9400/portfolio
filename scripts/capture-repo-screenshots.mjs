/**
 * Fetches GitHub repos with a homepage, opens each live site in Playwright,
 * saves PNGs to public/repo-screenshots/{sanitized-name}.png
 *
 * Run from repo root: npm run capture:repos
 * Requires: npm install && npx playwright install chromium
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GITHUB_USER = "kyan9400";

function safeFileName(name) {
  return String(name).replace(/[^a-zA-Z0-9._-]/g, "_");
}

function normalizeUrl(homepage) {
  let u = String(homepage).trim();
  if (!u) return null;
  if (!/^https?:\/\//i.test(u)) u = `https://${u}`;
  return u;
}

async function fetchAllRepos() {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "alhassan-portfolio-capture (https://github.com/kyan9400)"
  };
  const all = [];
  for (let page = 1; page <= 100; page++) {
    const url = new URL(`https://api.github.com/users/${GITHUB_USER}/repos`);
    url.searchParams.set("per_page", "100");
    url.searchParams.set("page", String(page));
    url.searchParams.set("type", "all");
    url.searchParams.set("sort", "updated");
    url.searchParams.set("direction", "desc");
    const res = await fetch(url.toString(), { headers });
    if (!res.ok) throw new Error(`GitHub ${res.status}`);
    const chunk = await res.json();
    if (!Array.isArray(chunk) || chunk.length === 0) break;
    all.push(...chunk);
    if (chunk.length < 100) break;
  }
  return all;
}

const outDir = path.join(__dirname, "..", "public", "repo-screenshots");
fs.mkdirSync(outDir, { recursive: true });

const repos = await fetchAllRepos();
const targets = repos.filter((r) => {
  if (!r?.name || !r.homepage) return false;
  const u = normalizeUrl(r.homepage);
  return Boolean(u && /^https?:\/\//i.test(u));
});

console.log(`Capturing ${targets.length} live sites → ${outDir}`);

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
});
const page = await context.newPage();

for (const repo of targets) {
  const url = normalizeUrl(repo.homepage);
  const file = path.join(outDir, `${safeFileName(repo.name)}.png`);
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await new Promise((r) => setTimeout(r, 2800));
    await page.screenshot({ path: file, type: "png" });
    console.log("ok", repo.name, "→", path.basename(file));
  } catch (err) {
    console.error("skip", repo.name, err?.message || err);
  }
}

await browser.close();
console.log("Done.");
