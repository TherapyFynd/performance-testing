import { test, type Page } from '@playwright/test';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createMailSurpEmail } from '../helpers/mailsurp';
import MailSlurp from 'mailslurp-client';
import myEmails from '../localemails.js/emails';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test('Intake admin login and  onboarding ', async ({ request }) => {
  

  const data = await generatePasswordlessLoginLink({
    email: myEmails.intakeAdminEmail,
    request: request,
  });

  // goto page
  await page.goto(data!);

  // Onboarding Flows for Owner

  // DP
  await page
    .locator(
      '#root > div._layout_10ldc_1 > div > div._onboardProfile_bqqcv_1 > div > div > div > div._imagePicker_bqqcv_35 > input[type=file]'
    )
    .setInputFiles('../files/ther_img.jpg');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
   // Onboarding Flows
   await page.getByPlaceholder('Enter first name').click();
   await page.getByPlaceholder('Enter first name').fill('Intake ');
   await page.getByPlaceholder('Enter last name').click();
   await page.getByPlaceholder('Enter last name').fill('Admin');
   await page.getByRole('button', { name: 'Continue' }).nth(1).click();
   await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
     
     await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
     
        });
        test('Intake tab', async () => {
            await page
              .locator('div')
              .filter({ hasText: /^Referrals$/ })
              .getByRole('img')
              .click();
            // await page.locator('div').filter({ hasText: /^Referrals$/ }).getByRole('img').click();
            await page.getByRole('button', { name: 'Create Lead' }).nth(1).click();
            await page.getByLabel('First Name*').click();
            await page.getByLabel('First Name*').fill('bangaloe');
            await page.getByLabel('Last Name').click();
            await page.getByLabel('Last Name').fill('23');
            await page.getByLabel('Email').click();
            //
            
            const Bookinginbox3 = await createMailSurpEmail();
            await page.getByLabel('Email').fill(Bookinginbox3!);

            await page.getByLabel('Seeking treatment for').click();
            await page.getByRole('option', { name: 'Cancer' }).click();
            await page.getByLabel('Note').click();
            await page.getByLabel('Note').fill('I am Very sick');
            await page.getByRole('button', { name: 'Create' }).nth(1).click();
            
          
            await page.getByRole('cell', { name: 'bangaloe' }).click();
            await page.getByRole('tab', { name: 'Basic Information' }).click();
            await page.getByLabel('Sex').click();
            await page.getByRole('option', { name: 'Male', exact: true }).click();
            await page.getByLabel('Member ID').click();
            await page.getByLabel('Member ID').fill('GAH23');
            await page.getByLabel('Name on Card').click();
            await page.getByLabel('Name on Card').fill('Rajesh');
            await page.getByLabel('Payer ID').click();
            await page.getByLabel('Payer ID').fill('BDJSB546');
            await page.getByLabel('Insurance Company').click();
            await page.getByRole('combobox', { name: 'Insurance Company' }).fill('abso');
            await page.getByText('ABSOLUTE TOTAL CARE-').click();
            await page.getByRole('button', { name: 'Save' }).nth(1).click();
            await page
              .locator('span')
              .filter({ hasText: 'Current Status :Inquiry' })
              .locator('div')
              .nth(2)
              .click();
            await page.getByRole('option', { name: 'Initial consultation call' }).click();
            
            await page.getByLabel('Send inquiry form').click();
            await page.getByRole('button', { name: 'Send' }).nth(1).click();
           
            await page.getByLabel('Send therapist scheduling link').click();
            await page.getByLabel('Select Therapist').click();
            await page.getByRole('option', { name: 'Owner Team' }).click();
            await page.getByRole('button', { name: 'Send' }).nth(1).click();
            await page
              .locator('div')
              .filter({ hasText: /^Filters \(01\)$/ })
              .getByRole('button')
              .nth(2)
              .click();
            
          });
          test('DP Update and Logout', async () => {
            await page.locator('div').filter({ hasText: 'Intake Admin' }).nth(3).click();
            await page.getByRole('menuitem', { name: 'Profile' }).click();
            await page
              .locator(
                '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._generalSettingsTab_18vvz_1 > div > div._flexContainer_18vvz_4 > div._userNameDetailsContainer_18vvz_8 > div > div._imagePicker_18vvz_17 > input[type=file]'
              )
              .setInputFiles('../files/ther_img.jpg');
            await page.getByRole('button', { name: 'Done' }).nth(1).click();
            await page.getByRole('button', { name: 'Save' }).nth(1).click();
            await page.locator('div').filter({ hasText: 'Intake Admin' }).nth(3).click();
            await page.getByRole('menuitem', { name: 'Logout' }).click();
            
          });