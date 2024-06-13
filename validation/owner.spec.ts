import { test, type Page, } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createNewEmail } from '../helpers/mailsurp';
import {
  BASE_FRONTEND_URL,
  isRunningOnLocal,
  localBaseUrl,
} from '../localemails.js/const';
import { readEmails, setEmails } from '../localemails.js/emails';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe('All OwnerRole Test case ', () => {

test('Owner login and  onboarding ', async ({ request }) => {
  const inbox = await createNewEmail();

  const data = await generatePasswordlessLoginLink({
    email: inbox!,
    request: request,
  });
  await page.goto(data!);

  // Onboarding Flows for Owner
 
  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('Owner ');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('Team');
  await page.getByPlaceholder('Enter phone').click();
  await page.getByPlaceholder('Enter phone').fill('(846) 534-65833');
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();

// Vadloation check
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
const err = new Error('The message');
console.error(err.message);
// Prints: The message

  await page.getByPlaceholder('Enter your practice name').click();
  await page.getByPlaceholder('Enter your practice name').fill('KanTime Healthcare System ');
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
  await page.getByPlaceholder('Enter your practice name').click();
  await page.getByPlaceholder('Enter your practice name').fill('KanTime Healthcare System ');

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('Office name').click();
  await page.getByLabel('Office name').fill('KanTime Healthcare System ');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('New area City');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('New york');
  await page.getByText('New York').click();
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
 
  await page.getByLabel('').check();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByLabel('').check();
  await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
});
test('Settings Flows', async () => {
    await page
      .locator('div')
      .filter({ hasText: /^Settings$/ })
      .getByRole('img')
      .click();
    //Clinican Settings Flows
    await page.getByText('Clinician settings').click();
    await page.getByText('Practice settings').click();
  await page.getByLabel('Practice Name').click();
  await page.getByLabel('Practice Name').fill('Mind Simple Hospital');
  await page.getByLabel('About').click();
  await page.getByLabel('About').fill('This Nice company change Company info ');
  await page.getByPlaceholder('Enter phone').click();
  await page.getByPlaceholder('Enter phone').fill('(975) 734-53525');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByPlaceholder('Address Line 1').clear();
  await page.getByPlaceholder('Address Line 1').fill('New States');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

   // Team member invites flows ( Therapist role)
   await page.getByText('Team members').first().click();
   await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();

   await page.getByRole('button', { name: 'Next' }).nth(1).click();
   await page.waitForTimeout(4000);
   await page.getByLabel('First Name*').click();
   await page.getByLabel('First Name*').fill('Therapist');
   await page.getByLabel('Last Name*').click();
   await page.getByLabel('Last Name*').fill('1');
   await page.getByLabel('Email*').click();
 
   //
   const Bookinginbox1 = await createNewEmail();
   await page.getByLabel('Email*').fill(Bookinginbox1!);

   await page.getByRole('button', { name: 'Next' }).nth(1).click();
   await page.getByLabel('Therapist').check();
   await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
   await page.waitForTimeout(4000);
   await page.reload();

   await page.getByText('Role settings').click();
await page.getByRole('button', { name: 'Create custom role' }).nth(1).click();
await page .waitForTimeout(5000);
await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
await page.getByLabel('Practice Manager').check();
await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
await page.getByLabel('Role title').click();
await page.getByLabel('Role title').fill('Test Custom');
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page .waitForTimeout(8000);

await page.getByRole('button', { name: 'Create custom role' }).nth(1).click();
await page .waitForTimeout(5000);
await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
await page.getByLabel('Practice Manager').check();
await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
await page.getByLabel('Role title').click();
await page.getByLabel('Role title').fill('Test Custom');
await page.getByLabel('Role title').clear();
await page.getByLabel('Role title').fill('Custom Test');
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page .waitForTimeout(8000);

//   Scheduler Calender 
await page.getByText('Calendar').click();
try {
 await page.locator('div').filter({ hasText: /^Currently accepting appointments$/ }).getByRole('checkbox').click();

} catch (error) {
  console.log('Failed to find first locator, trying second locator');
  await page.locator('#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._acceptingAppointmentsSwitch_ml86x_17 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383').click();
}

await page.getByRole('button', { name: 'Edit' }).nth(1).click();
await page.getByLabel('Monday').check();
await page.getByLabel('Tuesday').check();
await page.getByLabel('Wednesday').check();
await page.getByLabel('Thursday').check();
await page.getByLabel('Friday').check();
await page.getByLabel('Saturday').check();
await page.getByLabel('Sunday').check();
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.locator('p').filter({ hasText: /^Calendar$/ }).click();
await page.getByLabel('Monday').check();

//Booking widget flows
await page.getByText('Booking widget').click();
await page.getByRole('button', { name: 'Generate link' }).nth(1).click();
await page.waitForTimeout(2000);
const page1Promise = page.waitForEvent('popup');
await page
  .locator(
    '#root > div._layout_cqogi_1 > div._content_cqogi_7 > div._bookingWidgetWrapper_4jerd_1 > div._therapistLinks_4jerd_53 > div:nth-child(1) > p')
  .click();
const page1 = await page1Promise;
await page1
  .locator('div')
  .filter({ hasText: /^Psychotherapy, 45 mins- 45 mins$/ })
  .nth(1)
  .click();
await page1
  .locator(
    '#root > div._layout_cqogi_1 > div > div._bookingWidgetWrapper_tlkra_1 > div._bookingWidgetContainer_tlkra_21 > div._bookingContent_tlkra_44 > div:nth-child(2) > div > div._dateTime_142fu_33 > div > div:nth-child(2) > div > div._timeSlotsWrapper_vyf9q_11 div:first-child'
  )
  .click();

  await page1
  .getByRole('button', { name: 'Request appointment' })
  .nth(1)
  .click();

await page1.getByPlaceholder('Enter first name').click();
await page1.getByPlaceholder('Enter first name').fill('James');
await page1.getByPlaceholder('Enter last name').click();
await page1.getByPlaceholder('Enter last name').fill('Willy');
await page1.getByPlaceholder('Enter email').click();
//
const inviteinbox1 = await createNewEmail();
await page1.getByPlaceholder('Enter email').fill(inviteinbox1!);

await page1.getByPlaceholder('Enter phone').click();
await page1.getByPlaceholder('Enter phone').fill('(893) 553-00024');
await page1
  .getByRole('button', { name: 'Request appointment' })
  .nth(1)
  .click();
await page1.waitForTimeout(1000);
await page1.close();

});

});