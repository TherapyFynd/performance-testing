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
test.describe('All BillerRole Test case ', () => {
test('Biller  login and  onboarding ', async ({ request }) => {
  let myEmails: IEmail = await readEmails();
    const data = await generatePasswordlessLoginLink({
      email: myEmails.billerEmail!,
      
      request: request,
    });

    // await page.goto(data!);
   
      await page.goto(data!);
 
  // Onbaording flows for Practice Manager
await page.waitForTimeout(5000);
await page.getByPlaceholder('Enter first name').click();
await page.getByPlaceholder('Enter first name').fill('Biller ');
await page.getByPlaceholder('Enter last name').click();
await page.getByPlaceholder('Enter last name').fill('1');
await page.getByPlaceholder('Enter phone').click();
await page.getByPlaceholder('Enter phone').fill('(846) 534-65833');
await page.getByRole('button', { name: 'Continue' }).nth(1).click();
await page.waitForTimeout(2000);
await page.getByRole('checkbox').check();
   await page.waitForTimeout(1000);
   await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
   await page.waitForTimeout(1000);
   await page.getByRole('checkbox').check();
   await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
   await page.waitForTimeout(6000);
   await page.getByRole('button', { name: 'Availability' }).nth(1).click();
   });
   test('Settings Tab', async () => {
    // Invite Team Member (Therapist 1)
    await page.getByText('Team members').first().click();
    // Billing Tab
  // await page.locator('p').filter({ hasText: 'Billing' }).click();
  // await page.getByRole('tab', { name: 'Insurance' }).click();
  // await page.getByText('Payers').click();
  // await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  // await page.getByLabel('Search for insurance payers').click();
  // await page.getByLabel('Search for insurance payers').fill('BOON');
  // await page.getByText('74238- BoonChapman Benefit').click();
  // await page.getByRole('button', { name: 'Add' }).nth(1).click();

//   Privacy Policy
await page.getByText('Website Privacy Policy').click();
await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
await page.getByText('Terms & Conditions').click();
await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
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
        await page.locator('div').filter({ hasText: /^25$/ }).click();
        await page.getByLabel('Select client profile*').click();
        await page.getByRole('option', { name: 'Rakesh (T1)' }).click();
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
        await page.locator('div').filter({ hasText: /^15$/ }).click();
        await page.getByLabel('Select client profile*').click();
        await page.getByRole('option', { name: 'Rakesh (T1)' }).click();
        await page.waitForTimeout(10000);
        await page.getByLabel('Select service *').click();
        await page.getByText('Developmental Testing, ...').click();
        await page.getByPlaceholder('Enter text here').click();
        await page.getByPlaceholder('Enter text here').fill('New every day testing');
        await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
        await page.waitForTimeout(1000);
        // Create Appoinment Button( top Bar)
     
        
      });
      test('Client File', async () => {
        await page
          .locator('div')
          .filter({ hasText: /^Clients$/ })
          .getByRole('img')
          .click();
          await page.getByText('Rakesh Das').click();
          await page.waitForTimeout(5000);
          await page.getByTestId('ArrowDropDownIcon').locator('path').click();
          await page.getByRole('heading', { name: 'Rakesh (T1)' }).click();
          await page.waitForTimeout(2000);
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
    await page.waitForTimeout(11000);
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByText('Dashboard').click();
  await page
  .locator('div')
  .filter({ hasText: /^Clients$/ })
  .getByRole('img')
  .click();
  await page.waitForTimeout(2000);
  await page.getByText('Rajesh Das').click();
   // Create Appoinment
   
   await page.getByRole('button', { name: 'Add' }).nth(3).click();
   await page
     .getByRole('menuitem', { name: 'Appointment' })
     .getByRole('img')
     .click();
     await page.waitForTimeout(10000);
   await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  //  await page.locator('._nameDetails_111x7_20 > .MuiButtonBase-root').click();
  //  await page.waitForTimeout(5000);
});
// test('Insurance Tab', async () => {
//   await page.locator('div').filter({ hasText: /^Insurance$/ }).getByRole('img').click();
//   await page.waitForTimeout(3000);
//   await page.getByRole('tab', { name: 'Claims' }).click();
//   await page.getByRole('tab', { name: 'Unclaimed appointments' }).click();
//   await page.waitForTimeout(2000);
//   await page.getByRole('button', { name: 'Select all' }).nth(1).click();
//   await page.getByRole('button', { name: 'Auto create claim' }).nth(1).click();
//   await page.waitForTimeout(4000);
//   await page.getByRole('tab', { name: 'Claims' }).click();
//   await page.getByRole('button', { name: 'Created' }).click();
//   await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
//   await page.waitForTimeout(3000);
//   try {
//     await page.getByText('68055- Absolute Total Care').click();
    
//    } catch (error) {
//      console.log('Failed to find first locator, trying second locator');
//      await page.locator('td:nth-child(9)').first().click();
//    }
//   await page.waitForTimeout(1000);
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
//  });

//  test('Insurance Eligibility ', async () => {
//   await page.locator('div').filter({ hasText: /^Insurance Eligibility$/ }).click();
//   await page.getByLabel('Status').click();
//   await page.getByRole('option', { name: 'Pending' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByRole('combobox', { name: 'Status' }).click();
//   await page.getByLabel('Clear').click();

//   await page.getByRole('button', { name: 'Group by' }).nth(1).click();
//   await page.getByText('Verification Status', { exact: true }).click();
//   await page.getByRole('button', { name: 'Group by: Status' }).nth(1).click();
//   await page.getByText('Assigned To', { exact: true }).click();
//   await page.getByRole('button', { name: 'Group by: Assigned to' }).nth(1).click();
//   // await page.getByText('Insurance').nth(2).click();
//   // await page.getByRole('button', { name: 'Group by: Insurance' }).nth(1).click();
//   // await page.getByText('None').click();

//   await page.getByLabel('Status').click();
//   await page.getByRole('option', { name: 'Success' }).click();
//   await page.waitForTimeout(4000);
//   await page.getByLabel('Clear').click();

// // client tabs
//   await page.getByRole('tab', { name: 'Clients' }).click();
//   await page.getByLabel('Clinician').click();
//   await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
//   await page.waitForTimeout(2000);
//   await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').uncheck();
//   await page.waitForTimeout(2000);
//   await page.getByRole('option', { name: 'Therapist' }).getByRole('checkbox').check();
//   await page.waitForTimeout(2000);
//   await page.getByRole('option', { name: 'Therapist' }).getByRole('checkbox').uncheck();
//   await page.waitForTimeout(2000);
//   await page.getByRole('combobox', { name: 'Clinician' }).click();

//   await page.getByLabel('Status').click();
//   await page.getByRole('option', { name: 'Failed' }).getByRole('checkbox').check();
//   await page.waitForTimeout(2000);
//   await page.getByRole('option', { name: 'Failed' }).getByRole('checkbox').uncheck();
//   await page.getByRole('option', { name: 'Success' }).getByRole('checkbox').check();
//   await page.waitForTimeout(2000);
//   await page.getByRole('option', { name: 'Success' }).getByRole('checkbox').uncheck();
//   await page.getByRole('option', { name: 'Pending' }).getByRole('checkbox').check();
//   await page.waitForTimeout(2000);
//   await page.getByRole('option', { name: 'Pending' }).getByRole('checkbox').uncheck();
//   await page.getByRole('combobox', { name: 'Status' }).click();

 
//   await page.getByRole('button', { name: 'Group by' }).nth(1).click();
//   await page.getByText('Verification Status', { exact: true }).click();
//   await page.getByRole('button', { name: 'Group by: Status' }).nth(1).click();
//   await page.getByText('None').click();

// });
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
  await page.getByRole('button', { name: 'Task None priority flag' }).click();
  await page.getByRole('menuitem', { name: 'Urgent' }).click();
  await page.getByRole('button', { name: 'Open status_mark_Open' }).click();
  await page.getByText('In Progress').click();
  await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
   await page.waitForTimeout(5000);
  
    await page.getByText('Biller Automation Task').click();
    
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
    try {
      await page.locator('div').filter({ hasText: /^Settings$/ }).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
       await page.getByText('Settings').click();
    }    
  });
  test('Biller role Dashboard', async () => {
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

    await page.locator('div').filter({ hasText: /^1 Status$/ }).click();
    await page.getByRole('option', { name: 'All' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'All' }).getByRole('checkbox').uncheck();
    await page.getByRole('option', { name: 'Pending' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Pending' }).getByRole('checkbox').uncheck();
    await page.getByRole('option', { name: 'Success' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Success' }).getByRole('checkbox').uncheck();
    await page.getByRole('option', { name: 'Failed' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Failed' }).getByRole('checkbox').uncheck();
    await page.reload();
    await page.waitForTimeout(3000);

    await page.getByLabel('Leads').click();
    await page.getByRole('option', { name: 'Clients' }).click();
  
    await page.getByLabel('Status').first().click();
    await page.getByRole('option', { name: 'All' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'All' }).getByRole('checkbox').uncheck();
    await page.getByRole('option', { name: 'Pending' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Pending' }).getByRole('checkbox').uncheck();
    await page.getByRole('option', { name: 'Success' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Success' }).getByRole('checkbox').uncheck();
    await page.getByRole('option', { name: 'Failed' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Failed' }).getByRole('checkbox').uncheck();
    await page.reload();
    await page.waitForTimeout(3000);
    await page.getByLabel('Clinician').nth(2).click();
   
    await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').uncheck();
    await page.getByRole('option', { name: 'Therapist' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Therapist' }).getByRole('checkbox').uncheck();
    await page.reload();
    await page.waitForTimeout(3000);
    
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
await page.waitForTimeout(8000);
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