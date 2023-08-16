import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import puppeteer from "puppeteer";
import InvoiceTemplate from '@/app/(dashboard)/components/InvoiceTemplate';

export async function generatePDF(
 ) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const div = document.createElement("div");
  const root = createRoot(div);
  const htmlContent = flushSync(() => {
    root.render(<InvoiceTemplate />);
  });

  page.setContent(htmlContent.innerHTML);

  await page.pdf({
    path: `/output/invoice${new Date()}.pdf`,
    preferCSSPageSize: true,
    margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
    printBackground: false,
    format: "A4", // Enable selectable text
  });

  browser.close();
}
