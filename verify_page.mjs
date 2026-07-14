import playwright from "/Users/bingo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.js";
import path from "node:path";
import { pathToFileURL } from "node:url";

const { chromium } = playwright;
const pagePath = path.resolve("/Users/bingo/Documents/Codex/2026-07-07/qing/work/ip-pr-risk-test-page/index.html");
const screenshotPath = "/Users/bingo/Documents/Codex/2026-07-07/qing/outputs/企业知产维权舆情风险自测页面预览.png";

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(pagePath).href);
await page.locator('[data-item="right_stability"][data-score="5"]').click();
await page.locator('[data-item="evidence_visibility"][data-score="5"]').click();
await page.locator('[data-item="evidence_chain"][data-score="5"]').click();
await page.locator('[data-item="impact_scope"][data-score="5"]').click();
await page.locator('[data-item="subject_size"][data-score="1"]').click();
await page.locator('[data-item="identity_emotion"][data-score="1"]').click();
await page.locator('[data-item="relationship_complexity"][data-score="1"]').click();
await page.locator('[data-item="counter_ability"][data-score="1"]').click();
await page.locator('[data-item="public_word"][data-score="1"]').click();
await page.locator('[data-item="power_story"][data-score="1"]').click();
await page.locator('[data-item="industry_history"][data-score="1"]').click();
await page.locator('[data-item="spread_material"][data-score="1"]').click();

const result = await page.locator("#resultTitle").textContent();
const material = await page.locator("#materialScore").textContent();
const sensitivity = await page.locator("#sensitivityScore").textContent();
await page.screenshot({ path: screenshotPath, fullPage: true });
await browser.close();

console.log(JSON.stringify({ result, material, sensitivity, screenshotPath }, null, 2));
