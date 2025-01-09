import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createNewEmail } from '../helpers/mailsurp';
import { IEmail, readEmails, setEmails } from '../localemails.js/emails';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  const myEmails: IEmail = await readEmails();
  //console.log(myEmails);
  if (!myEmails?.combinerole2?.length) {
    throw new Error(`CombineRole2  not present returning...`);
  }

  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe('All CombineRole2 Test case ', () => { 

test('CombineRole2 login and onboarding ', async ({ request }) => {
  const myEmails: IEmail = await readEmails();

  const data = await generatePasswordlessLoginLink({
    email: myEmails.combinerole2!,

    request: request,
  });
  await page.goto(data!);

  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('CombineRole');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('2');
  await page.getByPlaceholder('Enter phone').click();
  await page.getByPlaceholder('Enter phone').fill('(846) 534-65836');
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();

  await page.getByRole('checkbox').check();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
});
test('Settings Tab', async () => {
  //     Settings tab
  try {
    await page.locator('div').filter({ hasText: /^Settings$/ }).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
     await page.getByText('Settings').click();
  }
    // Cliniacan settings
  await page.getByText('Clinician settings').click();
  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('CombineRole');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('2');
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
  await page.getByLabel('Office name').fill('KanTime Healthcare System');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('New Jersy main road #3');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('New');
  await page.getByText('New York', { exact: true }).click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Tro');
  await page.getByText('Troy').click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('561202');
  await page.getByLabel('Make default location').check();
  await page.getByRole('button', { name: 'Add location' }).nth(1).click();
  await page.getByRole('tab', { name: 'Services' }).click();
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('CPT Code').click();
  await page.getByRole('combobox', { name: 'CPT Code' }).fill('90792');
  await page.getByText('90792, Psychiatric diagnostic').click();
  await page.getByLabel('Fee *').click();
  await page.getByLabel('Fee *').fill('50');
  await page.getByLabel('Duration *').click();
  await page.getByLabel('Duration *').fill('5');
  await page.getByLabel('Make default service').check();
  await page.getByRole('button', { name: 'Add service' }).nth(1).click();
  await page.waitForTimeout(6000);
  //   Scheduler Calender 
  await page.locator('p').filter({ hasText: /^Calendar$/ }).click();

  // try {
  //   await page.locator('div').filter({ hasText: /^Currently accepting appointments$/ }).getByRole('checkbox').click();
 
  //  } catch (error) {
  //    console.log('Failed to find first locator, trying second locator');
  //    await page.locator('#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._acceptingAppointmentsSwitch_ml86x_17 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383').click();
  //  }
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
//   await page.getByRole('combobox', { name: 'Search for insurance payers' }).fill('877');
//   await page.getByRole('option', { name: 'Empire Plan-' }).click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();

  //   Privacy Policy
await page.getByText('Website Privacy Policy').click();
await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
await page.getByText('Terms & Conditions').click();
await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
   });
   test('Forms Tab', async () => {
    // All Forms create Forms
    await page
      .locator('div')
      .filter({ hasText: /^Documents$/ })
      .getByRole('img')
      .click();
    await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  
    // Questionaries Form Code
    await page.getByText('Questionnaire').click();
    await page.getByPlaceholder('type here').click();
    await page.getByPlaceholder('type here').fill('TBS Automation Forms');
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
      .fill('NAme of Client and Tell Your Health Conditions?');
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
      await page.waitForTimeout(6000);
 
    
    await page.getByRole('button', { name: 'Preview' }).nth(1).click();
    await page.getByRole('button').first().click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
  
    // Action in Forms
    
    await page.locator('div').filter({ hasText: /^TBS Automation Forms$/ }).getByTestId('MoreVertIcon').click();
  
    await page.getByRole('menuitem', { name: 'Preview' }).click();
    await page.locator('.MuiButtonBase-root').first().click();
  
  
    await page.locator('div').filter({ hasText: /^TBS Automation Forms$/ }).getByTestId('MoreVertIcon').click();
  
    await page.getByRole('menuitem', { name: 'Rename' }).click();
    await page.getByPlaceholder('type here').clear();
    await page.getByPlaceholder('type here').fill('Supervisor Automation Forms');
    await page.reload();
    await page.waitForTimeout(1000);
    
    await page.locator('div').filter({ hasText: /^TBS Automation Forms$/ }).getByTestId('MoreVertIcon').click();
  
    await page.getByRole('menuitem', { name: 'Edit' }).click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();
    
    await page.getByRole('button', { name: 'Create new' }).nth(1).click();
    // // Consent Form
    await page.getByText('Consent form', { exact: true }).click();
    await page.getByPlaceholder('type here').click();
    await page.getByPlaceholder('type here').fill('TBS Consent Form');
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
    await page.getByPlaceholder('type here').fill('TBS Automation Testing');
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
    await page.getByPlaceholder('type here').fill('TBS Treatement Plan');
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
    await page.getByPlaceholder('type here').fill('TBS Assesment Form');
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
  
    // Intake Pacakge
    await page.getByRole('button', { name: 'My intake packet' }).nth(1).click();
    await page.getByRole('button', { name: 'Add new' }).nth(1).click();
    await page.getByRole('tab', { name: 'My Forms' }).click();
    await page.getByLabel('Select forms').click();
    await page
      .getByRole('combobox', { name: 'Select forms' })
      .fill('TBS Automation Forms');
    await page
      .getByRole('option', { name: 'TBS Automation Forms' })
      .click();
    await page.getByRole('button', { name: 'Add' }).nth(1).click();
    await page.waitForTimeout(6000);
    await page.reload();
    await page.waitForTimeout(2000);
  
    await page.getByRole('tab', { name: 'Minor' }).click();
    await page.getByRole('button', { name: 'Add new' }).nth(1).click();
    await page.getByRole('tab', { name: 'My Forms' }).click();
    await page.getByLabel('Select forms').click();
    await page
      .getByRole('combobox', { name: 'Select forms' })
      .fill('TBS Consent Form');
    await page
      .getByRole('option', { name: 'TBS Consent Form' })
      .click();
    await page.getByRole('button', { name: 'Add' }).nth(1).click();
    await page.waitForTimeout(5000);
    await page.reload();
    await page.waitForTimeout(2000);
  
    await page.getByRole('button', { name: 'Add new' }).nth(1).click();
    await page.getByRole('tab', { name: 'My Forms' }).click();
    await page.getByLabel('Select forms').click();
    await page
      .getByRole('combobox', { name: 'Select forms' })
      .fill('TBS Automation Forms');
    await page
      .getByRole('option', { name: 'TBS Automation Forms' })
      .click();
    await page.getByRole('button', { name: 'Add' }).nth(1).click();
    await page.waitForTimeout(5000);
    await page.reload();
    await page.waitForTimeout(2000);
  
    await page.getByRole('tab', { name: 'Couple' }).click();
    await page.getByRole('button', { name: 'Add new' }).nth(1).click();
    await page.getByRole('tab', { name: 'My Forms' }).click();
    await page.getByLabel('Select forms').click();
    await page
      .getByRole('combobox', { name: 'Select forms' })
      .fill('TBS Automation Forms');
    await page
      .getByRole('option', { name: 'TBS Automation Forms' })
      .click();
    await page.getByRole('button', { name: 'Add' }).nth(1).click();
    await page.waitForTimeout(5000);
    await page.reload();
    await page.waitForTimeout(2000);
  
    await page.getByRole('button', { name: 'Add new' }).nth(1).click();
    await page.getByRole('tab', { name: 'My Forms' }).click();
    await page.getByLabel('Select forms').click();
    await page
      .getByRole('combobox', { name: 'Select forms' })
      .fill('TBS Consent Form');
    await page
      .getByRole('option', { name: 'TBS Consent Form' })
      .click();
    await page.getByRole('button', { name: 'Add' }).nth(1).click();
    await page.waitForTimeout(5000);
    await page.reload();
    await page.waitForTimeout(2000);
    await page.getByTestId('ArrowBackRoundedIcon').click();
    try {
      await page.locator('div').filter({ hasText: /^Settings$/ }).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
       await page.getByText('Settings').click();
    }

  });

  // test('Message Tab', async () => {
  //   //   Messages Box
  //   await page.locator('div').filter({ hasText: /^Messages$/ }).getByRole('img').click();
  //   await page.waitForTimeout(5000);
  //   await page.getByTestId('KeyboardArrowDownIcon').click();
  //   await page.getByRole('menuitem', { name: 'Team' }).click();
  //   await page.getByTestId('message-input').fill('Hi Therapist 1 How are u ');
  //   await page.getByTestId('SendOutlinedIcon').click();
  //   await page.waitForTimeout(3000);
  //   await page.getByRole('img', { name: 'logo' }).click();
  //   await page.waitForTimeout(1000);
  
  // });

test('Create Clients', async () => {
await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
await page.getByRole('menuitem', { name: 'Create client' }).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Colin');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Das');
  await page.getByLabel('Email*').click();
  //
  const Bookinginbox1 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox1!);

  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
  await page.waitForTimeout(7000);

});
test('Create Appoinment', async () => {
  // Create Appoinments
  try {
    await page.locator('div').filter({ hasText: /^Calendar$/ }).first().click();
} catch (error) {
  console.log('Failed to find first locator, trying second locator');
  await page.getByText('Calendar').first().click();
}
  await page.reload();
  await page.getByRole('button', { name: 'Month' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('div').filter({ hasText: /^19$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Colin (C2)' }).first().click();
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
  await page.locator('div').filter({ hasText: /^09$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Colin (C2)' }).first().click();
  await page.waitForTimeout(10000);
  await page.getByLabel('Select service *').click();
  await page.getByText('Developmental Testing, ...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('New every day testing');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
});

test('Client File', async () => {
  //  Client file
  await page
    .locator('div')
    .filter({ hasText: /^Clients$/ })
    .getByRole('img')
    .click();
  await page.getByText('Colin Das').click();

  // Info and Settings
  await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Colin');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Das');
  await page.getByLabel('Pronouns').click();
  await page.getByText('She/They').click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

  //  Payment tab
  await page.getByRole('tab', { name: 'Payment' }).click();
  // await page.getByLabel('Insurance').check();

  // Logic For Fail Locator
  // try {
  //   await page.getByLabel('Client\'s spouse').check();

  // } catch (error) {
  //   console.log('Failed to find first locator, trying second locator');
  //   await page.getByText('Other').click();
  // }
  // // await page.getByLabel('Choose date').first().click();
  // // await page.getByLabel('calendar view is open, switch').click();
  // // await page.getByRole('button', { name: '2000', exact: true }).click();
  // // await page.getByLabel('Previous month').click();
  // // await page.waitForTimeout(2000);
  // // await page.getByLabel('Previous month').click();
  // // await page.waitForTimeout(2000);
  // // await page.getByLabel('Previous month').click();
  // // await page.waitForTimeout(2000);
  // // await page.getByLabel('Previous month').click();
  // // await page.waitForTimeout(2000);
  // // await page.getByLabel('Previous month').click();
  // // await page.waitForTimeout(2000);
  // // await page.getByLabel('Previous month').click();
  // // await page.waitForTimeout(2000);
  // // await page.getByLabel('Previous month').click();
  // // await page.waitForTimeout(2000);
  // // await page.getByRole('gridcell', { name: '1', exact: true }).first().click();
  // // await page.waitForTimeout(2000);
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
  // await page.getByLabel('Insurance Company').fill('877');
  // await page.getByRole('option', { name: 'Empire Plan-' }).click();
  // await page.getByLabel('Member ID').click();
  // await page.getByLabel('Member ID').fill('GHR345');
  // await page.getByLabel('Group ID').click();
  // await page.getByLabel('Group ID').fill('GGH3');
  // await page.getByLabel('Plan ID').click();
  // await page.getByLabel('Plan ID').fill('KKH45');
  // // await page.getByPlaceholder('MM/DD/YYYY').first().click();
  // // await page.getByPlaceholder('MM/DD/YYYY').first().fill('01/01/1999');
  // // await page.waitForTimeout(3000);
  // await page.getByRole('button', { name: 'Save' }).nth(1).click();
  // await page.waitForTimeout(3000);
  
  // Files tab
  await page.getByRole('tab', { name: 'Files' }).click();
  await page.getByRole('button', { name: 'Request upload' }).nth(1).click();
  await page.getByLabel('Enter file name').click();
  await page.getByLabel('Enter file name').fill('test');
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.getByLabel('Enter file name').nth(1).click();
  await page.getByLabel('Enter file name').nth(1).fill('test1');
  await page.getByRole('button', { name: 'Request' }).nth(1).click();
  await page
    .locator('div')
    .filter({ hasText: /^Basic InfoIndividual$/ })
    .getByRole('button')
    .click();

  // Diagnosis tab
  await page.getByRole('tab', { name: 'Diagnosis' }).click();
  await page.getByRole('button', { name: 'Add', exact: true }).nth(3).click();
  await page.getByLabel('Code').click();
  await page.getByRole('combobox', { name: 'Code' }).fill('F01A0');
  await page.getByText('F01A0').click();
  await page.getByRole('button', { name: 'Add diagnosis' }).nth(1).click();

  // Notes Section
  await page.getByRole('tab', { name: 'Notes' }).click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByRole('tab', { name: 'Personal' }).click();
  await page.getByText('Progress notes').click();
  
  // Stage
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('TBS Automation');
  
  await page.locator('div').filter({ hasText: /^TBS Automation Testing$/ }).click();
  await page.getByPlaceholder('Enter your response here').first().click();
  await page
    .getByPlaceholder('Enter your response here')
    .first()
    .fill('Rajesh');
  await page.getByPlaceholder('Enter your response here').nth(1).click();
  await page.getByPlaceholder('Enter your response here').nth(1).fill('Good');

  await page.getByRole('checkbox', { name: 'option1' }).check();
  await page
    .locator('div')
    .filter({
      hasText:
        /^5Client CPT code\? \*Enter your response hereEnter your response here$/,
    })
    .getByLabel('Enter your response here')
    .click();
  await page
    .locator('div')
    .filter({
      hasText:
        /^5Client CPT code\? \*Enter your response hereEnter your response here$/,
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
  // Create Appoinment
  await page.getByRole('tab', { name: 'Sessions' }).click();
  await page.getByRole('button', { name: 'Add' }).nth(3).click();
  await page
    .getByRole('menuitem', { name: 'Appointment' })
    .getByRole('img')
    .click();
    await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(3000);

  
});

// test('Insurance Tab', async () => {
//   await page
//     .locator('div')
//     .filter({ hasText: /^Insurance$/ })
//     .getByRole('img')
//     .click();
//   await page.getByRole('button', { name: 'Select all' }).nth(1).click();
//   await page.getByRole('button', { name: 'Auto create claim' }).nth(1).click();
//   await page.getByRole('tab', { name: 'Claims' }).click();
//   await page.getByRole('button', { name: 'Created' }).click();
//   await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
//   await page.waitForTimeout(3000);
//   try {
//     await page.getByText('60054- Aetna').click();
//    } catch (error) {
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
    
//   });
  test('Intake tab', async () => {
    await page.locator('div').filter({ hasText: /^Referrals$/ }).getByRole('img').click();
    await page.getByRole('button', { name: 'Create Lead' }).nth(1).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Prasad');
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
    await page.getByPlaceholder('Search by name').fill('Prasad Lead');
    await page.getByPlaceholder('Search by name').press('Enter');
    await page.waitForTimeout(2000);
    await page.locator('.MuiInputAdornment-root > .MuiButtonBase-root').click();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').press('Enter');
    await page.waitForTimeout(2000);
    // Lead File
    await page.getByRole('cell', { name: 'Prasad Lead' }).click();
    await page.getByRole('tab', { name: 'Basic Information' }).click();
    await page.getByLabel('Sex').click();
    await page.getByRole('option', { name: 'Male', exact: true }).click();
    await page.getByLabel('Member ID').click();
    await page.getByLabel('Member ID').fill('GAH23');
    await page.getByLabel('Name on Card').click();
    await page.getByLabel('Name on Card').fill('Rajesh');
    await page.getByLabel('Payer ID').click();
    await page.getByLabel('Payer ID').fill('BDJSB546');
    // await page.getByLabel('Insurance Company').click();
    // await page.getByRole('combobox', { name: 'Insurance Company' }).fill('abso');
    // await page.getByText('68055- Absolute Total Care').click();
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

  });
  test('TaskBoard Widget Flows', async () => {

    await page.locator('div').filter({ hasText: /^Tasks$/ }).getByRole('img').click();
    await page.getByRole('heading', { name: 'List View' }).click();
    await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
    await page.getByPlaceholder('Task Name').click();
    await page.getByPlaceholder('Task Name').fill('TBI Automation Task');
    await page.locator('div').filter({ hasText: /^Task Description$/ }).click();
    await page.getByPlaceholder('Add Description').fill('Testing Taskboard with Owner role');
    await page.getByRole('button', { name: 'user icon Add Subtask' }).click();
    await page.getByPlaceholder('Add subtask').click();
    await page.getByPlaceholder('Add subtask').fill('Therapist Subtask 1');
    await page.getByRole('button', { name: 'user icon Assign to' }).click();
    await page.locator('span').filter({ hasText: 'Therapist 1' }).getByRole('paragraph').click();
    await page.getByRole('banner').getByTestId('priority_flag_image').click();
    await page.getByRole('menuitem', { name: 'Urgent' }).click();
    await page.getByRole('button', { name: 'Task None priority flag' }).click();
    await page.getByRole('menuitem', { name: 'Urgent' }).click();
    await page.getByRole('button', { name: 'Open status_mark_Open' }).click();
    await page.getByText('In Progress').click();
    
    await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
 
    await page.waitForTimeout(5000);
    
      await page.getByText('TBI Automation Task').click();
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
      await page.getByText('TBI Automation Task').click();
      await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();
    
      await page.getByRole('heading', { name: 'Board View' }).click();
      await page.getByText('TBI Automation Task').click();
      await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();
    
      await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
      await page.getByPlaceholder('Task Name').click();
      await page.getByPlaceholder('Task Name').fill('TBI Board View Task');
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
    test('CombinedRole Dashboard', async () => {
      await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
      await page.getByRole('menuitem', { name: 'Create appointment' }).click();
      await page.getByLabel('Select client profile*').click();
      await page.getByRole('option', { name: 'Colin (C2)' }).first().click();
      await page.waitForTimeout(10000);
      await page.getByLabel('Select service *').click();
      await page.getByText('Family psychotherapy...').click();
      await page.getByPlaceholder('Enter text here').click();
      await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
      await page.waitForTimeout(1000);
      
    await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
    await page.getByLabel('Clinician').first().click();
    await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Therapist' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Supervisor' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'All' }).getByRole('checkbox').check();
    await page.reload();
    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Status ​', exact: true }).click();
    await page.getByRole('option', { name: 'Open' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'In Progress' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'In Review' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Completed' }).getByRole('checkbox').check();
    await page.reload();
    await page.waitForTimeout(3000);
    
     // Taskboard Flows
     await page.getByText('TBI Automation Task').click();
     await page.getByRole('button', { name: 'In Progress' }).click();
await page.getByText('In Review').click();
await page.getByRole('button', { name: 'assignee icon' }).click();
await page.locator('p').filter({ hasText: 'Biller 1' }).click();
await page.getByRole('button', { name: 'Save changes' }).nth(1).click();
await page.waitForTimeout(4000);

// Check the insurance Eligiability
await page.getByLabel('Leads').click();
await page.getByRole('option', { name: 'Clients' }).click();
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
  test('Global search', async () => {
    try {
      await page.locator('div').filter({ hasText: /^Settings$/ }).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
       await page.getByText('Settings').click();
    }
        await page.getByText('Clinician settings').click();
        await page.waitForTimeout(5000);
    await page.getByText('Booking widget').click();
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search here').click();
    await page.getByRole('tab', { name: 'Client' }).click();
    await page.getByPlaceholder('Search here').click();
    await page.getByPlaceholder('Search here').fill('Rajesh');
    await page.getByPlaceholder('Search here').press('Enter');
    await page.waitForTimeout(2000);
    await page.getByRole('heading', { name: 'Rajesh (T1)' }).click();
    await page.waitForTimeout(2000);
    // await page.locator('._nameDetails_111x7_20 > .MuiButtonBase-root').click();
    try {
      await page.locator('div').filter({ hasText: /^Settings$/ }).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
       await page.getByText('Settings').click();
    }
     
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
