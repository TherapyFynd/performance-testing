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
  if (!myEmails?.billerEmail?.length) {
    throw new Error(`billerEmail not present returning...`);
  }
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe('All IntakeAdminRole  Test case ', () => {

test('Intake admin login and  onboarding ', async ({ request }) => {
  let myEmails: IEmail = await readEmails();
  const data = await generatePasswordlessLoginLink({
    email: myEmails.intakeadminroleEmail!,
    
    
    request: request,
  });
  await page.goto(data!);


// Onbaording flows for Practice Manager

await page.getByPlaceholder('Enter first name').click();
await page.getByPlaceholder('Enter first name').fill('IntakeAdmin');
await page.getByPlaceholder('Enter last name').click();
await page.getByPlaceholder('Enter last name').fill('1');
await page.getByPlaceholder('Enter phone').click();
await page.getByPlaceholder('Enter phone').fill('(846) 534-65836');
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
    await page.waitForTimeout(5000);
//     // Billing Tab
// await page.locator('p').filter({ hasText: 'Billing' }).click();
// await page.getByRole('tab', { name: 'Insurance' }).click();
//   await page.getByText('Payers').click();
//   await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByLabel('Search for insurance payers').fill('Careplus');
//   await page.getByText('- CarePlus Health Plans Inc').click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
    // Add practice Emails Imports
    await page.waitForTimeout(5000);
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
await page.waitForTimeout(5000);
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
    await page.getByPlaceholder('type here').fill('Intake Automation Forms');
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
  
   
    await page.locator('div').filter({ hasText: /^Intake Automation Forms$/ }).getByTestId('MoreVertIcon').click();

    await page.getByRole('menuitem', { name: 'Preview' }).click();
    await page.locator('.MuiButtonBase-root').first().click();
  
  
    await page.locator('div').filter({ hasText: /^Intake Automation Forms$/ }).getByTestId('MoreVertIcon').click();

    await page.getByRole('menuitem', { name: 'Rename' }).click();
    await page.getByPlaceholder('type here').clear();
    await page.getByPlaceholder('type here').fill('Intake Automation Forms');
    await page.reload();
    await page.waitForTimeout(1000);
  
    await page.locator('div').filter({ hasText: /^Intake Automation Forms$/ }).getByTestId('MoreVertIcon').click();
    await page.getByRole('menuitem', { name: 'Edit' }).click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.getByTestId('ArrowBackRoundedIcon').click();
    await page.getByRole('button', { name: 'Create new' }).nth(1).click();
    // // Consent Form
    await page.getByText('Consent form', { exact: true }).click();
    await page.getByPlaceholder('type here').click();
    await page.getByPlaceholder('type here').fill('Intake Consent Automation');
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
    await page.getByPlaceholder('type here').fill('Intake Automation Testing');
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
    await page.waitForTimeout(1000);
    
    // // Treatment plan
    await page.getByRole('button', { name: 'Create new' }).nth(1).click();
    await page.getByText('Treatment plan', { exact: true }).click();
    await page.getByPlaceholder('type here').click();
    await page.getByPlaceholder('type here').fill('Intake Automation Treatement Plan');
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
    await page.getByPlaceholder('type here').fill('Intake Automation Assesment Form');
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
      .fill('Intake Automation Forms');
    await page.getByRole('option', { name: 'Intake Automation Forms' }).click();
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
      .fill('Intake Automation Forms');
    await page.getByRole('option', { name: 'Intake Automation Forms' }).click();
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
      .fill('Intake Automation Forms');
    await page.getByRole('option', { name: 'Intake Automation Forms' }).click();
    await page.getByRole('button', { name: 'Add' }).nth(1).click();
    await page.waitForTimeout(1000);
    await page.reload();
    await page.waitForTimeout(2000);
    // await page.getByTestId('ArrowBackRoundedIcon').click();
    await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();
    try {
      await page.locator('div').filter({ hasText: /^Settings$/ }).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
       await page.getByText('Settings').click();
    }
    });
    test('Create Appoinment', async () => {
        // Create Appoinments
        try {
          await page.locator('div').filter({ hasText: /^Calendar$/ }).first().click();
      } catch (error) {
        console.log('Failed to find first locator, trying second locator');
        await page.getByText('Calendar').first().click();
      }

      await page.getByRole('button', { name: 'Availability' }).nth(1).click();
         
          // try {
          //   await page.locator('div').filter({ hasText: /^Currently accepting appointments$/ }).getByRole('checkbox').click();
         
          //  } catch (error) {
          //    console.log('Failed to find first locator, trying second locator');
          //    await page.locator('#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._acceptingAppointmentsSwitch_ml86x_17 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383').click();
          //  }
           
            await page.waitForTimeout(2000);
            await page.getByLabel('Monday').check();
            await page.getByLabel('Tuesday').check();
            await page.getByLabel('Wednesday').check();
            await page.getByLabel('Thursday').check();
            await page.getByLabel('Friday').check();
            await page.getByLabel('Saturday').check();
            await page.getByLabel('Sunday').check();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByText('Terms & Conditions').click();
  await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
  
  try {
    await page.locator('div').filter({ hasText: /^Calendar$/ }).first().click();
} catch (error) {
  console.log('Failed to find first locator, trying second locator');
  await page.getByText('Calendar').first().click();
}

        await page.getByRole('button', { name: 'Month' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.locator('div').filter({ hasText: /^20$/ }).click();
        await page.getByLabel('Select client profile*').click();
        await page.getByRole('combobox', { name: 'Select client profile*' }).fill('poor');
        await page.getByText('Poornima (T1)', { exact: true }).click();
        await page.waitForTimeout(10000);
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
        await page.getByRole('combobox', { name: 'Select client profile*' }).fill('poor');
        await page.getByText('Poornima (T1)', { exact: true }).click();
        await page.waitForTimeout(10000);
        await page.getByLabel('Select service *').click();
        await page.getByText('Developmental Testing, ...').click();
        await page.getByPlaceholder('Enter text here').click();
        await page.getByPlaceholder('Enter text here').fill('New every day testing');
        await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
        // Create Appoinment Button( top Bar)
        
      });
      test('Create Clients', async () => {
        await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
        await page.getByRole('menuitem', { name: 'Create client' }).click();
        await page.getByLabel('First Name*').click();
        await page.getByLabel('First Name*').fill('Intake');
        await page.getByLabel('Last Name*').click();
        await page.getByLabel('Last Name*').fill('Client');
        await page.getByLabel('Email*').click();
        //
        const invitesinbox2 = await createNewEmail();
        await page.getByLabel('Email*').fill(invitesinbox2!);
    
        await page.getByRole('combobox', { name: 'Clinician' }).click();
        // await page.getByRole('combobox', { name: 'Clinician' }).fill('Therapist 1');
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
        // await page.getByPlaceholder('MM/DD/YYYY').click();
        // await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/2000');
        await page.waitForTimeout(5000);
        await page.getByLabel('Member ID').click();
        await page.getByLabel('Member ID').fill('GAH23');
        await page.waitForTimeout(2000);
        await page.getByLabel('Name on Card').click();
        await page.getByLabel('Name on Card').fill('Rajesh');
        await page.getByLabel('Payer ID').click();
        await page.getByLabel('Payer ID').fill('BDJSB546');
        // await page.getByLabel('Insurance Company').click();
        // await page.getByRole('combobox', { name: 'Insurance Company' }).fill('abso');
        // await page.getByText('68055- Absolute Total Care').click();
        await page.getByLabel('Member ID').click();
        await page.getByLabel('Member ID').fill('GAH23');
        await page.waitForTimeout(2000);
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
        await page.getByRole('tab', { name: 'Insurance' }).click();
        await page.getByRole('button', { name: 'Verify Benefits' }).nth(1).click();
        await page.waitForTimeout(8000);
        await page.getByRole('button', { name: 'Cancel' }).nth(1).click();
        await page.getByRole('tab', { name: 'Attachments' }).click();
        await page.locator('div').filter({ hasText: /^Filters \(01\)$/ }).getByRole('button').nth(2).click();
        
      });
      test('TaskBoard Widget Flows', async () => {

        await page.locator('div').filter({ hasText: /^Tasks$/ }).getByRole('img').click();
        await page.getByRole('heading', { name: 'List View' }).click();
        await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
        await page.getByPlaceholder('Task Name').click();
        await page.getByPlaceholder('Task Name').fill(' Intake Automation Task');
        await page.locator('div').filter({ hasText: /^Task Description$/ }).click();
        await page.getByPlaceholder('Add Description').fill('Testing Taskboard with Owner role');
        await page.getByRole('button', { name: 'user icon Add Subtask' }).click();
        await page.getByPlaceholder('Add subtask').click();
        await page.getByPlaceholder('Add subtask').fill('Scheduler Subtask 1');
        await page.getByRole('button', { name: 'user icon Assign to' }).click();
        await page.locator('span').filter({ hasText: 'IntakeAdmin 1' }).getByRole('paragraph').click();
        await page.getByRole('banner').getByTestId('priority_flag_image').click();
        await page.getByRole('menuitem', { name: 'Urgent' }).click();
        await page.getByRole('button', { name: 'Task None priority flag' }).click();
        await page.getByRole('menuitem', { name: 'Urgent' }).click();
        await page.getByRole('button', { name: 'Open status_mark_Open' }).click();
        await page.getByText('In Progress').click();
        
        await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
     
        await page.waitForTimeout(5000);
        
          await page.getByText('Intake Automation Task').click();
          
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
          await page.getByText('Intake Automation Task').click();
          await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();
        
          await page.getByRole('heading', { name: 'Board View' }).click();
          await page.getByText('Intake Automation Task').click();
          await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();
        
          await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
          await page.getByPlaceholder('Task Name').click();
          await page.getByPlaceholder('Task Name').fill('Intake Board View Task');
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
      test('IntakeAdmin Dashboard', async () => {
        // Create Appoinment Button( top Bar)
  
      await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
      await page.waitForTimeout(3000);
      await page.getByText('Therapist').nth(1).click();
     await page.reload();
     await page.waitForTimeout(3000);
     // Taskboard Flows
     await page.getByText('Intake Automation Task').click();
     await page.getByRole('button', { name: 'In Progress' }).click();
await page.getByText('In Review').click();
await page.getByRole('button', { name: 'assignee icon' }).click();
await page.locator('p').filter({ hasText: 'IntakeAdmin 1' }).click();
await page.getByRole('button', { name: 'Save changes' }).nth(1).click();
await page.waitForTimeout(4000);
      });
      test('DP Update and Logout', async () => {
        try {
          await page.getByRole('img').nth(1).click();
        } catch (error) {
          console.log('Failed to find first locator, trying second locator');
          await page.locator('.MuiAvatar-img').click();
        }  
        
        await page.getByRole('menuitem', { name: 'Logout' }).click();
      });
    });