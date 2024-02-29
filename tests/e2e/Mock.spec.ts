import { expect, test } from "@playwright/test";

test.beforeEach(async ({page}) => {
    await page.goto("http://localhost:8000/");
  })

  test('on page load, i see a login button', async ({ page }) => {
    // Notice: http, not https! Our front-end is not set up for HTTPs.
    await page.goto("http://localhost:8000/");
    await expect(page.getByLabel("Login")).toBeVisible();
  })

  test('on page load, i dont see the input box until login', async ({ page }) => {
    // Notice: http, not https! Our front-end is not set up for HTTPs.
    await page.goto('http://localhost:8000/');
    await expect(page.getByLabel('Sign Out')).not.toBeVisible();
    await expect(page.getByLabel('Command input')).not.toBeVisible();
    
    // click the login button
    await page.getByLabel('Login').click();
    await expect(page.getByLabel('Sign Out')).toBeVisible();
    await expect(page.getByLabel('Command input')).toBeVisible();
  })

  test('after I type into the input box, its text changes', async ({ page }) => {

    await page.goto('http://localhost:8000/');
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('Awesome command');
  
    const mock_input = `Awesome command`;
    await expect(page.getByLabel('Command input')).toHaveValue(mock_input);
  });