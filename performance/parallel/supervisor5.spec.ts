import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../../helpers/api';
import { createNewEmail } from '../../helpers/mailsurp';
import { IEmail, readEmails } from '../../localemails.js/emails';
import fs from 'fs';

// Directory paths
const logsDir = path.resolve(__dirname, 'logs');
const responseLogsFile = path.join(logsDir, 'supervisor5-responses.txt');

// Ensure logs directory exists
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

let page: Page;
test.setTimeout(250000)

// Function to append logs to a file
function saveResponseLog(message: string) {
  fs.appendFileSync(responseLogsFile, `${message}\n`);
}

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

  const loadTimeInMilliseconds = endTime - startTime;
  const loadTimeInSeconds = loadTimeInMilliseconds / 1000;

  const logMessage = `${rolePrefix}Time for '${actionName}': ${loadTimeInSeconds.toFixed(2)} seconds`;

  // Log to console and save to file
  console.log(logMessage);
  saveResponseLog(logMessage);

  if (loadTimeInMilliseconds > thresholdInMilliseconds) {
    const warningMessage = `${rolePrefix}WARNING: '${actionName}' took longer than ${thresholdInMilliseconds / 1000} seconds (${loadTimeInSeconds.toFixed(2)} seconds)`;
    console.warn(warningMessage);
    saveResponseLog(warningMessage);
  }
}

// Test setup before all test cases
test.beforeAll(async ({ browser }) => {
  const myEmails: IEmail = await readEmails();
  if (!myEmails?.supervisor5?.length) {
    throw new Error(`Supervisor Email not present. Exiting tests.`);
  }

  page = await browser.newPage();
});

// Cleanup after tests
test.afterAll(async () => {
  await page.close();
});

// Main test cases
test.describe('All Supervisor5 Role Test Cases', () => {
  test('Supervisor5 login and onboarding', async ({ request }) => {
    const myEmails: IEmail = await readEmails();
    const rolePrefix = "Supervisor 5";

        // Repeat test actions twice
        for (let i = 0; i < 2; i++) {
          const iterationLogMessage = `Test iteration: ${i + 1}`;
          console.log(iterationLogMessage);
          saveResponseLog(iterationLogMessage);

      await measureActionTime(async () => {
        const data = await generatePasswordlessLoginLink({
          email: myEmails.supervisor5!,
          request: request,
        });

        // Navigate to generated login page
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
  }
  });
});