import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createNewEmail } from '../helpers/mailsurp';
import { readEmails, setEmails } from '../localemails.js/emails';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe('All owner Test case ', () => {

test('Owner login and  onboarding ', async ({ request }) => {
  const inbox = await createNewEmail();

  const data = await generatePasswordlessLoginLink({
    email: inbox!,
    request: request,
  });

  // goto page
  await page.goto(data!);

  // Onboarding Flows for Owner

  // Onboarding Flows
  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('Owner ');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('Team');
  await page.getByPlaceholder('Enter phone').click();
  await page.getByPlaceholder('Enter phone').fill('(846) 534-65833');
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByPlaceholder('Enter your practice name').click();
  await page.getByPlaceholder('Enter your practice name').fill('KanTime Healthcare System ');
  await page.getByLabel('Address Line').click();
  await page.getByLabel('Address Line').fill('New York City');
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Street address').click();
  await page.getByPlaceholder('Street address').fill('New Area City ');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('cali');
  await page.getByText('California').click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Azu');
  await page.getByText('Azusa').click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('561202');
  await page.getByPlaceholder('Enter your practice name').click();
  await page.getByPlaceholder('Enter your practice name').fill('KanTime Healthcare System ');
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('Office name').click();
  await page.getByLabel('Office name').fill('KanTime Healthcare System ');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('New area City');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('New york');
  await page.getByText('New York').click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Fre');
  await page.getByText('Freeport').click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('56192');
  await page.getByLabel('Make default location').check();
  await page.getByRole('button', { name: 'Add location' }).nth(1).click();

  await page.getByRole('button', { name: 'Next' }).nth(1).click();

  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('CPT Code').click();
  await page.getByRole('combobox', { name: 'CPT Code' }).fill('90832');
  await page.getByRole('option', { name: '90832, Psychotherapy, 30' }).click();
  await page.getByLabel('Fee *').click();
  await page.getByLabel('Fee *').fill('100');
  await page.getByLabel('Duration *').click();
  await page.getByLabel('Duration *').fill('10');
  await page.getByLabel('Make default service').check();
  await page.getByRole('button', { name: 'Add service' }).nth(1).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
 
  await page.getByLabel('').check();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByLabel('').check();
  await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
});
test('Settings Flows', async () => {
  await page
    .locator('div')
    .filter({ hasText: /^Settings$/ })
    .getByRole('img')
    .click();
  //Clinican Settings Flows
  await page.getByText('Clinician settings').click();
  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('Owner');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('Team');
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
  await page.getByRole('combobox', { name: 'City' }).fill('Ut');
  await page.getByText('Utica').click();
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
  await page.getByLabel('Fee *').fill('10000');
  await page.getByLabel('Duration *').click();
  await page.getByLabel('Duration *').fill('15');
  await page.getByLabel('Make default service').check();
  await page.getByRole('button', { name: 'Add service' }).nth(1).click();
  // Practice Settings
  await page.getByText('Practice settings').click();
  await page.getByLabel('Practice Name').click();
  await page.getByLabel('Practice Name').fill('Mind Simple Hospital');
  await page.getByLabel('About').click();
  await page.getByLabel('About').fill('This Nice company');
  await page.getByPlaceholder('Enter phone').click();
  await page.getByPlaceholder('Enter phone').fill('(975) 734-53565');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

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

  let myEmails = await readEmails();
  await setEmails({ ...myEmails, therapistEmail: Bookinginbox1! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.reload();

  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Intake Admin');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('1');
  await page.getByLabel('Email*').click();
  //

  const invitesinbox1 = await createNewEmail();
  myEmails = await readEmails();
  await setEmails({ ...myEmails, intakeAdminEmail: invitesinbox1! });
  console.log(myEmails);

  await page.getByLabel('Email*').fill(invitesinbox1!);
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Intake Admin').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.reload();
  // Booking widget
  await page.getByText('Booking widget').click();
  await page.getByRole('button', { name: 'Generate link' }).nth(1).click();

   //   Scheduler Calender 
   await page.getByText('Calendar').click();

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
   await page.locator('p').filter({ hasText: /^Calendar$/ }).click();
   await page.getByLabel('Monday').check();
   
  // Billing sections
  await page.locator('p').filter({ hasText: 'Billing' }).click();
  await page.getByRole('tab', { name: 'Insurance' }).click();
  await page.getByLabel('Practice name').click();
  await page.getByLabel('Practice name').fill('KanTime Healthcare System');
  await page.getByLabel('NPI').click();
  await page.getByLabel('NPI').fill('1234567890');
  await page.getByLabel('Taxonomy code').click();
  await page.getByLabel('Taxonomy code').fill('HGXFCS33');
  await page.getByLabel('SSN').click();
  await page.getByLabel('SSN').fill('GGH34JH');
  await page.getByPlaceholder('Address line').click();
  await page.getByPlaceholder('Address line').press('CapsLock');
  await page.getByPlaceholder('Address line').fill('New Jersy Road main Block city ');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('Ge');
  await page.getByRole('option', { name: 'Georgia' }).click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Du');
  await page.getByRole('option', { name: 'Dunwoody' }).click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('5672343');
  await page.getByLabel('Include Service location in').check();
  await page.getByLabel('Enable multiple diagnostic').check();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

  await page.getByText('Payers').click();
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page
    .getByRole('combobox', { name: 'Search for insurance payers' })
    .fill('Absolute');
    await page.waitForTimeout(2000);
  await page.getByText('ABSOLUTE TOTAL CARE-').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByRole('combobox', { name: 'Search for insurance payers' }).fill('MEM');
  await page.getByText('Maine Medicaid- MEMCD').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();

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
// Privacy Policy
await page.getByText('Website Privacy Policy').click();
  await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
});
test('Create Clients', async () => {
// Logic For Fail Locator
try {
  await page.locator('._btns_14sej_85 > button').click();
} catch (error) {
  console.log('Failed to find first locator, trying second locator');
  await page.getByRole('button').nth(2).click();
}
await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
await page.getByRole('menuitem', { name: 'Create client' }).click();
await page.getByLabel('First Name*').click();
await page.getByLabel('First Name*').fill('Automation');
await page.getByLabel('Last Name*').click();
await page.getByLabel('Last Name*').fill('Test');
await page.getByLabel('Email*').click();
//
const invitesinbox2 = await createNewEmail();
await page.getByLabel('Email*').fill(invitesinbox2!);

await page.getByRole('button', { name: 'Continue' }).nth(1).click();
await page.getByRole('button', { name: 'Create Client' }).nth(1).click();


});
test('Owner Dashboard', async () => {
// Dashboard Features for Owner roles
await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
await page.waitForTimeout(3000);
await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
await page.getByRole('menuitem', { name: 'Create Appointment' }).click();
await page.getByLabel('Select client profile*').click();
await page.getByText('Automation (OT)').click();
await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
await page.waitForTimeout(2000);
await page.getByText('Owner Team').first().click();
await page.locator('button').filter({ hasText: 'Add note' }).nth(1).click();
await page.getByRole('button', { name: 'Add psychotherapy note' }).nth(1).click();
await page.getByPlaceholder('Enter your response here').click();
await page.getByPlaceholder('Enter your response here').fill('Test Data');
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
await page.waitForTimeout(2000);
await page.getByText('Owner Team').first().click();
await page.locator('button').filter({ hasText: 'Edit' }).nth(1).click();
await page.getByPlaceholder('Enter text here').click();
await page.getByPlaceholder('Enter text here').fill('New Date Updated');
await page.getByRole('button', { name: 'Update Appointment' }).nth(1).click();
await page.waitForTimeout(2000);
await page.getByText('Owner Team').first().click();
await page.locator('button').filter({ hasText: 'Cancel appointment' }).nth(1).click();
await page.getByRole('button', { name: 'Yes' }).nth(1).click();
await page.waitForTimeout(3000);
await page.getByLabel('Clinician').click();
await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
await page.reload();
await page.waitForTimeout(2000);
// Taskboard view
await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
await page.getByPlaceholder('Task Name').click();
await page.getByPlaceholder('Task Name').fill('Owner Automation Task');
await page.locator('div').filter({ hasText: /^Task Description$/ }).click();
await page.getByPlaceholder('Add Description').fill('Testing Taskboard with Owner role');
await page.getByRole('button', { name: 'user icon Add Subtask' }).click();
await page.getByPlaceholder('Add subtask').click();
await page.getByPlaceholder('Add subtask').fill('Owner Subtask 1');
await page.getByRole('button', { name: 'user icon Assign to' }).click();
await page.locator('span').filter({ hasText: 'Owner Team' }).getByRole('paragraph').click();
await page.getByRole('banner').getByTestId('priority_flag_image').click();
await page.getByRole('menuitem', { name: 'Urgent' }).click();
await page.getByRole('button', { name: 'Task priority flag' }).click();
await page.getByRole('menuitem', { name: 'High' }).click();
await page.getByRole('button', { name: 'Open' }).click();
await page.getByText('InProgress').click();
await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
await page.waitForTimeout(6000);

await page.getByText('Owner Automation Task').click();
  await page.getByPlaceholder('Add comment').click();
  await page.getByPlaceholder('Add comment').fill('Hi Man How are U');
  await page.getByRole('button', { name: 'Send' }).nth(1).click();
  await page.getByRole('button', { name: 'Save changes' }).nth(1).click();
  await page.waitForTimeout(5000);

await page.getByText('Owner Automation Task').click();
  await page.getByRole('button', { name: 'InProgress' }).click();
  await page.getByText('InReview').click();
  await page.getByRole('button', { name: 'assignee icon' }).click();
  await page.locator('p').filter({ hasText: 'Owner Team' }).click();
  await page.getByRole('button', { name: 'Save changes' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.getByRole('tab', { name: 'Clinician' }).click();
  await page.getByRole('tab', { name: 'Practice' }).click();
  });

test('DP Update and Logout', async () => {
  try {
    await page.locator('.MuiAvatar-img').click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
     await page.getByRole('img').nth(1).click();
  }
  
  await page.getByRole('menuitem', { name: 'Profile' }).click();
  await page
    .locator(
      '#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._generalSettingsTab_18vvz_1 > div > div._flexContainer_18vvz_4 > div._userNameDetailsContainer_18vvz_8 > div > div._imagePicker_18vvz_17 > input[type=file]'
    )
    .setInputFiles(path.join(__dirname + '../files/ther_img.jpg'));
  // await page.getByRole('img', { name: 'image picker' }).setInputFiles(path.join(__dirname + '../files/ther_img.jpg'));

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