const https = require('https');

function fetchHTML(url, options = {}) {
    return new Promise((resolve, reject) => {
        const request = https.get(url, options, response => {
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error('Failed to load page, status code: ' + response.statusCode));
                return;
            }

            let data = '';
            response.on('data', chunk => {
                data += chunk;
            });

            response.on('end', () => {
                resolve(data);
            });
        });

        request.on('error', err => {
            reject(err);
        });
    });
}

async function htmlM3U8Scraper(url, options = {}) {
    try {
        const html = await fetchHTML(url, options);
        return html.match(/(https?:\/\/[^\s]+\.m3u8)[^\s'"\]]*/gm) || [];
    } catch (error) {
        throw new Error("Error fetching or parsing HTML: " + error.message);
    }
}

module.exports = htmlM3U8Scraper;