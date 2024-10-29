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
    await page.getByLabel('Office name').fill('KanTime Healthcare System ');
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


  test('Insurnace Info Adding', async () => {

    try {
      await page.locator('div').filter({ hasText: /^Settings$/ }).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
      await page.getByText('Settings').click();
    }
  
    await page.getByText('Billing').nth(2).click();
    await page.getByRole('tab', { name: 'Insurance' }).click();
    await page.getByLabel('Practice name*').click();
    await page.getByLabel('Practice name*').fill('Testing Insurance Practice');
    await page.getByLabel('NPI*').click();
    await page.getByLabel('NPI*').fill('1111111112');
    await page.getByLabel('Taxonomy code').click();
    await page.getByLabel('Taxonomy code').fill('207R00000X');
    await page.getByLabel('Tax ID*').click();
    await page.getByLabel('Tax ID*').fill('111111112');
    await page.getByLabel('SSN').click();
    await page.getByLabel('SSN').fill('1234567890');
    await page.getByPlaceholder('Address line').click();
    await page.getByPlaceholder('Address line').fill('New Testing Insurance Locations');
    await page.getByLabel('State').click();
    await page.getByRole('option', { name: 'Texas' }).click();
    await page.getByLabel('City').click();
    await page.getByRole('option', { name: 'Abilene' }).click();
    await page.getByPlaceholder('Zip code').click();
    await page.getByPlaceholder('Zip code').fill('45700');
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
});

test('Adding Payer and Enrollments', async () => {

  await page.getByText('Payers').click();
//   1
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByLabel('Search for insurance payers').fill('Cenpatico Kansas');
  await page.waitForTimeout(4000);
  await page.getByText('- Cenpatico Kansas').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.waitForTimeout(4000);
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Enroll' }).nth(1).click();
  const page1 = await page1Promise;
  await page1.close();
  await page.waitForTimeout(4000);
//   2
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByLabel('Search for insurance payers').fill('AIG');
  await page.waitForTimeout(4000);
  await page.getByText('- AIG').click();
  await page.waitForTimeout(4000);
//   2+
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByLabel('Search for insurance payers').fill('Alliant Energy');
  await page.getByText('J1619- Alliant Energy').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.waitForTimeout(4000);
//   3
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByLabel('Search for insurance payers').fill('AlohaCare');
  await page.waitForTimeout(4000);
  await page.getByText('ALOHA- AlohaCare').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.getByRole('row', { name: 'ALOHA AlohaCare Enroll Enroll' }).getByRole('button').nth(4).click();
  await page.getByText('Delete', { exact: true }).click();
  await page.waitForTimeout(4000);
//   4
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByLabel('Search for insurance payers').fill('Arrowpoint');
  await page.waitForTimeout(4000);
  await page.getByText('J1564- Arrowpoint').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.waitForTimeout(4000);
//   5
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByLabel('Search for insurance payers').fill('Bass Pro Group, LLC');
  await page.waitForTimeout(4000);
  await page.getByText('J1958- Bass Pro Group, LLC').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.waitForTimeout(4000);
//   6
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByLabel('Search for insurance payers').fill('Carhartt');
  await page.waitForTimeout(4000);
  await page.getByText('J1931- Carhartt').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.waitForTimeout(4000);
//   7
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByLabel('Search for insurance payers').fill('Absolute');
  await page.waitForTimeout(4000);
  await page.getByText('68055- Absolute Total Care').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.waitForTimeout(4000);
//   8
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByLabel('Search for insurance payers').fill('CarePlus Health Plans Inc');
  await page.waitForTimeout(4000);
  await page.getByText('- CarePlus Health Plans Inc').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.waitForTimeout(4000);
//   9
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByLabel('Search for insurance payers').fill('Boler Com');
  await page.waitForTimeout(4000);
  await page.getByText('J1870- Boler Company').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.waitForTimeout(4000);
//   10
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByLabel('Search for insurance payers').fill('Dean Health');
  await page.waitForTimeout(4000);
  await page.getByText('39113- Dean Health Plan').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.waitForTimeout(4000);
//   11
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByLabel('Search for insurance payers').fill('Access Integra');
  await page.waitForTimeout(4000);
  await page.getByText('INTEG- Access Integra').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.locator('div').filter({ hasText: /^Settings$/ }).getByTestId('ArrowBackIcon').click();
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
    console.log(myEmails);
    await page.getByLabel('Email*').fill(Bookinginbox1!);
  
    await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    await page.waitForTimeout(4000);
  
    //    Single  client
    await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Create client' }).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Shiva');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Kumar');
    await page.getByLabel('Email*').click();
    //
  
    const Bookinginbox2 = await createNewEmail();
    await page.getByLabel('Email*').fill(Bookinginbox2!);
  
    // await page.getByRole('button', { name: 'Next' }).nth(1).click();
    // await page.getByLabel('First Name*').click();
    // await page.getByLabel('First Name*').fill('Venkatesh');
    // await page.getByLabel('Last Name*').click();
    // await page.getByLabel('Last Name*').fill('Prasad');
    // await page.getByLabel('Email*').click();
    // //
    // const Bookinginbox3 = await createNewEmail();
    // await page.getByLabel('Email*').fill(Bookinginbox3!);
  
    // await page.getByLabel('Guardian relationship to').click();
    // await page.getByLabel('Guardian relationship to').fill('Brother');
    // await page.getByRole('button', { name: 'Next' }).nth(1).click();

    await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    await page.waitForTimeout(4000);
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
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    await page.waitForTimeout(4000);
  
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
  await page.getByText('He/Him').click();
  await page.getByPlaceholder('MM/DD/YYYY').click();
  await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/2000');
  await page.getByLabel('Phone Number').click();
  await page.getByLabel('Phone Number').fill('(764) 873-64868');
  await page.getByLabel('First Name', { exact: true }).click();
  await page.getByLabel('First Name', { exact: true }).fill('Test');
  await page.getByLabel('Last Name', { exact: true }).click();
  await page.getByLabel('Last Name', { exact: true }).fill('Name');
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('testmail@gmail.com');
  await page.getByLabel('Phone', { exact: true }).click();
  await page.getByLabel('Phone', { exact: true }).fill('(987) 349-28475');
  await page.getByLabel('Relationship to client').click();
  await page.getByLabel('Relationship to client').fill('Brother');
  await page.getByLabel('Address Line').click();
  await page.getByLabel('Address Line').fill('New Personal info locations');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('Flor');
  await page.getByText('Florida').click();
  await page.getByLabel('City').click();
  await page.getByRole('option', { name: 'Apopka' }).click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('89675');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

  
    //  Payment tab
    await page.getByRole('tab', { name: 'Payment' }).click();
    await page.getByLabel('Insurance').check();
    await page.waitForTimeout(2000);
    
    //Logic For Fail Locator
    try {
      await page.getByLabel('Client\'s spouse').check();
  
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
      await page.getByText('Other').click();
    }
    await page.getByLabel('Middle initial').click();
    await page.getByLabel('Middle initial').fill('M');
    await page.getByLabel('Sex').click();
    await page.getByRole('option', { name: 'Male', exact: true }).click();
    await page.getByPlaceholder('Phone').click();
    await page.getByPlaceholder('Phone').fill('(734) 573-25415');
    await page.getByLabel('Address line').click();
  await page.getByLabel('Address line').fill('New Insurance locations added');
  await page.getByLabel('State').click();
  await page.getByRole('option', { name: 'Ohio' }).click();
  await page.getByLabel('City').click();
  await page.getByRole('option', { name: 'Canton' }).click();
  await page.getByLabel('Zip code').click();
  await page.getByLabel('Zip code').fill('56899');
    await page.getByLabel('Insurance Company').click();
    await page.getByLabel('Insurance Company').fill('Absolute')
    await page.getByText('68055- Absolute Total Care').click();
    await page.getByLabel('Member ID').click();
    await page.getByLabel('Member ID').fill('KQRPHK4456');
    await page.getByLabel('Group ID').click();
    await page.getByLabel('Group ID').fill('GGH3');
    await page.getByLabel('Plan ID').click();
    await page.getByLabel('Plan ID').fill('KKH45');
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Documents' }).click();
    await page.getByText('SimplePractice').click();
    await page.getByTestId('ArrowBackRoundedIcon').click();
    await page
      .locator('div')
      .filter({ hasText: /^Basic InfoIndividual$/ })
      .getByRole('button')
      .click();
      await page.waitForTimeout(2000);
      
      try {
        await page.locator('div').filter({ hasText: /^Settings$/ }).click();
      } catch (error) {
        console.log('Failed to find first locator, trying second locator');
         await page.getByText('Settings').click();
      }
  
      await page
      .locator('div')
      .filter({ hasText: /^Clients$/ })
      .getByRole('img')
      .click();

    //   Minor clients
    await page.getByText('Shiva Kumar').click();
     // Info and Settings
     await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
     await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Shiva');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Kumar');
    await page.getByLabel('Pronouns').click();
  await page.getByText('He/Him').click();
  await page.getByPlaceholder('MM/DD/YYYY').click();
  await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/2000');
  await page.getByLabel('Phone Number').click();
  await page.getByLabel('Phone Number').fill('(764) 873-64868');
  await page.getByLabel('First Name', { exact: true }).click();
  await page.getByLabel('First Name', { exact: true }).fill('Test');
  await page.getByLabel('Last Name', { exact: true }).click();
  await page.getByLabel('Last Name', { exact: true }).fill('Name');
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('testmail@gmail.com');
  await page.getByLabel('Phone', { exact: true }).click();
  await page.getByLabel('Phone', { exact: true }).fill('(987) 349-28475');
  await page.getByLabel('Relationship to client').click();
  await page.getByLabel('Relationship to client').fill('Brother');
  await page.getByLabel('Address Line').click();
  await page.getByLabel('Address Line').fill('New Personal info locations');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('Flor');
  await page.getByText('Florida').click();
  await page.getByLabel('City').click();
  await page.getByRole('option', { name: 'Apopka' }).click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('89675');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

     //  Payment tab
    await page.getByRole('tab', { name: 'Payment' }).click();
    await page.getByLabel('Insurance').check();
    await page.waitForTimeout(2000);
    
    //Logic For Fail Locator
    try {
      await page.getByLabel('Client\'s spouse').check();
  
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
      await page.getByText('Other').click();
    }
     
  await page.getByLabel('Middle initial').click();
  await page.getByLabel('Middle initial').fill('M');
  await page.getByPlaceholder('MM/DD/YYYY').first().click();
  await page.getByPlaceholder('MM/DD/YYYY').first().fill('02/02/1999');
  await page.waitForTimeout(2000);
  await page.getByLabel('Sex').click();
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Phone').click();
  await page.getByPlaceholder('Phone').fill('(908) 328-97396');
  await page.getByLabel('Address line').click();
  await page.getByLabel('Address line').fill('New Insurance locations added');
  await page.getByLabel('State').click();
  await page.getByRole('option', { name: 'Ohio' }).click();
  await page.getByLabel('City').click();
  await page.getByRole('option', { name: 'Canton' }).click();
  await page.getByLabel('Zip code').click();
  await page.getByLabel('Zip code').fill('56899');

    await page.getByLabel('Insurance Company').click();
    await page.getByLabel('Insurance Company').fill('Access Integra');
    await page.getByText('INTEG- Access Integra').click();
    await page.getByLabel('Member ID').click();
    await page.getByLabel('Member ID').fill('KQRPHK4456');
    await page.getByLabel('Group ID').click();
    await page.getByLabel('Group ID').fill('GGH3');
    await page.getByLabel('Plan ID').click();
    await page.getByLabel('Plan ID').fill('KKH45');
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Documents' }).click();
    await page.getByText('SimplePractice').click();
    await page.getByTestId('ArrowBackRoundedIcon').click();
    await page
      .locator('div')
      .filter({ hasText: /^Basic InfoIndividual$/ })
      .getByRole('button')
      .click();
      await page.waitForTimeout(2000);
      
      try {
        await page.locator('div').filter({ hasText: /^Settings$/ }).click();
      } catch (error) {
        console.log('Failed to find first locator, trying second locator');
         await page.getByText('Settings').click();
      }

  });
  test('Create Past date Appoinments', async () => {

  await page.getByText('Calendar').first().click();
  await page.getByRole('button', { name: 'Month' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('cell', { name: '01' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Rajesh (OT)' }).click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.getByRole('cell', { name: '02' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Rajesh (OT)' }).click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.locator('div').filter({ hasText: /^03$/ }).click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByText('Shiva (OT)').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.locator('div').filter({ hasText: /^04$/ }).click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Shiva (OT)' }).click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.getByText('Insurance').click();
});

test('Insurance Tab', async () => {

await page.getByText('Insurance').click();
await page.getByLabel('Client').click();
  await page.getByRole('combobox', { name: 'Client' }).fill('shiva');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Create claim' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Create Claim Without' }).nth(1).click();
  // await page.goto('https://leafs-ehr-web-stage-nmvorvf7ga-as.a.run.app/insurance/?active=Claims');
  // await page.waitForTimeout(4000);
  await page.getByText('Access Integra').click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('First Claims Added here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.getByRole('button', { name: 'Edit' }).nth(3).click();
  await page.waitForTimeout(9000);
  // Gender Select
  await page.getByLabel('Female').first().check();
  await page.waitForTimeout(9000);
  // Add Diagnosis code
  await page.getByLabel('A', { exact: true }).click();
  await page.getByLabel('A', { exact: true }).fill('K5289');
  await page.waitForTimeout(5000);
  // Employement (Current)
  await page.locator('div:nth-child(3) > div > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
  // Auto accidents
  await page.locator('div').filter({ hasText: /^Yes No statestate$/ }).getByLabel('No').check();
  await page.waitForTimeout(7000);
// others Accidents

// await page.locator('div:nth-child(3) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click();
// await page.waitForTimeout(9000);

// // 91,9a other Health Benefits
// await page.locator('div:nth-child(5) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div:nth-child(2) > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click();
// await page.waitForTimeout(5000);

// Assignements
// await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click();
// await page.waitForTimeout(9000);

  // await page.getByRole('button', { name: 'Save' }).nth(1).click();
  // await page.waitForTimeout(9000);
  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(10000);
  // await page.getByRole('tab', { name: 'Claim History' }).click();
  // await page.pause();
  // await page.getByText('Insurance', { exact: true }).click();
});
});
