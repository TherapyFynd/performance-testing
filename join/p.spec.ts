import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createNewEmail } from '../helpers/mailsurp';
import { IEmail, readEmails, setEmails } from '../localemails.js/emails';
import { logPerformanceMetrics } from '../performanceUtils'; // Import utility

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;
test.setTimeout(1000000);

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe('All OwnerRole Test case ', () => {
  test('Owner login and onboarding ', async ({ request }) => {
    const inbox = await createNewEmail();

    const data = await generatePasswordlessLoginLink({
      email: inbox!,
      request: request,
    });

    // Log performance metrics before and after navigation
    await page.goto(data!);
    await logPerformanceMetrics(page, 'Navigate to Login Page');

    // Onboarding Flows for Owner
// Onboarding Flows for Owner
await page.getByPlaceholder('Enter first name').click();
await page.getByPlaceholder('Enter first name').fill('Owner ');
await page.getByPlaceholder('Enter last name').click();
await page.getByPlaceholder('Enter last name').fill('Team');
await page.getByPlaceholder('Enter phone').click();
await page.getByPlaceholder('Enter phone').fill('(846) 534-65833');
await page.getByRole('button', { name: 'Continue' }).nth(1).click();
await page.getByPlaceholder('Enter Group Practice name').click();
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
await page.getByRole('button', { name: 'Next' }).nth(1).click();

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

await page.getByRole('button', { name: 'Next' }).nth(1).click();

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
await page.getByRole('button', { name: 'Next' }).nth(1).click();
await page.getByRole('button', { name: 'Next' }).nth(1).click();

await page.getByRole('checkbox').check();
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
await page.waitForTimeout(2000);
await page.getByRole('checkbox').check();
await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();

await logPerformanceMetrics(page, 'Completed Onboarding Flow');

  // Additional steps...


    try {
      await page.getByRole('img').nth(1).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
      await page.locator('.MuiAvatar-img').click();
    }

    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await logPerformanceMetrics(page, 'Logout Flow');
    await page.waitForTimeout(7000);
  });
});


































