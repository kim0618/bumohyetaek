import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../public/downloads');
const BASE_URL = 'http://localhost:2000';

const PAGES = [
  { slug: 'welfare-checklist',              file: 'welfare-checklist.pdf' },
  { slug: 'basic-pension-checklist',        file: 'basic-pension-checklist.pdf' },
  { slug: 'care-grade-checklist',           file: 'care-grade-checklist.pdf' },
  { slug: 'hospital-visit-checklist',       file: 'hospital-visit-checklist.pdf' },
  { slug: 'financial-safety-checklist',     file: 'financial-safety-checklist.pdf' },
  { slug: 'survivor-pension-checklist',     file: 'survivor-pension-checklist.pdf' },
  { slug: 'vaccination-schedule',           file: 'vaccination-schedule.pdf' },
  { slug: 'inheritance-checklist',          file: 'inheritance-checklist.pdf' },
];

const browser = await puppeteer.launch({ args: ['--no-sandbox'] });

for (const { slug, file } of PAGES) {
  const url = `${BASE_URL}/print/${slug}`;
  const outPath = path.join(OUTPUT_DIR, file);

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });

  // 인쇄 미디어로 전환 (print:hidden 적용)
  await page.emulateMediaType('print');

  // PDF 최적화 CSS 주입
  await page.addStyleTag({
    content: `
      @page {
        margin: 18mm 20mm;
      }
      html, body {
        background: white !important;
      }
      /* 외부 래퍼 패딩 제거 */
      .py-8 { padding-top: 0 !important; padding-bottom: 0 !important; }
      .px-4 { padding-left: 0 !important; padding-right: 0 !important; }
      /* A4 박스 → 자연스러운 흐름으로 */
      .shadow-lg { box-shadow: none !important; }
      .mx-auto.bg-white {
        width: auto !important;
        min-height: auto !important;
        padding: 0 !important;
        margin: 0 !important;
        box-shadow: none !important;
      }
      /* 섹션이 페이지 중간에 잘리지 않도록 */
      section, .space-y-6 > * {
        break-inside: avoid;
        page-break-inside: avoid;
      }
    `,
  });

  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await page.close();
  console.log(`✓ ${file}`);
}

await browser.close();
console.log(`\n완료: public/downloads/ 에 PDF ${PAGES.length}개 생성됨`);
