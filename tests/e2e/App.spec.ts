// import { expect, test } from "@playwright/test";


// /**
//   The general shapes of tests in Playwright Test are:
//     1. Navigate to a URL
//     2. Interact with the page
//     3. Assert something about the page against your expectations
//   Look for this pattern in the tests below!
//  */

// // If you needed to do something before every test case...
// test.beforeEach(() => {

//     // ... you'd put it here.
//     // TODO: Is there something we need to do before every test case to avoid repeating code?

//   })

// /**
//  * Don't worry about the "async" yet. We'll cover it in more detail
//  * for the next sprint. For now, just think about "await" as something 
//  * you put before parts of your test that might take time to run, 
//  * like any interaction with the page.
//  */






// test('on page load, i see a button', async ({ page }) => {
//   // TODO WITH TA: Fill this in!
//   await page.goto('http:localhost:8000/');
//   await page.getByLabel('Login').click();
//   await expect(page.getByLabel('Submit')).toBeVisible();
// });

// test('after I click the button, its label increments', async ({ page }) => {
//   // TODO WITH TA: Fill this in to test your button counter functionality!
//   await page.goto('http:localhost:8000/');
//   await page.getByLabel('Login').click();
//   await page.getByLabel("Submit").click();
//   await page.getByLabel("Submit").click();//used by aria-label as a reference in REPL Input
//   await expect(page.getByLabel("Submit")).toHaveText("Submitted 2 times");
// });

// test('after I click the button, my command gets pushed', async ({ page }) => {
//   // TODO: Fill this in to test your button push functionality!
//   await page.goto('http:localhost:8000/');
//   await page.getByLabel('Login').click();
//   await page.getByLabel('Command input').click();
//   await page.getByLabel('Command input').fill("test");
//   await page.getByLabel("Submit").click();
//   await expect(page.getByText("text")).toBeVisible();

//   await expect(page.getByLabel("history box")).toHaveText("test");
// });