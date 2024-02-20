# HTML M3U8 Scraper

HTML M3U8 Scraper is a Node.js package that extracts m3u8 URLs from HTML content fetched from a given URL.

## Installation

You can install HTML M3U8 Scraper via npm:

```bash
npm install html-m3u8-scraper
```

## Usage

```javascript
const htmlM3U8Scraper = require('html-m3u8-scraper');

async function main() {
    try {
        const url = 'https://www.example.com'; // Replace with the URL you want to scrape
        const m3u8Links = await htmlM3U8Scraper(url);
        console.log("M3U8 Links:", m3u8Links);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
```