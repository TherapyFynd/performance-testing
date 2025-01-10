import { test, type Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createNewEmail } from '../helpers/mailsurp';
import { IEmail, readEmails, setEmails } from '../localemails.js/emails';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;
test.setTimeout(1200000);

// Directory to store logs
const logsDir = path.resolve(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// File paths for logs
const generalLogsFile = path.join(logsDir, 'general-logs.txt');
const responseLogsFile = path.join(logsDir, 'response-logs.txt');

// Function to append logs to a file
function saveLog(filePath: string, actionName: string, message: string) {
    const logMessage = `[${new Date().toISOString()}] [${actionName}] ${message}\n`;
    fs.appendFileSync(filePath, logMessage);
}

// Utility function to measure and validate action time
async function measureActionTime(
    actionCallback: () => Promise<void>,
    actionName: string,
    rolePrefix = "",
    thresholdInMilliseconds = 1500
) {
    const startTime = performance.now();
    await actionCallback();
    const endTime = performance.now();

    const loadTimeInMilliseconds = endTime - startTime;
    const loadTimeInSeconds = loadTimeInMilliseconds / 1000;

    const logMessage = `${rolePrefix}Time for '${actionName}': ${loadTimeInSeconds.toFixed(2)} seconds`;
    saveLog(responseLogsFile, actionName, logMessage);
    console.log(logMessage);

    if (loadTimeInMilliseconds > thresholdInMilliseconds) {
        const warningMessage = `${rolePrefix}WARNING: '${actionName}' took longer than ${thresholdInMilliseconds / 1000} seconds (${loadTimeInSeconds.toFixed(2)} seconds)`;
        saveLog(responseLogsFile, actionName, warningMessage);
        console.warn(warningMessage);
    }
}

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    // Capture console events and save them in the general logs
    page.on('console', (msg) => {
        saveLog(generalLogsFile, 'Console Event', msg.text());
    });
});

test.afterAll(async () => {
    await page.close();
});

// Tests for Owner Role
test.describe('All OwnerRole Test case', () => {
    test('Owner login and onboarding', async ({ request }) => {
        const inbox = await createNewEmail();
        const rolePrefix = "Owner Role";

        await measureActionTime(async () => {
            const data = await generatePasswordlessLoginLink({
                email: inbox!,
                request: request,
            });
            await page.goto(data!);
        

        // Onboarding Flows for Owner
    await page.getByPlaceholder('Enter first name').click();
    await page.getByPlaceholder('Enter first name').fill('Owner ');
    await page.waitForLoadState('load');
    }, "Owner role Navigate to login page", rolePrefix);
    await page.getByPlaceholder('Enter last name').click();
    await page.getByPlaceholder('Enter last name').fill('Team');
    await page.getByPlaceholder('Enter phone').click();
    await page.getByPlaceholder('Enter phone').fill('(846) 534-65833');

    await measureActionTime(async () => {
        await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  
        await page.getByPlaceholder('Enter Group Practice name').click();
      }, "Click Continue button", rolePrefix);
      await page.getByPlaceholder('Enter Group Practice name').fill('KanTime Healthcare System ');
      await page.getByLabel('Address Line').click();
      await page.getByLabel('Address Line').fill('New York City');
      await page.waitForTimeout(2000);
      await page.getByPlaceholder('Street address').click();
      await page.getByPlaceholder('Street address').fill('New Area City ');
      await page.getByLabel('State').click();
      await page.getByRole('combobox', { name: 'State' }).fill('cali');
      await page.getByText('California').click();
      await page.getByLabel('City').click();
      await page.getByRole('combobox', { name: 'City' }).fill('Azu');
      await page.getByText('Azusa').click();
      await page.getByPlaceholder('Zip code').click();
      await page.getByPlaceholder('Zip code').fill('561202');
      await page.getByPlaceholder('Enter Group Practice name').click();
      await page.getByPlaceholder('Enter Group Practice name').fill('KanTime Healthcare System ');
  
      await measureActionTime(async () => {
        await page.getByRole('button', { name: 'Next' }).nth(1).click();
      }, "Click After filling practice details Next button", rolePrefix);
  
      await page.getByRole('button', { name: 'Add new' }).nth(1).click();
      await page.getByLabel('Office name').click();
      await page.getByLabel('Office name').fill('KANTIME HEALTHCARE');
      await page.getByLabel('Address').click();
      await page.getByLabel('Address').fill('New area City');
      await page.getByLabel('State').click();
      await page.getByRole('combobox', { name: 'State' }).fill('New york');
      await page.getByLabel('City').click();
      await page.getByRole('combobox', { name: 'City' }).fill('Fre');
      await page.getByText('Freeport').click();
      await page.getByPlaceholder('Zip code').click();
      await page.getByPlaceholder('Zip code').fill('56192');
      await page.getByLabel('Make default location').check();
      await page.getByRole('button', { name: 'Add location' }).nth(1).click();
  
      await measureActionTime(async () => {
        await page.getByRole('button', { name: 'Next' }).nth(1).click();
      }, "Click Add New Locations Next button", rolePrefix);
  
      await page.getByRole('button', { name: 'Add new' }).nth(1).click();
      await page.getByLabel('CPT Code').click();
      await page.getByRole('combobox', { name: 'CPT Code' }).fill('90832');
      await page.getByRole('option', { name: '90832, Psychotherapy, 30' }).click();
      await page.getByLabel('Fee *').click();
      await page.getByLabel('Fee *').fill('100');
      await page.getByLabel('Duration *').click();
      await page.getByLabel('Duration *').fill('10');
      await page.getByLabel('Make default service').check();
      await page.getByRole('button', { name: 'Add service' }).nth(1).click();
  
      await measureActionTime(async () => {
        await page.getByRole('button', { name: 'Next' }).nth(1).click();
      }, "Click Add New Services Next button", rolePrefix);
  
      await measureActionTime(async () => {
        await page.getByRole('button', { name: 'Next' }).nth(1).click();
      }, "Click Invite Role Next button", rolePrefix);
  
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
    });

    test('Invite Team Members', async () => {
        const rolePrefix = "Owner Role";

        // Navigate to Settings
        await measureActionTime(async () => {
            await page.locator('div').filter({ hasText: /^Settings$/ }).click();
        }, "Navigate to Settings", rolePrefix);

        // Navigate to Team Members
        await measureActionTime(async () => {
            await page.getByText('Team members').first().click();
        }, "Open Team Members page", rolePrefix);

        // // Invite a therapist
        // const therapistRolePrefix = "Therapist";

        await measureActionTime(async () => {
            await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
        }, "Open invite team member dialog",rolePrefix);

        const therapistEmail = await createNewEmail();
        await page.getByLabel('First Name*').fill('Therapist');
        await page.getByLabel('Last Name*').fill('1');
        await page.getByLabel('Email*').fill(therapistEmail!);

        const myEmails = await readEmails();
        await setEmails({ ...myEmails, therapist1: therapistEmail! });

        await measureActionTime(async () => {
            await page.getByRole('button', { name: 'Next' }).nth(1).click();
        }, "Fill therapist details and click Next", rolePrefix);

        await page.getByLabel('Therapist').check();

        await measureActionTime(async () => {
            await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
        }, "Send therapist invite", rolePrefix);

        await page.waitForTimeout(4000);
        await page.reload();
    });
});