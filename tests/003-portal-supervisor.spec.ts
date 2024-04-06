import { test, type Page } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { MailSlurp } from "mailslurp-client";
import { BASE_BACKEND_URL, isRunningOnLocal, localPort } from '../localemails.js/const';
// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;
const mailslurp = new MailSlurp({ apiKey: "8a2f9dbb1c0c5ebd1694202438d2b4e6a6135b00893638c41fb3fd0b3f4b3a51" });
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test('Supervisor login and onboarding ', async ({request}) => {
        const mailslurp = new MailSlurp({ apiKey: "8a2f9dbb1c0c5ebd1694202438d2b4e6a6135b00893638c41fb3fd0b3f4b3a51" });
        const inbox = await mailslurp.inboxController.createInbox({});
        // console.log(inbox);
        // console.log(inbox.emailAddress);
        const data = await request.post(
            // 'https://leafs-ehr-nest-stage-nmvorvf7ga-as.a.run.app/test/get-passwordless-login-link-by-email',
            `${BASE_BACKEND_URL}/test/get-passwordless-login-link-by-email`,
            {
            headers:{
             
                'Content-Type': 'application/json',
                'x-test-key': `omnipractice_random_a83500678d`,
              },
              data: isRunningOnLocal
              ? { email: inbox.emailAddress, isTestMode: true, localPort: localPort }
              : { email: "762a2727-a943-4821-877d-cbb00773f3ba@mailslurp.net", isTestMode: true },
            },
          ); 
        // console.log(data);
        const c = await data.text();
          await page.goto(c);
          // Onbaording flows for Supervisor
  // await page.getByPlaceholder('Enter first name').click();
  // await page.getByPlaceholder('Enter first name').fill('Supervisor');
  // await page.getByPlaceholder('Enter last name').click();
  // await page.getByPlaceholder('Enter last name').fill('1');
  // await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  // // await page.getByRole('button', { name: 'Next' }).nth(1).click();
  // // await page.getByRole('checkbox').check();
  // // await page.getByRole('button', { name: 'Next' }).nth(1).click();
  // await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
  // await page.waitForTimeout(1000);
  // await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
  // await page.waitForTimeout(4000);
  //       });

  //       test('Settings Tab', async () => {
  // await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
  // // Associate Mangaments
  // await page.getByText('Associate management').click();
  // // // await page.getByRole('button', { name: 'Remove' }).nth(1).click();
  // // // await page.getByRole('button', { name: 'Remove' }).nth(1).click();
  // await page.getByRole('button', { name: 'Add Associate' }).nth(1).click();
  // await page.getByLabel('Select team member').click();
  // await page.getByText('Therapist 1').click();
  // await page.getByRole('button', { name: 'Add' }).nth(1).click();

  // Calender Day start
  // await page.locator('p').filter({ hasText: /^Calendar$/ }).click();
  // // await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._acceptingAppointmentsSwitch_ml86x_17 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.Mui-checked.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.Mui-checked.Mui-checked.css-ink383 > input').click();
  // await page.getByRole('checkbox').check();
  
  // await page.getByLabel('Monday').check();
  // await page.getByLabel('Tuesday').check();
  // await page.getByLabel('Wednesday').check();
  // await page.getByLabel('Thursday').check();
  // await page.getByLabel('Friday').check();
  // await page.getByLabel('Saturday').check();
  // await page.getByLabel('Sunday').check();
  // await page.getByRole('button', { name: 'Save' }).nth(1).click();
  // await page.locator('p').filter({ hasText: /^Calendar$/ }).click();
  // await page.getByLabel('Monday').check();
  // await page.locator('#root > div._layout_10ldc_1 > div._tabSpecificSidebar_148j7_2 > div:nth-child(3) > div._sidebarHeader_148j7_138 > svg > path').click();
  //       });

//   test('Create Appoinment', async () => {
// // Create Appoinments
// await page.locator('div').filter({ hasText: /^Calendar$/ }).getByRole('img').click();
// await page.getByRole('button', { name: 'Month' }).click();
// await page.getByRole('button', { name: 'Next' }).click();
// await page.locator('div').filter({ hasText: /^20$/ }).click();
// await page.getByLabel('Select client profile*').click();
// await page.getByRole('option', { name: 'Rajesh (T1)' }).first().click();
// await page.getByLabel('Select service *').click();
// await page.getByText('Developmental Testing, ...').click();
// await page.getByPlaceholder('Enter text here').click();
// await page.getByPlaceholder('Enter text here').fill('New every day testing');
// await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
// await page.waitForTimeout(1000);
// //Past Date Appoinments
// await page.getByRole('button', { name: 'Back' }).click();
// await page.getByRole('button', { name: 'Back' }).click();
// await page.getByRole('button', { name: 'Back' }).click();
// await page.locator('div').filter({ hasText: /^04$/ }).click();
// await page.getByLabel('Select client profile*').click();
// await page.getByRole('option', { name: 'Rajesh (T1)' }).first().click();
// await page.getByLabel('Select service *').click();
// await page.getByText('Developmental Testing, ...').click();
// await page.getByPlaceholder('Enter text here').click();
// await page.getByPlaceholder('Enter text here').fill('New every day testing');
// await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();

// // Create Appoinment Button( top Bar)
// await page.locator('#root > div._layout_10ldc_1 > div._sideBar_7s8hh_1 > div._createBtnContainer_7s8hh_88 > button > button').click();
// await page.getByRole('menuitem', { name: 'Create appointment' }).click();
// await page.getByLabel('Select client profile*').click();
// await page.getByRole('option', { name: 'Rajesh (T1)' }).first().click();
// await page.getByLabel('Select service *').click();
// await page.getByText('Family psychotherapy...').click();
// await page.getByPlaceholder('Enter text here').click();
// await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
// await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
// await page.waitForTimeout(3000);

//   });

//   test('Client File', async () => {
// // Client file
// await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
// await page.getByText('Rajesh Das').click();

// // Info and Settings
// await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
// await page.getByLabel('First Name*').click();
// await page.getByLabel('First Name*').fill('Rajesh');
// await page.getByLabel('Last Name*').click();
// await page.getByLabel('Last Name*').fill('Das');
// await page.getByLabel('Pronouns').click();
// await page.getByText('She/They').click();
// await page.getByRole('button', { name: 'Save' }).nth(1).click();
// await page.locator('div').filter({ hasText: /^Basic InfoIndividual$/ }).getByRole('button').click();
//  // Create Appoinment
//  await page.getByRole('button', { name: 'Add' }).nth(3).click();
//  await page
//    .getByRole('menuitem', { name: 'Appointment' })
//    .getByRole('img')
//    .click();
//  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
//  await page.waitForTimeout(2000);


   });

test('Supervision Flow', async () => {
// Supervision Flows
  await page.locator('div').filter({ hasText: /^Supervision$/ }).getByRole('img').click();
  await page.getByText('Therapist Automation Testing').first().click();
  await page.getByRole('button', { name: 'Add signature' }).nth(1).click();
  await page.getByPlaceholder('Sign').click();
  await page.getByPlaceholder('Sign').fill('Supervisor signed');
  await page.getByRole('button', { name: 'Sign' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Therapist Automation Testing$/ }).getByRole('button').click();
  // await page.getByRole('tab', { name: 'Signed' }).click();
  // await page.getByText('Therapist Automation TestingMar').first().click();
  // await page.locator('div').filter({ hasText: /^Therapist Automation Testing$/ }).getByRole('button').click();

  });

  test('DP Update and Logout', async () => {
    await page.locator('div').filter({ hasText: 'Supervisor' }).nth(3).click();
await page.getByRole('menuitem', { name: 'Profile' }).click();
await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._generalSettingsTab_18vvz_1 > div > div._flexContainer_18vvz_4 > div._userNameDetailsContainer_18vvz_8 > div > div._imagePicker_18vvz_17 > input[type=file]').setInputFiles("C:/Users/Rajesh/Downloads/therapist.jpg");
await page.getByRole('button', { name: 'Done' }).nth(1).click();
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.locator('div').filter({ hasText: 'Supervisor' }).nth(3).click();
await page.getByRole('menuitem', { name: 'Logout' }).click();

  });


