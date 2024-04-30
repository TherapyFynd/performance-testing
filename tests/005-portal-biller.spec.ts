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
  if (!myEmails?.billerEmail?.length) {
    throw new Error(`billerEmail not present returning...`);
  }
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test('Biller  login and  onboarding ', async ({ request }) => {
  let myEmails: IEmail = await readEmails();
    const data = await generatePasswordlessLoginLink({
      email: myEmails.billerEmail!,
      
      request: request,
    });
    await page.goto(data!);
  
  // Onbaording flows for Practice Manager
  // DP
  await page
  .locator(
    '#root > div._layout_10ldc_1 > div > div._onboardProfile_c4jce_1 > div > div._leftSection_c4jce_71 > div > div._profileContainer_c4jce_91 > div._imagePicker_c4jce_35 > input[type=file]'
  )
  .setInputFiles(path.join(__dirname + '../files/ther_img.jpg'));
await page.getByRole('button', { name: 'Done' }).nth(1).click();

await page.getByPlaceholder('Enter first name').click();
await page.getByPlaceholder('Enter first name').fill('Biller ');
await page.getByPlaceholder('Enter last name').click();
await page.getByPlaceholder('Enter last name').fill('1');
await page.getByPlaceholder('Enter phone').click();
await page.getByPlaceholder('Enter phone').fill('(846) 534-65833');
await page.getByRole('button', { name: 'Continue' }).nth(1).click();
await page.waitForTimeout(2000);
   await page.getByLabel('').check();
   await page.waitForTimeout(1000);
   await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
   await page.waitForTimeout(1000);
   await page.getByLabel('').check();
   await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
   });
   test('Settings Tab', async () => {
    await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
    // Invite Team Member (Therapist 1)
    await page.getByText('Team members').first().click();
    // Billing Tab
  await page.locator('p').filter({ hasText: 'Billing' }).click();
  await page.getByRole('tab', { name: 'Insurance' }).click();
  await page.getByText('Payers').click();
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByRole('combobox', { name: 'Search for insurance payers' }).fill('BOON');
  await page.getByText('BOON-CHAPMAN/AETNA-').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();

//   Privacy Policy
await page.getByText('Website Privacy Policy').click();
await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
await page.getByText('Terms & Conditions').click();
await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
   });
   test('Create Appoinment', async () => {
        // Create Appoinments
        await page
          .locator('div')
          .filter({ hasText: /^Calendar$/ })
          .getByRole('img')
          .click();
          await page.getByRole('button', { name: 'Availability' }).nth(1).click();
          await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._calendarSettings_1fo8k_1 > div > div.primary-b1-bold._subTitle_1fo8k_28 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383 > input').click();
          await page.waitForTimeout(2000);
          await page.getByLabel('Monday').check();
  await page.getByLabel('Tuesday').check();
  await page.getByLabel('Wednesday').check();
  await page.getByLabel('Thursday').check();
  await page.getByLabel('Friday').check();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByText('Terms & Conditions').click();
  await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
  await page.locator('div').filter({ hasText: /^Calendar$/ }).getByRole('img').click();
        await page.getByRole('button', { name: 'Month' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.locator('div').filter({ hasText: /^20$/ }).click();
        await page.getByLabel('Select client profile*').click();
        await page.getByRole('option', { name: 'Rakesh (T1)' }).click();
        await page.getByLabel('Select service *').click();
        await page.getByText('Developmental Testing, ...').click();
        await page.getByPlaceholder('Enter text here').click();
        await page.getByPlaceholder('Enter text here').fill('New every day testing');
        await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
        await page.waitForTimeout(1000);
        // Past Date Appoinments
        await page.getByRole('button', { name: 'Back' }).click();
        await page.getByRole('button', { name: 'Back' }).click();
        await page.getByRole('button', { name: 'Back' }).click();
        await page.locator('div').filter({ hasText: /^17$/ }).click();
        await page.getByLabel('Select client profile*').click();
        await page.getByRole('option', { name: 'Rakesh (T1)' }).click();
        await page.getByLabel('Select service *').click();
        await page.getByText('Developmental Testing, ...').click();
        await page.getByPlaceholder('Enter text here').click();
        await page.getByPlaceholder('Enter text here').fill('New every day testing');
        await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
        // Create Appoinment Button( top Bar)
        // await page.getByRole('button', { name: 'Create' }).nth(1).click();
        await page
          .locator(
            '#root > div._layout_10ldc_1 > div._sideBar_148j7_1 > div._createBtnContainer_148j7_97 > button > button'
          )
          .click();
        await page.getByRole('menuitem', { name: 'Create appointment' }).click();
        await page.getByLabel('Select client profile*').click();
        await page.getByRole('option', { name: 'Rakesh (T1)' }).click();
        await page.getByLabel('Select service *').click();
        await page.getByText('Family psychotherapy...').click();
        await page.getByPlaceholder('Enter text here').click();
        await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
        await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
        await page.waitForTimeout(3000);
      });
      test('Client File', async () => {
        await page
          .locator('div')
          .filter({ hasText: /^Clients$/ })
          .getByRole('img')
          .click();
          await page.getByText('Rakesh Das').click();
          await page.getByTestId('ArrowDropDownIcon').locator('path').click();
          await page.getByRole('heading', { name: 'Rakesh (T1)' }).click();
          await page.waitForTimeout(3000);
          
        // Info and Settings
        await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
        await page.getByLabel('First Name*').click();

        await page.getByLabel('First Name*').fill('Rakesh');
        await page.getByLabel('Last Name*').click();
        await page.getByLabel('Last Name*').fill('Das');
        await page.getByLabel('Pronouns').click();
        await page.getByText('She/They').click();
        await page.getByRole('button', { name: 'Save' }).nth(1).click();
      
        //  Payment tab
        await page.getByRole('tab', { name: 'Payment' }).click();
        await page.getByLabel('Insurance').check();
           // Logic For Fail Locator
    try {
      await page.getByLabel('Client\'s spouse').check();
        
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
      await page.getByText('Other').click();
    }
        await page.getByPlaceholder('MM/DD/YYYY').first().click();
        await page.getByPlaceholder('MM/DD/YYYY').first().fill('01/01/1999');
        await page.getByLabel('Sex').click();
        await page.getByRole('option', { name: 'Male', exact: true }).click();
        await page.getByPlaceholder('Phone').click();
        await page.getByPlaceholder('Phone').fill('(734) 573-25415');
        await page.getByLabel('Address line').click();
        await page.getByLabel('Address line').fill('New City main office');
        await page.getByLabel('State').click();
        await page.getByRole('combobox', { name: 'State' }).fill('Utah');
        await page.getByRole('option', { name: 'Utah' }).click();
        await page.getByLabel('City').click();
        await page.getByRole('combobox', { name: 'City' }).fill('Roy');
        await page.getByRole('option', { name: 'Roy' }).click();
        await page.getByLabel('Zip code').click();
        await page.getByLabel('Zip code').fill('678203');
        await page.getByLabel('Insurance Company').click();
        await page.getByLabel('Insurance Company').fill('Absolute');
        await page.getByText('ABSOLUTE TOTAL CARE-').click();
        await page.getByLabel('Member ID').click();
        await page.getByLabel('Member ID').fill('GHR345');
        await page.getByLabel('Group ID').click();
        await page.getByLabel('Group ID').fill('GGH3');
        await page.getByLabel('Plan ID').click();
        await page.getByLabel('Plan ID').fill('KKH45');
        await page.getByPlaceholder('MM/DD/YYYY').nth(1).click();
        await page.getByPlaceholder('MM/DD/YYYY').nth(1).fill('10/10/2000');
        await page.getByPlaceholder('MM/DD/YYYY').nth(2).click();
        await page.getByPlaceholder('MM/DD/YYYY').nth(2).fill('10/10/2030');
        await page.getByRole('button', { name: 'Save' }).nth(1).click();
      
        // Files tab
        await page.getByRole('tab', { name: 'Files' }).click();
        await page.getByRole('button', { name: 'Request upload' }).nth(1).click();
        await page.getByLabel('Enter file name').click();
        await page.getByLabel('Enter file name').fill('Test Pdf');
        await page.getByRole('button', { name: 'Add' }).nth(1).click();
        await page.getByLabel('Enter file name').nth(1).click();
        await page.getByLabel('Enter file name').nth(1).fill('Test Pdf 2');
        await page.getByRole('button', { name: 'Request' }).nth(1).click();
        await page.locator('div').filter({ hasText: /^Basic InfoIndividual$/ }).getByRole('button').click();
       
        // Diagnosis tab
  await page.getByRole('tab', { name: 'Diagnosis' }).click();
  await page.getByRole('button', { name: 'Add', exact: true }).nth(3).click();
  await page.getByLabel('Code').click();
  await page.getByRole('combobox', { name: 'Code' }).fill('F01A0');
  await page.getByText('F01A0').click();
  await page.getByRole('button', { name: 'Add diagnosis' }).nth(1).click();

  // Create Appoinment
  await page.getByRole('tab', { name: 'Sessions' }).click();
  await page.getByRole('button', { name: 'Add' }).nth(3).click();
  await page
    .getByRole('menuitem', { name: 'Appointment' })
    .getByRole('img')
    .click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(2000);
});
// test('Insurance Tab', async () => {
//     await page
//       .locator('div')
//       .filter({ hasText: /^Insurance$/ })
//       .getByRole('img')
//       .click();
//     await page.getByRole('button', { name: 'Select all' }).nth(1).click();
//     // await page.getByRole('button', { name: 'Deselect all' }).nth(1).click();
//     // await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div:nth-child(3) > div > div._table_126te_33 > table > tbody > tr:nth-child(1) > td:nth-child(1) > span > div > div > label > span > svg > path').click();
//     await page.getByRole('button', { name: 'Auto create claim' }).nth(1).click();
//     await page.getByRole('tab', { name: 'Claims' }).click();
//     // await page.getByRole('cell', { name: 'View' }).first()
//     await page
//       .locator(
//         '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div:nth-child(3) > div > div._table_13e1r_16 > table > tbody > tr:nth-child(1) > td:nth-child(8) > span > button > button > span > span._label_ns5gx_15'
//       )
//       .click();
//     await page.getByRole('button', { name: 'Add note' }).nth(1).click();
//     await page.getByPlaceholder('Start typing here').click();
//     await page
//       .getByPlaceholder('Start typing here')
//       .fill('Hey I am Adding Clients File Details here so check this');
//     await page.getByRole('button', { name: 'Save' }).nth(1).click();
//     await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
//     await page.waitForTimeout(2000);
//     await page
//       .locator('div')
//       .filter({ hasText: /^StatusSubmittedEdit$/ })
//       .getByRole('button')
//       .nth(1)
//       .click();
//     await page.getByLabel('Select status').click();
//     await page.getByRole('option', { name: 'Sent' }).click();
//     await page.getByPlaceholder('Remarks').click();
//     await page
//       .getByPlaceholder('Remarks')
//       .fill('Sent this Payer Details to Change Healthcare');
//     await page.getByRole('button', { name: 'Save' }).nth(1).click();
//     await page
//       .locator('div')
//       .filter({ hasText: /^StatusSentEdit$/ })
//       .getByRole('button')
//       .nth(1)
//       .click();
//     await page.getByLabel('Sent').click();
//     await page.getByRole('option', { name: 'Paid', exact: true }).click();
//     await page.getByPlaceholder('Remarks').click();
//     await page.getByPlaceholder('Remarks').fill('Paid Form Payer Company');
//     await page.getByRole('button', { name: 'Save' }).nth(1).click();
//     await page
//       .locator(
//         '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._header_174vt_7 > span > button > svg > path'
//       )
//       .click();
//   });
  test('DP Update and Logout', async () => {
    // await page.locator('#root > div._header_1uy0f_1 > div > div > p').click();
    await page.locator('div').filter({ hasText: 'Biller' }).nth(3).click();
    await page.getByRole('menuitem', { name: 'Profile' }).click();
    await page
      .locator(
        '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._generalSettingsTab_18vvz_1 > div > div._flexContainer_18vvz_4 > div._userNameDetailsContainer_18vvz_8 > div > div._imagePicker_18vvz_17 > input[type=file]'
      )
      .setInputFiles(path.join(__dirname + '../files/ther_img.jpg'));
    await page.getByRole('button', { name: 'Done' }).nth(1).click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    // await page
    //   .locator('#root > div._header_1uy0f_1 > div > div > p')
    //   .click();
    await page.locator('div').filter({ hasText: 'Biller' }).nth(3).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
  });  