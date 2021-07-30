
function $$(prop) {
    const isOK = (typeof prop === 'string') || Array.isArray(prop);
    return isOK ? prop : '';
}



module.exports = ({title, scripts, config, isDebug }) => {
    //const scripts = options.scripts || [];

    return (`
    <!doctype html>
    <html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>${title}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
    </head>
    <body>
        <div id="render-target"></div>
        ${
        scripts.map((src) => `<script type="text/javascript" src="${$$(src)}"></script>`).join('\n')
        }
        ${
        !isDebug
            ? `
            <script>
            window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
            ga('create','${$$(config.trackingID)}','auto');ga('send','pageview')
            </script>
            <script src="https://www.google-analytics.com/analytics.js" async defer></script>
            `
            : ''
        }
    </body>
    </html>

    `);
};

