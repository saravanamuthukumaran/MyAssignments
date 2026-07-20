
//First and mandatory step to import "test" function
import { webkit, test} from '@playwright/test' // test is a function, comes from playwright module

//By using "test" function we can create Playwright test
test('Launch FlipKart in chrome', async () => {

    const browser = await webkit.launch({headless: false}); // Create a browser instance
    const context = await browser.newContext(); // Create the browser context
    const page = await context.newPage(); // Create a new page

    await page.goto("https://www.flipkart.com") // goto is a method, so here webkit broswers will get invoked and loads the URL

// Verify the title of the page
console.log(await page.title())
console.log(page.url())

})