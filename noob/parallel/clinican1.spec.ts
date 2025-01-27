import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../../helpers/api';
import { IEmail, readEmails } from '../../localemails.js/emails';
import fs from 'fs';

// Directory paths
const logsDir = path.resolve(__dirname, 'logs');
const responseLogsFile = path.join(logsDir, 'clinican1-responses.txt');

// Ensure logs directory exists
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

let page: Page;
test.setTimeout(900000); // Set timeout to 15 minutes

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
  if (!myEmails?.therapist1?.length) {
    throw new Error(`Therapist1 Email not present. Exiting tests.`);
  }

  page = await browser.newPage();
});

// Cleanup after tests
test.afterAll(async () => {
  await page.close();
});


// Main test cases
test.describe('All Therapist1 Role Test Cases', () => {
  test('Therapist1 login and onboarding', async ({ request }) => {
    const myEmails: IEmail = await readEmails();
    const rolePrefix = "Therapist 1";

    // Repeat test actions twice
    for (let i = 0; i < 2; i++) {
      const iterationLogMessage = `Test iteration: ${i + 1}`;
      console.log(iterationLogMessage);
      saveResponseLog(iterationLogMessage);

      await measureActionTime(async () => {
        const data = await generatePasswordlessLoginLink({
          email: myEmails.therapist1!,
          request: request,
        });

        // Navigate to generated login page
        await page.goto(data!);

        // Onboarding flows for therapist
        await page.getByPlaceholder('Enter first name').click();
        await page.getByPlaceholder('Enter first name').fill('Therapist ');
        await page.waitForLoadState('load');
      }, "Therapist 1 Navigate to login page", rolePrefix);

      await page.getByPlaceholder('Enter last name').click();
      await page.getByPlaceholder('Enter last name').fill('1');
      await page.getByPlaceholder('Enter phone').click();
      await page.getByPlaceholder('Enter phone').fill('(846) 534-65836');

      await measureActionTime(async () => {
        await page.getByRole('button', { name: 'Continue' }).nth(1).click();
      }, "Click Continue button", rolePrefix);
    }
  });
});
