import { expect, test } from "@playwright/test";
import { REPLInput, REPLInputProps } from '/Users/jiminryu/Desktop/cs0320/mock-jehaile-jlryu/src/components/REPLInput.tsx';
import {REPLHistory} from '/Users/jiminryu/Desktop/cs0320/mock-jehaile-jlryu/src/components/REPLHistory.tsx'

test.beforeEach(async ({page}) => {
    await page.goto("http://localhost:8000/");
  })

  test('on page load, i see a login button', async ({ page }) => {
    // Notice: http, not https! Our front-end is not set up for HTTPs.
    await expect(page.getByLabel("Login")).toBeVisible();
  })

  test('on page load, i dont see the input box until login', async ({ page }) => {
    // Notice: http, not https! Our front-end is not set up for HTTPs.
    await expect(page.getByLabel('Sign Out')).not.toBeVisible();
    await expect(page.getByLabel('Command input')).not.toBeVisible();
    
    // click the login button
    await page.getByLabel('Login').click();
    await expect(page.getByLabel('Sign Out')).toBeVisible();
    await expect(page.getByLabel('Command input')).toBeVisible();
  })

  test('after I type into the input box, its text changes', async ({ page }) => {
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('Awesome command');
  
    const mock_input = `Awesome command`;
    await expect(page.getByLabel('Command input')).toHaveValue(mock_input);
  });

  test('when I type in "mode" the mode changes', async ({ page }) => {
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('mode');
    
    //line to press enter

    let mode = 

    expect(mode).toBe('verbose')
  })

  test('when I change the mode the display shows both commands and output', async ({ page }) => {
    
  })

  test('when I input an invalid command I am returned an error output', async ({ page }) => {
    
  })

  test('when I type in "view" before "load_file" I get an error output', async ({ page }) => {
    
  })

  test('when I search before load_file I get an error output', async ({ page }) => {
    
  })

  test('I can type "load_file" and "view" and see a csv', async ({ page }) => {
    
  })

  test('I get returned an error if I try to load an invalid file', async ({ page }) => {
    
  })

  test('I can search by column name and value', async ({ page }) => { 
    //search Employed Percent 4%, search City/Town Cranston
    
  })

  test('I can search by column index and value', async ({ page }) => { 
    //search 1 Black, search 1 94,571.00
    
  })

  test('I can load a file then load another file and view the second', async ({ page }) => { 
    
  })
  test('search that enters an empty result', async ({ page }) => { 
    //ADD FUNCTIONALITY FOR THIS
    
  })

  test('test a dataset with only one column', async ({ page }) => { 
    //how???//whhy???
  })
