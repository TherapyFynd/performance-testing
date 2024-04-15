import { test, type Page } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { MailSlurp } from "mailslurp-client";
import { BASE_BACKEND_URL, BASE_FRONTEND_URL, isRunningOnLocal, localBaseUrl, localPort } from '../localemails.js/const';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;
const mailslurp = new MailSlurp({ apiKey:
   "c5cf96dcfd7bcbb152d6f4d3ed69f512bab660051837640a2c9e843376e21838" });
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test('Owner login and  onboarding ', async ({request}) => {
        const mailslurp = new MailSlurp({ apiKey: "c5cf96dcfd7bcbb152d6f4d3ed69f512bab660051837640a2c9e843376e21838" });
        const inbox = await mailslurp.inboxController.createInbox({});
        
        // console.log(inbox);
        // console.log(inbox.emailAddress);
        const data = await request.post(
            // 'https://leafs-ehr-nest-stage-nmvorvf7ga-as.a.run.app/test/get-passwordless-login-link-by-email',
            `${BASE_BACKEND_URL}/test/get-passwordless-login-link-by-email`,
            // 'https://ehr-api.joinleafs.com/test/get-passwordless-login-link-by-email',
            {
              headers: {
                'Content-Type': 'application/json',
                'x-test-key': `omnipractice_random_a83500678d`,
              },
              data: isRunningOnLocal
               ? { email: inbox.emailAddress, isTestMode: true, localPort: localPort }
               : { email:"fc538c68-281b-4c1e-8d70-634342636f4r@mailslurp.net" ,isTestMode: true },
            },
          ); 
        // console.log(data);
        const c = await data.text();
        console.log(c)
        // console.log(data.json());
        
    
    // goto page
      await page.goto(c);
      // Onboarding Flows for Owner
    
    // DP
    await page.locator('#root > div._layout_10ldc_1 > div > div._onboardProfile_bqqcv_1 > div > div > div > div._imagePicker_bqqcv_35 > input[type=file]').setInputFiles("C:/Users/Rajesh/Downloads/therapist.jpg");
    await page.getByRole('button', { name: 'Done' }).nth(1).click();
    // Onboarding Flows
    await page.getByPlaceholder('Enter first name').click();
    await page.getByPlaceholder('Enter first name').fill('Practice');
    await page.getByPlaceholder('Enter last name').click();
    await page.getByPlaceholder('Enter last name').fill('Team');
    await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
      await page.waitForTimeout(1000);
      await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
      await page.waitForTimeout(4000);
         });
         test('Settings Flows', async () => {
            await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
          // Team member invites flows ( Therapist role)
  // Team member invites flows ( Therapist role)
  await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('2');
  await page.getByLabel('Email*').click();
// 
  const Bookinginbox1 = await mailslurp.inboxController.createInbox({});
  await page.getByLabel('Email*').fill(Bookinginbox1.emailAddress);
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.reload();
  
   // Practice Settings
   await page.getByText('Practice settings').click();
   await page.getByLabel('Practice Name').click();
   await page.getByLabel('Practice Name').fill('Mind Simple Hospital');
   await page.getByLabel('About').click();
   await page.getByLabel('About').fill('This Nice company');
   await page.getByPlaceholder('Enter phone').click();
   await page.getByPlaceholder('Enter phone').fill('(975) 734-53565');
   await page.getByRole('button', { name: 'Save' }).nth(1).click();

  //  Role settings
  await page.getByText('Role settings').click();
  await page.getByRole('button', { name: 'Create custom role' }).nth(1).click();
  await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
  await page.getByLabel('Therapist', { exact: true }).check();
  await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
  await page.getByLabel('Role title').click();
  await page.getByLabel('Role title').fill('Custom Therapist role');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Therapist custom roles$/ }).getByRole('button').click();
  await page.getByLabel('Referrals', { exact: true }).check();
  await page.getByLabel('Reports', { exact: true }).check();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();

    // Calender Day start
  await page.locator('p').filter({ hasText: /^Calendar$/ }).click();
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
  await page.locator('#root > div._layout_10ldc_1 > div._tabSpecificSidebar_148j7_2 > div:nth-child(1) > div._sidebarHeader_148j7_138 > svg > path').click();

     // Billing sections
  await page.locator('p').filter({ hasText: 'Billing' }).click();
  await page.getByRole('tab', { name: 'Insurance' }).click();
  await page.locator('div').filter({ hasText: /^Payers$/ }).click();
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByRole('combobox', { name: 'Search for insurance payers' }).fill('Allways');
  await page.getByText('AllWays Health Partners -').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.getByRole('row', { name: '04293 AllWays Health Partners' }).getByRole('button').nth(1).click();
  await page.getByLabel('ERA Enrollment').check();
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  await page.locator('._title_g7u48_6 > .MuiButtonBase-root').click();

  // // Referal settings
  await page.getByText('Team members').nth(1).click();
  await page.getByRole('row', { name: 'Practice Team, ALC' }).getByRole('img').nth(1).click();
  await page.getByLabel('Select Specializations').click();
  await page.getByRole('combobox', { name: 'Select Specializations' }).fill('Abuse');
  await page.getByRole('option', { name: 'Abuse', exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Practice Team, ALC$/ }).getByRole('button').click();
  await page.getByRole('tab', { name: 'Accepted Insurance' }).click();
  await page.getByRole('row', { name: 'Owner Team, ALC' }).getByRole('img').nth(1).click();
  await page.getByLabel('Select accepted payment').click();
  await page.getByRole('combobox', { name: 'Select accepted payment' }).fill('Absolute');
  await page.getByText('ABSOLUTE TOTAL CARE-').click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Practice Team, ALC$/ }).getByRole('button').click();
  await page.getByRole('tab', { name: 'Email Imports' }).click();
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();
  
  await page.goto(isRunningOnLocal
    ? `${localBaseUrl}/settings/intake-team-members/edit/email-imports`
    : `${BASE_FRONTEND_URL}/settings/intake-team-members/edit/email-imports`)
  await page.locator('._form_ekpvv_1 > .MuiButtonBase-root > .btn-filled-default').first().click();
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
await page.locator('#root > div._layout_10ldc_1 > div._tabSpecificSidebar_148j7_2 > div:nth-child(1) > div._sidebarHeader_148j7_138 > svg > path').click();
});

test('Forms Tab', async () => {
   await page.locator('div').filter({ hasText: /^Documents$/ }).getByRole('img').click();
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
   // Action in Forms
   // await page.locator('#root > div._layout_731gc_1 > div._content_731gc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path').click();
   // await page.getByRole('menuitem', { name: 'Send' }).click();
   // await page.getByLabel('Select Clients').click();
   // await page.getByRole('option', { name: 'Automation Forms' }).click();
   // await page.getByRole('combobox', { name: 'Select Clients' }).click();
   // await page.getByRole('button', { name: 'Send' }).nth(1).click();
   // await page.reload();
   // await page.waitForTimeout(1000);
 
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
   await page.getByPlaceholder('type here').fill('Automation Forms');
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
     .setInputFiles('C:/Users/Rajesh/Downloads/testpdf.pdf');
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
   await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
   });

    test('Create Appoinment', async () => {
// Create Appoinments
await page.locator('div').filter({ hasText: /^Calendar$/ }).getByRole('img').click();
await page.getByRole('button', { name: 'Month' }).click();
await page.getByRole('button', { name: 'Next' }).click();
await page.locator('div').filter({ hasText: /^20$/ }).click();
await page.getByLabel('Select client profile*').click();
await page.getByRole('option', { name: 'Automation (OT)' }).first().click();
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
await page.getByRole('option', { name: 'Automation (OT)' }).first().click();
await page.getByLabel('Select service *').click();
await page.getByText('Developmental Testing, ...').click();
await page.getByPlaceholder('Enter text here').click();
await page.getByPlaceholder('Enter text here').fill('New every day testing');
await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
// Create Appoinment Button( top Bar)
// await page.getByRole('button', { name: 'Create' }).nth(1).click();
await page.locator('#root > div._layout_10ldc_1 > div._sideBar_148j7_1 > div._createBtnContainer_148j7_97 > button > button').click();
await page.getByRole('menuitem', { name: 'Create appointment' }).click();
await page.getByLabel('Select client profile*').click();
await page.getByRole('option', { name: 'Automation (OT)' }).first().click();
await page.getByLabel('Select service *').click();
await page.getByText('Family psychotherapy...').click();
await page.getByPlaceholder('Enter text here').click();
await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
await page.waitForTimeout(3000);

    });
    test('Client File', async () => {
      await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
    await page.getByText('Automation Test').click();
  
    // Info and Settings
    await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Automation');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Test');
    await page.getByLabel('Pronouns').click();
    await page.getByText('She/They').click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.locator('div').filter({ hasText: /^Basic InfoIndividual$/ }).getByRole('button').click();

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
      await page.locator('div').filter({ hasText: /^Insurance$/ }).getByRole('img').click();
      await page.getByRole('button', { name: 'Select all' }).nth(1).click();
      // await page.getByRole('button', { name: 'Deselect all' }).nth(1).click();
      // await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div:nth-child(3) > div > div._table_126te_33 > table > tbody > tr:nth-child(1) > td:nth-child(1) > span > div > div > label > span > svg > path').click();
      await page.getByRole('button', { name: 'Auto create claim' }).nth(1).click();
      await page.getByRole('tab', { name: 'Claims' }).click(); 
      // await page.getByRole('cell', { name: 'View' }).first()
      await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div:nth-child(3) > div > div._table_13e1r_16 > table > tbody > tr:nth-child(1) > td:nth-child(8) > span > button > button > span > span._label_ns5gx_15').click();
      await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('Hey I am Adding Clients File Details here so check this');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.locator('div').filter({ hasText: /^StatusSubmittedEdit$/ }).getByRole('button').nth(1).click();
  await page.getByLabel('Select status').click();
  await page.getByRole('option', { name: 'Sent' }).click();
  await page.getByPlaceholder('Remarks').click();
  await page.getByPlaceholder('Remarks').fill('Sent this Payer Details to Change Healthcare');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^StatusSentEdit$/ }).getByRole('button').nth(1).click();
  await page.getByLabel('Sent').click();
  await page.getByRole('option', { name: 'Paid', exact: true }).click();
  await page.getByPlaceholder('Remarks').click();
  await page.getByPlaceholder('Remarks').fill('Paid Form Payer Company');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  // await page.locator('input[name="clientCopayAmount"]').click();
  // await page.locator('input[name="clientCopayAmount"]').fill('50');
  // await page.locator('input[name="insurancePaymentAmount"]').click();
  // await page.locator('input[name="insurancePaymentAmount"]').fill('40');
  // await page.locator('input[name="writeOffAmount"]').click();
  // await page.locator('input[name="writeOffAmount"]').fill('10');
  // await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._header_174vt_7 > span > button > svg > path').click();

    }); 
    test('DP Update and Logout', async () => {
      // await page.locator('#root > div._header_1uy0f_1 > div > div > p').click();
      await page.locator('div').filter({ hasText: 'Practice Team' }).nth(3).click();
       await page.getByRole('menuitem', { name: 'Profile' }).click();
      await page
    .locator(
      '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._generalSettingsTab_18vvz_1 > div > div._flexContainer_18vvz_4 > div._userNameDetailsContainer_18vvz_8 > div > div._imagePicker_18vvz_17 > input[type=file]'
    )
    .setInputFiles('C:/Users/Rajesh/Downloads/therapist.jpg');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  // await page
  //   .locator('#root > div._header_1uy0f_1 > div > div > p')
  //   .click();
    await page.locator('div').filter({ hasText: 'Practice Team' }).nth(3).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

    });
