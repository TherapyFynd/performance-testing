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
          
      
        
          try {
            await page.locator('div').filter({ hasText: /^Currently accepting appointments$/ }).getByRole('checkbox').click();
         
           } catch (error) {
             console.log('Failed to find first locator, trying second locator');
             await page.locator('#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._acceptingAppointmentsSwitch_ml86x_17 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383').click();
           }
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
        
        try {
          await page.locator('._btns_14sej_85 > button').click();
        } catch (error) {
          console.log('Failed to find first locator, trying second locator');
          await page.getByRole('button').nth(2).click();
        }
      await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
        await page.getByRole('menuitem', { name: 'Create appointment' }).click();
        await page.getByLabel('Select client profile*').click();
        await page.getByRole('option', { name: 'Rakesh (T1)' }).click();
        await page.getByLabel('Select service *').click();
        await page.getByText('Family psychotherapy...').click();
        await page.getByPlaceholder('Enter text here').click();
        await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
        await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
        await page.waitForTimeout(3000);
        await page.reload();
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
        await page.waitForTimeout(2000);
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
test('Insurance Tab', async () => {
  await page.locator('div').filter({ hasText: /^Insurance$/ }).getByRole('img').click();
  await page.getByRole('button', { name: 'Select all' }).nth(1).click();
  await page.getByRole('button', { name: 'Auto create claim' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'Claims' }).click();
  await page.getByRole('button', { name: 'Created' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'View' }).first().click();
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
  await page.waitForTimeout(2000);
 });
test('TaskBoard Widget Flows', async () => {

  await page.locator('div').filter({ hasText: /^Tasks$/ }).getByRole('img').click();
  await page.getByRole('heading', { name: 'List View' }).click();
  await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
  await page.getByPlaceholder('Task Name').click();
  await page.getByPlaceholder('Task Name').fill('Biller Automation Task');
  await page.locator('div').filter({ hasText: /^Task Description$/ }).click();
  await page.getByPlaceholder('Add Description').fill('Testing Taskboard with Owner role');
  await page.getByRole('button', { name: 'user icon Add Subtask' }).click();
  await page.getByPlaceholder('Add subtask').click();
  await page.getByPlaceholder('Add subtask').fill('Biller Subtask 1');
  await page.getByRole('button', { name: 'user icon Assign to' }).click();
  await page.locator('span').filter({ hasText: 'Biller 1' }).getByRole('paragraph').click();
  await page.getByRole('banner').getByTestId('priority_flag_image').click();
  await page.getByRole('menuitem', { name: 'Urgent' }).click();
  await page.getByRole('button', { name: 'Task priority flag' }).click();
  await page.getByRole('menuitem', { name: 'Urgent' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByText('InProgress').click();
  try {
    await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
    await page.locator('body > div.MuiDialog-root.MuiModal-root.css-19er4w > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div > div > div > footer > button:nth-child(2) > button > span > span._label_ns5gx_15').click();
  }
  await page.waitForTimeout(5000);
  
    await page.getByText('Biller Automation Task').click();
    // await page.getByRole('button', { name: 'user icon Add Subtask' }).click();
    await page.getByPlaceholder('Add comment').click();
    await page.getByPlaceholder('Add comment').fill('Hi Man How are U');
    await page.getByRole('button', { name: 'Send' }).nth(1).click();
    await page.getByRole('button', { name: 'Save changes' }).nth(1).click();
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
    await page.getByText('Biller Automation Task').click();
    await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();
  
    await page.getByRole('heading', { name: 'Board View' }).click();
    await page.getByText('Biller Automation Task').click();
    await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();
  
    await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
    await page.getByPlaceholder('Task Name').click();
    await page.getByPlaceholder('Task Name').fill('Biller Board View Task');
    await page.getByPlaceholder('Add Description').click();
    await page.getByPlaceholder('Add Description').fill('Testing Board view task');
    await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
   
    await page.locator('._header_1k7mt_11 > button').first().click();
    await page.getByRole('menuitem', { name: 'Set Priority' }).getByRole('img').click();
    await page.getByRole('menuitem', { name: 'Urgent' }).getByRole('img').click();
    await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
    
  });
  test('Biller role Dashboard', async () => {
    await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
    await page.getByLabel('Clinician').first().click();
    await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Therapist' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Supervisor' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'All' }).getByRole('checkbox').check();
     await page.reload();
    await page.getByLabel('Status').click();
    await page.getByRole('option', { name: 'Created' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Submitted' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Sent' }).getByRole('checkbox').check();
    await page.reload();
    
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
        '#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._generalSettingsTab_18vvz_1 > div > div._flexContainer_18vvz_4 > div._userNameDetailsContainer_18vvz_8 > div > div._imagePicker_18vvz_17 > input[type=file]'
      )
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