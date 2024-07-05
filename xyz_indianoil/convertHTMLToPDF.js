const puppeteer = require('puppeteer');

async function saveHTMLAsPDF(url, pdfFilePath) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle0' }); // Load the page

    // Set the PDF options
    const options = {
        path: pdfFilePath, // Path where the PDF file will be saved
        format: 'A4', // Paper format
        printBackground: true, // Include background in PDF
    };

    await page.pdf(options); // Save as PDF

    await browser.close();
    console.log(`PDF saved to ${pdfFilePath}`);
}

// Example usage:
const url = 'https://example.com'; // Replace with your HTML page URL
const pdfFilePath = 'page.pdf'; // Output PDF file path

saveHTMLAsPDF(url, pdfFilePath).catch(console.error);
