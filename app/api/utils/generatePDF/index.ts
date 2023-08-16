import puppeteer from "puppeteer";

export async function generatePDF(htmlContent: HTMLBodyElement, outputPath: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.pdf({
    path: outputPath,
    preferCSSPageSize: true,
    margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
    printBackground: false,
    format: "A4", // Enable selectable text
  });

  browser.close();
}
