import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { IEmail, readEmails } from '../localemails.js/emails';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  const myEmails: IEmail = await readEmails();

  if (!myEmails?.clientEmail?.length) {
    throw new Error(`ClientEmail not present returning...`);
  }

  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe('All ClientFile Test case ', () => {
test('Client Portal login and  onboarding ', async ({ request }) => {
  const myEmails: IEmail = await readEmails();

  const data = await generatePasswordlessLoginLink({
    email: myEmails.clientEmail!,
    request: request,
  });

  // goto page
  await page.goto(data!);

  // Onboarding Flows for Client Portal

  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('Automation');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('Test');
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByPlaceholder('MM/DD/YYYY').click();
  await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/1999');
  await page.getByLabel('Pronouns').click();
  await page.getByRole('option', { name: 'He/Him' }).click();
  await page.getByPlaceholder('Phone').click();
  await page.getByPlaceholder('Phone').fill('(893) 475-72545');
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Address Line').click();
  await page.getByLabel('Address Line').fill('New land and new city');
  await page.getByPlaceholder('Street').click();
  await page
    .getByPlaceholder('Street')
    .fill('Main road left cross and second building');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('cali');
  await page.getByText('California').click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Azu');
  await page.getByText('Azusa').click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('784567');
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('heading', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Test');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Emergency');
  await page.getByLabel('Relationship to client').click();
  await page.getByLabel('Relationship to client').fill('Test');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('testemergency@gmail.com');
  await page.getByPlaceholder('Phone').click();
  await page.getByPlaceholder('Phone').fill('(736) 487-35825');
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  // await page.getByRole('button', { name: 'Add card' }).nth(1).click();
  await page.getByRole('button', { name: 'Submit' }).nth(1).click();
  // Profile Select
  await page.getByRole('heading', { name: 'Therapist 1' }).click();
});

test('Request Booking Appoinment', async () => {
  //  Book Appoinment
  await page.getByRole('button', { name: 'Book appointment' }).nth(1).click();
  await page.getByLabel('Select service').click();
  await page.getByText('Psychotherapy, 45 mins').click();
  await page.waitForTimeout(4000);
   // Logic For Fail Locator
   try {
    await page.getByText('Pick slot').click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
    await page.locator('div').filter({ hasText: /^Pick slot$/ }).click();
  }

  await page
    .locator(
      'body > div.MuiPopover-root.MuiModal-root.css-1khfnay > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-ak9ghh > div > div > div._timeSlotsWrapper_vyf9q_11 div:first-child'
    )
    .click();
  await page
    .getByRole('button', { name: 'Request appointment' })
    .nth(1)
    .click();
});

test('Form Filling', async () => {
  // Filling the form
  await page.locator('button:nth-child(2)').first().click();
  try {
  await page.getByText('Therapist Automation Forms').click();
} catch (error) {
  console.log('Failed to find first locator, trying second locator');
  await page
    .locator(
      '#root > div._clientPortalLayout_1p3av_25 > div > div > div._formsItemContainer_4be5w_12 > div > div > div > div._formIconAndNameContainer_1pbgi_16 > p'
    )
    .click();
  }
  // await page.getByText('Automation Forms').click();
  await page.getByPlaceholder('Enter your response here').first().click();
  await page
    .getByPlaceholder('Enter your response here')
    .first()
    .fill('Automation Client');
  await page.getByPlaceholder('Enter your response here').nth(1).click();
  await page.getByPlaceholder('Enter your response here').nth(1).fill('Good');
  await page.getByPlaceholder('MM/DD/YYYY').click();
  await page.getByPlaceholder('MM/DD/YYYY').fill('10/09/1999');
  await page.getByText('Sign here').click();
  await page.getByPlaceholder('Please type your name here').click();
  await page.getByPlaceholder('Please type your name here').fill('Rajesh');
  await page.getByRole('button', { name: 'Sign' }).nth(1).click();
  await page.getByRole('button', { name: 'Submit' }).nth(1).click();
  await page.getByRole('tab', { name: 'Completed (1)' }).click();
  await page.getByText('Therapist Automation Forms').click();
  await page.getByRole('button').click();
});


test(' Payment tab ' ,async () => {
  await page.locator('button:nth-child(3)').first().click();
  await page.getByRole('button', { name: 'Pending' }).click();
  await page.getByRole('button', { name: 'Paid' }).click();
  await page.getByRole('tab', { name: 'Transactions' }).click();
  await page.getByRole('button', { name: 'Debt' }).click();
  await page.getByRole('button', { name: 'Credit' }).click();
  await page.getByRole('tab', { name: 'Card' }).click();
});
test(' Chat tab ' ,async () => {
  await page.locator('button:nth-child(4)').first().click();
  await page.waitForTimeout(3000);
  await page.getByTestId('message-input').fill('hi man how arw u');
  await page.getByTestId('SendOutlinedIcon').click();
  await page.waitForTimeout(3000);
});
test('Personal Infomation', async () => {
  await page.locator('button:nth-child(5)').first().click();
  await page.getByRole('menuitem', { name: 'Profile' }).click();
  await page
    .locator(
      '#root > div._clientPortalLayout_cqogi_25 > div > div > div > div._userNameDetailsContainer_io6q5_18 > div > div._imagePicker_io6q5_27 > input[type=file]'
    )
    .setInputFiles(path.join(__dirname + '../files/ther_img.jpg'));
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  await page.getByLabel('Pronouns').click();
  await page.getByRole('option', { name: 'He/Him' }).click();
  await page.getByPlaceholder('MM/DD/YYYY').first().click();
  await page.getByPlaceholder('MM/DD/YYYY').first().fill('10/10/1999');
  await page.getByLabel('First Name', { exact: true }).click();
  await page.getByLabel('First Name', { exact: true }).fill('Test');
  await page.getByLabel('Last Name', { exact: true }).click();
  await page.getByLabel('Last Name', { exact: true }).fill('1');
  await page.getByLabel('Email').nth(1).click();
  await page.getByLabel('Email').nth(1).fill('test1@gmail.com');
  await page.getByLabel('Phone').nth(1).click();
  await page.getByLabel('Phone').nth(1).fill('(454) 758-65864');
  await page.getByLabel('Relationship to client').click();
  await page.getByLabel('Relationship to client').fill('Brother');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

  await page.locator('button:nth-child(5)').first().click();
});

test('Upload Files', async () => {
  // Upload
  await page.getByRole('menuitem', { name: 'My Uploads' }).click();
  await page.getByRole('button', { name: 'Add file' }).nth(1).click();
  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('Test pdf ');
  await page
    .locator(
      'body > div.MuiDialog-root.MuiModal-root.css-mgrfy0 > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div > div._fileUploadContent_16kg3_14 > div._uploadDocWidget_2o3fs_1 > div > input[type=file]'
    )
    .setInputFiles(path.join(__dirname + '../files/dummy.pdf'));
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByText('Cancel').click();
});
test('Logout Portal', async () => {
  await page.locator('button:nth-child(5)').first().click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});
});