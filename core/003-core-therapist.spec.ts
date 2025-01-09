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

  if (!myEmails?.therapistEmail?.length) {
    throw new Error(`TherapistEmail not present returning...`);
  }
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe('All TherapistRole Test case ', () => {
test('Therapist login and  onboarding ', async ({ request }) => {
  const myEmails: IEmail = await readEmails();

  const data = await generatePasswordlessLoginLink({
    email: myEmails.therapistEmail!,
    request: request,
  });

  // goto page
  await page.goto(data!);

  // Onbaording flows for therapist
  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('Therapist ');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('1');
  await page.getByPlaceholder('Enter phone').click();
  await page.getByPlaceholder('Enter phone').fill('(846) 534-65836');
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();

  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.waitForTimeout(3000);
  await page.getByLabel('Office name').click();
  await page.getByLabel('Office name').fill('Therapist Clinican Settings Locations');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('New area City');
  await page.waitForTimeout(1000);
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('Nev');
  await page.getByText('Nevada').click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Re');
  await page.getByText('Reno').click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('56192');
  await page.getByLabel('Make default location').check();
  await page.getByRole('button', { name: 'Add location' }).nth(1).click();

  await page.getByRole('button', { name: 'Next' }).nth(1).click();

  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('CPT Code').click();
  await page.getByRole('combobox', { name: 'CPT Code' }).fill('96133');
  await page.getByText('96133, Neuropsychological').click();
  await page.getByLabel('Fee *').click();
  await page.getByLabel('Fee *').fill('100');
  await page.getByLabel('Duration *').click();
  await page.getByLabel('Duration *').fill('10');

  await page.getByRole('button', { name: 'Add service' }).nth(1).click();
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
  await page.getByRole('tab', { name: 'Locations' }).click();
  await page.locator('.PrivateSwitchBase-input').first().uncheck();
  await page.waitForTimeout(2000);
  await page.locator('div:nth-child(4) > ._topContent_tfiie_8 > ._actions_tfiie_36 > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').uncheck();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'Services' }).click();
  await page.locator('div:nth-child(9) > ._topContent_1eanb_8 > ._actions_1eanb_78 > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').uncheck();
  await page.waitForTimeout(2000);
  await page.locator('div:nth-child(10) > ._topContent_1eanb_8 > ._actions_1eanb_78 > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').uncheck();
  await page.waitForTimeout(2000);
  await page.locator('.PrivateSwitchBase-input').first().uncheck();
  await page.waitForTimeout(2000);
  await page.locator('.PrivateSwitchBase-input').first().check();
  await page.waitForTimeout(2000);
  await page.locator('._actions_1eanb_78 > button').first().click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Cancel' }).nth(1).click();
  await page.waitForTimeout(5000);
  //   Scheduler Calender 
  await page.locator('p').filter({ hasText: /^Calendar$/ }).click();
  
  // try {
  // await page.locator('div').filter({ hasText: /^Currently accepting appointments$/ }).getByRole('checkbox').click();

  // } catch (error) {
  //   console.log('Failed to find first locator, trying second locator');
  //   await page.locator('#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._acceptingAppointmentsSwitch_3wx8u_17 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383').click();
  // }
  await page.waitForTimeout(8000);
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
  await page.waitForTimeout(2000);
  
  
  //  Edit More Slots 
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();
  await page.waitForTimeout(2000);
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

  //   Privacy Policy
  await page.getByText('Website Privacy Policy').click();
  await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
  await page.getByText('Terms & Conditions').click();
  await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
});
test('Forms Tab', async () => {
  // All Forms create Forms
  await page.locator('div').filter({ hasText: /^Documents$/ }).getByRole('img').click();
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  // Questionaries Form Code
  await page.getByText('Questionnaire').click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Therapist Automation Forms');
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
  // await page.getByLabel('Mandatory').check();
  await page.getByRole('button', { name: 'Preview' }).nth(1).click();
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').click();
  // Progress Note
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  await page.getByText('Progress note', { exact: true }).click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Therapist Automation Testing');
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
  // await page.getByLabel('Mandatory').check();
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
  await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();
 
});
test('Create Clients', async () => {
  await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create client' }).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Rajesh');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Das');
  await page.getByLabel('Email*').click();
  //

  const Bookinginbox1 = await createNewEmail();
  let myEmails = await readEmails();
  await setEmails({ ...myEmails, clientEmail: Bookinginbox1! });
  //console.log(myEmails);
  await page.getByLabel('Email*').fill(Bookinginbox1!);

  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByLabel('Therapist Automation Forms').check();
  await page.getByRole('button', { name: 'Create Client' }).nth(1).click();

  //    Minor client
  await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create client' }).click();
  await page.getByLabel('Minor').check();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Shiva');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Kumar');
  await page.getByLabel('Email*').click();
  //

  const Bookinginbox2 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox2!);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Venkatesh');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Prasad');
  await page.getByLabel('Email*').click();
  //
  const Bookinginbox3 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox3!);

  await page.getByLabel('Guardian relationship to').click();
  await page.getByLabel('Guardian relationship to').fill('Brother');
  await page.getByRole('button', { name: 'Next' }).nth(1).click();

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('button', { name: 'Create Client' }).nth(1).click();

  //   Create Couple Account

  await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create client' }).click();
  await page.getByLabel('Couple').check();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Rakesh');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Das');
  await page.getByLabel('Email*').click();
  //
  const Bookinginbox4 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox4!);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Poornima');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Das');
  await page.getByLabel('Email*').click();
  //
  const Bookinginbox5 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox5!);

  await page.getByLabel('Phone').click();
  await page.getByLabel('Phone').fill('(506) 704-23454');
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
  await page.waitForTimeout(4000);

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
  await page.getByRole('option', { name: 'Rajesh (T1)' }).first().click();
  await page.getByLabel('Select service *').click();
  await page.getByText('Developmental Testing, ...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('New every day testing');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();

  // Past Date Appoinments
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.locator('div').filter({ hasText: /^17$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Rajesh (T1)' }).first().click();
  await page.getByLabel('Select service *').click();
  await page.getByText('Developmental Testing, ...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('New every day testing');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  // Create Appoinment Button( top Bar)
  await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create appointment' }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Rajesh (T1)' }).first().click();
  await page.waitForTimeout(9000);
  await page.getByLabel('Select service *').click();
  await page.getByText('Family psychotherapy...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  
});
test('Client File', async () => {
  //  Client file
  await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
  await page.getByPlaceholder('Search client').click();
  await page.getByPlaceholder('Search client').fill('Raje');
  await page.getByPlaceholder('Search client').press('Enter');
  await page.waitForTimeout(5000);

  try {
    await page.getByRole('cell', { name: 'icon Rajesh Das' }).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
    await page.getByText('Rajesh Das').click();
  }

  // Info and Settings
  await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Rajesh');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Das');
  await page.getByLabel('Pronouns').click();
  await page.getByText('She/They').click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();


  //  Payment tab
  await page.getByRole('tab', { name: 'Payment' }).click();
  await page.getByLabel('Insurance').check();
  await page.waitForTimeout(2000);
  // Add card
      // await page.frameLocator("iframe[title='Secure card number input frame']").getByPlaceholder('Card number').click();
      // await page.frameLocator("iframe[title='Secure card number input frame']").getByPlaceholder('Card number').fill('4000056655665556');
      // await page .waitForTimeout(5000);
      // await page.frameLocator("iframe[title='Secure expiration date input frame']").getByPlaceholder('Expiry date (MM/YY)').click();
      // await page.frameLocator("iframe[title='Secure expiration date input frame']").getByPlaceholder('Expiry date (MM/YY)').fill('08 / 31');
      // await page .waitForTimeout(5000);
      // await page.frameLocator("iframe[title='Secure CVC input frame']").getByPlaceholder('CVV').click();
      // await page.frameLocator("iframe[title='Secure CVC input frame']").getByPlaceholder('CVV').fill('2545');
      // await page .waitForTimeout(5000);
      // await page.getByRole('button', { name: 'Add card' }).nth(1).click();
      // await page .waitForTimeout(5000);
  // Logic For Fail Locator
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
  // await page.waitForTimeout(5000);
  await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByText('SimplePractice').click();
  await page.getByTestId('ArrowBackRoundedIcon').click();
  await page
    .locator('div')
    .filter({ hasText: /^Basic InfoIndividual$/ })
    .getByRole('button')
    .click();
    await page.waitForTimeout(2000);

    await page.getByRole('tab', { name: 'Scored Measures' }).click();
    await page.getByRole('button', { name: 'Send measure' }).nth(1).click();
    await page.getByRole('heading', { name: 'PHQ-' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Send measure' }).nth(1).click();
    await page.getByRole('heading', { name: 'GAD-' }).click();
    await page.waitForTimeout(5000);

  await page.getByRole('tab', { name: 'Bills' }).click();
  await page.getByLabel('Status').click();
  await page.getByRole('option', { name: 'Paid' }).click();
  await page.waitForTimeout(3000);
  await page.getByLabel('Status').click();
  await page.getByRole('option', { name: 'Pending' }).click();
  await page.waitForTimeout(3000);
  await page.getByLabel('Status').click();
  await page.getByRole('option', { name: 'Settled' }).click();
  await page.waitForTimeout(3000);
  
  // Create Appoinment

  await page.getByRole('button', { name: 'Add' }).nth(3).click();
  await page
    .getByRole('menuitem', { name: 'Appointment' })
    .getByRole('img')
    .click();
    await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(5000);

});
// test('Insurance Tab', async () => {
//   await page.locator('div').filter({ hasText: /^Insurance$/ }).getByRole('img').click();
//   await page.getByRole('button', { name: 'Select all' }).nth(1).click();
//   await page.waitForTimeout(3000);
//   await page.getByRole('button', { name: 'Auto create claim' }).nth(1).click();
//   await page.getByRole('tab', { name: 'Claims' }).click();
//   await page.getByRole('button', { name: 'Created' }).click();
//   await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
//   await page.waitForTimeout(3000);
//   try {
//     await page.getByText('68055- Absolute Total Care').click();
//   } catch (error) {
//     console.log('Failed to find first locator, trying second locator');
//     await page.locator('td:nth-child(9)').first().click();
//   }
//   await page.waitForTimeout(3000);
//   await page.getByRole('button', { name: 'Add note' }).nth(1).click();
//   await page.getByPlaceholder('Start typing here').click();
//   await page
//     .getByPlaceholder('Start typing here')
//     .fill('Hey I am Adding Clients File Details here so check this');
//   await page.getByRole('button', { name: 'Save' }).nth(1).click();
//   await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();

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
//   await page.getByRole('tab', { name: 'Claim History' }).click();
//   await page.waitForTimeout(2000);

//      try {
//     await page.locator('div').filter({ hasText: /^Settings$/ }).click();
//   } catch (error) {
//     console.log('Failed to find first locator, trying second locator');
//      await page.getByText('Settings').click();
//   }
// });
test('Therapist Dashboard', async () => {
  await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create appointment' }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Rajesh (T1)' }).first().click();
  await page.waitForTimeout(9000);
  await page.getByLabel('Select service *').click();
  await page.getByText('Family psychotherapy...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(1000);
 
await page.locator('div').filter({ hasText: /^Calendar$/ }).first().click();
await page.waitForTimeout(7000);
// await page.getByRole('button', { name: 'Month' }).click();
await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
await page.locator('div').filter({ hasText: /^Calendar$/ }).first().click();
await page.getByText('T1:').nth(1).click();
await page.locator('button').filter({ hasText: 'Add note' }).nth(1).click();
await page.getByRole('button', { name: 'Add psychotherapy note' }).nth(1).click();
await page.getByPlaceholder('Enter your response here').click();
await page.getByPlaceholder('Enter your response here').fill('Test Add');
await page.getByRole('button', { name: 'Save' }).nth(1).click();
// await page.getByRole('button', { name: 'Month' }).click();
await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
await page.locator('div').filter({ hasText: /^Calendar$/ }).first().click();
await page.getByText('T1:').nth(1).click();
await page.locator('button').filter({ hasText: 'Edit' }).nth(1).click();
await page.getByPlaceholder('Enter text here').click();
await page.getByPlaceholder('Enter text here').fill('Test Updated');
await page.getByRole('button', { name: 'Update Appointment' }).nth(1).click();
await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
await page.locator('div').filter({ hasText: /^Calendar$/ }).first().click();
// await page.getByText('T1:').nth(1).click();
// await page.locator('button').filter({ hasText: 'Cancel appointment' }).nth(1).click();
// await page.getByRole('button', { name: 'Yes' }).nth(1).click();
await page.waitForTimeout(5000);

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
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(4000);
  await page.locator('div').filter({ hasText: /^10$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByText('Rajesh (T1)').click();
  await page.getByLabel('Recurring Appointment').check();
  await page.getByLabel('Span').click();
  await page.getByRole('option', { name: 'days' }).click();
  await page.getByLabel('After').click();
  await page.getByLabel('After').fill('2');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(4000);
  
  await page.locator('div').filter({ hasText: /^14$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByText('Rajesh (T1)').click();
  await page.getByLabel('Recurring Appointment').check();
  await page.getByLabel('Span').click();
  await page.getByRole('option', { name: 'days' }).click();
  await page.getByLabel('Every').click();
  await page.getByLabel('Every').fill('2');
  await page.getByLabel('After').click();
  await page.getByLabel('After').fill('2');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click()
  await page.waitForTimeout(9000);

await page.locator('div').filter({ hasText: /^13$/ }).click();
await page.getByLabel('Select client profile*').click();
await page.getByText('Rajesh (T1)').click();
await page.getByLabel('Recurring Appointment').check();
await page.getByLabel('Every').click();
await page.getByLabel('Every').fill('3');
await page.getByLabel('Span').click();
await page.getByRole('option', { name: 'days' }).click();
await page.getByLabel('After').click();
await page.getByLabel('After').fill('3');
await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
await page.waitForTimeout(9000);

await page.locator('div').filter({ hasText: /^17$/ }).click();
await page.getByLabel('Select client profile*').click();
await page.getByText('Rajesh (T1)').click();
await page.getByLabel('Recurring Appointment').check();
await page.getByLabel('Span').click();
await page.getByRole('option', { name: 'weeks' }).click();
await page.getByLabel('Mon', { exact: true }).check();
await page.getByLabel('After').click();
await page.getByLabel('After').fill('2');
await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
await page.waitForTimeout(9000);

await page.locator('div').filter({ hasText: /^17$/ }).click();
await page.getByLabel('Select client profile*').click();
await page.getByText('Rajesh (T1)').click();
await page.getByLabel('Recurring Appointment').check();
await page.getByLabel('Fri').check();
await page.getByLabel('Every').click();
await page.getByLabel('Every').fill('2');
await page.getByLabel('After').click();
await page.getByLabel('After').fill('2');
await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
await page.waitForTimeout(9000);

await page.getByRole('button', { name: 'Next' }).click();
await page.waitForTimeout(3000);
await page.getByRole('cell', { name: '04' }).first().click();
await page.getByLabel('Select client profile*').click();
await page.getByText('Rajesh (T1)').click();
await page.getByLabel('Recurring Appointment').check();
await page.getByLabel('Every').click();
await page.getByLabel('Every').fill('3');
await page.getByLabel('Wed').check();
await page.getByLabel('After').click();
await page.getByLabel('After').fill('3');
await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
await page.waitForTimeout(9000);


  await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create Appointment' }).click();
  await page.waitForTimeout(6000);
  await page.getByLabel('Select client profile*').click();
  await page.getByText('Rajesh (T1)').click();
  await page.waitForTimeout(2000);
  await page.getByLabel('Recurring Appointment').check();
  await page.getByLabel('Span').click();
  await page.getByRole('option', { name: 'days' }).click();
  await page.getByLabel('After').click();
  await page.getByLabel('After').fill('2')
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(2000);

});
test('Update and Logout Flow', async () => {
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
    .setInputFiles('C:/Users/Rajesh/Downloads/therapist.jpg');

  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  try {
    await page.locator('.MuiAvatar-img').click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
    await page.getByRole('img').nth(1).click();
  }
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});
});