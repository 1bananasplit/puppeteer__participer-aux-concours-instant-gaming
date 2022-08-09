const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false},{ executablePath: '/path/to/Chrome' });
    const page = (await browser.pages())[0]
    // await page.goto('https://youtube.com', {waitUntil: 'networkidle2'});
    // await page.waitForTimeout(500)

    // const search = await page.$('#search[name="search_query"]')
    // await search.type('polobleu', {delay: 100})
    // await page.waitForTimeout(1000)
    // await page.click('#search-icon-legacy')

    // await page.waitForTimeout(1000)
    // await page.click('a>div#avatar')

    await page.goto('https://www.instant-gaming.com/fr/', {waitUntil: 'networkidle2'});
    await page.waitForTimeout(500)

    await page.click('a.burger')
    await page.waitForTimeout(1500)
    

})()