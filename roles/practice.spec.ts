import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createNewEmail } from '../helpers/mailsurp';
import {
  BASE_FRONTEND_URL,
  isRunningOnLocal,
  localBaseUrl,
} from '../localemails.js/const';
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

test('Owner login and  onboarding ', async ({ request }) => {
  const inbox = await createNewEmail();

  const data = await generatePasswordlessLoginLink({
    email: inbox!,
    request: request,
  });
  await page.goto(data!);
// Onbaording flows for Practice Manager
await page.getByPlaceholder('Enter first name').click();
await page.getByPlaceholder('Enter first name').fill('Supervisor');
await page.getByPlaceholder('Enter last name').click();
await page.getByPlaceholder('Enter last name').fill('1');
await page.getByRole('button', { name: 'Continue' }).nth(1).click();
await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
await page.waitForTimeout(1000);
await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
await page.waitForTimeout(4000);
      });
      test('Settings Tab', async () => {
        await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
        // Invite Team Member 
        await page.getByText('Team members').first().click();
        await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('1');
  await page.getByLabel('Email*').click();

  //
  const Bookinginbox1 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox1!);
  myEmails.therapistEmail = Bookinginbox1!;
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();
// Simple Practice Imports codes
await page.getByText('Simple practice import').click();


// Practice Settings code
await page.getByText('Practice settings').click();
await page.getByLabel('Practice Name').click();
await page.getByLabel('Practice Name').fill('Mind Simple Hospital');
await page.getByLabel('About').click();
await page.getByLabel('About').fill('This Nice company');
await page.getByPlaceholder('Enter phone').click();
await page.getByPlaceholder('Enter phone').fill('(975) 734-53565');
await page.getByRole('button', { name: 'Save' }).nth(1).click();
// Role Managment Flows
await page.getByText('Role settings').click();
await page.getByRole('button', { name: 'Create custom role' }).nth(1).click();
  await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
  await page.getByLabel('Therapist', { exact: true }).check();
  await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Custom Role 1$/ }).getByRole('button').click();
  await page.getByLabel('Referrals', { exact: true }).check();
  await page.getByLabel('Reports', { exact: true }).check();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();
//   Scheduler Calender 
  await page.getByText('Calendar').click();
  await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._acceptingAppointmentsSwitch_ml86x_17 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383').click();
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();
  await page.getByLabel('Monday').check();
  await page.getByLabel('Tuesday').check();
  await page.getByLabel('Wednesday').check();
  await page.getByLabel('Thursday').check();
  await page.getByLabel('Friday').check();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('p').filter({ hasText: /^Calendar$/ }).click();
  await page.getByLabel('Monday').check();
  await page.locator('#root > div._layout_10ldc_1 > div._tabSpecificSidebar_148j7_2 > div:nth-child(3) > div._sidebarHeader_148j7_138 > svg > path').click();
// Billing Tab
await page.locator('p').filter({ hasText: 'Billing' }).click();
await page.getByRole('tab', { name: 'Insurance' }).click();
  await page.getByText('Payers').click();
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByRole('combobox', { name: 'Search for insurance payers' }).fill('Allways');
  await page.getByText('AllWays Health Partners -').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
//   Add referal Team member settings
await page.getByText('Team members').nth(1).click();
  await page.getByRole('row', { name: 'Practice Manager' }).getByRole('img').nth(1).click();
  await page.getByLabel('Select Specializations').click();
  await page.getByRole('combobox', { name: 'Select Specializations' }).fill('Anxi');
  await page.getByRole('option', { name: 'Anxiety', exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByRole('tab', { name: 'Payment Methods' }).click();
  await page.getByLabel('Select accepted payment').click();
  await page.getByRole('combobox', { name: 'Select accepted payment' }).fill('allway');
  await page.getByText('AllWays Health Partners -').click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Practice ManagerSave$/ }).getByRole('button').first().click();
  await page.getByRole('tab', { name: 'Email Imports' }).click();
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();
  await page.goto(
    isRunningOnLocal
      ? `${localBaseUrl}/settings/intake-team-members/edit/email-imports`
      : `${BASE_FRONTEND_URL}/settings/intake-team-members/edit/email-imports`
  );
  await page
    .locator('._form_ekpvv_1 > .MuiButtonBase-root > .btn-filled-default')
    .first()
    .click();
  
    await page.getByRole('textbox').first().click();
    await page.getByRole('textbox').first().fill('testtherapyden+1@gmail.com');
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('testpsychtoday+1@gmail.com');
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('websitetest1@gmail.com');
    await page.getByRole('textbox').nth(3).click();
    await page.getByRole('textbox').nth(3).fill('testother@ho.com');
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.locator('div').filter({ hasText: /^Mails to import$/ }).getByRole('button').click();
    await page.waitForTimeout(1000);
    // Practice Emails Imports
    await page.getByText('Practice Email Imports').click();
  await page.getByRole('button', { name: 'Add New' }).nth(1).click();
  await page.getByLabel('Email Address').click();
  await page.getByLabel('Email Address').fill('testemailse@gmail.com');
  await page.getByLabel('Choose account type').click();
  await page.getByRole('option', { name: 'Google' }).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByRole('button', { name: 'Add New' }).nth(1).click();
  await page.getByLabel('Email Address').click();
  await page.getByLabel('Email Address').fill('testmanou@outlook.com');
  await page.getByLabel('Choose account type').click();
  await page.getByRole('option', { name: 'Outlook' }).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
//   Privacy Policy
await page.getByText('Website Privacy Policy').click();
  await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
  await page.getByText('Terms & Conditions').click();
  await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();

});
test('Forms Tab', async () => {
    await page
      .locator('div')
      .filter({ hasText: /^Documents$/ })
      .getByRole('img')
      .click();
    await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  
    // // Questionaries Form Code
    await page.getByText('Questionnaire').click();
    await page.getByPlaceholder('type here').click();
    await page.getByPlaceholder('type here').fill('Practice Automation Forms');
    await page.getByRole('button', { name: 'Done' }).nth(1).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page.getByPlaceholder('Please enter a question').fill('Gender?');
    await page
      .getByRole('button', { name: '1 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page
      .getByRole('button', { name: 'Single choice', exact: true })
      .click();
    await page.getByRole('option', { name: 'Short answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Name of Client?');
    await page.getByLabel('Mandatory').check();
    await page
      .getByRole('button', { name: '2 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Long answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Name of Client and Tell Your Health Conditions?');
    await page
      .getByRole('button', { name: '3 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Date' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Client Date Of Birth?');
    await page.getByLabel('Mandatory').uncheck();
    await page
      .getByRole('button', { name: '4 Please enter a question' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'E-signature' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Please Sign Your Sing?');
    await page.getByLabel('Mandatory').check();
    await page.getByRole('button', { name: 'Preview' }).nth(1).click();
    await page.getByRole('button').first().click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
  
    await page
      .locator(
        '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path'
      )
      .click();
    await page.getByRole('menuitem', { name: 'Preview' }).click();
    await page.locator('.MuiButtonBase-root').first().click();
  
    await page
      .locator(
        '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path'
      )
      .click();
    await page.getByRole('menuitem', { name: 'Rename' }).click();
    await page.getByPlaceholder('type here').clear();
    await page.getByPlaceholder('type here').fill('Practice Automation Forms');
    await page.reload();
    await page.waitForTimeout(1000);
    // await page.getByRole('button', { name: 'Rename' }).nth(1).click();
  
    await page
      .locator(
        '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path'
      )
      .click();
    await page.getByRole('menuitem', { name: 'Edit' }).click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.getByTestId('ArrowBackRoundedIcon').click();
    await page.getByRole('button', { name: 'Create new' }).nth(1).click();
    // // Consent Form
    await page.getByText('Consent form', { exact: true }).click();
    await page.getByPlaceholder('type here').click();
    await page.getByPlaceholder('type here').fill('Practice Consent Automation');
    await page.getByRole('button', { name: 'Done' }).nth(1).click();
    await page.locator('pre').getByRole('paragraph').click();
    await page.locator('pre div').first().fill('Here I am Writing Praragraph?');
    // Add Pdf code
    await page
      .locator(
        '#root > div > div > div._formContainer_1srfm_1 > div > div._editor_1srfm_16 > input[type=file]'
      )
      .setInputFiles(path.join(__dirname + '../files/dummy.pdf'));
    await page.getByLabel('Add Provider signature').check();
    await page.getByRole('button', { name: 'Preview' }).nth(1).click();
    await page.getByRole('button').click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.getByTestId('ArrowBackRoundedIcon').click();
    // // Progress Note
    await page.getByRole('button', { name: 'Create new' }).nth(1).click();
    await page.getByText('Progress note', { exact: true }).click();
    await page.getByPlaceholder('type here').click();
    await page.getByPlaceholder('type here').fill('Practice Automation Testing');
    await page.getByRole('button', { name: 'Done' }).nth(1).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('what is Your Gender?');
    await page
      .getByRole('button', { name: '1 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page
      .getByRole('button', { name: 'Single choice', exact: true })
      .click();
    await page.getByRole('option', { name: 'Short answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Name of Client?');
    await page.getByLabel('Mandatory').check();
    await page
      .getByRole('button', { name: '2 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Long answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Name of Client and Tell your Self?');
    await page
      .getByRole('button', { name: '3 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Date' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Client date of Brithday?');
    await page
      .getByRole('button', { name: '4 Please enter a question' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Multiple choice' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Client Symptoms?');
    await page
      .getByRole('button', { name: '5 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page
      .getByRole('button', { name: 'Multiple choice', exact: true })
      .click();
    await page.getByRole('option', { name: 'CPT code' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Client CPT code?');
    await page
      .getByRole('button', { name: '6 Please enter a question CPT' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Diagnosis code' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Client Diagnosis Code?');
    await page
      .getByRole('button', { name: '7 Please enter a question' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'E-signature' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Please Sign here?');
    await page.getByRole('button', { name: 'Preview' }).nth(1).click();
    await page.getByRole('button').first().click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    // await page.waitForTimeout(1000);
    await page
      .locator(
        '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._formsList_faptv_1 > div._header_faptv_4 > div > div > svg > path'
      )
      .click();
    // await page.getByTestId('ArrowBackRoundedIcon').click();
    // // Treatment plan
    await page.getByRole('button', { name: 'Create new' }).nth(1).click();
    await page.getByText('Treatment plan', { exact: true }).click();
    await page.getByPlaceholder('type here').click();
    await page.getByPlaceholder('type here').fill('Practice Automation Treatement Plan');
    await page.getByRole('button', { name: 'Done' }).nth(1).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your Gender?');
    await page
      .getByRole('button', { name: '1 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page
      .getByRole('button', { name: 'Single choice', exact: true })
      .click();
    await page.getByRole('option', { name: 'Short answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your name?');
    await page.getByLabel('Mandatory').check();
    await page
      .getByRole('button', { name: '2 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Long answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your Health Conditions?');
    await page
      .getByRole('button', { name: '3 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Date' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your Date of Birthday?');
    await page
      .getByRole('button', { name: '4 Please enter a question' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Multiple choice' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your Health Conditions?');
    await page.getByLabel('Mandatory').uncheck();
    await page
      .getByRole('button', { name: '5 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page
      .getByRole('button', { name: 'Multiple choice', exact: true })
      .click();
    await page.getByRole('option', { name: 'CPT code' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your CPT code?');
    await page.getByLabel('Mandatory').check();
    await page
      .getByRole('button', { name: '6 Please enter a question CPT' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Diagnosis code' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your Diagnosis code?');
    await page
      .getByRole('button', { name: '7 Please enter a question' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'E-signature' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your Sign?');
    await page.getByRole('button', { name: 'Preview' }).nth(1).click();
    await page.getByRole('button').first().click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.getByTestId('ArrowBackRoundedIcon').click();
    // // Assessment form Code
    await page.getByRole('button', { name: 'Create new' }).nth(1).click();
    await page.getByText('Assesment').click();
    await page.getByPlaceholder('type here').click();
    await page.getByPlaceholder('type here').fill('Practice Automation Assesment Form');
    await page.getByRole('button', { name: 'Done' }).nth(1).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is Your Gender?');
    await page
      .getByRole('button', { name: '1 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page
      .getByRole('button', { name: 'Single choice', exact: true })
      .click();
    await page.getByRole('option', { name: 'Short answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is Your Name?');
    await page.getByLabel('Mandatory').check();
    await page
      .getByRole('button', { name: '2 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Long answer' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is Your Health Conditions?');
    await page
      .getByRole('button', { name: '3 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Multiple choice' }).click();
    await page.getByLabel('Mandatory').uncheck();
    await page
      .getByRole('button', { name: '4 Please enter a question' })
      .getByRole('button')
      .nth(2)
      .click();
    await page
      .getByRole('button', { name: 'Multiple choice', exact: true })
      .click();
    await page.getByRole('option', { name: 'Date' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is Your Health Cerificate Date?');
    await page.getByLabel('Mandatory').check();
    await page
      .getByRole('button', { name: '5 Please enter a question' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'CPT code' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is Your CPT code?');
    await page
      .getByRole('button', { name: '6 Please enter a question CPT' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Diagnosis code' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is Your Diagosis code?');
    await page
      .getByRole('button', { name: '7 Please enter a question' })
      .getByRole('button')
      .nth(3)
      .click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'E-signature' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is Your Sign Here?');
    await page.getByRole('button', { name: 'Preview' }).nth(1).click();
    await page.getByRole('button').first().click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.getByTestId('ArrowBackRoundedIcon').click();
    //  Intake Pacakges
    await page.getByRole('button', { name: 'My intake packet' }).nth(1).click();
    await page.getByRole('button', { name: 'Add new' }).nth(1).click();
    await page.getByRole('tab', { name: 'My Forms' }).click();
    await page.getByLabel('Select forms').click();
    await page
      .getByRole('combobox', { name: 'Select forms' })
      .fill('Practice Automation Forms');
    await page.getByRole('option', { name: 'Practice Automation Forms' }).click();
    await page.getByRole('button', { name: 'Add' }).nth(1).click();
    await page.waitForTimeout(1000);
    await page.reload();
    await page.waitForTimeout(2000);
  
    await page.getByRole('tab', { name: 'Minor' }).click();
    await page.getByRole('button', { name: 'Add new' }).nth(1).click();
    await page.getByRole('tab', { name: 'My Forms' }).click();
    await page.getByLabel('Select forms').click();
    await page
      .getByRole('combobox', { name: 'Select forms' })
      .fill('Practice Automation Forms');
    await page.getByRole('option', { name: 'Practice Automation Forms' }).click();
    await page.getByRole('button', { name: 'Add' }).nth(1).click();
    await page.waitForTimeout(1000);
    await page.reload();
    await page.waitForTimeout(2000);
  
    await page.getByRole('tab', { name: 'Couple' }).click();
    await page.getByRole('button', { name: 'Add new' }).nth(1).click();
    await page.getByRole('tab', { name: 'My Forms' }).click();
    await page.getByLabel('Select forms').click();
    await page
      .getByRole('combobox', { name: 'Select forms' })
      .fill('Practice Automation Forms');
    await page.getByRole('option', { name: 'Practice Automation Forms' }).click();
    await page.getByRole('button', { name: 'Add' }).nth(1).click();
    await page.waitForTimeout(1000);
    await page.reload();
    await page.waitForTimeout(2000);
    // await page.getByTestId('ArrowBackRoundedIcon').click();
    await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();
    await page
      .locator('div')
      .filter({ hasText: /^Settings$/ })
      .getByRole('img')
      .click();
  });
  test('Create Appoinment', async () => {
    // Create Appoinments
    await page
      .locator('div')
      .filter({ hasText: /^Calendar$/ })
      .getByRole('img')
      .click();
    await page.getByRole('button', { name: 'Month' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('div').filter({ hasText: /^20$/ }).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByRole('option', { name: 'Shiva & Venkatesh (T1)' }).first().click();
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
    await page.getByRole('option', { name: 'Shiva & Venkatesh (T1)' }).first().click();
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
    await page.getByRole('option', { name: 'Shiva & Venkatesh (T1)' }).first().click();
    await page.getByLabel('Select service *').click();
    await page.getByText('Family psychotherapy...').click();
    await page.getByPlaceholder('Enter text here').click();
    await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    await page.waitForTimeout(3000);
  });
  test('Client File', async () => {
    await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
    await page.getByText('Shiva Kumar').click();
    await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Shiva');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Kumar');
  await page.getByLabel('Pronouns').click();
  await page.getByRole('option', { name: 'He/Him' }).click();
  await page.getByPlaceholder('MM/DD/YYYY').click();
  await page.getByPlaceholder('MM/DD/YYYY').fill('10/10/1999');
  await page.getByLabel('Phone Number').click();
  await page.getByLabel('Phone Number').fill('(745) 273-54242');
  await page.getByLabel('First Name', { exact: true }).click();
  await page.getByLabel('First Name', { exact: true }).fill('Test');
  await page.getByLabel('Last Name', { exact: true }).click();
  await page.getByLabel('Last Name', { exact: true }).fill('Man');
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('testman@hd.com');
  await page.getByLabel('Phone', { exact: true }).click();
  await page.getByLabel('Phone', { exact: true }).fill('(726) 328-76485');
  await page.getByLabel('Relationship to client').click();
  await page.getByLabel('Relationship to client').fill('Brother');
  await page.getByLabel('Address Line').click();
  await page.getByLabel('Address Line').fill('Test Address');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('new');
  await page.getByRole('option', { name: 'New York' }).click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('free');
  await page.getByRole('option', { name: 'Freeport' }).click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('561202');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
//   Venkatesh add
  await page.getByText('Venkatesh Das').click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Venkatesh');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Das');
await page.getByLabel('Pronouns').click();
await page.getByRole('option', { name: 'He/Him' }).click();
await page.getByPlaceholder('MM/DD/YYYY').click();
await page.getByPlaceholder('MM/DD/YYYY').fill('10/10/1999');
await page.getByLabel('Phone Number').click();
await page.getByLabel('Phone Number').fill('(745) 273-54242');
await page.getByLabel('First Name', { exact: true }).click();
await page.getByLabel('First Name', { exact: true }).fill('Test');
await page.getByLabel('Last Name', { exact: true }).click();
await page.getByLabel('Last Name', { exact: true }).fill('Man');
await page.getByLabel('Email', { exact: true }).click();
await page.getByLabel('Email', { exact: true }).fill('testman@hd.com');
await page.getByLabel('Phone', { exact: true }).click();
await page.getByLabel('Phone', { exact: true }).fill('(726) 328-76485');
await page.getByLabel('Relationship to client').click();
await page.getByLabel('Relationship to client').fill('Brother');
await page.getByLabel('Address Line').click();
await page.getByLabel('Address Line').fill('Test Address');
await page.getByLabel('State').click();
await page.getByRole('combobox', { name: 'State' }).fill('new');
await page.getByRole('option', { name: 'New York' }).click();
await page.getByLabel('City').click();
await page.getByRole('combobox', { name: 'City' }).fill('free');
await page.getByRole('option', { name: 'Freeport' }).click();
await page.getByPlaceholder('Zip code').click();
await page.getByPlaceholder('Zip code').fill('561202');
await page.getByRole('button', { name: 'Save' }).nth(1).click();

//  Payment tab
await page.getByRole('tab', { name: 'Payment' }).click();
await page.getByLabel('Insurance').check();
await page.getByLabel('Client itself').check();
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
 await page
   .locator('div')
   .filter({ hasText: /^Basic InfoIndividual$/ })
   .getByRole('button')
   .click();

   // Forms Section
  await page.getByRole('tab', { name: 'Forms' }).click();
  await page.getByRole('button', { name: 'Send forms' }).nth(1).click();
  await page.getByRole('tab', { name: 'Personal' }).click();
  await page.getByText('Questionnaires').click();
  await page.getByLabel('Select Forms to send').click();
  await page
    .getByRole('combobox', { name: 'Select Forms to send' })
    .fill('Practice Automation');
  await page.getByRole('option', { name: 'Practice Automation Forms' }).click();
  await page.getByRole('combobox', { name: 'Select Forms to send' }).click();
  await page.getByRole('button', { name: 'Send' }).nth(1).click();

  //   Notes Section
  await page.getByRole('tab', { name: 'Notes' }).click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByRole('tab', { name: 'Personal' }).click();
  await page.getByText('Progress notes').click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('Practice Automation');
  await page
    .getByRole('dialog')
    .locator('div')
    .filter({ hasText: /^Practice Automation Testing$/ })
    .click();
  await page.getByPlaceholder('Enter your response here').first().click();
  await page
    .getByPlaceholder('Enter your response here')
    .first()
    .fill('Rajesh');
  await page.getByPlaceholder('Enter your response here').nth(1).click();
  await page.getByPlaceholder('Enter your response here').nth(1).fill('Good');
  await page.getByPlaceholder('MM/DD/YYYY').click();
  await page.getByPlaceholder('MM/DD/YYYY').fill('10/09/1999');
  await page.getByRole('checkbox', { name: 'option1' }).check();
  await page
    .locator('div')
    .filter({
      hasText:
        /^6Client CPT code\? \*Enter your response hereEnter your response here$/,
    })
    .getByLabel('Enter your response here')
    .click();
  await page
    .locator('div')
    .filter({
      hasText:
        /^6Client CPT code\? \*Enter your response hereEnter your response here$/,
    })
    .getByLabel('Enter your response here')
    .fill('90791');
  await page.getByRole('option', { name: '90791 - Psychiatric' }).click();
  await page
    .locator('div')
    .filter({
      hasText:
        /^90791 - Psychiatric diagnostic evaluationEnter your response here$/,
    })
    .getByLabel('Enter your response here')
    .click();
  await page
    .locator('div')
    .filter({ hasText: /^Enter your response here$/ })
    .getByLabel('Enter your response here')
    .click();
  await page
    .locator('div')
    .filter({ hasText: /^Enter your response here$/ })
    .getByLabel('Enter your response here')
    .fill('F05');
  await page
    .getByRole('option', { name: 'F05 - Delirium due to known' })
    .click();
  await page
    .locator('div')
    .filter({
      hasText:
        /^F05 - Delirium due to known physiological conditionEnter your response here$/,
    })
    .getByLabel('Enter your response here')
    .click();
  await page
    .locator('div')
    .filter({ hasText: /^Sign here$/ })
    .nth(2)
    .click();
  await page.getByPlaceholder('Please type your name here').click();
  await page.getByPlaceholder('Please type your name here').fill('Rajesh');
  await page.getByRole('button', { name: 'Sign' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

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
test('Insurance Tab', async () => {
    await page
      .locator('div')
      .filter({ hasText: /^Insurance$/ })
      .getByRole('img')
      .click();
    await page.getByRole('button', { name: 'Select all' }).nth(1).click();
    // await page.getByRole('button', { name: 'Deselect all' }).nth(1).click();
    // await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div:nth-child(3) > div > div._table_126te_33 > table > tbody > tr:nth-child(1) > td:nth-child(1) > span > div > div > label > span > svg > path').click();
    await page.getByRole('button', { name: 'Auto create claim' }).nth(1).click();
    await page.getByRole('tab', { name: 'Claims' }).click();
    // await page.getByRole('cell', { name: 'View' }).first()
    await page
      .locator(
        '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div:nth-child(3) > div > div._table_13e1r_16 > table > tbody > tr:nth-child(1) > td:nth-child(8) > span > button > button > span > span._label_ns5gx_15'
      )
      .click();
    await page.getByRole('button', { name: 'Add note' }).nth(1).click();
    await page.getByPlaceholder('Start typing here').click();
    await page
      .getByPlaceholder('Start typing here')
      .fill('Hey I am Adding Clients File Details here so check this');
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
    await page.waitForTimeout(2000);
    await page
      .locator('div')
      .filter({ hasText: /^StatusSubmittedEdit$/ })
      .getByRole('button')
      .nth(1)
      .click();
    await page.getByLabel('Select status').click();
    await page.getByRole('option', { name: 'Sent' }).click();
    await page.getByPlaceholder('Remarks').click();
    await page
      .getByPlaceholder('Remarks')
      .fill('Sent this Payer Details to Change Healthcare');
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page
      .locator('div')
      .filter({ hasText: /^StatusSentEdit$/ })
      .getByRole('button')
      .nth(1)
      .click();
    await page.getByLabel('Sent').click();
    await page.getByRole('option', { name: 'Paid', exact: true }).click();
    await page.getByPlaceholder('Remarks').click();
    await page.getByPlaceholder('Remarks').fill('Paid Form Payer Company');
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page
      .locator(
        '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._header_174vt_7 > span > button > svg > path'
      )
      .click();
  });
  test('Message Tab', async () => {
//   Messages Box
await page.locator('div').filter({ hasText: /^Messages$/ }).getByRole('img').click();
  await page.getByTestId('KeyboardArrowDownIcon').click();
  await page.getByRole('menuitem', { name: 'Team' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('Thera');
  await page.getByText('Therapist 1').click();
  await page.getByTestId('message-input').fill('Hi man');

  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('Owner');
  await page.getByText('Owner Team').click();
  await page.getByTestId('message-input').fill('Hi man');
  await page.getByRole('img', { name: 'logo' }).click();
});
test('DP Update and Logout', async () => {
    // await page.locator('#root > div._header_1uy0f_1 > div > div > p').click();
    await page.locator('div').filter({ hasText: 'Owner Team' }).nth(3).click();
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
    await page.locator('div').filter({ hasText: 'Owner Team' }).nth(3).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
  });