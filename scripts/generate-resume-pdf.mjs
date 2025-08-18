import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RESUME_URL = process.env.RESUME_URL || 'http://localhost:3000/work/resume';
const OUTPUT_PATH = path.resolve(__dirname, '../public/assets/sharmake-hassan-said-resume.pdf');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });

    console.log(`[resume-pdf] Navigating to: ${RESUME_URL}`);
    await page.goto(RESUME_URL, { waitUntil: 'networkidle0', timeout: 120000 });

    // Ensure any dynamic fonts/animations are settled
    await page.waitForTimeout(800);

    // Export to PDF using A4 with background and reasonable margins
    await page.pdf({
      path: OUTPUT_PATH,
      format: 'A4',
      printBackground: true,
      margin: { top: '16mm', bottom: '16mm', left: '14mm', right: '14mm' },
      preferCSSPageSize: true,
    });

    console.log(`[resume-pdf] PDF saved to: ${OUTPUT_PATH}`);
  } catch (err) {
    console.error('[resume-pdf] Failed to generate PDF:', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
})();
