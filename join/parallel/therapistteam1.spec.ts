import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../../helpers/api';
import { createNewEmail } from '../../helpers/mailsurp';
import { IEmail, readEmails, setEmails } from '../../localemails.js/emails';
import { logPerformanceMetrics } from '../../performanceUtils'; // Import utility
// Annotate entire file as serial.
import { measureActionTime } from '../../localemails.js/const';

let page: Page;
test.setTimeout(900000)
test.beforeAll(async ({ browser }) => {
  const myEmails: IEmail = await readEmails();
  // await page.tracing.start({ path: './performance/trace.json', screenshots: true });
  if (!myEmails?.therapist1?.length) {
    throw new Error(`Therapist1 Email not present returning...`);
  }
  page = await browser.newPage();
  const originalPage = await browser.newPage();
});


test.afterAll(async () => {
  await page.close();
});
test.describe('All Therapist1 Role Test case ', () => {
test('Therapist1 login and  onboarding ', async ({ request }) => {
  const myEmails: IEmail = await readEmails();

  const data = await generatePasswordlessLoginLink({
    email: myEmails.therapist1!,
    request: request,
  });

  // goto page
  await page.goto(data!);
  // Onbaording flows for therapist

  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('Therapist ');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('1');
  await page.getByPlaceholder('Enter phone').click();
  await page.getByPlaceholder('Enter phone').fill('(846) 534-65836');
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();

  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.waitForTimeout(3000);
  await page.getByLabel('Office name').click();
  await page.getByLabel('Office name').fill('Therapist Clinican Settings Locations');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('New area City');
  await page.waitForTimeout(1000);
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('Nev');
  await page.getByText('Nevada').click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Re');
  await page.getByText('Reno').click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('56192');
  await page.getByLabel('Make default location').check();
  await page.getByRole('button', { name: 'Add location' }).nth(1).click();

  await page.getByRole('button', { name: 'Next' }).nth(1).click();

  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('CPT Code').click();
  await page.getByRole('combobox', { name: 'CPT Code' }).fill('96133');
  await page.getByText('96133, Neuropsychological').click();
  await page.getByLabel('Fee *').click();
  await page.getByLabel('Fee *').fill('100');
  await page.getByLabel('Duration *').click();
  await page.getByLabel('Duration *').fill('10');

  await page.getByRole('button', { name: 'Add service' }).nth(1).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();

  await page.getByRole('checkbox').check();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
  await page.waitForTimeout(5000);
// // Performance 1
  try {
    await page.locator('div').filter({ hasText: /^Settings$/ }).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
     await page.getByText('Settings').click();
  }
  //Clinican Settings Flows
  await page.getByText('Clinician settings').click();
  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('Therapist');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('1');
  await page.getByLabel('Address Line').click();
  await page.getByLabel('Address Line').fill('Name');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByRole('tab', { name: 'Clinical' }).click();
  await page.getByLabel('License Type*').click();
  await page.getByRole('combobox', { name: 'License Type*' }).fill('ALC');
  await page.getByRole('option', { name: 'ALC' }).click();
  await page.getByLabel('License State').click();
  await page.getByRole('combobox', { name: 'License State' }).fill('ca');
  await page.getByText('California').click();
  await page.getByLabel('License No.').click();
  await page.getByLabel('License No.').press('CapsLock');
  await page.getByLabel('License No.').fill('QEY355');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByRole('tab', { name: 'Locations' }).click();

  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('Office name').click();
  await page.getByLabel('Office name').fill('Therapist 1 Office Locations');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('New Address added here');
  await page.getByLabel('State').click();
  await page.getByRole('option', { name: 'Illinois' }).click();
  await page.getByLabel('City').click();
  await page.getByText('Aurora').click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('8973');
  await page.getByRole('button', { name: 'Add location' }).nth(1).click();

  //   Privacy Policy
await page.getByText('Website Privacy Policy').click();
await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
await page.getByText('Terms & Conditions').click();
await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();


// Performance 2
  // Create Clients
    await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Create client' }).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Client');
    await page.getByLabel('Email*').click();
    //
    const invitesinbox2 = await createNewEmail();
    await page.getByLabel('Email*').fill(invitesinbox2!);

    await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    await page.waitForTimeout(2000);

// Performance 3
    // Calendar Create Appoinments 24 Appoinments
    await page.getByText('Calendar').first().click();
    await page.getByRole('button', { name: 'Month' }).click();
    // Appoinments
    await page.getByRole('cell', { name: '01' }).first().click();
    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    await page.waitForTimeout(2000);

    await page.getByRole('cell', { name: '03' }).first().click();
    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    await page.waitForTimeout(2000);

    await page.getByRole('cell', { name: '05' }).first().click();
    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    await page.waitForTimeout(2000);

    await page.locator('div').filter({ hasText: /^07$/ }).click();
    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
   await page.waitForTimeout(2000);

    await page.locator('div').filter({ hasText: /^09$/ }).click();
    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
   await page.waitForTimeout(2000);

    await page.locator('div').filter({ hasText: /^11$/ }).click();
    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByRole('option', { name: 'Therapist (T1)' }).click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
   await page.waitForTimeout(2000);

    await page.locator('div').filter({ hasText: /^13$/ }).click();
    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
   await page.waitForTimeout(2000);

    await page.locator('div').filter({ hasText: /^15$/ }).click();
    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
   await page.waitForTimeout(2000);

    await page.locator('div').filter({ hasText: /^16$/ }).click();
    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
   await page.waitForTimeout(2000);

    await page.locator('div').filter({ hasText: /^18$/ }).click();
    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
   await page.waitForTimeout(2000);

    await page.locator('div').filter({ hasText: /^19$/ }).click();
    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Recurring Appointment').check();
    await page.getByLabel('Span').click();
    await page.getByRole('option', { name: 'days' }).click();
    await page.getByLabel('After').click();
    await page.getByLabel('After').fill('5');
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
   await page.waitForTimeout(4000);

    await page.locator('div').filter({ hasText: /^24$/ }).click();
    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Recurring Appointment').check();
    await page.getByLabel('After').click();
    await page.getByLabel('After').fill('8');
    await page.getByLabel('Span').click();
    await page.getByRole('option', { name: 'days' }).click();
    await page.getByLabel('Select location *').click();
    await page.getByRole('option', { name: 'Therapist 1 Office Locations' }).click();
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    await page.waitForTimeout(8000);
// 
// Performance 4
  // Logout 
  try {
    await page.getByRole('img').nth(1).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
    await page.locator('.MuiAvatar-img').click();
  }  

    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.waitForTimeout(5000);
  //   await page.tracing.stop();

  // console.log('Performance metrics saved to trace.json');
});
});

