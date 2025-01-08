import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../../helpers/api';
import { IEmail, readEmails } from '../../localemails.js/emails';
import { measureActionTime } from '../../localemails.js/const';
// Annotate entire file as serial.

import fs from 'fs';
// Ensure directory exists
const traceDir = path.resolve(__dirname, './playwright-report./trace/trace.json');
if (!fs.existsSync(traceDir)) {
  fs.mkdirSync(traceDir, { recursive: true }); // Create the directory if it doesn't exist
}
let page: Page;

test.beforeAll(async ({ browser }) => {
  test.setTimeout(250000)
  const myEmails: IEmail = await readEmails();

  if (!myEmails?.supervisor4?.length) {
    throw new Error(`SupervisorEmail not present returning...`);
  }
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe('All SuperVisorRole Test case ', () => {

  test('Supervisor  4 login and onboarding ', async ({ request }) => {
    const myEmails: IEmail = await readEmails();
    await measureActionTime(async () => {
      const data = await generatePasswordlessLoginLink({
        email: myEmails.supervisor4!,
        request: request,
      });
      await page.goto(data!);
      await page.waitForLoadState('load');
    }, "Supervisor 4 Navigate to login page");
    // Onbaording flows for Supervisor

    await page.getByPlaceholder('Enter first name').click();
    await page.getByPlaceholder('Enter first name').fill('Supervisor ');
    await page.getByPlaceholder('Enter last name').click();
    await page.getByPlaceholder('Enter last name').fill('4');
    await page.getByPlaceholder('Enter phone').click();
    await page.getByPlaceholder('Enter phone').fill('(846) 534-65831');
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    }, "Click Continue button");
    await page.waitForTimeout(2000);
    await measureActionTime(async () => {
      await page.getByRole('checkbox').check();
      await page.waitForTimeout(2000);
      await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
    }, "Click Agree and Continue");

    await measureActionTime(async () => {
      await page.getByRole('checkbox').check();
      await page.waitForTimeout(2000);
      await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
    }, "Click Agree and Continue");
    await page.waitForTimeout(2000);

    await measureActionTime(async () => {

      await page.locator('div').filter({ hasText: /^Settings$/ }).click();
    }, "Navigate to Settings");
    // Associate Mangaments
    await measureActionTime(async () => {
      await page.getByText('Associate management').click();
    }, " click on associate managment");

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