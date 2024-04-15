import { test, type Page } from '@playwright/test';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createMailSurpEmail } from '../helpers/mailsurp';
import MailSlurp from 'mailslurp-client';
import myEmails from '../localemails.js/emails';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test('Therapist login and  onboarding ', async ({ request }) => {
  
  const data = await generatePasswordlessLoginLink({
    email: myEmails.therapistEmail,
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
  
  await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
  

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
    const Bookinginbox1 = await createMailSurpEmail();
  await page.getByLabel('Email*').fill(Bookinginbox1!);
 myEmails.clientEmail=Bookinginbox1!;

    // await page.getByLabel('Email*').fill('createtherapist+6@gmail.com');
    await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
      
      
    // //   Minor client
    
    await page.locator('#root > div._layout_10ldc_1 > div._sideBar_148j7_1 > div._createBtnContainer_148j7_97 > button > button').click();
    await page.getByRole('menuitem', { name: 'Create client' }).click();
    await page.getByLabel('Minor').check();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Shiva');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Kumar');
    await page.getByLabel('Email*').click();
    // 
    
    const Bookinginbox2 = await createMailSurpEmail();
    await page.getByLabel('Email*').fill(Bookinginbox2!);
    
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Venkatesh');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Prasad');
    await page.getByLabel('Email*').click();
    // 
    const Bookinginbox3 = await createMailSurpEmail();
    await page.getByLabel('Email*').fill(Bookinginbox3!);

    // await page.getByLabel('Email*').fill('a---1@gmail.com');
    await page.getByLabel('Guardian relationship to').click();
    await page.getByLabel('Guardian relationship to').fill('Brother');
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    
    // //   Create Couple Account
    
    await page.locator('#root > div._layout_10ldc_1 > div._sideBar_148j7_1 > div._createBtnContainer_148j7_97 > button > button').click();
    await page.getByRole('menuitem', { name: 'Create client' }).click();
    await page.getByLabel('Couple').check();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Rakesh');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Das');
    await page.getByLabel('Email*').click();
    // 
    const Bookinginbox4 = await createMailSurpEmail();
    await page.getByLabel('Email*').fill(Bookinginbox4!);

    // await page.getByLabel('Email*').fill('pp1@gmail.com');
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Poornima');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Das');
    await page.getByLabel('Email*').click();
    // 
    const Bookinginbox5 = await createMailSurpEmail();
    await page.getByLabel('Email*').fill(Bookinginbox5!);

    // await page.getByLabel('Email*').fill('pp+1@gmail.com');
    await page.getByLabel('Phone').click();
    await page.getByLabel('Phone').fill('(506) 704-23454');
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    
    
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