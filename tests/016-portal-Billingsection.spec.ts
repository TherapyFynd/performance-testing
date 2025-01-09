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
  //console.log(myEmails);
  if (!myEmails?.billingsection?.length) {
    throw new Error(`billerSectionEmail not present returning...`);
  }
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe('All BillerSectionRole Test case ', () => {
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
   });
   test('Team Internal Chat', async () => {
   
    try {
      await page.locator('div').filter({ hasText: /^Settings$/ }).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
       await page.getByText('Settings').click();
    }
    
  await page.getByText('Messages').click();
  await page.getByRole('tab', { name: 'SMS' }).click();
  await page.waitForTimeout(6000);
  await page.getByRole('tab', { name: 'Internal Chat' }).click();
  await page.waitForTimeout(6000);

  await page.getByPlaceholder('Search').nth(1).click();
  await page.getByPlaceholder('Search').nth(1).fill('Owner');
  await page.waitForTimeout(6000);
  await page.getByText('Owner Team').click()
  await page.waitForTimeout(2000);
  await page.getByTestId('message-input').click();
  await page.getByTestId('message-input').fill('Hey I owner team How Are u man');
  await page.getByTestId('SendOutlinedIcon').click();
  await page.waitForTimeout(3000);

  await page.getByPlaceholder('Search').nth(1).click();
  await page.getByPlaceholder('Search').nth(1).fill('Pract');
  await page.waitForTimeout(6000);
  await page.getByText('Practice 1').click();
  await page.getByTestId('message-input').click();
  await page.getByTestId('message-input').fill('Hey I Practice Manager  how are u man cool rights');
  await page.getByTestId('SendOutlinedIcon').click();
  await page.waitForTimeout(3000);

  await page.getByPlaceholder('Search').nth(1).click();
  await page.getByPlaceholder('Search').nth(1).fill('Bil'); 
  await page.waitForTimeout(6000);
try {
    await page.getByText('Biller 1').click();  
  } catch (error) {
      console.log('Failed to find first locator, trying second locator');
       await page.locator('p').filter({ hasText: 'Biller' }).click();
    }
  await page.getByTestId('message-input').click();
  await page.getByTestId('message-input').fill('Hey Biller How are u man');
  await page.getByTestId('SendOutlinedIcon').click();
  await page.waitForTimeout(3000);

  await page.getByPlaceholder('Search').nth(1).click();
  await page.getByPlaceholder('Search').nth(1).fill('Sc');
  await page.waitForTimeout(6000);
  await page.getByText('Scheduler 1').click();
  await page.getByTestId('message-input').click();
  await page.getByTestId('message-input').fill('Hey how are u Scheduler');
  await page.getByTestId('SendOutlinedIcon').click();
  await page.waitForTimeout(3000);

  await page.getByPlaceholder('Search').nth(1).click();
  await page.getByPlaceholder('Search').nth(1).fill('Intake');
  await page.waitForTimeout(6000);
  await page.getByText('IntakeAdmin 1').click();
  await page.getByTestId('message-input').click();
  await page.getByTestId('message-input').fill('Hey man how are u ');
  await page.getByTestId('SendOutlinedIcon').click();
  await page.waitForTimeout(3000);

  await page.getByPlaceholder('Search').nth(1).click();
  await page.getByPlaceholder('Search').nth(1).fill('Thera');
  await page.waitForTimeout(6000);
  await page.getByText('Therapist 1').click();
  await page.getByTestId('message-input').click();
  await page.getByTestId('message-input').fill('Hey Man How are u ');
  await page.getByTestId('SendOutlinedIcon').click();
  await page.waitForTimeout(3000);

  await page.getByPlaceholder('Search').nth(1).click();
  await page.getByPlaceholder('Search').nth(1).fill('Colin');
  await page.waitForTimeout(6000);
  await page.getByText('Colin Das').click();
  await page.getByTestId('message-input').click();
  await page.getByTestId('message-input').fill('Hey i clients how are u doing man');
  await page.getByTestId('SendOutlinedIcon').click();
  await page.waitForTimeout(3000);
  
  await page.getByPlaceholder('Search').nth(1).click();
  await page.getByPlaceholder('Search').nth(1).fill('Shiva');
  await page.waitForTimeout(6000);
  await page.getByText('Shiva Kumar').click();
  await page.getByTestId('message-input').click();
  await page.getByTestId('message-input').fill('Hey Very Good man how are u ');
  await page.getByTestId('SendOutlinedIcon').click();
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Clients' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Team' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'All chats' }).click();

  await page.getByRole('tab', { name: 'SMS' }).click();
  await page.getByPlaceholder('Search').nth(1).click();
  await page.getByPlaceholder('Search').nth(1).fill('New');
  await page.waitForTimeout(6000);
  await page.getByTestId('message-input').click();
  await page.getByTestId('message-input').fill('Hey new clients this Biller Manager Your Session are clear');
  await page.getByTestId('SendOutlinedIcon').click();
  await page.waitForTimeout(3000);

  await page.getByPlaceholder('Search').nth(1).click();
  await page.getByPlaceholder('Search').nth(1).fill('Combine');
  await page.waitForTimeout(6000);
  await page.getByTestId('message-input').click();
  await page.getByTestId('message-input').fill('Hey How are u man ');
  await page.getByTestId('SendOutlinedIcon').click();
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Clients' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'All chats' }).click();
  await page.getByRole('tab', { name: 'Internal Chat' }).click();
  await page.waitForTimeout(3000);

});
test('Billing tab', async () => {

  await page.getByText('Billing').first().click();
  await page.getByLabel('Office Locations').click();
  await page.getByRole('option', { name: 'Telehealth : Onli...' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Telehealth : Onli...' }).getByRole('checkbox').uncheck();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'KANTIME HEALTHCAR...', exact: true }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'KANTIME HEALTHCAR...', exact: true }).getByRole('checkbox').uncheck();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Practice Wide Loc...' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Practice Wide Loc...' }).getByRole('checkbox').uncheck();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'All' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'All' }).getByRole('checkbox').uncheck();
  await page.reload();
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'New' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Ready to post' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Ready to charge' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'All' }).click();

  await page.getByLabel('Client').click();
  await page.getByRole('option', { name: 'James (OT)' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'James (OT)' }).getByRole('checkbox').uncheck();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Automation (OT)' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Automation (OT)' }).getByRole('checkbox').uncheck();
  await page.waitForTimeout(3000);
  await page.getByRole('option', { name: 'Rajesh@' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Rajesh@' }).getByRole('checkbox').uncheck();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.reload();
  await page.waitForTimeout(3000);

  await page.getByLabel('Client').click();
  await page.getByRole('option', { name: 'James (OT)' }).getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
    try {
await page.getByRole('cell', { name: '$100' }).first().click();
} catch (error) {
     console.log('Failed to find first locator, trying second locator');
  await page.getByRole('cell', { name: 'SelfPay' }).first().click();
   }
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('Adding Invoices Note Here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

  await page.getByRole('button', { name: 'Edit billing address' }).nth(1).click();
  await page.getByLabel('Address Line').click();
  await page.getByLabel('Address Line').fill('New State Added here');
  await page.getByLabel('State').click();
  await page.getByRole('option', { name: 'Texas' }).click();
  await page.getByLabel('City').click();
  await page.getByText('Abilene').click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('56230');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

  await page.getByRole('button', { name: 'Edit', exact: true }).nth(3).click();
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('150');
  await page.locator('div').filter({ hasText: /^Bill ItemsSave$/ }).getByRole('button').nth(1).click();

  await page.locator('input[name="clientCopayAmount"]').click();
  await page.locator('input[name="clientCopayAmount"]').fill('50');
  await page.locator('input[name="writeOffAmount"]').click();
  await page.locator('input[name="writeOffAmount"]').fill('50');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

});
  // Update DP and Logout Flow
  test('Update and Logout Flow', async () => {
    try {
      await page.getByRole('img').nth(1).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
      await page.locator('.MuiAvatar-img').click();
    }  
  
      await page.getByRole('menuitem', { name: 'Logout' }).click();
  });
});
