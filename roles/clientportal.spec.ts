import { test, expect } from '@playwright/test';
test.describe.configure( {mode:'parallel',retries:0,timeout:2800000})
test('test', async ({ page,request }) => {
  const data = await request.post(
    'https://leafs-ehr-nest-stage-nmvorvf7ga-as.a.run.app/test/get-passwordless-login-link-by-email',
    {
      headers: {
        'Content-Type': 'application/json',
        'x-test-key': `omnipractice_random_a83500678d`,
      },
      data: { email: "956f2fe7-029d-48eb-9917-9779af2e453b@mailslurp.net"
      , isTestMode: true },
    },
  ); 
// console.log(data);
const c = await data.text();
  await page.goto(c);


  // onboarding Flow
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
  await page.getByPlaceholder('Street').fill('Main road left cross and second building');
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
  await page.getByRole('heading', { name: 'Owner Team' }).click();
  await page.locator('body').press('Control+-');
  await page.locator('body').press('Control+-');

  await page.getByRole('button', { name: 'Book appointment' }).nth(1).click();
  await page.locator('._header_185h8_10 > .MuiButtonBase-root').click();
// Filling the form
  await page.getByRole('tab', { name: 'Forms' }).click();
  await page.getByText('Automation Forms').click();
  await page.getByPlaceholder('Enter your response here').first().click();
  await page.getByPlaceholder('Enter your response here').first().fill('Automation Client');
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
  await page.getByText('Automation Forms').click();
  await page.getByRole('button').click();
//  Chats Section
  await page.getByRole('tab', { name: 'Chats' }).click();
  await page.getByTestId('message-input').fill('hi my name Automation client , Accept My Appoinment')
  await page.locator('#root > div._clientPortalLayout_10ldc_25 > div > div > div.str-chat.messaging.light.str-chat-channel.str-chat__channel > div > div > div.str-chat__input-flat.str-chat__input-flat--send-button-active > div > div.str-chat__input-custom-send-icon > svg > path').click();
  
 
// Profile Section
  await page.getByRole('tab', { name: 'Automation Test' }).click();
  await page.getByRole('menuitem', { name: 'Profile' }).click();
  await page.getByPlaceholder('Enter first name').clear();
  await page.getByPlaceholder('Enter first name').fill('Automation');
  await page.getByPlaceholder('Enter last name').clear();
  await page.getByPlaceholder('Enter last name').fill('Test');
  await page.getByLabel('Pronouns').click();
  await page.getByRole('option', { name: 'He/Him' }).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
// Upload
  await page.getByRole('tab', { name: 'Automation Test' }).click();
  await page.getByRole('menuitem', { name: 'My Uploads' }).click();
  await page.getByRole('button', { name: 'Add file' }).nth(1).click();
  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('Test pdf Upload');
  // await page.locator('#root > div > div > div._formContainer_1srfm_1 > div > div._editor_1srfm_16 > input[type=file]').setInputFiles("C:/Users/Rajesh/Downloads/testpdf.pdf");
  await page.locator('body > div.MuiDialog-root.MuiModal-root.css-mgrfy0 > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div > div._fileUploadContent_16kg3_14 > div._uploadDocWidget_2o3fs_1 > div > input[type=file]').setInputFiles("C:/Users/Rajesh/Downloads/testpdf.pdf");
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
// Multi client drop down
  await page.getByTestId('ArrowDropDownIcon').click();
  await page.locator('.MuiBackdrop-root').click();
  await page.locator('div').filter({ hasText: 'My UploadsUpload relevant' }).nth(2).click();

});