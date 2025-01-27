import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { IEmail, readEmails, setEmails } from '../localemails.js/emails';
import {
  BASE_FRONTEND_URL,
  isRunningOnLocal,
  localBaseUrl,
} from '../localemails.js/const';
import { createNewEmail } from '../helpers/mailsurp';


// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  const myEmails: IEmail = await readEmails();
  //console.log(myEmails);
  if (!myEmails?.practiceAdminEmail?.length) {
    throw new Error(`practiceAdminEmail not present returning...`);
  }
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe('All PracticeRole Test case ', () => {

test('Practice  login and  onboarding ', async ({ request }) => {
  let myEmails: IEmail = await readEmails();
  const data = await generatePasswordlessLoginLink({
    email: myEmails.practiceAdminEmail!,
    request: request,
  });
  await page.goto(data!);

// Onbaording flows for Practice Manager

await page.getByPlaceholder('Enter first name').click();
await page.getByPlaceholder('Enter first name').fill('Practice ');
await page.getByPlaceholder('Enter last name').click();
await page.getByPlaceholder('Enter last name').fill('1');
await page.getByPlaceholder('Enter phone').click();
await page.getByPlaceholder('Enter phone').fill('(846) 534-65832');
await page.getByRole('button', { name: 'Continue' }).nth(1).click();
await page.waitForTimeout(2000);
await page.getByRole('checkbox').check();
 await page.waitForTimeout(1000);
 await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
 await page.waitForTimeout(1000);
 await page.getByRole('checkbox').check();
 await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
 });
      test('Settings Tab', async () => {
        try {
          await page.locator('div').filter({ hasText: /^Settings$/ }).click();
        } catch (error) {
          console.log('Failed to find first locator, trying second locator');
           await page.getByText('Settings').click();
        }  
              // Invite Team Member (Therapist 1)
        await page.getByText('Team members').first().click();
        await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Biller');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('1');
  await page.getByLabel('Email*').click();

  //
  const Bookinginbox1 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox1!);
  let myEmails = await readEmails();
  await setEmails({ ...myEmails, billerEmail: Bookinginbox1! });
  //console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Biller').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Scheduler');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('1');
  await page.getByLabel('Email*').click();

  //
  const Bookinginbox5 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox5!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, schedulerEmail: Bookinginbox5! });
  //console.log(myEmails);

 await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Scheduler').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Intake Admin');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('1');
  await page.getByLabel('Email*').click();

  //
  const Bookinginbox6 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox6!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, intakeadminroleEmail: Bookinginbox6! });
  //console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Intake admin').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();
  await page.waitForTimeout(2000);
  
// // Simple Practice Imports codes
// await page.getByText('Simple practice import').click();
// await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > input[type=file]').setInputFiles('C:/Users/Rajesh/Downloads/Export_-_Complete_-_2023-08-28_022706_-_3a869953 (1).zip')

// Practice Settings code
await page.getByText('Practice settings').click();
await page.getByLabel('Practice Name').click();
await page.getByLabel('Practice Name').fill('Mind Simple Hospital');
await page.getByLabel('About').click();
await page.getByLabel('About').fill('This Nice company very good company ');
await page.getByPlaceholder('Enter phone').click();
await page.getByPlaceholder('Enter phone').fill('(975) 734-50565');
await page.getByRole('button', { name: 'Save' }).nth(1).click();
// Role Managment Flows
await page.getByText('Role settings').click();
await page.getByRole('button', { name: 'Create custom role' }).nth(1).click();
await page.waitForTimeout(2000);
  await page.getByLabel('Role title').clear();
  await page.waitForTimeout(2000);
  await page.getByLabel('Role title').fill('Practice Manager role');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.getByText('HIPAA audit logs').click();
  await page.waitForTimeout(6000);

//   Scheduler Calender 
  await page.getByText('Calendar').click();
  await page.waitForTimeout(4000);
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

  //  Edit More Slots 
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();

  await page.locator('div').filter({ hasText: /^Monday Add working hours09:00 AMto05:00 PM$/ }).getByTestId('AddIcon').click();
    await page.locator('div').filter({ hasText: /^05:00 PMto$/ }).getByTestId('KeyboardArrowDownIcon').nth(1).click();
    await page.getByRole('spinbutton').first().click();
    await page.getByRole('spinbutton').first().fill('11');
    await page.waitForTimeout(2000);
    await page.getByRole('spinbutton').nth(1).click();
    await page.getByRole('spinbutton').nth(1).fill('55');
    await page.waitForTimeout(2000);
    await page.getByText('PM', { exact: true }).click();
    await page.getByText('OK', { exact: true }).click();
    await page.waitForTimeout(2000);

    await page.locator('div').filter({ hasText: /^Tuesday Add working hours09:00 AMto05:00 PM$/ }).getByTestId('AddIcon').click();
    await page.locator('div').filter({ hasText: /^05:00 PMto$/ }).getByTestId('KeyboardArrowDownIcon').nth(1).click();
    await page.getByRole('spinbutton').first().click();
    await page.getByRole('spinbutton').first().fill('11');
    await page.waitForTimeout(2000);
    await page.getByRole('spinbutton').nth(1).click();
    await page.getByRole('spinbutton').nth(1).fill('55');
    await page.waitForTimeout(2000);
    await page.getByText('PM', { exact: true }).click();
    await page.getByText('OK', { exact: true }).click();
    await page.waitForTimeout(2000);

    await page.locator('div').filter({ hasText: /^Wednesday Add working hours09:00 AMto05:00 PM$/ }).getByTestId('AddIcon').click();
    await page.locator('div').filter({ hasText: /^05:00 PMto$/ }).getByTestId('KeyboardArrowDownIcon').nth(1).click();
    await page.getByRole('spinbutton').first().click();
    await page.getByRole('spinbutton').first().fill('11');
    await page.waitForTimeout(2000);
    await page.getByRole('spinbutton').nth(1).click();
    await page.getByRole('spinbutton').nth(1).fill('55');
    await page.waitForTimeout(2000);
    await page.getByText('PM', { exact: true }).click();
    await page.getByText('OK', { exact: true }).click();
    await page.waitForTimeout(2000);

    await page.locator('div').filter({ hasText: /^Thursday Add working hours09:00 AMto05:00 PM$/ }).getByTestId('AddIcon').click();
    await page.locator('div').filter({ hasText: /^05:00 PMto$/ }).getByTestId('KeyboardArrowDownIcon').nth(1).click();
    await page.getByRole('spinbutton').first().click();
    await page.getByRole('spinbutton').first().fill('11');
    await page.waitForTimeout(2000);
    await page.getByRole('spinbutton').nth(1).click();
    await page.getByRole('spinbutton').nth(1).fill('55');
    await page.waitForTimeout(2000);
    await page.getByText('PM', { exact: true }).click();
    await page.getByText('OK', { exact: true }).click();
    await page.waitForTimeout(2000);

    await page.locator('div').filter({ hasText: /^Friday Add working hours09:00 AMto05:00 PM$/ }).getByTestId('AddIcon').click();
    await page.locator('div').filter({ hasText: /^05:00 PMto$/ }).getByTestId('KeyboardArrowDownIcon').nth(1).click();
    await page.getByRole('spinbutton').first().click();
    await page.getByRole('spinbutton').first().fill('11');
    await page.waitForTimeout(2000);
    await page.getByRole('spinbutton').nth(1).click();
    await page.getByRole('spinbutton').nth(1).fill('55');
    await page.waitForTimeout(2000);
    await page.getByText('PM', { exact: true }).click();
    await page.getByText('OK', { exact: true }).click();
    await page.waitForTimeout(2000);

    await page.locator('div').filter({ hasText: /^Saturday Add working hours09:00 AMto05:00 PM$/ }).getByTestId('AddIcon').click();
    await page.locator('div').filter({ hasText: /^05:00 PMto$/ }).getByTestId('KeyboardArrowDownIcon').nth(1).click();
    await page.getByRole('spinbutton').first().click();
    await page.getByRole('spinbutton').first().fill('11');
    await page.waitForTimeout(2000);
    await page.getByRole('spinbutton').nth(1).click();
    await page.getByRole('spinbutton').nth(1).fill('55');
    await page.waitForTimeout(2000);
    await page.getByText('PM', { exact: true }).click();
    await page.getByText('OK', { exact: true }).click();
    await page.waitForTimeout(2000);

    await page.locator('div').filter({ hasText: /^Sunday Add working hours09:00 AMto05:00 PM$/ }).getByTestId('AddIcon').click();
    await page.locator('div').filter({ hasText: /^05:00 PMto$/ }).getByTestId('KeyboardArrowDownIcon').nth(1).click();
    await page.getByRole('spinbutton').first().click();
    await page.getByRole('spinbutton').first().fill('11');
    await page.waitForTimeout(2000);
    await page.getByRole('spinbutton').nth(1).click();
    await page.getByRole('spinbutton').nth(1).fill('55');
    await page.waitForTimeout(2000);
    await page.getByText('PM', { exact: true }).click();
    await page.getByText('OK', { exact: true }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.waitForTimeout(5000);
  
// Billing Tab
// await page.locator('p').filter({ hasText: 'Billing' }).click();
// await page.getByRole('tab', { name: 'Insurance' }).click();
//   await page.getByText('Payers').click();
//   await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByLabel('Search for insurance payers').fill('Delta Dental');
//   await page.getByText('CDIAM- Delta Dental of Iowa').click();
//   await page.waitForTimeout(8000);
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();

//   Add referal Team member settings
// await page.getByText('Team members').nth(1).click();
//   await page.getByRole('row', { name: 'Practice 1' }).getByRole('img').nth(1).click();
//   await page.getByLabel('Select your specializations').click();
//   await page.getByRole('combobox', { name: 'Select your specializations' }).fill('Anxi');
//   await page.getByRole('option', { name: 'Anxiety', exact: true }).click();
//   await page.getByRole('button', { name: 'Save' }).nth(1).click();
//   await page.getByRole('tab', { name: 'Payment Methods' }).click();
//   await page.getByLabel('Select accepted payment methods').click();
//   await page.getByText('AARP - UnitedHealthcare').click();
//   await page.getByRole('button', { name: 'Save' }).nth(1).click();
//   await page.waitForTimeout(2000);

    //   Add practice Emails Imports
await page.getByText('Practice Email Imports').click();
await page.getByRole('button', { name: 'Add New' }).nth(1).click();
await page.getByLabel('Email Address').click();
//   
const Bookinginbox2 = await createNewEmail();
await page.getByLabel('Email Address').fill(Bookinginbox2!);
await page.getByLabel('Choose account type').click();
await page.getByRole('option', { name: 'Google' }).click();
await page.getByRole('button', { name: 'Save' }).nth(1).click();

await page.getByRole('button', { name: 'Add New' }).nth(1).click();
await page.getByLabel('Email Address').click();
//   
const Bookinginbox3 = await createNewEmail();
await page.getByLabel('Email Address').fill(Bookinginbox3!);
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
    await page.waitForTimeout(6000);
   
    await page.getByRole('button', { name: 'Preview' }).nth(1).click();
    await page.getByRole('button').first().click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
  
   
    await page.locator('div').filter({ hasText: /^Practice Automation Forms$/ }).getByTestId('MoreVertIcon').click();

    await page.getByRole('menuitem', { name: 'Preview' }).click();
    await page.locator('.MuiButtonBase-root').first().click();
  
    
    await page.locator('div').filter({ hasText: /^Practice Automation Forms$/ }).getByTestId('MoreVertIcon').click();

    await page.getByRole('menuitem', { name: 'Rename' }).click();
    await page.getByPlaceholder('type here').clear();
    await page.getByPlaceholder('type here').fill('Practice Automation Forms');
    await page.reload();
    await page.waitForTimeout(1000);
   
    await page.locator('div').filter({ hasText: /^Practice Automation Forms$/ }).getByTestId('MoreVertIcon').click();

    await page.getByRole('menuitem', { name: 'Edit' }).click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
   
    await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();
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
    
    await page.getByRole('option', { name: 'Multiple choice' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('Client Symptoms?');
    await page
      .getByRole('button', { name: '4 Please enter a question' })
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
      .getByRole('button', { name: '5 Please enter a question CPT' })
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
      .getByRole('button', { name: '6 Please enter a question' })
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
   
    await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();
    
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
    
    await page.getByRole('option', { name: 'Multiple choice' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is your Health Conditions?');
    await page.getByLabel('Mandatory').uncheck();
    await page
      .getByRole('button', { name: '4 Please enter a question' })
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
      .getByRole('button', { name: '5 Please enter a question CPT' })
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
      .getByRole('button', { name: '6 Please enter a question' })
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
    // await page.getByRole('option', { name: 'Date' }).click();
    // await page.getByPlaceholder('Please enter a question').click();
    // await page
    //   .getByPlaceholder('Please enter a question')
    //   .fill('What is Your Health Cerificate Date?');
    // await page.getByLabel('Mandatory').check();
    // await page
    //   .getByRole('button', { name: '5 Please enter a question' })
    //   .getByRole('button')
    //   .nth(3)
    //   .click();
    // await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'CPT code' }).click();
    await page.getByPlaceholder('Please enter a question').click();
    await page
      .getByPlaceholder('Please enter a question')
      .fill('What is Your CPT code?');
    await page
      .getByRole('button', { name: '5 Please enter a question CPT' })
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
      .getByRole('button', { name: '6 Please enter a question' })
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
    
    await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();
    try {
      await page.locator('div').filter({ hasText: /^Settings$/ }).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
       await page.getByText('Settings').click();
    }
      await page.reload();
    });

test('Create Clients', async () => {
  await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Create client' }).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Practice');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Test');
    await page.getByLabel('Email*').click();
    //
    const invitesinbox2 = await createNewEmail();
    await page.getByLabel('Email*').fill(invitesinbox2!);

    await page.getByRole('combobox', { name: 'Clinician' }).click();
    try {
      await page.getByText('Therapist 1').click();
    } 
    catch (error) {
      console.log('Failed to find first locator, trying second locator');
      await page.getByRole('option', { name: 'icon Therapist 1' }).getByRole('paragraph').click();
    }
   
    await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    await page.waitForTimeout(8000);
   
  });

  test('Create Appoinment', async () => {
    // Create Appoinments
    try {
      await page.locator('div').filter({ hasText: /^Calendar$/ }).first().click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
    await page.getByText('Calendar').first().click();
  }
    await page.getByRole('button', { name: 'Month' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('div').filter({ hasText: /^16$/ }).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByRole('option', { name: 'Shiva & Venkatesh (T1)' }).first().click();
    await page.waitForTimeout(10000);
    await page.getByLabel('Select service *').click();
    await page.getByText('Developmental Testing, ...').click();
    await page.getByPlaceholder('Enter text here').click();
    await page.getByPlaceholder('Enter text here').fill('New every day testing');
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    await page.waitForTimeout(1000);
    // Past Date Appoinments
    // await page.getByRole('button', { name: 'Back' }).click();
    // await page.getByRole('button', { name: 'Back' }).click();
    // await page.getByRole('button', { name: 'Back' }).click();
    // await page.locator('div').filter({ hasText: /^09$/ }).click();

    // await page.getByLabel('Select client profile*').click();
    // await page.getByRole('option', { name: 'Shiva & Venkatesh (T1)' }).first().click();
    // await page.waitForTimeout(10000);
    // await page.getByLabel('Select service *').click();
    // await page.getByText('Developmental Testing, ...').click();
    // await page.getByPlaceholder('Enter text here').click();
    // await page.getByPlaceholder('Enter text here').fill('New every day testing');
    // await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    
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
  // await page.getByPlaceholder('MM/DD/YYYY').click();
  // await page.getByPlaceholder('MM/DD/YYYY').fill('10/10/1999');
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
  await page.waitForTimeout(3000);
  
//  Payment tab
await page.getByRole('tab', { name: 'Payment' }).click();
// await page.waitForTimeout(3000);
// // await page.getByLabel('Insurance').check();

// // Logic For Fail Locator
// try {
//   await page.getByLabel('Client\'s spouse').check();
    
// } catch (error) {
//   console.log('Failed to find first locator, trying second locator');
//   await page.getByText('Other').click();
// }


// await page.getByLabel('Sex').click();
// await page.getByRole('option', { name: 'Male', exact: true }).click();
// await page.getByPlaceholder('Phone').click();
// await page.getByPlaceholder('Phone').fill('(734) 573-25415');
// await page.getByLabel('Address line').click();
// await page.getByLabel('Address line').fill('New City main office');
// await page.getByLabel('State').click();
// await page.getByRole('combobox', { name: 'State' }).fill('Utah');
// // await page.getByRole('option', { name: 'Utah' }).click();
// await page.getByLabel('City').click();
// await page.getByRole('combobox', { name: 'City' }).fill('Roy');
// // await page.getByRole('option', { name: 'Roy' }).click();
// await page.getByLabel('Zip code').click();
// await page.getByLabel('Zip code').fill('678203');
// await page.getByLabel('Insurance Company').click();
// await page.getByLabel('Insurance Company').fill('Absolute');
// await page.getByText('ABSOLUTE TOTAL CARE-').click();
// await page.getByLabel('Member ID').click();
// await page.getByLabel('Member ID').fill('GHR345');
// await page.getByLabel('Group ID').click();
// await page.getByLabel('Group ID').fill('GGH3');
// await page.getByLabel('Plan ID').click();
// await page.getByLabel('Plan ID').fill('KKH45');
// // await page.getByPlaceholder('MM/DD/YYYY').nth(1).click();
// // await page.getByPlaceholder('MM/DD/YYYY').nth(1).fill('10/10/2000');
// // await page.getByPlaceholder('MM/DD/YYYY').nth(2).click();
// // await page.getByPlaceholder('MM/DD/YYYY').nth(2).fill('10/10/2030');
// await page.getByRole('button', { name: 'Save' }).nth(1).click();

 // Files tab
 await page.getByRole('tab', { name: 'Files' }).click();
 await page.getByRole('button', { name: 'Request upload' }).nth(1).click();
 await page.getByLabel('Enter file name').click();
 await page.getByLabel('Enter file name').fill('Test Pdf');
 await page.getByRole('button', { name: 'Add' }).nth(1).click();
 await page.getByLabel('Enter file name').nth(1).click();
 await page.getByLabel('Enter file name').nth(1).fill('Test Pdf 2');
 await page.getByRole('button', { name: 'Request' }).nth(1).click();

    await page.getByRole('tab', { name: 'Insurance Eligibility' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Verify Benefits' }).nth(1).click();
    await page.waitForTimeout(8000);
    await page.locator('div').filter({ hasText: /^Basic InfoMinor$/ }).getByRole('button').click();

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
    await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(2000);
  try {
    await page.locator('div').filter({ hasText: /^Settings$/ }).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
     await page.getByText('Settings').click();
  }

  await page
  .locator('div')
  .filter({ hasText: /^Clients$/ })
  .getByRole('img')
  .click(); 
   // Multi Client Flows
    await page.getByText('Rajesh Das').click();
    await page.getByRole('button', { name: 'Profile & Clinician' }).nth(1).click();
    await page.getByRole('button', { name: 'Add profile' }).nth(1).click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Owner Team' }).click();
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('Rajesh@1');
    await page.getByRole('button', { name: 'Create' }).nth(1).click();
    await page.locator('._cliniciansHeader_1glpc_60 > .MuiButtonBase-root').click();

   try {
      await page.locator('div').filter({ hasText: /^Settings$/ }).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
       await page.getByText('Settings').click();
    }

    await page
    .locator('div')
    .filter({ hasText: /^Clients$/ })
    .getByRole('img')
    .click();
   // Minor 
  await page.getByText('Shiva Kumar').click();
  await page.getByRole('button', { name: 'Profile & Clinician' }).nth(1).click();
  await page.getByRole('button', { name: 'Add profile' }).nth(1).click();
  await page.getByLabel('Minor').check();
  await page.getByLabel('', { exact: true }).first().click();
  await page.getByRole('option', { name: 'Owner Team' }).click();
  await page.getByRole('button', { name: '​', exact: true }).click();
  await page.getByRole('option', { name: 'Venkatesh Prasad' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Shiva & Venkatesh@1');
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.locator('._cliniciansHeader_1glpc_60 > .MuiButtonBase-root').click();

   try {
      await page.locator('div').filter({ hasText: /^Settings$/ }).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
       await page.getByText('Settings').click();
    }

    await page
    .locator('div')
    .filter({ hasText: /^Clients$/ })
    .getByRole('img')
    .click();
  // Couple 
  await page.getByText('Rakesh Das').click();
  await page.getByRole('button', { name: 'Profile & Clinician' }).nth(1).click();
  await page.getByRole('button', { name: 'Add profile' }).nth(1).click();
  await page.getByLabel('Couple').check();
  await page.getByLabel('', { exact: true }).first().click();
  await page.getByRole('option', { name: 'Owner Team' }).click();
  await page.getByRole('button', { name: '​', exact: true }).click();
  await page.getByRole('option', { name: 'Poornima Das' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Rakesh & Poornima@1');
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.locator('._cliniciansHeader_1glpc_60 > .MuiButtonBase-root').click();

 try {
      await page.locator('div').filter({ hasText: /^Settings$/ }).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
       await page.getByText('Settings').click();
    }

    await page
    .locator('div')
    .filter({ hasText: /^Clients$/ })
    .getByRole('img')
    .click();
   
  await page.getByText('Rajesh Das').click();
  await page.getByRole('tab', { name: 'Sessions' }).click();
  await page.reload();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Add' }).nth(3).click();
  await page
    .getByRole('menuitem', { name: 'Appointment' })
    .getByRole('img')
    .click();
    await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(7000);

  // await page.locator('._nameDetails_111x7_20 > .MuiButtonBase-root').click();
  // await page.waitForTimeout(5000);

});
// test('Insurance Tab', async () => {
//   await page.locator('div').filter({ hasText: /^Insurance$/ }).getByRole('img').click();
//   await page.getByRole('button', { name: 'Select all' }).nth(1).click();
//   await page.getByRole('button', { name: 'Auto create claim' }).nth(1).click();
//   await page.getByRole('tab', { name: 'Claims' }).click();
//   await page.getByRole('button', { name: 'Created' }).click();
//   await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
//   await page.waitForTimeout(3000);
//   try {
//     await page.getByText('68055- Absolute Total Care').click();
    
//    }
//     catch (error) {
//      console.log('Failed to find first locator, trying second locator');
//      await page.locator('td:nth-child(9)').first().click();
//    }
//    await page.waitForTimeout(2000);
//   await page.getByRole('button', { name: 'Add note' }).nth(1).click();
//   await page.getByPlaceholder('Start typing here').click();
//   await page
//     .getByPlaceholder('Start typing here')
//     .fill('Hey I am Adding Clients File Details here so check this');
//   await page.getByRole('button', { name: 'Save' }).nth(1).click();
//   await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
//   await page.waitForTimeout(2000);
//   await page
//     .locator('div')
//     .filter({ hasText: /^StatusSubmittedEdit$/ })
//     .getByRole('button')
//     .nth(1)
//     .click();
//   await page.getByLabel('Select status').click();
//   await page.getByRole('option', { name: 'Sent' }).click();
//   await page.getByPlaceholder('Remarks').click();
//   await page
//     .getByPlaceholder('Remarks')
//     .fill('Sent this Payer Details to Change Healthcare');
//   await page.getByRole('button', { name: 'Save' }).nth(1).click();
//   await page
//     .locator('div')
//     .filter({ hasText: /^StatusSentEdit$/ })
//     .getByRole('button')
//     .nth(1)
//     .click();
//   await page.getByLabel('Sent').click();
//   await page.getByRole('option', { name: 'Paid', exact: true }).click();
//   await page.getByPlaceholder('Remarks').click();
//   await page.getByPlaceholder('Remarks').fill('Paid Form Payer Company');
//   await page.getByRole('button', { name: 'Save' }).nth(1).click();
//   await page.waitForTimeout(2000);

//   });
  test('Reports Tab', async () => {
    await page.locator('div').filter({ hasText: /^Reports$/ }).getByRole('img').click();
    await page.getByText('Appointment Notes').click();
    await page.getByLabel('Team members').click();
    await page.getByRole('button', { name: 'Apply' }).nth(1).click();
    await page.getByLabel('Clients').click();
    await page.getByRole('button', { name: 'Apply' }).nth(1).click();
    await page.getByLabel('Status').click();
    await page.getByRole('button', { name: 'Apply' }).nth(1).click();
    await page.getByRole('button', { name: 'Add note' }).first().click();
    await page.getByRole('button', { name: 'Add psychotherapy note' }).nth(1).click();
    await page.getByPlaceholder('Enter your response here').click();
    await page.getByPlaceholder('Enter your response here').fill('Test Noted adding here');
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    try {
      await page.getByTestId('KeyboardArrowDownIcon').click();
   } catch (error) {
     console.log('Failed to find first locator, trying second locator');
   await page.getByText('Export').click();
   };
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('menuitem', { name: 'csv' }).click();
    const download = await downloadPromise;
    await page.getByTestId('KeyboardArrowDownIcon').click();
    const download1Promise = page.waitForEvent('download');
    await page.getByRole('menuitem', { name: 'excel' }).click();
    const download1 = await download1Promise;
  //   
    await page.getByText('Payment Status').click();
    await page.getByLabel('Team members').click();
    await page.getByRole('button', { name: 'Apply' }).nth(1).click();
    await page.getByLabel('Clients').click();
    await page.getByRole('button', { name: 'Apply' }).nth(1).click();
    await page.getByLabel('Status').click();
    await page.getByRole('option', { name: 'Pending' }).click();
  //   
    await page.locator('p').filter({ hasText: /^Income$/ }).click();
    await page.getByText('Income Allocation').click();
  // 
    await page.getByText('Outstanding Claims').click();
   
    // 
    await page.getByText('Unpaid insurance appointments').click();
    // await page.getByLabel('Team members').click();
    // await page.getByRole('checkbox').check();
    // await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
    await page.getByLabel('Status').click();
    await page.getByRole('option', { name: 'Claim filed' }).click();
    await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
    await page.getByText('ERA Report').click();
    await page.getByText('Filed Claims').click();
    // await page.getByLabel('Payer').click();
    // await page.getByRole('option', { name: '- Absolute Total Care' }).click();
    // await page.getByRole('combobox', { name: 'Payer' }).click();
    // await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
    await page.getByTestId('ArrowBackIcon').locator('path').click();
  
  });

//   test('Message Tab', async () => {
// //   Messages Box
// await page.locator('div').filter({ hasText: /^Messages$/ }).getByRole('img').click();
// await page.waitForTimeout(6000);
//   await page.getByTestId('message-input').fill('Hi Therapist 1 How are u ');
//   await page.getByTestId('SendOutlinedIcon').click();
//   await page.waitForTimeout(3000);
//   await page.getByRole('img', { name: 'logo' }).click();
//   await page.waitForTimeout(1000);
  
// });
test('TaskBoard Widget Flows', async () => {

  await page.locator('div').filter({ hasText: /^Tasks$/ }).getByRole('img').click();
  await page.getByRole('heading', { name: 'List View' }).click();
  await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
  await page.getByPlaceholder('Task Name').click();
  await page.getByPlaceholder('Task Name').fill('Practice Automation Task');
  await page.locator('div').filter({ hasText: /^Task Description$/ }).click();
  await page.getByPlaceholder('Add Description').fill('Testing Taskboard with Owner role');
  await page.getByRole('button', { name: 'user icon Add Subtask' }).click();
  await page.getByPlaceholder('Add subtask').click();
  await page.getByPlaceholder('Add subtask').fill('Supervisor Subtask 1');
  await page.getByRole('button', { name: 'user icon Assign to' }).click();
  await page.locator('span').filter({ hasText: 'Practice 1' }).getByRole('paragraph').click();
  await page.getByRole('banner').getByTestId('priority_flag_image').click();
  await page.getByRole('menuitem', { name: 'Urgent' }).click();
  await page.getByRole('button', { name: 'Task None priority flag' }).click();
  await page.getByRole('menuitem', { name: 'Urgent' }).click();
  await page.getByRole('button', { name: 'Open status_mark_Open' }).click();
  await page.getByText('In Progress').click();
  await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
 
  await page.waitForTimeout(5000);
  
    await page.getByText('Practice Automation Task').click();
    await page.getByPlaceholder('Add comment').click();
    await page.getByPlaceholder('Add comment').fill('Hi Man How are U');
    await page.getByRole('button', { name: 'Send' }).nth(1).click();
    await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();
    await page.waitForTimeout(2000);
    
    await page.getByRole('button', { name: 'My Task' }).nth(1).click();
    await page.getByRole('button', { name: 'All Tasks' }).nth(1).click();
    await page.getByRole('button', { name: 'Group by' }).nth(1).click();
    await page.getByText('Status').click();
    await page.getByRole('button', { name: 'Group by: status' }).nth(1).click();
    await page.locator('p').filter({ hasText: 'Assigned To' }).click();
    await page.getByRole('button', { name: 'Group by: Assigned to' }).nth(1).click();
    await page.locator('p').filter({ hasText: 'Due Date' }).click();
    await page.getByRole('button', { name: 'Group by: Due Date' }).nth(1).click();
    await page.locator('p').filter({ hasText: 'Priority' }).click();
    await page.getByRole('heading', { name: 'Calendar View' }).click();
    await page.getByRole('button', { name: 'Month' }).nth(1).click();
    await page.getByText('Practice Automation Task').click();
    await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();
  
    await page.getByRole('heading', { name: 'Board View' }).click();
    await page.getByText('Practice Automation Task').click();
    await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();
  
    await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
    await page.getByPlaceholder('Task Name').click();
    await page.getByPlaceholder('Task Name').fill('Practice Board View Task');
    await page.getByPlaceholder('Add Description').click();
    await page.getByPlaceholder('Add Description').fill('Testing Board view task');
    await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
   
    await page.locator('._header_1k7mt_11 > button').first().click();
    await page.getByRole('menuitem', { name: 'Set Priority' }).getByRole('img').click();
    await page.getByRole('menuitem', { name: 'Urgent' }).getByRole('img').click();
    try {
      await page.locator('div').filter({ hasText: /^Settings$/ }).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
       await page.getByText('Settings').click();
    }    
  });
  test('Practice Manager Dashboard', async () => {
  await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
  await page.getByLabel('Clinician').nth(0).click();
  await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Therapist' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Supervisor' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'All' }).getByRole('checkbox').check();
   await page.reload();
   await page.waitForTimeout(2000);
  //  await page.locator('#mui-component-select-status').click();
  //  await page.getByLabel('Status').nth(1).click();
  // await page.getByRole('option', { name: 'Created' }).getByRole('checkbox').check();
  // await page.getByRole('option', { name: 'Submitted' }).getByRole('checkbox').check();
  // await page.getByRole('option', { name: 'Sent' }).getByRole('checkbox').check();
  // await page.reload();
  // await page.waitForTimeout(2000);
  // await page.getByLabel('Clinician').first().click();
  // await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
  // await page.getByRole('option', { name: 'Owner Team' }).uncheck();
  // await page.getByRole('option', { name: 'Therapist' }).getByRole('checkbox').check();
  // await page.getByRole('option', { name: 'Therapist' }).uncheck();
  // await page.getByRole('option', { name: 'Supervisor' }).getByRole('checkbox').check();
  // await page.getByRole('option', { name: 'Supervisor' }).uncheck();
  // await page.reload();
  // await page.waitForTimeout(3000);

  // Taskboard Flows
  await page.getByText('Practice Automation Task').click();
  await page.getByRole('button', { name: 'In Progress' }).click();
await page.getByText('In Review').click();
await page.getByRole('button', { name: 'assignee icon' }).click();
await page.locator('p').filter({ hasText: 'Practice 1' }).click();
await page.getByRole('button', { name: 'Save changes' }).nth(1).click();
await page.waitForTimeout(4000);


try {
  await page.locator('div').filter({ hasText: /^Calendar$/ }).first().click();
} catch (error) {
console.log('Failed to find first locator, trying second locator');
await page.getByText('Calendar').first().click();
}
await page.getByLabel('Color').click();
await page.getByRole('button', { name: 'Customize colors' }).nth(1).click();
await page.waitForTimeout(3000);
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.waitForTimeout(3000);

await page.getByRole('option', { name: 'Service Code' }).click();
await page.getByRole('button', { name: 'Customize colors' }).nth(1).click();
await page.waitForTimeout(3000);
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.waitForTimeout(3000);

await page.getByRole('option', { name: 'Appointment Status' }).click();

await page.getByRole('option', { name: 'Payment Type' }).click();
await page.getByRole('button', { name: 'Customize colors' }).nth(1).click();
await page.waitForTimeout(3000);
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.waitForTimeout(3000);
await page.reload();
await page.waitForTimeout(5000);

});

test('DP Update and Logout', async () => {
    
  try {
    await page.getByRole('img').nth(1).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
    await page.locator('.MuiAvatar-img').click();
  }  
      await page.getByRole('menuitem', { name: 'Profile' }).click();
    await page
      .locator(
        '#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._generalSettingsTab_peqpd_1 > div > div._flexContainer_peqpd_4 > div._userNameDetailsContainer_peqpd_8 > div > div._imagePicker_peqpd_17 > input[type=file]'      )
      .setInputFiles(path.join(__dirname + '../files/ther_img.jpg'));

    await page.getByRole('button', { name: 'Done' }).nth(1).click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    
    try {
      await page.getByRole('img').nth(1).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
      await page.locator('.MuiAvatar-img').click();
    }  
        await page.getByRole('menuitem', { name: 'Logout' }).click();
  });

});
