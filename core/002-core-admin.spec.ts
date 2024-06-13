import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createNewEmail } from '../helpers/mailsurp';
import { IEmail, readEmails } from '../localemails.js/emails';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  const myEmails: IEmail = await readEmails();

  if (!myEmails?.intakeAdminEmail?.length) {
    throw new Error(`IntakeAdminEmail not present returning...`);
  }
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe('All AdminRole Test case ', () => {
test('Intake admin login and  onboarding ', async ({ request }) => {
  const myEmails: IEmail = await readEmails();

  const data = await generatePasswordlessLoginLink({
    email: myEmails?.intakeAdminEmail!,
    request: request,
  });

  // goto page
  await page.goto(data!);

// Onbaording flows for IntakeAdmin role
await page.getByPlaceholder('Enter first name').click();
await page.getByPlaceholder('Enter first name').fill('Intake');
await page.getByPlaceholder('Enter last name').click();
await page.getByPlaceholder('Enter last name').fill('Admin');
await page.getByPlaceholder('Enter phone').click();
await page.getByPlaceholder('Enter phone').fill('(846) 534-65836');
await page.getByRole('button', { name: 'Continue' }).nth(1).click();
await page.waitForTimeout(2000);
 await page.getByLabel('').check();
 await page.waitForTimeout(1000);
 await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
 await page.waitForTimeout(1000);
 await page.getByLabel('').check();
 await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
   });
test('Intake tab', async () => {
  await page.locator('div').filter({ hasText: /^Referrals$/ }).getByRole('img').click();
  await page.getByRole('button', { name: 'Create Lead' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('New');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Lead');
  await page.getByLabel('Email').click();
  //
  const invitesinbox3 = await createNewEmail();
  await page.getByLabel('Email').fill(invitesinbox3!);

  await page.getByLabel('Seeking treatment for').click();
  await page.getByRole('option', { name: 'Cancer' }).click();
  await page.getByLabel('Note').click();
  await page.getByLabel('Note').fill('I am Very sick');
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.waitForTimeout(2000);
  // Filter add
  await page.getByRole('button', { name: 'Today' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'All Time' }).click();
  await page.waitForTimeout(2000);
  // Serach Lead
  await page.getByPlaceholder('Search by name').click();
  await page.getByPlaceholder('Search by name').fill('New Lead');
  await page.getByPlaceholder('Search by name').press('Enter');
  await page.waitForTimeout(2000);
  await page.locator('.MuiInputAdornment-root > .MuiButtonBase-root').click();
  await page.getByPlaceholder('Search by name').click();
  await page.getByPlaceholder('Search by name').press('Enter');
  await page.waitForTimeout(2000);
  // Lead File
  await page.getByRole('cell', { name: 'New Lead' }).click();
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
  await page.locator('span').filter({ hasText: 'Current Status :Inquiry' }).locator('div').nth(2).click();
  await page.getByRole('option', { name: 'Initial consultation call' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Assign to$/ }).nth(1).click();
  await page.getByLabel('Choose team member').click();
  await page.getByRole('option', { name: 'Owner Team' }).click();
  await page.getByPlaceholder('Optional note for team member').click();
  await page.getByPlaceholder('Optional note for team member').fill('Owner Assigned to u check this');
  await page.getByRole('button', { name: 'Assign' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Send inquiry form').click();
  await page.getByRole('button', { name: 'Send' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Send therapist scheduling link').click();
  await page.getByLabel('Select Therapist').click();
  await page.getByRole('option', { name: 'Owner Team' }).click();
  await page.getByRole('button', { name: 'Send' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Filters \(01\)$/ }).getByRole('button').nth(2).click();
  await page.waitForTimeout(1000);

// Second Lead Insurance Eligiability
  await page.getByRole('button', { name: 'Create Lead' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Alfred');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Arnoldson');
  await page.getByLabel('Email').click();
  //
  const invitesinbox4 = await createNewEmail();
  await page.getByLabel('Email').fill(invitesinbox4!);

  await page.getByLabel('Seeking treatment for').click();
  await page.getByRole('option', { name: 'Cancer' }).click();
  await page.getByLabel('Note').click();
  await page.getByLabel('Note').fill('I am Very sick');
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Search by name').click();
  await page.getByPlaceholder('Search by name').fill('Alfred');
  await page.getByPlaceholder('Search by name').press('Enter');
  await page.waitForTimeout(2000);

  await page.getByRole('cell', { name: 'Alfred Arnoldson' }).click();
  await page.getByRole('tab', { name: 'Basic Information' }).click();
  await page.getByLabel('Sex').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByPlaceholder('MM/DD/YYYY').click();
  await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/2000');
  
  await page.getByLabel('Member ID').click();
  await page.getByLabel('Member ID').fill('MEDICAID');
  await page.waitForTimeout(3000);
  await page.getByLabel('Name on Card').click();
  await page.getByLabel('Name on Card').fill('Rajesh');
  await page.waitForTimeout(2000);
  await page.getByLabel('Payer ID').click();
  await page.getByLabel('Payer ID').fill('BDJSB546');
  await page.waitForTimeout(1000);
  await page.getByLabel('Insurance Company').click();
  await page.getByRole('combobox', { name: 'Insurance Company' }).fill('MEM');
  await page.getByText('Maine Medicaid- MEMCD').click();
  await page.getByLabel('Member ID').click();
  await page.getByLabel('Member ID').fill('MEDICAID')
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(6000);
  await page.locator('span').filter({ hasText: 'Current Status :Inquiry' }).locator('div').nth(2).click();
  await page.getByRole('option', { name: 'Session scheduled' }).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Assign to$/ }).nth(1).click();
  await page.getByLabel('Choose team member').click();
  await page.getByRole('option', { name: 'Owner Team' }).click();
  await page.getByPlaceholder('Optional note for team member').click();
  await page.getByPlaceholder('Optional note for team member').fill('Owner Assigned to u check this');
  await page.getByRole('button', { name: 'Assign' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Send inquiry form').click();
  await page.getByRole('button', { name: 'Send' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Send therapist scheduling link').click();
  await page.getByLabel('Select Therapist').click();
  await page.getByRole('option', { name: 'Owner Team' }).click();
  await page.getByRole('button', { name: 'Send' }).nth(1).click();

  await page.getByRole('tab', { name: 'Insurance' }).click();
  await page.getByRole('button', { name: 'Verify Benefits' }).nth(1).click();
  await page.waitForTimeout(8000);
  await page.getByRole('tab', { name: 'Attachments' }).click();
  await page.locator('div').filter({ hasText: /^Filters \(01\)$/ }).getByRole('button').nth(2).click();

  await page.getByPlaceholder('Search by name').click();
  await page.getByPlaceholder('Search by name').fill('Alfred');
  await page.getByPlaceholder('Search by name').press('Enter');
  await page.waitForTimeout(2000);
  await page.getByLabel('Open lead in new tab').click();
  // await page.waitForTimeout(1000);
  const page1Promise  = page.waitForEvent('popup');
  const page1 = await page1Promise;
  await page1.getByRole('tab', { name: 'Basic Information' }).click();
  await page1.close();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Search by name').click();
  await page.getByPlaceholder('Search by name').fill('Alfred');
  await page.getByPlaceholder('Search by name').press('Enter');
  await page.waitForTimeout(2000);
  await page.getByLabel('Add as client').click();
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
  await page.waitForTimeout(4000);
});
test('DP Update and Logout', async () => {
  
  try {
    await page.locator('.MuiAvatar-img').click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
    await page.getByRole('img').nth(1).click();
  }
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});
});