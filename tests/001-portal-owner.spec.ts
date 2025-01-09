import { test, type Page, } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createNewEmail } from '../helpers/mailsurp';
import {
  BASE_FRONTEND_URL,
  isRunningOnLocal,
  localBaseUrl,
} from '../localemails.js/const';
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
test.describe('All OwnerRole Test case ', () => {

test('Owner login and  onboarding ', async ({ request }) => {
  const inbox = await createNewEmail();

  const data = await generatePasswordlessLoginLink({
    email: inbox!,
    request: request,
  });
  await page.goto(data!);

  // Onboarding Flows for Owner
 
  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('Owner ');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('Team');
  await page.getByPlaceholder('Enter phone').click();
  await page.getByPlaceholder('Enter phone').fill('(846) 534-65833');
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByPlaceholder('Enter Group Practice name').click();
  await page.getByPlaceholder('Enter Group Practice name').fill('KanTime Healthcare System ');
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
  await page.getByPlaceholder('Enter Group Practice name').click();
  await page.getByPlaceholder('Enter Group Practice name').fill('KanTime Healthcare System ');
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('Office name').click();
  await page.getByLabel('Office name').fill('KANTIME HEALTHCARE');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('New area City');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('New york');
  // await page.getByText('New York').click();
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
 
  await page.getByRole('checkbox').check();
    await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
});

test('Settings Flows', async () => {

  try {
    await page.locator('div').filter({ hasText: /^Settings$/ }).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
     await page.getByText('Settings').click();
  }
  //Clinican Settings Flows
  await page.getByText('Clinician settings').click();

  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('Owner');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('Team');
  await page.getByLabel('Select gender you identify').click();
  await page.getByText('Male', { exact: true }).click();
  await page.getByLabel('Select your pronouns').click();
  await page.getByRole('option', { name: 'He/Him' }).click();
  await page.getByLabel('Address Line 1').click();
  await page.getByLabel('Address Line 1').fill('Name');
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

  await page.getByLabel('Select accepted payment').click();
  await page.getByRole('option', { name: 'Self Pay' }).click();
  await page.getByLabel('Select your specializations').click();
 
  await page.getByText('Adolescent Issues').click();
  await page.getByLabel('Select treatment methods you').click();
  await page.getByRole('option', { name: 'Art Therapy', exact: true }).click();
  await page.getByLabel('Select accepted payment').click();
  await page.getByRole('option', { name: 'Insurance' }).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  
  await page.getByRole('tab', { name: 'Locations' }).click();
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('Office name').click();
  await page.getByLabel('Office name').fill('Owner Clinican Settings Location');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('New Jersy main');
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
  await page.getByLabel('Duration *').fill('3');
  await page.getByLabel('Make default service').check();
  await page.getByRole('button', { name: 'Add service' }).nth(1).click();

  // await page.getByRole('tab', { name: 'Public profile' }).click();
  // await page.waitForTimeout(5000);
  // await page.getByRole('checkbox').first().check();
  // await page.getByRole('checkbox').nth(1).check();
  // await page.locator('textarea[name="intro"]').click();
  // await page.locator('textarea[name="intro"]').fill('Test');
  // await page.locator('textarea[name="sessionTakeaways"]').click();
  // await page.locator('textarea[name="sessionTakeaways"]').fill('Test');
  // await page.locator('textarea[name="strengths"]').click();
  // await page.locator('textarea[name="strengths"]').fill('Test');
  // await page.getByRole('button', { name: 'Save' }).nth(1).click();
  // Practice Settings
  await page.getByText('Practice settings').click();
  await page.getByLabel('Practice Name').click();
  await page.getByLabel('Practice Name').fill('Mind Simple Hospital');
  await page.getByLabel('About').click();
  await page.getByLabel('About').fill('This Nice company');
  await page.getByPlaceholder('Enter phone').click();
  await page.getByPlaceholder('Enter phone').fill('(975) 734-53565');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  
  await page.getByRole('tab', { name: 'Locations' }).click();
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('Office name').click();
  await page.getByLabel('Office name').fill('Practice Wide Locations @1');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('practice Address @1');
  await page.getByLabel('State').click();
  await page.getByText('Oregon').click();
  await page.getByLabel('City').click();
  await page.getByText('Bend').click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('89766');
  await page.getByLabel('Make default location').check();
  await page.getByRole('button', { name: 'Add location' }).nth(1).click();
  await page .waitForTimeout(4000);
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('Office name').click();
  await page.getByLabel('Office name').fill('Owner Adding Practice Locations @2');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('New Location Added @2');
  await page.getByLabel('State').click();
  await page.getByText('Ohio').click();
  await page.getByLabel('City').click();
  await page.getByText('Canton').click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('56788');
  await page.getByRole('button', { name: 'Add location' }).nth(1).click();
  await page .waitForTimeout(4000);

  await page.getByRole('tab', { name: 'Services' }).click();
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('CPT Code').click();
  await page.getByRole('combobox', { name: 'CPT Code' }).fill('90849');
  await page.getByText('Multiple-family group psychotherapy').click();
  await page.getByLabel('Fee *').click();
  await page.getByLabel('Fee *').fill('50');
  await page.getByLabel('Duration *').click();
  await page.getByLabel('Duration *').fill('5');
  await page.getByLabel('Make default service').check();
  await page.getByLabel('Make default service').uncheck();
  await page.getByRole('button', { name: 'Add service' }).nth(1).click();
  await page .waitForTimeout(4000);

  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('CPT Code').click();
  await page.getByRole('combobox', { name: 'CPT Code' }).fill('96136');
  await page.getByText('96136, Psychological or').click();
  await page.getByLabel('Fee *').click();
  await page.getByLabel('Fee *').fill('100');
  await page.getByLabel('Duration *').click();
  await page.getByLabel('Duration *').fill('10');
  await page.getByRole('button', { name: 'Add service' }).nth(1).click();
  await page .waitForTimeout(4000);

  await page.getByRole('tab', { name: 'Appointment Cancellation' }).click();
  await page.getByLabel('No Show Fee Type').click();
  await page.getByRole('option', { name: '75% of session fee' }).click();
  await page.getByLabel('Late Cancel Fee Type').click();
  await page.getByRole('option', { name: '25% of session fee' }).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page .waitForTimeout(6000);
  
  // Subscriptions Feature
//   await page.getByText('Subscription').click();
//   await page.getByText('Frontdesk').click();
//   await page .waitForTimeout(3000);
//   await page.getByText('Bundle').click();
//   await page .waitForTimeout(3000);
//   await page.getByText('EHR', { exact: true }).click();
//   await page .waitForTimeout(2000);
//   await page.getByRole('button', { name: 'Subscribe' }).nth(1).click();
//   await page .waitForTimeout(3000);
// // Add card
//   await page.frameLocator("iframe[title='Secure card number input frame']").getByPlaceholder('Card number').click();
//   await page.frameLocator("iframe[title='Secure card number input frame']").getByPlaceholder('Card number').fill('4000056655665556');
//   await page .waitForTimeout(5000);
//   await page.frameLocator("iframe[title='Secure expiration date input frame']").getByPlaceholder('Expiry date (MM/YY)').click();
//   await page.frameLocator("iframe[title='Secure expiration date input frame']").getByPlaceholder('Expiry date (MM/YY)').fill('08 / 31');
//   await page .waitForTimeout(5000);
//   await page.frameLocator("iframe[title='Secure CVC input frame']").getByPlaceholder('CVV').click();
//   await page.frameLocator("iframe[title='Secure CVC input frame']").getByPlaceholder('CVV').fill('2545');
//   await page .waitForTimeout(5000);

//     await page.getByLabel('Name on invoices').click();
//     await page.getByLabel('Name on invoices').fill('Owner Team');
//     await page.getByLabel('Email Id to send Invoices').click();
//     await page.getByLabel('Email Id to send Invoices').fill('testemails@gmail.com');
//     await page.getByLabel('Address').click();
//     await page.getByLabel('Address').fill('New Jersy city ');
//     await page.getByLabel('Street').click();
//     await page.getByLabel('Street').fill('Main city side road');
//     await page.getByLabel('State').click();
//     await page.getByRole('combobox', { name: 'State' }).fill('Lou');
//     await page.getByText('Louisiana').click();
//     await page.getByLabel('City').click();
//     await page.getByRole('combobox', { name: 'City' }).fill('Ken');
//     await page.getByText('Kenner').click();
//     await page.getByLabel('Zipcode').click();
//     await page.getByLabel('Zipcode').fill('5612012');
//     await page.getByLabel('', { exact: true }).first().check();
//     await page.getByPlaceholder('Enter coupon code').click();
//     await page.getByPlaceholder('Enter coupon code').fill('LIVE');
//     await page.getByRole('button', { name: 'Apply' }).nth(1).click();
//     await page .waitForTimeout(6000);
//     await page.getByRole('button', { name: 'Subscribe to Ehr Plus Plan' }).nth(1).click();
//     await page .waitForTimeout(7000);
//     await page.getByRole('heading', { name: 'Update' }).first().click();
//     await page.getByRole('button', { name: 'Add new card' }).nth(1).click();
//   // Add card
//     await page.frameLocator("iframe[title='Secure card number input frame']").getByPlaceholder('Card number').click();
//     await page.frameLocator("iframe[title='Secure card number input frame']").getByPlaceholder('Card number').fill('4242424242424242');
//     await page .waitForTimeout(5000);
//     await page.frameLocator("iframe[title='Secure expiration date input frame']").getByPlaceholder('Expiry date (MM/YY)').click();
//     await page.frameLocator("iframe[title='Secure expiration date input frame']").getByPlaceholder('Expiry date (MM/YY)').fill('08 / 31');
//     await page .waitForTimeout(5000);
//     await page.frameLocator("iframe[title='Secure CVC input frame']").getByPlaceholder('CVV').click();
//     await page.frameLocator("iframe[title='Secure CVC input frame']").getByPlaceholder('CVV').fill('2545');
//     await page .waitForTimeout(5000);

//     await page.getByRole('button', { name: 'Add card' }).nth(1).click();
//     await page .waitForTimeout(3000);
//     await page.getByText('Make Primary').click();
//     await page .waitForTimeout(3000);
//     await page.getByRole('img', { name: 'cross icon' }).click();
//     await page .waitForTimeout(3000);
//     await page.getByRole('heading', { name: 'Update' }).nth(1).click();
//     await page.getByRole('button', { name: 'cancel' }).nth(1).click();
//     await page.getByRole('heading', { name: 'Update' }).nth(2).click();
//     await page.getByLabel('Make default across practice').check();
//     await page .waitForTimeout(3000);
//     await page.getByLabel('Address').clear();
//     await page.getByLabel('Address').fill('2nd Stage nagarabahvi road bangalore');
//     await page.getByRole('button', { name: 'update' }).nth(1).click();
//     await page .waitForTimeout(3000);
//     await page.getByRole('heading', { name: 'Manage members' }).click();
//     await page.getByRole('img', { name: 'cross icon' }).click();
//     await page .waitForTimeout(3000);

//  Custom Role Setting
await page.getByText('Role settings').click();
await page.getByRole('button', { name: 'Create custom role' }).nth(1).click();
await page .waitForTimeout(5000);
await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
await page.getByLabel('Practice Manager').check();
await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
await page.getByLabel('Role title').click();
await page.getByLabel('Role title').fill('Custom PracticeLead');
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page .waitForTimeout(8000);
await page.locator('div').filter({ hasText: /^Custom PracticeLead$/ }).getByRole('button').click();
await page .waitForTimeout(4000);
await page.getByLabel('Calendar').uncheck();
await page.getByLabel('Calendar').check();
await page.getByLabel('Clients', { exact: true }).uncheck();
await page.getByLabel('Clients', { exact: true }).check();
await page.getByLabel('Billing', { exact: true }).uncheck();
await page.getByLabel('Insurance', { exact: true }).uncheck();
await page.getByLabel('Reports', { exact: true }).check();
await page.getByLabel('Clients', { exact: true }).check();
await page.getByLabel('Documents', { exact: true }).check()
await page.getByLabel('Referrals', { exact: true }).uncheck();
await page.getByLabel('Referrals', { exact: true }).check();
await page.getByLabel('Settings', { exact: true }).uncheck();
await page.getByLabel('Settings', { exact: true }).check();
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();

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
  //console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();
  // Invite team members
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Supervisor');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('1');
  await page.getByLabel('Email*').click();
  //
  const Bookinginbox2 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox2!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, supervisorEmail: Bookinginbox2! });
  //console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Supervisor').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();
// Invite Practice Manager
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Practice');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('1');
  await page.getByLabel('Email*').click();
  //
  const Bookinginbox3 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox3!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, practiceAdminEmail: Bookinginbox3! });
  //console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Practice manager', { exact: true }).check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Custom');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Role');
  await page.getByLabel('Email*').click();
  //
  const Bookinginbox4 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox4!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, customroleEmail: Bookinginbox4! });
  //console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Custom PracticeLead').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();
  await page.getByText('Role settings').click();
  //   Scheduler Calender 
  await page.getByText('Calendar').click();
  // try {
  //  await page.locator('div').filter({ hasText: /^Currently accepting appointments$/ }).getByRole('checkbox').click();

  // } catch (error) {
  //   console.log('Failed to find first locator, trying second locator');
  //   await page.locator('#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._acceptingAppointmentsSwitch_ml86x_17 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383').click();
  // }
  
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
  
  //Booking widget flows
  await page.getByText('Booking widget').click();
  await page.getByRole('button', { name: 'Generate link' }).nth(1).click();
  await page.waitForTimeout(2000);
  const page1Promise = page.waitForEvent('popup');
  await page
    .locator(
      '#root > div._layout_cqogi_1 > div._content_cqogi_7 > div._bookingWidgetWrapper_4jerd_1 > div._therapistLinks_4jerd_53 > div:nth-child(1) > p')
    .click();
  const page1 = await page1Promise;
  await page1.locator('div').filter({ hasText: /^Psychotherapy, 30 minutes with patient- 10 mins$/ }).nth(1).click();

  await page1
    .locator(
      '#root > div._layout_cqogi_1 > div > div._bookingWidgetWrapper_tlkra_1 > div._bookingWidgetContainer_tlkra_21 > div._bookingContent_tlkra_44 > div:nth-child(2) > div > div._dateTime_142fu_33 > div > div:nth-child(2) > div > div._timeSlotsWrapper_vyf9q_11 div:first-child'
    )
    .click();
  await page1.getByPlaceholder('Enter first name').click();
  await page1.getByPlaceholder('Enter first name').fill('James');
  await page1.getByPlaceholder('Enter last name').click();
  await page1.getByPlaceholder('Enter last name').fill('Willy');
  await page1.getByPlaceholder('Enter email').click();
  //
  const inviteinbox1 = await createNewEmail();
  await page1.getByPlaceholder('Enter email').fill(inviteinbox1!);

  await page1.getByPlaceholder('Enter phone').click();
  await page1.getByPlaceholder('Enter phone').fill('(893) 553-00024');
  await page1
    .getByRole('button', { name: 'Request appointment' })
    .nth(1)
    .click();
  await page1.waitForTimeout(6000);
  await page1.close();
  
  // Billing sections
  await page.locator('p').filter({ hasText: 'Billing' }).click();
  await page.getByRole('tab', { name: 'Insurance' }).click();
  await page.getByLabel('Practice name').click();
  await page.getByLabel('Practice name').fill('KanTime Healthcare System');
  await page.getByLabel('NPI').click();
  await page.getByLabel('NPI').fill('1234567890');
  await page.getByLabel('Taxonomy code').click();
  await page.getByLabel('Taxonomy code').fill('HGXFCS33');
  await page.getByLabel('Tax ID').click();
  await page.getByLabel('Tax ID').fill('123456789');
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
  await page.waitForTimeout(5000);
  // Add Payer Feature In Billing Sections
  // await page.getByText('Payers').click();
  // await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  // await page.getByLabel('Search for insurance payers').click();
  // await page
  //   .getByRole('combobox', { name: 'Search for insurance payers' })
  //   .fill('Absolute');
  //   await page.waitForTimeout(2000);
  //   await page.getByText('68055- Absolute Total Care').click();
  // await page.getByRole('button', { name: 'Add' }).nth(1).click();
  // await page.waitForTimeout(2000);
  // await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  // await page.getByLabel('Search for insurance payers').click();
  // await page.getByLabel('Search for insurance payers').fill('Maine Medicaid');
  // await page.getByText('MEMCD- ME Medicaid').click();
  // await page.getByRole('button', { name: 'Add' }).nth(1).click();
  
   // Referal settings
  // await page.getByText('Team members').nth(1).click();
  // await page
  //   .getByRole('row', { name: 'Owner Team, ALC' })
  //   .getByRole('img')
  //   .nth(1)
  //   .click();
  // await page.getByLabel('Select your Specializations').click();
  // await page
  //   .getByRole('combobox', { name: 'Select your Specializations' })
  //   .fill('Abuse');
  // await page.getByRole('option', { name: 'Abuse', exact: true }).click();
  // await page.getByRole('button', { name: 'Save' }).nth(1).click();
  // await page.getByRole('tab', { name: 'Payment Methods' }).click();
  // await page.getByLabel('Select accepted payment methods').click();
  // await page.getByText('AARP - UnitedHealthcare').click();
  // await page.getByRole('button', { name: 'Save' }).nth(1).click();
  // await page.waitForTimeout(2000);


  // System Emails 
  await page.getByText('System Emails').click();
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();
  await page.getByLabel('Clinician').click();
  await page.getByRole('option', { name: 'Clinician Full Name' }).click();
  await page.getByLabel('Practice').click();
  await page.getByRole('option', { name: 'Practice Name' }).click();
  await page.getByLabel('Client').click();
  await page.getByRole('option', { name: 'Client First Name' }).click();
  await page.getByLabel('Links').click();
  await page.getByRole('option', { name: 'Account Login Link' }).click();
  await page.getByLabel('Appointments').click();
  await page.getByRole('option', { name: 'Appointment Date' }).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

  await page.getByText('Reminders').click();
  await page.getByRole('checkbox').check();
  await page.getByRole('tab', { name: 'SMS' }).click();
  await page.getByRole('checkbox').check();

 //   Privacy Policy
await page.getByText('Website Privacy Policy').click();
await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
await page.getByText('Terms & Conditions').click();
await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
});

test('Forms Tab', async () => {
    try {
      await page.locator('div').filter({ hasText: /^Documents$/ }).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
       await page.getByText('Documents').click();
    }
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();

  // // Questionaries Form Code
  await page.getByText('Questionnaire').click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Automation Forms');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();

  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Gender?');
  await page.getByRole('button', { name: '1 Please enter a question' }).getByRole('button').nth(2).click();
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
await page.locator('div').filter({ hasText: /^Automation Forms$/ }).getByTestId('MoreVertIcon').click();
 
  await page.getByRole('menuitem', { name: 'Preview' }).click();
  await page.locator('.MuiButtonBase-root').first().click();

  
  await page.locator('div').filter({ hasText: /^Automation Forms$/ }).getByTestId('MoreVertIcon').click();
  await page.getByRole('menuitem', { name: 'Rename' }).click();
  await page.getByPlaceholder('type here').clear();
  await page.getByPlaceholder('type here').fill('Automation Forms');
  await page.reload();
  await page.waitForTimeout(1000);
  
  await page.locator('div').filter({ hasText: /^Automation Forms$/ }).getByTestId('MoreVertIcon').click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').click();
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  // // Consent Form
  await page.getByText('Consent form', { exact: true }).click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Consent Automation');
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
  await page.getByPlaceholder('type here').fill('Automation Testing');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
// Question 1
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
    // Question 2
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
  // Question 3
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
 
  // Question 5
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
    // Question 6
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
  // Question 7
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
  // Question 8
  await page.getByRole('option', { name: 'E-signature' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page
    .getByPlaceholder('Please enter a question')
    .fill('Please Sign here?');
  await page.getByRole('button', { name: 'Preview' }).nth(1).click();
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();
  
  // Treatment plan
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  await page.getByText('Treatment plan', { exact: true }).click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Automation Treatement Plan');
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
  await page.getByPlaceholder('type here').fill('Automation Assesment Form');
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
    .fill('Automation Forms');
  await page.getByRole('option', { name: 'Automation Forms' }).click();
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
    .fill('Automation Forms');
  await page.getByRole('option', { name: 'Automation Forms' }).click();
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
    .fill('Automation Forms');
  await page.getByRole('option', { name: 'Automation Forms' }).click();
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

test('Request Booking Widget', async () => {
  // Request Booking Widget flow
  
  await page.locator('div').filter({ hasText: /^Notifications$/ }).getByRole('img').click();
  await page.getByText('Requests').click();
  await page.waitForTimeout(4000);
  await page.locator('button').filter({ hasText: 'Accept' }).nth(1).click();
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
  await page.waitForTimeout(8000);
  await page.locator('button').filter({ hasText: 'Accept' }).nth(1).click();
  await page.waitForTimeout(5000);
  
});

test('Create Clients', async () => {
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
  await page.locator('div').filter({ hasText: /^20$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Automation (OT)' }).first().click();
  await page.waitForTimeout(10000);
  await page.getByLabel('Select service *').click();
  await page.getByText('Developmental Testing, ...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('New every day testing');
  await page.getByLabel('Select location *').click();
await page.getByText('Telehealth : Online video').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(1000);
  // Past Date Appoinments
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.locator('div').filter({ hasText: /^17$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Automation (OT)' }).first().click();
  await page.waitForTimeout(10000);
  await page.getByLabel('Select service *').click();
  await page.getByText('Developmental Testing, ...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('New every day testing');
  await page.getByLabel('Select location *').click();
  await page.getByText('KANTIME HEALTHCARE').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();

  // Create Appoinment Button( top Bar)
  await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create appointment' }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Automation (OT)' }).first().click();
  await page.waitForTimeout(10000);
  await page.getByLabel('Select service *').click();
  await page.getByText('Family psychotherapy...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
  await page.getByLabel('Select location *').click();
  await page.getByText('Practice Wide Locations @').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(4000);
  
});
   
test('Client File', async () => {
  await page
    .locator('div')
    .filter({ hasText: /^Clients$/ })
    .getByRole('img')
    .click();
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

  //  Payment tab
  await page.getByRole('tab', { name: 'Payment' }).click();
  await page.getByLabel('Insurance').check();
    // Logic For Fail Locator
    try {
      await page.getByLabel('Client itself').check();
        
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
      await page.getByText('Other').click();
    }
 
  await page.getByLabel('Sex').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByPlaceholder('Phone').click();
  await page.getByPlaceholder('Phone').fill('(734) 573-25415');
  await page.getByLabel('Address line').click();
  await page.getByLabel('Address line').fill('New City main office');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('Utah');
  // await page.getByRole('option', { name: 'Utah' }).click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Roy');
  // await page.getByRole('option', { name: 'Roy' }).click();
  await page.getByLabel('Zip code').click();
  await page.getByLabel('Zip code').fill('678203');
  // await page.getByLabel('Insurance Company').click();
  // await page.getByLabel('Insurance Company').fill('Absolute');
  // await page.getByText('ABSOLUTE TOTAL CARE-').click();
  await page.getByLabel('Member ID').click();
  await page.getByLabel('Member ID').fill('GHR345');
  await page.getByLabel('Group ID').click();
  await page.getByLabel('Group ID').fill('GGH3');
  await page.getByLabel('Plan ID').click();
  await page.getByLabel('Plan ID').fill('KKH45');
  // await page.getByPlaceholder('MM/DD/YYYY').first().click();
  // await page.getByPlaceholder('MM/DD/YYYY').first().fill('01/01/2000');
  // await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(5000);
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
  
  await page.getByRole('tab', { name: 'Payment' }).click();
  await page.getByLabel('Self Pay').check();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(8000);

  await page.locator('div').filter({ hasText: /^Basic InfoIndividual$/ }).getByRole('button').click();

  // Forms Section
  await page.getByRole('tab', { name: 'Forms' }).click();
  await page.getByRole('button', { name: 'Send forms' }).nth(1).click();
  await page.getByRole('tab', { name: 'Personal' }).click();
  await page.getByText('Questionnaires').click();
  await page.getByLabel('Select Forms to send').click();
  await page
    .getByRole('combobox', { name: 'Select Forms to send' })
    .fill('Automation');
  await page.getByRole('option', { name: 'Automation Forms' }).click();
  await page.getByRole('combobox', { name: 'Select Forms to send' }).click();
  await page.getByRole('button', { name: 'Send' }).nth(1).click();

  // Template Add in Client File (CF) in Stage only
  // await page.getByRole('button', { name: 'Send forms' }).nth(1).click();
  // await page.getByRole('tab', { name: 'Templates' }).click();
  // await page.getByText('Questionnaires').click();
  // await page.getByLabel('Select Forms to send').click();
  // await page.getByRole('combobox', { name: 'Select Forms to send' }).fill('100');
  // await page.getByRole('option', { name: 'question' }).click();
  // await page.getByRole('combobox', { name: 'Select Forms to send' }).click();
  // await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();
  // await page.getByText('Consent forms').click();
  // await page.getByLabel('Select Forms to send').click();
  // await page.getByRole('combobox', { name: 'Select Forms to send' }).fill('demo');
  // await page.getByRole('option', { name: 'Template demo for consent' }).click();
  // await page.getByRole('combobox', { name: 'Select Forms to send' }).click();
  // await page.getByRole('button', { name: 'Send' }).nth(1).click();

    // Template Add in Client File (CF) in Production only
  await page.getByRole('button', { name: 'Send forms' }).nth(1).click();
  await page.getByRole('tab', { name: 'Templates' }).click();
  await page.getByText('Questionnaires').click();
  await page.getByLabel('Select Forms to send').click();
  await page.getByRole('combobox', { name: 'Select Forms to send' }).fill('Demo');
  await page.getByRole('option', { name: 'Demographic form' }).click();
  await page.getByRole('combobox', { name: 'Select Forms to send' }).click();
  await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();
  await page.getByText('Consent forms').click();
  await page.getByLabel('Select Forms to send').click();
  await page.getByRole('combobox', { name: 'Select Forms to send' }).fill('Pra');
  await page.getByRole('option', { name: 'Practice Policies' }).click();
  await page.getByRole('combobox', { name: 'Select Forms to send' }).click();
  await page.getByRole('button', { name: 'Send' }).nth(1).click();

//  Bills tabs
  await page.getByRole('tab', { name: 'Bills' }).click();
  await page.getByRole('spinbutton').first().click();
  await page.getByRole('spinbutton').first().fill('100');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  //   Notes Section
  await page.getByRole('tab', { name: 'Notes' }).click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByRole('tab', { name: 'Personal' }).click();
  await page.getByText('Progress notes').click();
  
  // Stage
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('Automation');

  await page.locator('div').filter({ hasText: /^Automation Testing$/ }).click();
  await page.getByPlaceholder('Enter your response here').first().click();
  await page
    .getByPlaceholder('Enter your response here')
    .first()
    .fill('Rajesh');
  await page.getByPlaceholder('Enter your response here').nth(1).click();
  await page.getByPlaceholder('Enter your response here').nth(1).fill('Good');
  await page.getByRole('checkbox', { name: 'option1' }).check();
  await page.locator('div').filter({hasText:
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
  await page.getByRole('menuitem', { name: 'Appointment' }).getByRole('img').click();
  await page.waitForTimeout(12000);
  await page.getByLabel('Select location *').click();
  await page.getByText('Owner Adding Practice').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(4000);

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
//     await page.getByText('68055- Absolute Total Care').click();
   
//    } 
//    catch (error) {
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
 
// });

test('Reports Tab', async () => {
  await page.locator('div').filter({ hasText: /^Reports$/ }).getByRole('img').click();
  await page.getByText('Appointment Notes').click();
  await page.getByLabel('Team members').click();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByLabel('Clients').click();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByLabel('Status').click();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByRole('button', { name: 'Add psychotherapy note' }).nth(1).click();
  await page.getByPlaceholder('Enter your response here').click();
  await page.getByPlaceholder('Enter your response here').fill('Test Noted adding here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

  await page.getByLabel('Status').click();
  await page.getByRole('option', { name: 'All' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Completed notes' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByLabel('Status').click();
  await page.getByRole('option', { name: 'Completed notes' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Pending notes' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByLabel('Status').click();
  await page.getByRole('option', { name: 'All' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();

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
  await page.getByRole('option', { name: 'Paid' }).click();
  await page.waitForTimeout(5000);
  await page.getByLabel('Status').click();
  await page.getByRole('option', { name: 'Pending' }).click();
  await page.waitForTimeout(5000);
  await page.getByLabel('Status').click();
  await page.getByRole('option', { name: 'Failed' }).click();
   

  await page.locator('p').filter({ hasText: /^Income$/ }).click();
  await page.getByText('Income Allocation').click();
// 
  await page.getByText('Outstanding Claims').click();
  await page.getByLabel('Team members').click();
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Team members' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  // 
  await page.getByText('Unpaid insurance appointments').click();
  await page.getByLabel('Team members').click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
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
test('Intake tab', async () => {
  
  await page.locator('div').filter({ hasText: /^Referrals$/ }).getByRole('img').click();
  await page.getByRole('button', { name: 'Create Lead' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('James');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('lead');
  // SMS Phone Number
  // await page.getByLabel('Phone').click();
  // await page.getByLabel('Phone').fill('3312762635');
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

  await page.getByRole('cell', { name: 'James Lead' }).click();
  await page.getByRole('tab', { name: 'Basic Information' }).click();
  await page.getByLabel('Sex').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  // await page.getByPlaceholder('MM/DD/YYYY').click();
  // await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/2000');
  await page.getByLabel('Member ID').click();
  await page.getByLabel('Member ID').fill('GAHRGYT');
  await page.waitForTimeout(3000);
  await page.getByLabel('Name on Card').click();
  await page.getByLabel('Name on Card').fill('Rajesh');
  await page.getByLabel('Payer ID').click();
  await page.getByLabel('Payer ID').fill('BDJSB546');
  // await page.getByLabel('Insurance Company').click();
  // await page.getByRole('combobox', { name: 'Insurance Company' }).fill('abso');
  // await page.getByText('ABSOLUTE TOTAL CARE-').click();
  await page.getByLabel('Member ID').click();
  await page.getByLabel('Member ID').fill('GAHRGYT');
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Save' }).nth(1).click(); 
  await page
    .locator('span')
    .filter({ hasText: 'Current Status :Inquiry' })
    .locator('div')
    .nth(2)
    .click();
  await page.getByRole('option', { name: 'Initial consultation call' }).click();
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
// // Second Lead.
  await page.getByRole('button', { name: 'Create Lead' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Ram');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('lead');
  // await page.getByLabel('Phone').click();
  // await page.getByLabel('Phone').fill('4133248551');
  await page.getByLabel('Email').click();
  //
  const invitesinbox9 = await createNewEmail();
  await page.getByLabel('Email').fill(invitesinbox9!);

  await page.getByLabel('Seeking treatment for').click();
  await page.getByRole('option', { name: 'Cancer' }).click();
  await page.getByLabel('Note').click();
  await page.getByLabel('Note').fill('I am Very sick');
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.waitForTimeout(2000);

  await page.getByRole('cell', { name: 'Ram Lead' }).click();
  await page.getByRole('tab', { name: 'Basic Information' }).click();
  await page.getByLabel('Sex').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  // await page.getByPlaceholder('MM/DD/YYYY').click();
  // await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/2000');
  await page.getByLabel('Member ID').click();
  await page.getByLabel('Member ID').fill('KRUGSWERW');
  await page.waitForTimeout(3000);
  await page.getByLabel('Name on Card').click();
  await page.getByLabel('Name on Card').fill('Rajesh');
  await page.getByLabel('Payer ID').click();
  await page.getByLabel('Payer ID').fill('BDJSB546');
  // await page.getByLabel('Insurance Company').click();
  // await page.getByRole('combobox', { name: 'Insurance Company' }).fill('abso');
  // await page.getByText('ABSOLUTE TOTAL CARE-').click();
  await page.getByLabel('Member ID').click();
  await page.getByLabel('Member ID').fill('KRUGSWERW');
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page
    .locator('span')
    .filter({ hasText: 'Current Status :Inquiry' })
    .locator('div')
    .nth(2)
    .click();
  await page.getByRole('option', { name: 'Initial consultation call' }).click();
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

  // 3rd Lead
  await page.getByRole('button', { name: 'Create Lead' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Alfred');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Arnoldson');
  await page.getByLabel('Email').click();
  //
  const invitesinbox4 = await createNewEmail();
  await page.getByLabel('Email').fill(invitesinbox4!);

  await page.getByLabel('Seeking treatment for').click();
  await page.getByRole('option', { name: 'Cancer' }).click();
  await page.getByLabel('Note').click();
  await page.getByLabel('Note').fill('I am Very sick');
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.waitForTimeout(2000);

  await page.getByPlaceholder('Search by name').click();
  await page.getByPlaceholder('Search by name').fill('Alfred');
  await page.getByPlaceholder('Search by name').press('Enter');
  await page.waitForTimeout(2000);

  await page.getByRole('cell', { name: 'Alfred Arnoldson' }).click();
  await page.getByRole('tab', { name: 'Basic Information' }).click();
  await page.getByLabel('Sex').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  // await page.getByPlaceholder('MM/DD/YYYY').click();
  // await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/2000');
  
  await page.getByLabel('Member ID').click();
  await page.getByLabel('Member ID').fill('MEDICAID');
  await page.waitForTimeout(3000);
  await page.getByLabel('Name on Card').click();
  await page.getByLabel('Name on Card').fill('Rajesh');
  await page.waitForTimeout(2000);
  await page.getByLabel('Payer ID').click();
  await page.getByLabel('Payer ID').fill('BDJSB546');
  await page.waitForTimeout(1000);
  // await page.getByLabel('Insurance Company').click();
  // await page.getByRole('combobox', { name: 'Insurance Company' }).fill('Maine Medicaid');
  // await page.getByText('MEMCD- ME Medicaid').click();
  await page.getByLabel('Member ID').click();
  await page.getByLabel('Member ID').fill('MEDICAID')
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(6000);
  await page.locator('span').filter({ hasText: 'Current Status :Inquiry' }).locator('div').nth(2).click();
  await page.getByRole('option', { name: 'Session scheduled' }).click();
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

  await page.getByPlaceholder('Search by name').click();
  await page.getByPlaceholder('Search by name').fill('Alfred');
  await page.getByPlaceholder('Search by name').press('Enter');
  await page.waitForTimeout(2000);
  const page1Promise  = page.waitForEvent('popup');
  await page.getByLabel('Open lead in new tab').click();
  const page1 = await page1Promise;
  await page1.getByRole('tab', { name: 'Basic Information' }).click();
  await page1.close();
  await page.waitForTimeout(2000);
});
test('TaskBoard Widget Flows', async () => {

await page.locator('div').filter({ hasText: /^Tasks$/ }).getByRole('img').click();
await page.getByRole('heading', { name: 'List View' }).click();
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
await page.getByRole('button', { name: 'Task None priority flag' }).click();
await page.getByRole('menuitem', { name: 'Urgent' }).click();
await page.getByRole('button', { name: 'Open status_mark_Open' }).click();
await page.getByText('In Progress').click();
await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
await page.waitForTimeout(5000);

  await page.getByText('Owner Automation Task').click();
 
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
  await page.getByText('Owner Automation Task').click();
  await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();

  await page.getByRole('heading', { name: 'Board View' }).click();
  await page.getByText('Owner Automation Task').click();
  await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();

  await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
  await page.getByPlaceholder('Task Name').click();
  await page.getByPlaceholder('Task Name').fill('Owner Board View Task');
  await page.getByPlaceholder('Add Description').click();
  await page.getByPlaceholder('Add Description').fill('Testing Board view task');
  await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
  await page.locator('._header_1k7mt_11 > button').first().click();
  await page.getByRole('menuitem', { name: 'Set Priority' }).getByRole('img').click();
  await page.getByRole('menuitem', { name: 'Urgent' }).getByRole('img').click();
  
  
});
test('Owner Dashboard', async () => {
  // Dashboard Features for Owner roles
  await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
  await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create appointment' }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'James (OT)' }).first().click();
  await page.waitForTimeout(10000);
  await page.getByLabel('Select service *').click();
  await page.getByText('Family psychotherapy...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
  await page.locator('div').filter({ hasText: /^Select location \*$/ }).getByLabel('Open').click();
  await page.getByText('Owner Clinican Settings').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(3000);
  await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
  await page.waitForTimeout(2000);
  await page.getByText('Owner Team').nth(1).click();
  await page.locator('button').filter({ hasText: 'Edit' }).nth(1).click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('New Date Updated');
  await page.getByRole('button', { name: 'Update Appointment' }).nth(1).click();
  await page.waitForTimeout(2000);
  // await page.getByText('Owner Team').nth(1).click();
  // await page.locator('button').filter({ hasText: 'Cancel appointment' }).nth(1).click();
  // await page.getByRole('button', { name: 'Yes' }).nth(1).click();
  // await page.getByLabel('Clinician').click();
  // await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
  // await page.reload();
  // await page.waitForTimeout(3000);
// Taskboard flows
await page.getByText('Owner Automation Task').click();
await page.getByRole('button', { name: 'In Progress' }).click();
await page.getByText('In Review').click();
await page.getByRole('button', { name: 'assignee icon' }).click();
await page.locator('p').filter({ hasText: 'Owner Team' }).click();
await page.getByRole('button', { name: 'Save changes' }).nth(1).click();
await page.waitForTimeout(4000);
await page.getByRole('tab', { name: 'Clinician' }).click();
await page.getByRole('tab', { name: 'Practice' }).click();

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
test('Recurring Appoinments',async () => {
  await page.getByRole('button', { name: 'Month' }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  await page.locator('div').filter({ hasText: /^10$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByText('Automation (OT)').click();
  await page.getByLabel('Recurring Appointment').check();
  await page.getByLabel('Span').click();
  await page.getByRole('option', { name: 'days' }).click();
  await page.getByLabel('After').click();
  await page.getByLabel('After').fill('2');
  await page.getByLabel('Select location *').click();
  await page.getByText('Telehealth : Online video').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(4000);
  
  await page.locator('div').filter({ hasText: /^12$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByText('Automation (OT)').click();
  await page.getByLabel('Recurring Appointment').check();
  await page.getByLabel('Span').click();
  await page.getByRole('option', { name: 'days' }).click();
  await page.getByLabel('Every').click();
  await page.getByLabel('Every').fill('2');
  await page.getByLabel('After').click();
  await page.getByLabel('After').fill('2');
  await page.getByLabel('Select location *').click();
  await page.getByText('Telehealth : Online video').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click()
  await page.waitForTimeout(9000);

await page.locator('div').filter({ hasText: /^13$/ }).click();
await page.getByLabel('Select client profile*').click();
await page.getByText('Automation (OT)').click();
await page.getByLabel('Recurring Appointment').check();
await page.getByLabel('Every').click();
await page.getByLabel('Every').fill('3');
await page.getByLabel('Span').click();
await page.getByRole('option', { name: 'days' }).click();
await page.getByLabel('After').click();
await page.getByLabel('After').fill('3');
await page.getByLabel('Select location *').click();
await page.getByText('KANTIME HEALTHCARE').click();
await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
await page.waitForTimeout(9000);

await page.locator('div').filter({ hasText: /^22$/ }).click();
await page.getByLabel('Select client profile*').click();
await page.getByText('Automation (OT)').click();
await page.getByLabel('Recurring Appointment').check();
await page.getByLabel('Span').click();
await page.getByRole('option', { name: 'weeks' }).click();
await page.getByLabel('Mon', { exact: true }).check();
await page.getByLabel('After').click();
await page.getByLabel('After').fill('2');
await page.getByLabel('Select location *').click();
await page.getByText('KANTIME HEALTHCARE').click();
await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
await page.waitForTimeout(9000);

await page.locator('div').filter({ hasText: /^22$/ }).click();
await page.getByLabel('Select client profile*').click();
await page.getByText('Automation (OT)').click();
await page.getByLabel('Recurring Appointment').check();
await page.getByLabel('Tue').check();
await page.getByLabel('Every').click();
await page.getByLabel('Every').fill('2');
await page.getByLabel('After').click();
await page.getByLabel('After').fill('2');
await page.getByLabel('Select location *').click();
await page.getByText('Practice Wide Locations @').click();
await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
await page.waitForTimeout(9000);

await page.getByRole('cell', { name: '04' }).first().click();
await page.getByLabel('Select client profile*').click();
await page.getByText('Automation (OT)').click();
await page.getByLabel('Recurring Appointment').check();
await page.getByLabel('Every').click();
await page.getByLabel('Every').fill('3');
await page.getByLabel('Wed').check();
await page.getByLabel('After').click();
await page.getByLabel('After').fill('3');
await page.getByLabel('Select location *').click();
await page.getByText('Practice Wide Locations @').click();
await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
await page.waitForTimeout(9000);


  await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create Appointment' }).click();
  await page.waitForTimeout(6000);
  await page.getByLabel('Select client profile*').click();
  await page.getByText('Automation (OT)').click();
  await page.waitForTimeout(2000);
  await page.getByLabel('Recurring Appointment').check();
  await page.getByLabel('Span').click();
  await page.getByRole('option', { name: 'days' }).click();
  await page.getByLabel('After').click();
  await page.getByLabel('After').fill('2')
  await page.getByLabel('Select location *').click();
  await page.getByText('Owner Adding Practice').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(2000);
  
 
});
test('Multi Locations', async () => {

  await page.getByLabel('Office Locations').click();
  await page.getByRole('option', { name: 'All' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Telehealth : Onli...' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByLabel('1 Office Location').click();
  await page.getByRole('option', { name: 'Telehealth : Onli...' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'KANTIME HEALTHCAR...' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByLabel('1 Office Location').click();
  await page.getByRole('option', { name: 'KANTIME HEALTHCAR...' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Practice Wide Loc...' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByLabel('1 Office Location').click();
  await page.getByRole('option', { name: 'Practice Wide Loc...' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Owner Adding Prac...' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByLabel('1 Office Location').click();
  await page.getByRole('option', { name: 'Owner Adding Prac...' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Owner Clinican Se...' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByLabel('1 Office Location').click();
  await page.getByRole('option', { name: 'All' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();


  await page.getByText('Billing').click();
  await page.getByLabel('Office Locations').click();
  await page.getByRole('option', { name: 'Telehealth : Onli...' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Telehealth : Onli...' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'KANTIME HEALTHCAR...' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'KANTIME HEALTHCAR...' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Practice Wide Loc...' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: 'Practice Wide Loc...' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'All' }).getByRole('checkbox').check();
  await page.reload();

  await page.locator('div').filter({ hasText: /^Reports$/ }).click();
  await page.getByText('Payment Status').click();
  await page.getByLabel('Office Locations').click();
  await page.getByRole('option', { name: 'All' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Telehealth : Onli...' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByLabel('1 Office Location').click();
  await page.getByRole('option', { name: 'Telehealth : Onli...' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'KANTIME HEALTHCAR...' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByLabel('1 Office Location').click();
  await page.getByRole('option', { name: 'KANTIME HEALTHCAR...' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Practice Wide Loc...' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByLabel('1 Office Location').click();
  await page.getByRole('option', { name: 'Practice Wide Loc...' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Owner Adding Prac...' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByLabel('1 Office Location').click();
  await page.getByRole('option', { name: 'Owner Adding Prac...' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Owner Clinican Se...' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByLabel('1 Office Location').click();
  await page.getByRole('option', { name: 'All' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByTestId('ArrowBackIcon').locator('path').click();

});
test('Appointment cancellation policy', async () => {
  try {
    await page.locator('div').filter({ hasText: /^Settings$/ }).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
     await page.getByText('Settings').click();
  }
  await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
  await page.getByText('Automation Test').click();
  await page.getByRole('tab', { name: 'Sessions' }).click();
  await page.getByRole('cell', { name: 'Charge' }).getByRole('button').nth(2).click();
  await page.getByRole('menuitem', { name: 'View details' }).click();
  await page.getByLabel('').click();
  await page.getByRole('option', { name: 'No Show' }).click();
  await page.locator('button').filter({ hasText: 'Add note' }).nth(1).click();
  await page.getByRole('button', { name: 'Add psychotherapy note' }).nth(1).click();
  await page.getByPlaceholder('Enter your response here').click();
  await page.getByPlaceholder('Enter your response here').fill('Test Added here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(3000);
  await page.getByRole('tab', { name: 'Sessions' }).click();
  await page.getByRole('cell', { name: 'Charge' }).getByRole('button').nth(2).click();
  await page.getByRole('menuitem', { name: 'View details' }).click();
  await page.locator('._appointmentHeader_b2iyx_8 > .MuiButtonBase-root').click();
  
  await page.getByText('Calendar').first().click();
  await page.getByLabel('Color').click();
  await page.getByRole('option', { name: 'Clinician' }).click();
  await page.waitForTimeout(5000);
  await page.reload();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Month' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.locator('div').filter({ hasText: /^14$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'James (OT)' }).click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByText('OT:').click();
  await page.getByLabel('Show').click();
  await page.getByRole('option', { name: 'Late Cancel' }).click();
  await page.locator('._appointmentHeader_b2iyx_8 > .MuiButtonBase-root').click();

  await page.locator('div').filter({ hasText: /^16$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByText('James (OT)').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(3000);

  await page.locator('div').filter({ hasText: /^19$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByText('James (OT)').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(3000);

  await page.locator('div').filter({ hasText: /^21$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByText('Automation (OT)').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(3000);

  await page.locator('div').filter({ hasText: /^23$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByText('Automation (OT)').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(3000);

  await page.getByText('OT:').first().click();
  await page.getByLabel('Show').click();
  await page.getByRole('option', { name: 'No Show' }).click();
  await page.locator('._appointmentHeader_b2iyx_8 > .MuiButtonBase-root').click();
  await page.waitForTimeout(3000);

  await page.getByText('OT:').nth(1).click();
  await page.getByLabel('Show').click();
  await page.getByRole('option', { name: 'Late Cancel' }).click();
  await page.locator('._appointmentHeader_b2iyx_8 > .MuiButtonBase-root').click();
  await page.waitForTimeout(3000);

  await page.getByText('OT:').nth(1).click();
  await page.getByLabel('Show').click();
  await page.getByRole('option', { name: 'Late Cancel' }).click();
  await page.locator('._appointmentHeader_b2iyx_8 > .MuiButtonBase-root').click();
  await page.waitForTimeout(3000);

  await page.getByText('OT:').nth(1).click();
  await page.getByLabel('Show').click();
  await page.getByRole('option', { name: 'No Show' }).click();
  await page.locator('._appointmentHeader_b2iyx_8 > .MuiButtonBase-root').click();
  await page.waitForTimeout(3000);

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
await page.waitForTimeout(3000);

  await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
  await page.getByText('Automation Test').click();
  await page.getByRole('tab', { name: 'Sessions' }).click();
  await page.waitForTimeout(5000);

  try {
    await page.locator('div').filter({ hasText: /^Settings$/ }).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
     await page.getByText('Settings').click();
  }
  await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
  await page.getByText('James Willy').click();
  await page.getByRole('tab', { name: 'Sessions' }).click();
  await page.waitForTimeout(5000);

});
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
  await page.getByText('Practice settings').click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search here').click();
  await page.getByRole('tab', { name: 'Client' }).click();
  await page.getByPlaceholder('Search here').click();
  await page.getByPlaceholder('Search here').fill('Automation');
  await page.getByPlaceholder('Search here').press('Enter');
  await page.getByRole('heading', { name: 'Automation (OT)' }).click();
  await page.waitForTimeout(2000);
  // await page.locator('._nameDetails_111x7_20 > .MuiButtonBase-root').click();

  try {
    await page.locator('div').filter({ hasText: /^Settings$/ }).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
     await page.getByText('Settings').click();
  }
  await page.getByText('Clinician settings').click();
  await page.waitForTimeout(5000);
  await page.getByText('Practice settings').click();
  await page.getByPlaceholder('Search').click();
  await page.getByRole('tab', { name: 'Leads' }).click();
  await page.getByPlaceholder('Search here').click();
  await page.getByPlaceholder('Search here').fill('James');
  await page.getByPlaceholder('Search here').press('Enter');
  await page.getByRole('heading', { name: 'James Lead' }).click();
  await page.getByRole('img', { name: 'logo' }).click();
  await page.waitForTimeout(2000);

  try {
    await page.locator('div').filter({ hasText: /^Settings$/ }).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
     await page.getByText('Settings').click();
  }
  await page.waitForTimeout(2000);
  
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
      '#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._generalSettingsTab_peqpd_1 > div > div._flexContainer_peqpd_4 > div._userNameDetailsContainer_peqpd_8 > div > div._imagePicker_peqpd_17 > input[type=file]'    )
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

