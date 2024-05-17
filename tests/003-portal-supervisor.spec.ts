import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { IEmail, readEmails } from '../localemails.js/emails';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  const myEmails: IEmail = await readEmails();

  if (!myEmails?.supervisorEmail?.length) {
    throw new Error(`SupervisorEmail not present returning...`);
  }
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test('Supervisor login and onboarding ', async ({ request }) => {
  const myEmails: IEmail = await readEmails();

  const data = await generatePasswordlessLoginLink({
    email: myEmails.supervisorEmail!,
    request: request,
  });
  await page.goto(data!);

  // Onbaording flows for Supervisor
 
await page.getByPlaceholder('Enter first name').click();
await page.getByPlaceholder('Enter first name').fill('Supervisor ');
await page.getByPlaceholder('Enter last name').click();
await page.getByPlaceholder('Enter last name').fill('1');
await page.getByPlaceholder('Enter phone').click();
await page.getByPlaceholder('Enter phone').fill('(846) 534-65831');
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
  await page
    .locator('div')
    .filter({ hasText: /^Settings$/ })
    .getByRole('img')
    .click();
  // Associate Mangaments
  await page.getByText('Associate management').click();
  // // await page.getByRole('button', { name: 'Remove' }).nth(1).click();
  
  await page.getByRole('button', { name: 'Add Associate' }).nth(1).click();
  await page.getByLabel('Select team member').click();
  await page.getByText('Therapist 1').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();

  // Calender Day start
  await page
    .locator('p')
    .filter({ hasText: /^Calendar$/ })
    .click();
 
    
  try {
    await page.locator('div').filter({ hasText: /^Currently accepting appointments$/ }).getByRole('checkbox').click();
 
   } catch (error) {
     console.log('Failed to find first locator, trying second locator');
     await page.locator('#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._acceptingAppointmentsSwitch_ml86x_17 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383').click();
   }
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();
  await page.getByLabel('Monday').check();
  await page.getByLabel('Tuesday').check();
  await page.getByLabel('Wednesday').check();
  await page.getByLabel('Thursday').check();
  await page.getByLabel('Friday').check();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page
    .locator('p')
    .filter({ hasText: /^Calendar$/ })
    .click();
  await page.getByLabel('Monday').check();
  await page.waitForTimeout(2000);
 //   Privacy Policy
await page.getByText('Website Privacy Policy').click();
await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
await page.getByText('Terms & Conditions').click();
await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
});
test('Message Tab', async () => {
  //   Messages Box
  await page.locator('div').filter({ hasText: /^Messages$/ }).getByRole('img').click();
  await page.getByTestId('KeyboardArrowDownIcon').click();
  await page.getByRole('menuitem', { name: 'Team' }).click();
  await page.getByTestId('message-input').fill('Hi Therapist 1 How are u ');
  await page.getByTestId('SendOutlinedIcon').click();
  await page.waitForTimeout(3000);
  await page.getByRole('img', { name: 'logo' }).click();
  await page.waitForTimeout(1000);

});
test('Create Appoinment', async () => {
  // Create Appoinments
  await page
    .locator('div')
    .filter({ hasText: /^CalendarClients$/ })
    .getByRole('img')
    .first()
    .click();
  await page.getByRole('button', { name: 'Month' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('div').filter({ hasText: /^20$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Rajesh (T1)' }).first().click();
  await page.getByLabel('Select service *').click();
  await page.getByText('Developmental Testing, ...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('New every day testing');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(1000);
  //Past Date Appoinments
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.locator('div').filter({ hasText: /^04$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Rajesh (T1)' }).first().click();
  await page.getByLabel('Select service *').click();
  await page.getByText('Developmental Testing, ...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('New every day testing');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  // Logic For Fail Locator
       try {
        await page.locator('._btns_14sej_85 > button').click();
      } catch (error) {
        console.log('Failed to find first locator, trying second locator');
        await page.getByRole('button').nth(2).click();
      }
      await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create appointment' }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Rajesh (T1)' }).first().click();
  await page.getByLabel('Select service *').click();
  await page.getByText('Family psychotherapy...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(3000);
  await page.reload();
});


test('Client File', async () => {
  // Client file
  await page
    .locator('div')
    .filter({ hasText: /^Clients$/ })
    .getByRole('img')
    .click();
  await page.getByText('Rajesh Das').click();

  // Info and Settings
  await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Rajesh');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Das');
  await page.getByLabel('Pronouns').click();
  await page.getByText('She/They').click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page
    .locator('div')
    .filter({ hasText: /^Basic InfoIndividual$/ })
    .getByRole('button')
    .click();

  // Create Appoinment
  await page.getByRole('button', { name: 'Add' }).nth(3).click();
  await page
    .getByRole('menuitem', { name: 'Appointment' })
    .getByRole('img')
    .click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.locator('._nameDetails_111x7_20 > .MuiButtonBase-root').click();
  await page.waitForTimeout(1000);
  await page.waitForTimeout(1000);
  
    // Info and Settings
    await page.getByText('Alfred Arnoldson').click();
    await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
    await page.getByRole('tab', { name: 'Insurance Eligibility' }).click();
    await page.waitForTimeout(6000);
    await page.getByRole('button', { name: 'Verify Benefits' }).nth(1).click();
    await page.waitForTimeout(8000);
    await page.getByRole('button', { name: 'View Log' }).nth(1).click();
    await page.locator('._header_q5khp_1 > .MuiButtonBase-root').click();
    await page.getByRole('button', { name: 'Share' }).nth(1).click();
  await page.getByLabel('Select Team Member').click();
  await page.getByRole('combobox', { name: 'Select Team Member' }).fill('Own');
  
  try {
    await page.getByText('Owner Team').click();
  }
  catch (error) {
    console.log('Failed to find first locator, trying second locator');
    await page.getByRole('option', { name: 'icon Owner Team' }).click();
  }

  
  await page.getByPlaceholder('Type message here').click();
  await page.getByPlaceholder('Type message here').fill('Hey Testing name');
  await page.getByRole('button', { name: 'Share' }).nth(1).click();
  await page.waitForTimeout(2000);
    
    await page
    .locator('div')
    .filter({ hasText: /^Basic InfoIndividual$/ })
    .getByRole('button')
    .click();
    await page.locator('._nameDetails_111x7_20 > .MuiButtonBase-root').click();
});

test('Supervision Flow', async () => {
  // Supervision Flows
  try {
    await page.locator('div').filter({ hasText: /^Supervision$/ }).getByRole('img').click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
    await page
      .locator('#root > div._layout_10ldc_1 > div._sideBar_148j7_1 > div:nth-child(13) > div._sideBarItem_148j7_34._active_148j7_88')
              .click();
              
  }
  await page.getByText('Therapist Automation Testing').first().click();
  await page.getByRole('button', { name: 'Add signature' }).nth(1).click();
  await page.getByPlaceholder('Sign').click();
  await page.getByPlaceholder('Sign').fill('Supervisor signed');
  await page.getByRole('button', { name: 'Sign' }).nth(1).click();
  await page
    .locator('div')
    .filter({ hasText: /^Therapist Automation Testing$/ })
    .getByRole('button')
    .click();
  
});
test('TaskBoard Widget Flows', async () => {

  await page.locator('div').filter({ hasText: /^Tasks$/ }).getByRole('img').click();
  await page.getByRole('heading', { name: 'List View' }).click();
  await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
  await page.getByPlaceholder('Task Name').click();
  await page.getByPlaceholder('Task Name').fill('Supervisor Automation Task');
  await page.locator('div').filter({ hasText: /^Task Description$/ }).click();
  await page.getByPlaceholder('Add Description').fill('Testing Taskboard with Owner role');
  await page.getByRole('button', { name: 'user icon Add Subtask' }).click();
  await page.getByPlaceholder('Add subtask').click();
  await page.getByPlaceholder('Add subtask').fill('Supervisor Subtask 1');
  await page.getByRole('button', { name: 'user icon Assign to' }).click();
  await page.locator('span').filter({ hasText: 'Supervisor 1' }).getByRole('paragraph').click();
  await page.getByRole('banner').getByTestId('priority_flag_image').click();
  await page.getByRole('menuitem', { name: 'Urgent' }).click();
  await page.getByRole('button', { name: 'Task priority flag' }).click();
  await page.getByRole('menuitem', { name: 'Urgent' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByText('InProgress').click();
  await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
 
  await page.waitForTimeout(5000);
  
    await page.getByText('Supervisor Automation Task').click();
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
    await page.getByText(' Supervisor Automation Task').click();
    await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();
  
    await page.getByRole('heading', { name: 'Board View' }).click();
    await page.getByText('Supervisor Automation Task').click();
    await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();
  
    await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
    await page.getByPlaceholder('Task Name').click();
    await page.getByPlaceholder('Task Name').fill('Supervisor Board View Task');
    await page.getByPlaceholder('Add Description').click();
    await page.getByPlaceholder('Add Description').fill('Testing Board view task');
    await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
   
    await page.locator('._header_1k7mt_11 > button').first().click();
    await page.getByRole('menuitem', { name: 'Set Priority' }).getByRole('img').click();
    await page.getByRole('menuitem', { name: 'Urgent' }).getByRole('img').click();
    
    
  });
  test('Supervisor  Dashboard', async () => {
    // Create Appoinment Button( top Bar)
 
      await page.locator('._btns_14sej_85 > button').click();
      await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create appointment' }).click();
  
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Rajesh (T1)' }).first().click();
  await page.getByLabel('Select service *').click();
  await page.getByText('Family psychotherapy...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
  await page.waitForTimeout(3000);
  await page.getByText('Therapist').first().click();
  await page.getByText('invoice').click();
  await page.getByTestId('CancelIcon').click();
  await page.locator('._appointmentHeader_15uwk_6 > .MuiButtonBase-root').click();
  await page.waitForTimeout(3000);

  
  // Taskboard Flows
  await page.getByText('Supervisor Automation Task').click();
  await page.getByRole('button', { name: 'InProgress' }).click();
await page.getByText('InReview').click();
await page.getByRole('button', { name: 'assignee icon' }).click();
await page.locator('p').filter({ hasText: 'Supervisor 1' }).click();
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
