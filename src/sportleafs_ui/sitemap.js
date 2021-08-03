
function $$(prop) {
    const isOK = (typeof prop === 'string') || Array.isArray(prop);
    return isOK ? prop : '';
}


module.exports = ({config, urls}) => {
    return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${
        urls.map((url) => `
            <url>
            <loc>${$$(config.url)}${$$(url.loc)}</loc>
            </url>
            `
        ).join('')
        }
    </urlset>
    `
}