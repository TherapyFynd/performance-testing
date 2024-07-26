import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createNewEmail } from '../helpers/mailsurp';
import {
  BASE_FRONTEND_URL,
  isRunningOnLocal,
  localBaseUrl,
} from '../localemails.js/const';
import { IEmail, readEmails } from '../localemails.js/emails';


// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  const myEmails: IEmail = await readEmails();
  console.log(myEmails);
  if (!myEmails?.billingsection?.length) {
    throw new Error(`billerSectionEmail not present returning...`);
  }
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe.skip('All BillerSectionRole Test case ', () => {
test('BillingSection  login and  onboarding ', async ({ request }) => {
  let myEmails: IEmail = await readEmails();
    const data = await generatePasswordlessLoginLink({
      email: myEmails.billingsection!,
      
      request: request,
    });
    await page.goto(data!);
  
  // Onbaording flows for Practice Manager
  
await page.getByPlaceholder('Enter first name').click();
await page.getByPlaceholder('Enter first name').fill('Billing');
await page.getByPlaceholder('Enter last name').click();
await page.getByPlaceholder('Enter last name').fill('Section');
await page.getByPlaceholder('Enter phone').click();
await page.getByPlaceholder('Enter phone').fill('(846) 534-65833');
await page.getByRole('button', { name: 'Continue' }).nth(1).click();
await page.waitForTimeout(2000);
await page.getByLabel('', { exact: true }).check();
   await page.waitForTimeout(1000);
   await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
   await page.waitForTimeout(1000);
   await page.getByLabel('', { exact: true }).check();
   await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
   await page.waitForTimeout(6000);
   await page.getByRole('button', { name: 'Availability' }).nth(1).click();
   });

   test('Billing Section', async () => {

  await page.getByText('Billing').click();
  await page.getByRole('button', { name: 'SelfPay' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Insurance' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'All' }).click();
  await page.getByLabel('Client').click();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'James (OT)' }).getByRole('checkbox').check();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'James (OT)' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Automation (OT)' }).getByRole('checkbox').check();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Automation (OT)' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'New (T1)' }).getByRole('checkbox').check();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'New (T1)' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Rajesh (T1)' }).getByRole('checkbox').check();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Rajesh (T1)' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Shiva & Venkatesh (T1) Minor' }).getByRole('checkbox').check();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Shiva & Venkatesh (T1) Minor' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Rakesh (T1)' }).getByRole('checkbox').check();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Rakesh (T1)' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Poornima (T1)', exact: true }).getByRole('checkbox').check();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Poornima (T1)', exact: true }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Alfred (T1)' }).getByRole('checkbox').check();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Alfred (T1)' }).getByRole('checkbox').uncheck();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.waitForTimeout(3000);
  await page.getByLabel('Payer').click();
  await page.getByRole('option', { name: '- ABSOLUTE TOTAL CARE' }).getByRole('checkbox').check();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: '- ABSOLUTE TOTAL CARE' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'MEMCD- Maine Medicaid' }).getByRole('checkbox').check();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'MEMCD- Maine Medicaid' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: '- Aetna' }).getByRole('checkbox').check();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: '- Aetna' }).getByRole('checkbox').uncheck();
  await page.getByRole('combobox', { name: 'Payer' }).click();
  await page.getByRole('button', { name: 'SelfPay' }).click();
  await page.waitForTimeout(3000);
  try {
    await page.locator('td:nth-child(9)').first().click();
 } catch (error) {
   console.log('Failed to find first locator, trying second locator');
   await page.locator('#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._pendingTabContainer_1utsb_1 > div:nth-child(6) > table > tbody > tr:nth-child(2) > td:nth-child(9) > button > svg > path').click();
 }
//   await page.getByRole('menuitem', { name: 'Mark starred' }).click();
  await page.getByRole('menuitem', { name: 'View details' }).click();
  await page.locator('input[name="clientCopayAmount"]').click();
  await page.locator('input[name="clientCopayAmount"]').fill('50');
  await page.locator('input[name="writeOffAmount"]').click();
  await page.locator('input[name="writeOffAmount"]').fill('50');
  await page.getByLabel('Remarks').click();
  await page.getByLabel('Remarks').fill('Free initial Payment');
  await page.getByRole('button', { name: 'Charge' }).nth(1).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('Adding new Comment');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Edit billing address' }).nth(1).click();
  await page.getByLabel('Address Line').click();
  await page.getByLabel('Address Line').fill('New Jersy and New States');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('Was');
  await page.getByText('Washington').click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Au');
  await page.getByRole('option', { name: 'Auburn' }).click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('875465');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Edit' }).nth(3).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('Adding new Comment and more');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(3000);

  await page.getByPlaceholder('Service description').click();
  await page.getByPlaceholder('Service description').fill('90832 - Psychotherapy, 30 minutes with patient and Payment type');
  await page.locator('div').filter({ hasText: /^Bill ItemsSave$/ }).getByRole('button').nth(1).click();
  await page.waitForTimeout(3000);
  await page.getByText('Insurance', { exact: true }).click();
  await page.waitForTimeout(3000);
  await page.getByText('Billing').click();
  await page.getByRole('button', { name: 'Insurance' }).click();
  await page.getByLabel('Client').click();
  await page.getByRole('option', { name: 'Rajesh (T1)' }).getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
   try {
     await page.locator('td:nth-child(9)').first().click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
    await page.locator('#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._pendingTabContainer_1utsb_1 > div:nth-child(6) > table > tbody > tr:nth-child(2) > td:nth-child(9) > button > svg > path').click();
  }

  await page.getByRole('menuitem', { name: 'View details' }).click();
  await page.locator('input[name="clientCopayAmount"]').click();
  await page.locator('input[name="clientCopayAmount"]').fill('500');
  await page.locator('input[name="insurancePaymentAmount"]').click();
  await page.locator('input[name="insurancePaymentAmount"]').fill('300');
  await page.locator('input[name="writeOffAmount"]').click();
  await page.locator('input[name="writeOffAmount"]').fill('200');
  await page.getByLabel('Remarks').click();
  await page.getByLabel('Remarks').fill('No bonus');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('TestAdd Notes ');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Edit billing address' }).nth(1).click();
  await page.getByLabel('Address Line').click();
  await page.getByLabel('Address Line').fill('New Jersy');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('Oh');
  await page.getByRole('option', { name: 'Ohio' }).click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Da');
  await page.getByRole('option', { name: 'Dayton' }).click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('562102');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(3000);
  await page.getByText('Clients', { exact: true }).click();
   });
});