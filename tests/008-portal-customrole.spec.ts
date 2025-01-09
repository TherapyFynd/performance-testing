import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createNewEmail } from '../helpers/mailsurp';
import {
  BASE_FRONTEND_URL,
  isRunningOnLocal,
  localBaseUrl,
} from '../localemails.js/const';
import { IEmail, readEmails, setEmails } from '../localemails.js/emails';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  const myEmails: IEmail = await readEmails();
  //console.log(myEmails);
  if (!myEmails?.customroleEmail?.length) {
    throw new Error(`customroleEmail not present returning...`);
  }
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe('All CustomRole Test case ', () => {

test('CustomRole login and  onboarding ', async ({ request }) => {
    let myEmails: IEmail = await readEmails();
      const data = await generatePasswordlessLoginLink({
        email: myEmails.customroleEmail!,
       
        request: request,
      });
      await page.goto(data!);
 
        // Onbaording flows for Custom Practice Manager
await page.getByPlaceholder('Enter first name').click();
await page.getByPlaceholder('Enter first name').fill('CustomRole');
await page.getByPlaceholder('Enter last name').click();
await page.getByPlaceholder('Enter last name').fill('1');
await page.getByPlaceholder('Enter phone').click();
await page.getByPlaceholder('Enter phone').fill('(846) 534-65834');
await page.getByRole('button', { name: 'Continue' }).nth(1).click();
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Next' }).nth(1).click();
await page.getByRole('button', { name: 'Next' }).nth(1).click();
await page.getByRole('checkbox').check();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
  await page.waitForTimeout(1000);
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
    await page.getByPlaceholder('Enter first name').fill('CustomRole');
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
    await page.getByLabel('Duration *').fill('15');
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
  

    // Team member invites flows ( Therapist role)
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

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

//   Invite CombineRole 1
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('CombineRole');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('1');
  await page.getByLabel('Email*').click();

  //
  const Bookinginbox2 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox2!);
  let  myEmails = await readEmails();
  await setEmails({ ...myEmails, combinerole1: Bookinginbox2! });
  //console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByLabel('Scheduler').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

  // Invite CombineRole 2
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('CombineRole');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('2');
  await page.getByLabel('Email*').click();

  //
  const Bookinginbox3 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox3!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, combinerole2: Bookinginbox3! });
  //console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByLabel('Biller').check();
  await page.getByLabel('Intake Admin').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();
  

  // Invite Billing section
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Billing');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Section');
  await page.getByLabel('Email*').click();

  //
  const Bookinginbox4 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox4!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, billingsection: Bookinginbox4! });
  //console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Biller').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
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
    // Privacy Policy
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
  await page.getByPlaceholder('type here').fill('CustomRole Automation Forms');
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
    await page.waitForTimeout(6000);
  
  
  await page.getByRole('button', { name: 'Preview' }).nth(1).click();
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
//  Actions in Forms
await page.locator('div').filter({ hasText: /^CustomRole Automation Forms$/ }).getByTestId('MoreVertIcon').click();
 
  await page.getByRole('menuitem', { name: 'Preview' }).click();
  await page.locator('.MuiButtonBase-root').first().click();

  
  await page.locator('div').filter({ hasText: /^CustomRole Automation Forms$/ }).getByTestId('MoreVertIcon').click();
  await page.getByRole('menuitem', { name: 'Rename' }).click();
  await page.getByPlaceholder('type here').clear();
  await page.getByPlaceholder('type here').fill('Automation Forms');
  await page.reload();
  await page.waitForTimeout(1000);
  
  await page.locator('div').filter({ hasText: /^CustomRole Automation Forms$/ }).getByTestId('MoreVertIcon').click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').click();
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  // // Consent Form
  await page.getByText('Consent form', { exact: true }).click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('CustomRole Consent Automation');
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
  await page.getByPlaceholder('type here').fill('CustomRole Automation Testing');
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
  await page.getByPlaceholder('type here').fill('CustomRole Treatement Plan');
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
  await page.getByPlaceholder('type here').fill('CustomRole Assesment Form');
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
    .fill('CustomRole Automation Forms');
  await page.getByRole('option', { name: 'CustomRole Automation Forms' }).click();
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
    .fill('CustomRole Automation Forms');
  await page.getByRole('option', { name: 'CustomRole Automation Forms' }).click();
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
    .fill('CustomRole Automation Forms');
  await page.getByRole('option', { name: 'CustomRole Automation Forms' }).click();
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
});
test('Create Clients', async () => {
  await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create client' }).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Custom');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Client');
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
  await page.locator('div').filter({ hasText: /07$/ }).click();
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
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.locator('div').filter({ hasText: /^19$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Shiva & Venkatesh (T1)' }).first().click();
  await page.waitForTimeout(10000);
  await page.getByLabel('Select service *').click();
  await page.getByText('Developmental Testing, ...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('New every day testing');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  // Create Appoinment Button( top Bar)
  
});
test('Client File', async () => {
  await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
  await page.getByText('Custom Client').click();
    // Create Appoinment
    await page.getByRole('tab', { name: 'Sessions' }).click();
    await page.getByRole('button', { name: 'Add' }).nth(3).click();
    await page
      .getByRole('menuitem', { name: 'Appointment' })
      .getByRole('img')
      .click();
      await page.waitForTimeout(12000);
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    await page.waitForTimeout(2000);
    // await page.locator('._nameDetails_111x7_20 > .MuiButtonBase-root').click();
});
// test('Message Tab', async () => {
//   //   Messages Box
//   await page.locator('div').filter({ hasText: /^Messages$/ }).getByRole('img').click();
   
//     await page.getByTestId('message-input').fill('Hi Therapist 1 How are u ');
//     await page.getByTestId('SendOutlinedIcon').click();
//     await page.waitForTimeout(3000);
//     await page.getByRole('img', { name: 'logo' }).click();
//     await page.waitForTimeout(1000);
// });
test('TaskBoard Widget Flows', async () => {

  await page.locator('div').filter({ hasText: /^Tasks$/ }).getByRole('img').click();
  await page.getByRole('heading', { name: 'List View' }).click();
  await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
  await page.getByPlaceholder('Task Name').click();
  await page.getByPlaceholder('Task Name').fill('CustomRole Automation Task');
  await page.locator('div').filter({ hasText: /^Task Description$/ }).click();
  await page.getByPlaceholder('Add Description').fill('Testing Taskboard with custom role');
  await page.getByRole('button', { name: 'user icon Add Subtask' }).click();
  await page.getByPlaceholder('Add subtask').click();
  await page.getByPlaceholder('Add subtask').fill('Supervisor Subtask 1');
  await page.getByRole('button', { name: 'user icon Assign to' }).click();
  await page.locator('span').filter({ hasText: 'CustomRole 1' }).getByRole('paragraph').click();
  await page.getByRole('banner').getByTestId('priority_flag_image').click();
  await page.getByRole('menuitem', { name: 'Urgent' }).click();
  await page.getByRole('button', { name: 'Task None priority flag' }).click();
  await page.getByRole('menuitem', { name: 'Urgent' }).click();
  await page.getByRole('button', { name: 'Open status_mark_Open' }).click();
  await page.getByText('In Progress').click();
  await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
  await page.waitForTimeout(5000);
  
    await page.getByText('CustomRole Automation Task').click();
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
    await page.getByText('CustomRole Automation Task').click();
    await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();
  
    await page.getByRole('heading', { name: 'Board View' }).click();
    await page.getByText('CustomRole Automation Task').click();
    await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();
  
    await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
    await page.getByPlaceholder('Task Name').click();
    await page.getByPlaceholder('Task Name').fill('CustomRole Board View Task');
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