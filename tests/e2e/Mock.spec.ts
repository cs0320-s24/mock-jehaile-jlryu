import { expect, test } from "@playwright/test";

test.beforeEach(async ({page}) => {
    await page.goto("http://localhost:8000/");
  });
/**
 * Tests that when a page is loaded you can see the login button. 
 */
  test('on page load, i see a login button', async ({ page }) => {
    // Notice: http, not https! Our front-end is not set up for HTTPs.
    await page.waitForSelector('text="Login"', { state: 'visible' });    
    await expect(page.getByLabel("Login")).toBeVisible();
  });
/**
 * Tests that on page load you can not enter an input before being logged in. 
 */
  test('on page load, i dont see the input box until login', async ({ page }) => {
    // Notice: http, not https! Our front-end is not set up for HTTPs.
    await expect(page.getByLabel('Sign Out')).not.toBeVisible();
    await expect(page.getByLabel('Command input')).not.toBeVisible();
    
    await page.getByLabel('Login').click();
    await expect(page.getByLabel('Sign Out')).toBeVisible();
    await expect(page.getByLabel('Command input')).toBeVisible();
  });
/**
 * Tests that the input box changes when we begin typing a command, dynamic input box.
 */
  test('after I type into the input box, its text changes', async ({ page }) => {
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('Awesome command');
  
    const mock_input = `Awesome command`;
    await expect(page.getByLabel('Command input')).toHaveValue(mock_input);
  });
  /**
   * Tests that the mode changes when mode is typed in, by checking the mode switched output. 
   */

  test('when I type in "mode" the mode changes', async ({ page }) => {
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('mode');
    
    await page.getByLabel("Submit").click();

    let output = await page.getByLabel("history box")
    let outputSwitch = await output.textContent();

    expect(outputSwitch).toContain('Command: modeOutput: mode switched') 
  });
/**
 * Tests that our mode output changes from using brief and verbose through the command and output written out. 
 */
  test('when I change the mode the display shows both commands and output', async ({ page }) => {
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('mode');
    
    await page.getByLabel("Submit").click();

    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('load_file csv1.csv');
    await page.getByLabel("Submit").click(); 
    let loadResponse = await page.getByLabel("history box").textContent();

    expect(loadResponse).toContain("Command: modeOutput: mode switchedCommand: load_file csv1.csvOutput: File \"csv1.csv\" loaded successfully! :)")
  });

  /**
   * Tests that mode mode after searching.
   */

  test('I can change the mode and run a search', async ({ page }) => {
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('mode');
    
    await page.getByLabel("Submit").click();

    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('mode');
    
    await page.getByLabel("Submit").click();

    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('load_file csv3.csv');
    await page.getByLabel("Submit").click();

    let loadResponse = await page.getByLabel("history box").textContent();
    expect(loadResponse).toContain('File "csv3.csv" loaded successfully!') 

    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('search City/Town Cranston');
    await page.getByLabel("Submit").click();

    let searchResponse = await page.getByLabel("history box").textContent();
    expect(searchResponse).toContain('Cranston') 
    expect(searchResponse).toContain('Cranston77,145.0095,763.0038,269.00')

  });
  /**
   * Tests that an invalid commnad will not work and will result in the correct error description
   */

  test('when I input an invalid command I am returned an error output', async ({ page }) => {
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('invalid command');

    await page.getByLabel("Submit").click();

    let output = await page.getByLabel("history box").textContent()

    expect(output).toContain("Invalid command. Please try again")
  });
/**
 * Tests that when we type in view before load, there is an error description
 */
  test('when I type in "view" before "load_file" I get an error output', async ({ page }) => {
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('view');

    await page.getByLabel("Submit").click();

    let output = await page.getByLabel("history box").textContent()

    expect(output).toContain("ERROR: Please load a file before viewing.")
  });
/**
 * Tests that when we type in search before load, there is an error description
 */
  test('when I search before load_file I get an error output', async ({ page }) => {
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('search');

    await page.getByLabel("Submit").click();

    let output = await page.getByLabel("history box").textContent()

    expect(output).toContain("Invalid search query. Please specify the search type and query")
  });
/**
 *  Tests that we can load a file and view the contents. 
 */
  test('I can type "load_file" and "view" and see a csv', async ({ page }) => {
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('load_file csv1.csv');

    await page.getByLabel("Submit").click();

    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('view');

    await page.getByLabel("Submit").click();

    let output = await page.getByLabel("history box").textContent()

    expect(output).toContain("File \"csv1.csv\" loaded successfully! :)StateData TypeAverage Weekly EarningsNumber of WorkersEarnings DisparityEmployed PercentRIWhite $1,058.47 395773.6521$1.0075%RIBlack $770.2630424.80376 $0.736%RINative American/American Indian$471.072315.505646$0.450%RIAsian-Pacific Islander $1,080.09 18956.71657$1.024%RIHispanic/Latino$673.1474596.18851$0.6414%RIMultiracial$971.898883.049171$0.922%")
  });
/**
 * Tests that there is an error if a file name that is not part of the mocked data can not be accessed. 
 */
  test('I get returned an error if I try to load an invalid file', async ({ page }) => {
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('load_file invalid_file.csv');

    await page.getByLabel("Submit").click();

    let output = await page.getByLabel("history box").textContent()

    expect(output).toContain("Invalid file name. Reenter a valid file name.")
  });
  /**
   * Tests searching by column name and value
   */

  test('I can search by column name and value', async ({ page }) => { 
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('load_file csv3.csv');
    await page.getByLabel("Submit").click();

    let loadResponse = await page.getByLabel("history box").textContent();
    expect(loadResponse).toContain('File "csv3.csv" loaded successfully!') 

    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('search City/Town Cranston');
    await page.getByLabel("Submit").click();

    let searchResponse = await page.getByLabel("history box").textContent();
    expect(searchResponse).toContain('Cranston') 
    expect(searchResponse).toContain('Cranston77,145.0095,763.0038,269.00')
  });
/**
 * Tests searching by column index and value
 */
  test('I can search by column index and value', async ({ page }) => { 
    //search 1 Black, search 1 94,571.00
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('load_file csv1.csv');
    await page.getByLabel("Submit").click();

    let loadResponse = await page.getByLabel("history box").textContent();
    expect(loadResponse).toContain('File "csv1.csv" loaded successfully!') 

    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('search 1 Black');
    await page.getByLabel("Submit").click();

    let searchResponse = await page.getByLabel("history box").textContent();
    expect(searchResponse).toContain('RIBlack $770.2630424.80376 $0.736%') 

  });

  /**
   * Tests loading two files consecutively and views second the that the correct content is shown
   */

  test('I can load a file then load another file and view the second', async ({ page }) => { 
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('load_file csv1.csv');
    await page.getByLabel("Submit").click();
    let loadResponse = await page.getByLabel("history box").textContent();

    expect(loadResponse).toContain('File "csv1.csv" loaded successfully!') 

    //check loaded
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('load_file csv2.csv');
    await page.getByLabel("Submit").click();

    //check viewed
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('view');
    await page.getByLabel("Submit").click();

    let viewResponse = await page.getByLabel("history box").textContent();
    expect(viewResponse).toContain('Asian') 
    expect(viewResponse).toContain('IPEDS') 
    expect(viewResponse).toContain('University327brown-university0.105791006Men1White20202020217156Brown') 
  });
/**
 * Tests that search does not work without three arguments (search <index/header> <value>) and that the
 * correct error message is shown
 */
  test('search that enters an empty result', async ({ page }) => { 
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('load_file csv1.csv');
  
    await page.getByLabel("Submit").click();
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('search ');
    await page.getByLabel("Submit").click();
    let response = await page.getByLabel("history box").textContent();
    expect(response).toContain('Invalid search query. Please specify the search type and query.') 

  });
/**
 * Tests stateful interactions to by a combination of different calls of load, search and view from different
 * files and checking that the correct data is returned.
 */
  test('i can load and view multiple files in succession', async ({ page }) => { 
    await page.getByLabel('Login').click();

    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('load_file csv3.csv');
    await page.getByLabel("Submit").click();

    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('search City/Town Cranston');
    await page.getByLabel("Submit").click();

    let searchResponse = await page.getByLabel("history box").textContent();
    expect(searchResponse).toContain('Cranston');
    expect(searchResponse).toContain('Cranston77,145.0095,763.0038,269.00');

    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('load_file csv1.csv');
    await page.getByLabel("Submit").click();

    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('view');
    await page.getByLabel("Submit").click();

    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('mode');
    await page.getByLabel("Submit").click();

    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('view');
    await page.getByLabel("Submit").click();


    let output = await page.getByLabel("history box").textContent();
    expect(output).toContain('Cranston77,145.0095,763.0038,269.00')
  });
