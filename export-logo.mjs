import puppeteer from 'puppeteer';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = resolve(__dirname, 'logo-pfp.html');

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 800, height: 800, deviceScaleFactor: 2 });
await page.goto(`file://${file}`, { waitUntil: 'networkidle0' });

const el = await page.$('.logo');
await el.screenshot({ path: resolve(__dirname, 'logo-pfp.png'), omitBackground: false });

await browser.close();
console.log('Saved: logo-pfp.png');
