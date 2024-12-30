import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../../helpers/api';
import { IEmail, readEmails, setEmails } from '../../localemails.js/emails';
import {
  BASE_FRONTEND_URL,
  isRunningOnLocal,
  localBaseUrl,
} from '../../localemails.js/const';
import { createNewEmail } from '../../helpers/mailsurp';

// Annotate entire file as serial.
// test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  const myEmails: IEmail = await readEmails();
  console.log(myEmails);
  if (!myEmails?.practice2?.length) {
    throw new Error(`practiceAdminEmail not present returning...`);
  }
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe('All PracticeRole Test case ', () => {

test('Practice 2 login and  onboarding ', async ({ request }) => {
  let myEmails: IEmail = await readEmails();
  const data = await generatePasswordlessLoginLink({
    email: myEmails.practice2!,
    request: request,
  });
  await page.goto(data!);

// Onbaording flows for Practice Manager

await page.getByPlaceholder('Enter first name').click();
await page.getByPlaceholder('Enter first name').fill('Practice ');
await page.getByPlaceholder('Enter last name').click();
await page.getByPlaceholder('Enter last name').fill('2');
await page.getByPlaceholder('Enter phone').click();
await page.getByPlaceholder('Enter phone').fill('(846) 534-65832');
await page.getByRole('button', { name: 'Continue' }).nth(1).click();
await page.waitForTimeout(2000);
await page.getByRole('checkbox').check();
 await page.waitForTimeout(1000);
 await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
 await page.waitForTimeout(1000);
 await page.getByRole('checkbox').check();
 await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
 await page.waitForTimeout(1000);
      
  try {
          await page.locator('div').filter({ hasText: /^Settings$/ }).click();
        } catch (error) {
          console.log('Failed to find first locator, trying second locator');
           await page.getByText('Settings').click();
        }  
        
        try {
          await page.getByRole('img').nth(1).click();
        } catch (error) {
          console.log('Failed to find first locator, trying second locator');
          await page.locator('.MuiAvatar-img').click();
        }  
      
          await page.getByRole('menuitem', { name: 'Logout' }).click();
          await page.waitForTimeout(7000);
      });
      });
      