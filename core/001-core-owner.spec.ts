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
    await page.getByPlaceholder('Enter Group Practice name').click();
    await page.getByPlaceholder('Enter Group Practice name').fill('KanTime Healthcare System ');
    await page.getByLabel('Address Line').click();
    await page.getByLabel('Address Line').fill('New York City');
    await page.waitForTimeout(4000);
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
    await page.getByRole('combobox', { name: 'State' }).fill('Haw');
    await page.getByRole('option', { name: 'Hawaii' }).click();
    await page.getByLabel('City').click();
    await page.getByRole('option', { name: 'Honolulu' }).click();
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


  test.skip('Settings Flows', async () => {

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
    await page.waitForTimeout(5000);
    
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
    await page.getByLabel('Office name').fill('Owner Clinican Settings Locations');
    await page.getByLabel('Address').click();
    await page.getByLabel('Address').fill('New Jersy main road');
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

    // Subscriptions
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
    //console.log(myEmails);

    await page.getByLabel('Email*').fill(invitesinbox1!);
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await page.getByLabel('Intake Admin').check();
    await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    await page.waitForTimeout(2000);
    await page.reload();

    //  Custom Role Setting
    await page.getByText('Role settings').click();
    await page.getByRole('button', { name: 'Create custom role' }).nth(1).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
    await page.getByLabel('Practice Manager').check();
    await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
    await page.getByLabel('Role title').click();
    await page.getByLabel('Role title').fill('Own Role');
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.waitForTimeout(13000);

    //   Scheduler Calender 
    await page.getByText('Calendar').click();
    await page.waitForTimeout(4000);
    // await page.pause();
    // try {
    //   await page.locator('div').filter({ hasText: /^Currently accepting appointments$/ }).getByRole('checkbox').click();

    // } catch (error) {
    //   console.log('Failed to find first locator, trying second locator');
    //   await page.locator('#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._acceptingAppointmentsSwitch_3wx8u_17 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383').click();
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
    await page.locator(
      '#root > div._layout_cqogi_1 > div._content_cqogi_7 > div._bookingWidgetWrapper_4jerd_1 > div._copyLinkContainer_4jerd_19 > div._link_4jerd_28 > p').click();
    const page1 = await page1Promise;
    await page1.locator('div').filter({ hasText: /^Owner TeamSelect$/ }).getByRole('button').nth(1).click();
    await page1.locator('div').filter({ hasText: /^Psychotherapy, 30 minutes with patient- 10 mins$/ }).nth(1).click();

    await page1.locator(
      '#root > div._layout_cqogi_1 > div > div._bookingWidgetWrapper_tlkra_1 > div._bookingWidgetContainer_tlkra_21 > div._bookingContent_tlkra_44 > div:nth-child(2) > div > div._dateTime_142fu_33 > div > div:nth-child(2) > div > div._timeSlotsWrapper_vyf9q_11 div:first-child'
    )
      .click();
    await page1.getByPlaceholder('Enter first name').click();
    await page1.getByPlaceholder('Enter first name').fill('Booking');
    await page1.getByPlaceholder('Enter last name').click();
    await page1.getByPlaceholder('Enter last name').fill('Willy');
    await page1.getByPlaceholder('Enter email').click();
    //
    const inviteinbox1 = await createNewEmail();
    await page1.getByPlaceholder('Enter email').fill(inviteinbox1!);

    await page1.getByPlaceholder('Enter phone').click();
    await page1.getByPlaceholder('Enter phone').fill('(893) 553-00024');
    await page1.getByRole('button', { name: 'Request appointment' }).nth(1).click();
    await page1.waitForTimeout(1000);
    await page1.close();


    // Billing sections
    await page.locator('p').filter({ hasText: 'Billing' }).click();
    await page.getByRole('tab', { name: 'Insurance' }).click();
    await page.getByLabel('Practice name').click();
    await page.getByLabel('Practice name').fill('KanTime Healthcare System');
    await page.getByLabel('NPI').click();
    await page.getByLabel('NPI').fill('1234567890');
    await page.waitForTimeout(5000);
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
    await page.waitForTimeout(8000);
    await page.getByText('Payers').click();
    await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
    await page.getByLabel('Search for insurance payers').click();
    await page
      .getByRole('combobox', { name: 'Search for insurance payers' })
      .fill('Absolute');
    await page.waitForTimeout(2000);
    await page.getByText('68055- Absolute Total Care').click();
    await page.getByRole('button', { name: 'Add' }).nth(1).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
    await page.getByLabel('Search for insurance payers').click();
    await page.getByLabel('Search for insurance payers').fill('Maine Medicaid');
    await page.getByText('MEMCD- ME Medicaid').click();
    await page.getByRole('button', { name: 'Add' }).nth(1).click();

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

    await page.locator('p').filter({ hasText: 'Integrations' }).click();
    await page.getByLabel('​').click();
    await page.getByRole('option', { name: 'Billing' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Billing' }).getByRole('checkbox').uncheck();
    await page.getByRole('option', { name: 'Communication' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'Communication' }).getByRole('checkbox').uncheck();

    await page.getByRole('option', { name: 'All' }).getByRole('checkbox').check();
    await page.getByRole('option', { name: 'All' }).getByRole('checkbox').uncheck();
    await page.reload();
    await page.getByPlaceholder('Search by name').click();
    await page.getByPlaceholder('Search by name').fill('S');

    // Privacy Policy
    await page.getByText('Website Privacy Policy').click();
    await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
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
  });

  test('Owner Dashboard', async () => {
    // Dashboard Features for Owner roles
    // await page.locator('div').filter({ hasText: /^Dashboard$/ }).getByRole('img').click();
    
    // await page.waitForTimeout(2000);
    // await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
    // await page.getByRole('menuitem', { name: 'Create Appointment' }).click();
    // await page.waitForTimeout(6000);
    // await page.getByLabel('Select client profile*').click();
    // await page.getByText('Automation (OT)').click();
    // await page.waitForTimeout(8000);
    // await page.getByLabel('Select location *').click();
    // await page.getByText('Telehealth : Online video').click();
    // await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    // await page.waitForTimeout(2000);
    
    // // Taskboard view
    // await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
    // await page.getByPlaceholder('Task Name').click();
    // await page.getByPlaceholder('Task Name').fill('Owner Automation Task');
    // await page.locator('div').filter({ hasText: /^Task Description$/ }).click();
    // await page.getByPlaceholder('Add Description').fill('Testing Taskboard with Owner role');
    // await page.getByRole('button', { name: 'user icon Add Subtask' }).click();
    // await page.getByPlaceholder('Add subtask').click();
    // await page.getByPlaceholder('Add subtask').fill('Owner Subtask 1');
    // await page.getByRole('button', { name: 'user icon Assign to' }).click();
    // await page.locator('span').filter({ hasText: 'Owner Team' }).getByRole('paragraph').click();
    // await page.getByRole('banner').getByTestId('priority_flag_image').click();
    // await page.getByRole('menuitem', { name: 'Urgent' }).click();
    // await page.getByRole('button', { name: 'Task None priority flag' }).click();
    // await page.getByRole('menuitem', { name: 'High' }).click();
    // await page.getByRole('button', { name: 'Open status_mark_Open' }).click();
    // await page.getByText('In Progress').click();
    // await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
    // await page.waitForTimeout(6000);

    // await page.getByText('Owner Automation Task').click();
    // await page.getByPlaceholder('Add comment').click();
    // await page.getByPlaceholder('Add comment').fill('Hi Man How are U');
    // await page.getByRole('button', { name: 'Send' }).nth(1).click();
    // await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();
    // await page.waitForTimeout(5000);

    // await page.getByText('Owner Automation Task').click();
    // await page.getByRole('button', { name: 'In Progress' }).click();
    // await page.getByText('In Review').click();
    // await page.getByRole('button', { name: 'assignee icon' }).click();
    // await page.locator('p').filter({ hasText: 'Owner Team' }).click();
    // await page.getByRole('button', { name: 'Save changes' }).nth(1).click();
    // await page.waitForTimeout(4000);
    // await page.getByRole('tab', { name: 'Clinician' }).click();
    // await page.getByRole('tab', { name: 'Practice' }).click();

    // // Dashboard Appoinment
    // await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
    // await page.getByRole('menuitem', { name: 'Create Appointment' }).click();
    // await page.getByLabel('Select client profile*').click();
    // await page.getByText('Automation (OT)').click();
    // await page.waitForTimeout(8000);
    // await page.getByLabel('Select location *').click();
    // await page.getByText('KANTIME HEALTHCARE').click();
    // await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    // await page.waitForTimeout(2000);

    await page.locator('div').filter({ hasText: /^Calendar$/ }).click();
  await page.pause();
    await page.getByRole('cell', { name: '02' }).first().click();
    await page.getByRole('cell', { name: '04' }).first().click();
    await page.locator('div').filter({ hasText: /^06$/ }).click();
    await page.locator('div').filter({ hasText: /^08$/ }).click();
    await page.locator('div').filter({ hasText: /^10$/ }).click();
    await page.locator('div').filter({ hasText: /^12$/ }).click();
    await page.locator('div').filter({ hasText: /^14$/ }).click();
    await page.locator('div').filter({ hasText: /^17$/ }).click();
    await page.locator('div').filter({ hasText: /^20$/ }).click();
    await page.locator('div').filter({ hasText: /^21$/ }).click();
    await page.locator('div').filter({ hasText: /^22$/ }).click();
    await page.locator('div').filter({ hasText: /^23$/ }).click();
    // await page.getByRole('button', { name: 'Month' }).click();
    // await page.getByText('OT:').first().click();
    // await page.locator('button').filter({ hasText: 'Add note' }).nth(1).click();
    // await page.getByRole('button', { name: 'Add psychotherapy note' }).nth(1).click();
    // await page.getByPlaceholder('Enter your response here').click();
    // await page.getByPlaceholder('Enter your response here').fill('Test Add');
    // await page.getByRole('button', { name: 'Save' }).nth(1).click();
    // await page.getByRole('button', { name: 'Month' }).click();
    // await page.getByText('OT:').nth(1).click();
    // await page.locator('button').filter({ hasText: 'Edit' }).nth(1).click();
    // await page.getByPlaceholder('Enter text here').click();
    // await page.getByPlaceholder('Enter text here').fill('Test Updated');
    // await page.getByRole('button', { name: 'Update Appointment' }).nth(1).click();
    // await page.getByText('OT:').nth(1).click();
    // await page.locator('button').filter({ hasText: 'Cancel appointment' }).nth(1).click();
    // await page.getByRole('button', { name: 'Yes' }).nth(1).click();
    // await page.waitForTimeout(3000);


    // await page.getByLabel('Color').click();
    // await page.getByRole('button', { name: 'Customize colors' }).nth(1).click();
    // await page.waitForTimeout(3000);
    // await page.getByRole('button', { name: 'Save' }).nth(1).click();
    // await page.waitForTimeout(3000);

    // await page.getByRole('option', { name: 'Service Code' }).click();
    // await page.getByRole('button', { name: 'Customize colors' }).nth(1).click();
    // await page.waitForTimeout(3000);
    // await page.getByRole('button', { name: 'Save' }).nth(1).click();
    // await page.waitForTimeout(3000);

    // await page.getByRole('option', { name: 'Appointment Status' }).click();

    // await page.getByRole('option', { name: 'Payment Type' }).click();
    // await page.getByRole('button', { name: 'Customize colors' }).nth(1).click();
    // await page.waitForTimeout(3000);
    // await page.getByRole('button', { name: 'Save' }).nth(1).click();
    // await page.waitForTimeout(3000);
    // await page.reload();
    // await page.waitForTimeout(5000);
    
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
    await page.getByText('Practice Wide Locations @').click();
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
    await page.getByText('Owner Adding Practice').click();
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
  await page.getByText('Owner Adding Practice').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(9000);

  await page.locator('div').filter({ hasText: /^17$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByText('Automation (OT)').click();
  await page.getByLabel('Recurring Appointment').check();
  await page.getByLabel('Span').click();
  await page.getByRole('option', { name: 'weeks' }).click();
  await page.getByLabel('Mon', { exact: true }).check();
  await page.getByLabel('After').click();
  await page.getByLabel('After').fill('2');
  await page.locator('div').filter({ hasText: /^Select location \*$/ }).getByLabel('Open').click();
  await page.getByText('Owner Clinican Settings').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(9000);

  await page.locator('div').filter({ hasText: /^17$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByText('Automation (OT)').click();
  await page.getByLabel('Recurring Appointment').check();
  await page.getByLabel('Tue').check();
  await page.getByLabel('Every').click();
  await page.getByLabel('Every').fill('2');
  await page.getByLabel('After').click();
  await page.getByLabel('After').fill('2');
  await page.locator('div').filter({ hasText: /^Select location \*$/ }).getByLabel('Open').click();
  await page.getByText('Owner Clinican Settings').click();
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
    await page.getByText('Practice Wide Locations @').click();
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    await page.waitForTimeout(2000);

  });
  test('DP Update and Logout', async () => {
    try {
      await page.locator('.MuiAvatar-img').click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
      await page.getByRole('img').nth(1).click();
    }

    await page.getByRole('menuitem', { name: 'Logout' }).click();
  });
});