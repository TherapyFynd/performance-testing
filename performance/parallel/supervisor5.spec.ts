import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../../helpers/api';
import { IEmail, readEmails } from '../../localemails.js/emails';
// import { measureActionTime } from '../../localemails.js/const';
// Annotate entire file as serial.
import fs from 'fs';
// Ensure directory exists
const traceDir = path.resolve(__dirname, './playwright-report./trace/trace.json');
if (!fs.existsSync(traceDir)) {
  fs.mkdirSync(traceDir, { recursive: true }); // Create the directory if it doesn't exist
}

let page: Page;
test.setTimeout(250000)

// Utility function to measure and validate action time
async function measureActionTime(
  actionCallback: () => Promise<void>,
  actionName: string,
  rolePrefix: string = " ",
  thresholdInMilliseconds = 1500
) {
  const startTime = performance.now();
  await actionCallback();
  const endTime = performance.now();

  const loadTimeInMilliseconds = endTime - startTime; // Calculate load time in milliseconds
  const loadTimeInSeconds = loadTimeInMilliseconds / 1000; // Convert to seconds

  // Log action time including the role prefix
  console.log(`${rolePrefix}Time for '${actionName}': ${loadTimeInSeconds.toFixed(2)} seconds`);

  if (loadTimeInMilliseconds > thresholdInMilliseconds) {
      console.warn(
          `${rolePrefix}WARNING: '${actionName}' took longer than ${thresholdInMilliseconds / 1000} seconds (${loadTimeInSeconds.toFixed(2)} seconds)`
      );
  }
}
test.beforeAll(async ({ browser }) => {
 
  const myEmails: IEmail = await readEmails();

  if (!myEmails?.supervisor5?.length) {
    throw new Error(`SupervisorEmail not present returning...`);
  }
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe('All SuperVisorRole Test case ', () => {

  test('Supervisor 1 login and onboarding ', async ({ request }) => {
    const myEmails: IEmail = await readEmails();

     // Add "Owner Team" prefix to the log
     const rolePrefix = "Supervisor Role 5";

    await measureActionTime(async () => {
      const data = await generatePasswordlessLoginLink({
        email: myEmails.supervisor5!,
        request: request,
      });
      await page.goto(data!);
      
    // Onbaording flows for Supervisor

    await page.getByPlaceholder('Enter first name').click();
    await page.getByPlaceholder('Enter first name').fill('Supervisor');
    await page.waitForLoadState('load');
    }, "Supervisor 5 Navigate to login page", rolePrefix);
    await page.getByPlaceholder('Enter last name').click();
    await page.getByPlaceholder('Enter last name').fill('5');
    await page.getByPlaceholder('Enter phone').click();
    await page.getByPlaceholder('Enter phone').fill('(846) 534-65831');

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    }, "Click Continue button", rolePrefix);

    await page.waitForTimeout(2000);
    await measureActionTime(async () => {
      await page.getByRole('checkbox').check();
      await page.waitForTimeout(2000);
      await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
    }, "Click Agree and Continue", rolePrefix);

    await measureActionTime(async () => {
      await page.getByRole('checkbox').check();
      await page.waitForTimeout(2000);
      await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
    }, "Click Agree and Continue", rolePrefix);
    await page.waitForTimeout(2000);

    await measureActionTime(async () => {

      await page.locator('div').filter({ hasText: /^Settings$/ }).click();
    }, "Navigate to Settings", rolePrefix);

    // Associate Mangaments
    await measureActionTime(async () => {
      await page.getByText('Associate management').click();
    }, " click on associate managment", rolePrefix);

    try {
      await page.getByRole('img').nth(1).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
      await page.locator('.MuiAvatar-img').click();
    }
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.waitForTimeout(5000);

  });
});