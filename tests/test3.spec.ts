import { test, type Page } from '@playwright/test';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createMailSurpEmail } from '../helpers/mailsurp';
import MailSlurp from 'mailslurp-client';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;
const mailslurp = new MailSlurp({
  apiKey: 'e065b0350cd442089b49035587b92e00c9e26f6004adce9e2ac12acafa0ac7a1',
});
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test('Owner login and  onboarding ', async ({ request }) => {
  const inbox = await createMailSurpEmail();

  const data = await generatePasswordlessLoginLink({
    email: 
    "057e36d3-f60c-4c2f-b32c-02bb7f31a240@mailslurp.net",
    request: request,
  });

  // goto page
  await page.goto(data!);

  // Onboarding Flows for Owner

  // DP
  await page
    .locator(
      '#root > div._layout_10ldc_1 > div > div._onboardProfile_bqqcv_1 > div > div > div > div._imagePicker_bqqcv_35 > input[type=file]'
    )
    .setInputFiles('../files/ther_img.jpg');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  // Onbaording flows for therapist
  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('Therapist');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('1');
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
  await page.waitForTimeout(4000);

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
await page.getByRole('button', { name: '1 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByRole('button', { name: 'Single choice', exact: true }).click();
await page.getByRole('option', { name: 'Short answer' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('Name of Client?');
await page.getByLabel('Mandatory').check();
await page.getByRole('button', { name: '2 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Long answer' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('NAme of Client and Tell Your Health Conditions?');
await page.getByRole('button', { name: '3 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Date' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('Client Date Of Birth?');
await page.getByLabel('Mandatory').uncheck();
await page.getByRole('button', { name: '4 Please enter a question' }).getByRole('button').nth(3).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'E-signature' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('Please Sign Your Sing?');
await page.getByLabel('Mandatory').check();
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
   await page.getByPlaceholder('Please enter a question').fill('what is Your Gender?');
   await page.getByRole('button', { name: '1 Please enter a question' }).getByRole('button').nth(2).click();
   await page.getByRole('button', { name: 'Single choice', exact: true }).click();
   await page.getByRole('option', { name: 'Short answer' }).click();
   await page.getByPlaceholder('Please enter a question').click();
   await page.getByPlaceholder('Please enter a question').fill('Name of Client?');
   await page.getByLabel('Mandatory').check();
   await page.getByRole('button', { name: '2 Please enter a question' }).getByRole('button').nth(2).click();
   await page.getByLabel('', { exact: true }).click();
   await page.getByRole('option', { name: 'Long answer' }).click();
   await page.getByPlaceholder('Please enter a question').click();
   await page.getByPlaceholder('Please enter a question').fill('Name of Client and Tell your Self?');
   await page.getByRole('button', { name: '3 Please enter a question' }).getByRole('button').nth(2).click();
   await page.getByLabel('', { exact: true }).click();
   await page.getByRole('option', { name: 'Date' }).click();
   await page.getByPlaceholder('Please enter a question').click();
   await page.getByPlaceholder('Please enter a question').fill('Client date of Brithday?');
   await page.getByRole('button', { name: '4 Please enter a question' }).getByRole('button').nth(3).click();
   await page.getByLabel('', { exact: true }).click();
   await page.getByRole('option', { name: 'Multiple choice' }).click();
   await page.getByPlaceholder('Please enter a question').click();
   await page.getByPlaceholder('Please enter a question').fill('Client Symptoms?');
   await page.getByRole('button', { name: '5 Please enter a question' }).getByRole('button').nth(2).click();
   await page.getByRole('button', { name: 'Multiple choice', exact: true }).click();
   await page.getByRole('option', { name: 'CPT code' }).click();
   await page.getByPlaceholder('Please enter a question').click();
   await page.getByPlaceholder('Please enter a question').fill('Client CPT code?');
   await page.getByRole('button', { name: '6 Please enter a question CPT' }).getByRole('button').nth(3).click();
   await page.getByLabel('', { exact: true }).click();
   await page.getByRole('option', { name: 'Diagnosis code' }).click();
   await page.getByPlaceholder('Please enter a question').click();
   await page.getByPlaceholder('Please enter a question').fill('Client Diagnosis Code?');
   await page.getByRole('button', { name: '7 Please enter a question' }).getByRole('button').nth(3).click();
   await page.getByLabel('', { exact: true }).click();
   await page.getByRole('option', { name: 'E-signature' }).click();
   await page.getByPlaceholder('Please enter a question').click();
   await page.getByPlaceholder('Please enter a question').fill('Please Sign here?');
   await page.getByRole('button', { name: 'Preview' }).nth(1).click();
   await page.getByRole('button').first().click();
   await page.getByRole('button', { name: 'Save' }).nth(1).click();
   await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._formsList_faptv_1 > div._header_faptv_4 > div > div > svg > path').click();
  
  });
  test('Create Clients', async () => {
    // Create Clients
    await page.locator('#root > div._layout_10ldc_1 > div._sideBar_148j7_1 > div._createBtnContainer_148j7_97 > button > button').click();
    await page.getByRole('menuitem', { name: 'Create client' }).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Rajesh');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Das');
    await page.getByLabel('Email*').click();
    // 
    const clientinbox = await mailslurp.inboxController.createInbox({});
    await page.getByLabel('Email*').fill(clientinbox.emailAddress);
    // await page.getByLabel('Email*').fill('createtherapist+6@gmail.com');
    await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
      
      
    // //   Minor client
    await page.waitForTimeout(2000);
    await page.locator('#root > div._layout_10ldc_1 > div._sideBar_148j7_1 > div._createBtnContainer_148j7_97 > button > button').click();
    await page.getByRole('menuitem', { name: 'Create client' }).click();
    await page.getByLabel('Minor').check();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Shiva');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Kumar');
    await page.getByLabel('Email*').click();
    // 
    const Minorinbox = await mailslurp.inboxController.createInbox({});
    await page.getByLabel('Email*').fill(Minorinbox.emailAddress);
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Venkatesh');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Prasad');
    await page.getByLabel('Email*').click();
    // 
    const Minor1inbox = await mailslurp.inboxController.createInbox({});
    await page.getByLabel('Email*').fill(Minor1inbox.emailAddress);
    // await page.getByLabel('Email*').fill('a---1@gmail.com');
    await page.getByLabel('Guardian relationship to').click();
    await page.getByLabel('Guardian relationship to').fill('Brother');
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    
    // //   Create Couple Account
    await page.waitForTimeout(2000);
    await page.locator('#root > div._layout_10ldc_1 > div._sideBar_148j7_1 > div._createBtnContainer_148j7_97 > button > button').click();
    await page.getByRole('menuitem', { name: 'Create client' }).click();
    await page.getByLabel('Couple').check();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Rakesh');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Das');
    await page.getByLabel('Email*').click();
    // 
    const Coupleinbox = await mailslurp.inboxController.createInbox({});
    await page.getByLabel('Email*').fill(Coupleinbox.emailAddress);
    // await page.getByLabel('Email*').fill('pp1@gmail.com');
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Poornima');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Das');
    await page.getByLabel('Email*').click();
    // 
    const Couple1inbox = await mailslurp.inboxController.createInbox({});
    await page.getByLabel('Email*').fill(Couple1inbox.emailAddress);
    // await page.getByLabel('Email*').fill('pp+1@gmail.com');
    await page.getByLabel('Phone').click();
    await page.getByLabel('Phone').fill('(506) 704-23454');
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    await page.waitForTimeout(2000)
    
      });
    
      test('Create Appoinment', async () => {
    // Create Appoinments
    await page.locator('div').filter({ hasText: /^Calendar$/ }).getByRole('img').click();
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
    // Past Date Appoinments
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
    // Create Appoinment Button( top Bar)
    await page.locator('#root > div._layout_10ldc_1 > div._sideBar_148j7_1 > div._createBtnContainer_148j7_97 > button > button').click();
    await page.getByRole('menuitem', { name: 'Create appointment' }).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByRole('option', { name: 'Rajesh (T1)' }).first().click();
    await page.getByLabel('Select service *').click();
    await page.getByText('Family psychotherapy...').click();
    await page.getByPlaceholder('Enter text here').click();
    await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
    await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    await page.waitForTimeout(3000);
    
      });
      test('Client File', async () => {
        //  Client file
    await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
    await page.getByText('Rajesh Das').click();

    // Forms Section
await page.getByRole('tab', { name: 'Forms' }).click();
await page.getByRole('button', { name: 'Send forms' }).nth(1).click();
await page.getByRole('tab', { name: 'Personal' }).click();
await page.getByText('Questionnaires').click();
await page.getByLabel('Select Forms to send').click();
await page.getByRole('combobox', { name: 'Select Forms to send' }).fill('Therapist Automation Testing');
await page.getByRole('option', { name: 'Therapist Automation Testing' }).click();
await page.getByRole('combobox', { name: 'Select Forms to send' }).click();
await page.getByRole('button', { name: 'Send' }).nth(1).click();

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
        await page.getByRole('tab', { name: 'Claims' }).click(); 
        await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div:nth-child(3) > div > div._table_13e1r_16 > table > tbody > tr:nth-child(1) > td:nth-child(8) > span > button > button > span > span._label_ns5gx_15').click();
        await page.getByRole('button', { name: 'Add note' }).nth(1).click();
      await page.getByPlaceholder('Start typing here').click();
      await page.getByPlaceholder('Start typing here').fill('Hey I am Adding Clients File Details here so check this');
      await page.getByRole('button', { name: 'Save' }).nth(1).click();
      await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
      await page.waitForTimeout(2000);
      await page.locator('div').filter({ hasText: /^StatusSubmittedEdit$/ }).getByRole('button').nth(1).click();
      await page.getByLabel('Select status').click();
      await page.getByRole('option', { name: 'Sent' }).click();
      await page.getByPlaceholder('Remarks').click();
      await page.getByPlaceholder('Remarks').fill('Sent this Payer Details to Change Healthcare');
      await page.getByRole('button', { name: 'Save' }).nth(1).click();
      await page.locator('div').filter({ hasText: /^StatusSentEdit$/ }).getByRole('button').nth(1).click();
      await page.getByLabel('Sent').click();
      await page.getByRole('option', { name: 'Paid', exact: true }).click();
      await page.getByPlaceholder('Remarks').click();
      await page.getByPlaceholder('Remarks').fill('Paid Form Payer Company');
      await page.getByRole('button', { name: 'Save' }).nth(1).click();
      // await page.locator('input[name="clientCopayAmount"]').click();
      // await page.locator('input[name="clientCopayAmount"]').fill('50');
      // await page.locator('input[name="insurancePaymentAmount"]').click();
      // await page.locator('input[name="insurancePaymentAmount"]').fill('40');
      // await page.locator('input[name="writeOffAmount"]').click();
      // await page.locator('input[name="writeOffAmount"]').fill('10');
      // await page.getByRole('button', { name: 'Save' }).nth(1).click();
      await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._header_174vt_7 > span > button > svg > path').click();
      await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
      
      });
      test('Update and Logout Flow', async () => {
        await page.locator('div').filter({ hasText: 'Therapist' }).nth(3).click();
    await page.getByRole('menuitem', { name: 'Profile' }).click();
    await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._generalSettingsTab_18vvz_1 > div > div._flexContainer_18vvz_4 > div._userNameDetailsContainer_18vvz_8 > div > div._imagePicker_18vvz_17 > input[type=file]').setInputFiles("C:/Users/Rajesh/Downloads/therapist.jpg");
    await page.getByRole('button', { name: 'Done' }).nth(1).click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.locator('div').filter({ hasText: 'Therapist' }).nth(3).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    
    
      });