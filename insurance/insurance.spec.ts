import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../helpers/api';
import { createNewEmail } from '../helpers/mailsurp';
import { readEmails, setEmails } from '../localemails.js/emails';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });
test.setTimeout(3200000);
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
  // First clients
    await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Create client' }).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Rajesh');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Das');
    await page.getByLabel('Email*').click();
    //
  
    const Bookinginbox1 = await createNewEmail();
    await page.getByLabel('Email*').fill(Bookinginbox1!);
  
    await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    await page.waitForTimeout(4000);
  
    //    Seconds  client
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
  
    await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    await page.waitForTimeout(4000);
  
    // Third Clients
    await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Create client' }).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('James');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Willy');
    await page.getByLabel('Email*').click();
    //
  
    const Bookinginboxe6 = await createNewEmail();
    await page.getByLabel('Email*').fill(Bookinginboxe6!);
  
    await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    await page.waitForTimeout(4000);

    // Fourth Clients
    await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Create client' }).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Colin');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Das');
    await page.getByLabel('Email*').click();
    //
  
    const Bookinginboxe7 = await createNewEmail();
    await page.getByLabel('Email*').fill(Bookinginboxe7!);
  
    await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    await page.waitForTimeout(4000);


    //  Firth Clients
    await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Create client' }).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Test');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Das');
    await page.getByLabel('Email*').click();
    //
  
    const Bookinginboxe8 = await createNewEmail();
    await page.getByLabel('Email*').fill(Bookinginboxe8!);
  
    await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    await page.waitForTimeout(4000);

    // Sixth Clients 

    await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Create client' }).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Manchu');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Das');
    await page.getByLabel('Email*').click();
    //
  
    const Bookinginboxe9 = await createNewEmail();
    await page.getByLabel('Email*').fill(Bookinginboxe9!);
  
    await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    await page.waitForTimeout(4000);

    // Seventh Clients

    await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
    await page.getByRole('menuitem', { name: 'Create client' }).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Venki');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Das');
    await page.getByLabel('Email*').click();
    //
  
    const Bookinginboxe10 = await createNewEmail();
    await page.getByLabel('Email*').fill(Bookinginboxe10!);
  
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
    //  Client file Rajesh das
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
  await page.waitForTimeout(4000)
  await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/2000');
  await page.waitForTimeout(4000)
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
    await page.getByPlaceholder('MM/DD/YYYY').first().click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('MM/DD/YYYY').first().fill('02/02/1999');
  await page.waitForTimeout(2000);
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

    // second Clients Shiva Kumar
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
  await page.waitForTimeout(4000)
  await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/2000');
  await page.waitForTimeout(4000)
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
  await page.waitForTimeout(2000);
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


     // James Willy client file Done
 
     await page.getByPlaceholder('Search client').click();
     await page.getByPlaceholder('Search client').fill('James');
     await page.getByPlaceholder('Search client').press('Enter');
     await page.waitForTimeout(5000);
 
      await page.getByText('James Willy').click();
     
     // Info and Settings
     await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
     await page.getByLabel('First Name*').click();
     await page.getByLabel('First Name*').fill('James');
     await page.getByLabel('Last Name*').click();
     await page.getByLabel('Last Name*').fill('Willy');
     await page.getByLabel('Pronouns').click();
   await page.getByText('He/Him').click();
   await page.getByPlaceholder('MM/DD/YYYY').click();
   await page.waitForTimeout(4000)
   await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/2000');
   await page.waitForTimeout(4000)
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
     await page.getByPlaceholder('MM/DD/YYYY').first().click();
   await page.waitForTimeout(2000);
   await page.getByPlaceholder('MM/DD/YYYY').first().fill('02/02/1999');
   await page.waitForTimeout(2000);
     await page.getByLabel('Address line').click();
   await page.getByLabel('Address line').fill('New Insurance locations added');
   await page.getByLabel('State').click();
   await page.getByRole('option', { name: 'Ohio' }).click();
   await page.getByLabel('City').click();
   await page.getByRole('option', { name: 'Canton' }).click();
   await page.getByLabel('Zip code').click();
   await page.getByLabel('Zip code').fill('56899');
     await page.getByLabel('Insurance Company').click();
     await page.getByLabel('Insurance Company').fill('Alliant Energy');
     await page.getByText('J1619- Alliant Energy').click();
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
 
 
    // Colin Das
 
     await page.getByPlaceholder('Search client').click();
     await page.getByPlaceholder('Search client').fill('Colin');
     await page.getByPlaceholder('Search client').press('Enter');
     await page.waitForTimeout(5000);
 
      await page.getByText('Colin Das').click();
     
     // Info and Settings
     await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
     await page.getByLabel('First Name*').click();
     await page.getByLabel('First Name*').fill('Colin');
     await page.getByLabel('Last Name*').click();
     await page.getByLabel('Last Name*').fill('Das');
     await page.getByLabel('Pronouns').click();
   await page.getByText('He/Him').click();
   await page.getByPlaceholder('MM/DD/YYYY').click();
   await page.waitForTimeout(4000)
   await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/2000');
   await page.waitForTimeout(4000)
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
     await page.getByPlaceholder('MM/DD/YYYY').first().click();
   await page.waitForTimeout(2000);
   await page.getByPlaceholder('MM/DD/YYYY').first().fill('02/02/1999');
   await page.waitForTimeout(2000);
     await page.getByLabel('Address line').click();
   await page.getByLabel('Address line').fill('New Insurance locations added');
   await page.getByLabel('State').click();
   await page.getByRole('option', { name: 'Ohio' }).click();
   await page.getByLabel('City').click();
   await page.getByRole('option', { name: 'Canton' }).click();
   await page.getByLabel('Zip code').click();
   await page.getByLabel('Zip code').fill('56899');
     await page.getByLabel('Insurance Company').click();
     await page.getByLabel('Insurance Company').fill('AIG');
     await page.getByText('- AIG').click();
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
       .click()
 
 
    // Test Das
 
   await page.getByPlaceholder('Search client').click();
     await page.getByPlaceholder('Search client').fill('Test');
     await page.getByPlaceholder('Search client').press('Enter');
     await page.waitForTimeout(5000);
 
      await page.getByText('Test Das').click();
     
     // Info and Settings
     await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
     await page.getByLabel('First Name*').click();
     await page.getByLabel('First Name*').fill('Test');
     await page.getByLabel('Last Name*').click();
     await page.getByLabel('Last Name*').fill('Das');
     await page.getByLabel('Pronouns').click();
   await page.getByText('He/Him').click();
   await page.getByPlaceholder('MM/DD/YYYY').click();
   await page.waitForTimeout(4000)
   await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/2000');
   await page.waitForTimeout(4000)
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
     await page.getByPlaceholder('MM/DD/YYYY').first().click();
   await page.waitForTimeout(2000);
   await page.getByPlaceholder('MM/DD/YYYY').first().fill('02/02/1999');
   await page.waitForTimeout(2000);
     await page.getByLabel('Address line').click();
   await page.getByLabel('Address line').fill('New Insurance locations added');
   await page.getByLabel('State').click();
   await page.getByRole('option', { name: 'Ohio' }).click();
   await page.getByLabel('City').click();
   await page.getByRole('option', { name: 'Canton' }).click();
   await page.getByLabel('Zip code').click();
   await page.getByLabel('Zip code').fill('56899');
     await page.getByLabel('Insurance Company').click();
     await page.getByLabel('Insurance Company').fill('Arrowpoint');
    await page.getByText('J1564- Arrowpoint').click();
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
       .click()
    
 // Manchu Das
 
    await page.getByPlaceholder('Search client').click();
     await page.getByPlaceholder('Search client').fill('Manchu');
     await page.getByPlaceholder('Search client').press('Enter');
     await page.waitForTimeout(5000);
 
     await page.getByText('Manchu Das').click();
     
     // Info and Settings
     await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
     await page.getByLabel('First Name*').click();
     await page.getByLabel('First Name*').fill('Manchu');
     await page.getByLabel('Last Name*').click();
     await page.getByLabel('Last Name*').fill('Das');
     await page.getByLabel('Pronouns').click();
   await page.getByText('He/Him').click();
   await page.getByPlaceholder('MM/DD/YYYY').click();
   await page.waitForTimeout(4000)
   await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/2000');
   await page.waitForTimeout(4000)
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
     await page.getByPlaceholder('MM/DD/YYYY').first().click();
   await page.waitForTimeout(2000);
   await page.getByPlaceholder('MM/DD/YYYY').first().fill('02/02/1999');
   await page.waitForTimeout(2000);
     await page.getByLabel('Address line').click();
   await page.getByLabel('Address line').fill('New Insurance locations added');
   await page.getByLabel('State').click();
   await page.getByRole('option', { name: 'Ohio' }).click();
   await page.getByLabel('City').click();
   await page.getByRole('option', { name: 'Canton' }).click();
   await page.getByLabel('Zip code').click();
   await page.getByLabel('Zip code').fill('56899');
     await page.getByLabel('Insurance Company').click();
     await page.getByLabel('Insurance Company').fill('Bass Pro Group, LLC');
   await page.getByText('J1958- Bass Pro Group, LLC').click();
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
       .click()
  
 // Venki Das
 
    await page.getByPlaceholder('Search client').click();
     await page.getByPlaceholder('Search client').fill('Venki');
     await page.getByPlaceholder('Search client').press('Enter');
     await page.waitForTimeout(5000);
 
      await page.getByText('Venki Das').click();
     
     // Info and Settings
     await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
     await page.getByLabel('First Name*').click();
     await page.getByLabel('First Name*').fill('Manchu');
     await page.getByLabel('Last Name*').click();
     await page.getByLabel('Last Name*').fill('Das');
     await page.getByLabel('Pronouns').click();
   await page.getByText('He/Him').click();
   await page.getByPlaceholder('MM/DD/YYYY').click();
   await page.waitForTimeout(4000)
   await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/2000');
   await page.waitForTimeout(4000)
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
     await page.getByPlaceholder('MM/DD/YYYY').first().click();
   await page.waitForTimeout(2000);
   await page.getByPlaceholder('MM/DD/YYYY').first().fill('02/02/1999');
   await page.waitForTimeout(2000);
     await page.getByLabel('Address line').click();
   await page.getByLabel('Address line').fill('New Insurance locations added');
   await page.getByLabel('State').click();
   await page.getByRole('option', { name: 'Ohio' }).click();
   await page.getByLabel('City').click();
   await page.getByRole('option', { name: 'Canton' }).click();
   await page.getByLabel('Zip code').click();
   await page.getByLabel('Zip code').fill('56899');
     await page.getByLabel('Insurance Company').click();
     await page.getByLabel('Insurance Company').fill('Carhartt');
     await page.getByText('J1931- Carhartt').click();
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
       .click()


  });
  test('Create Past date Appoinments', async () => {

  await page.getByText('Calendar').first().click();
  await page.getByRole('button', { name: 'Month' }).click();
  await page.getByRole('button', { name: 'Back' }).click();

  await page.getByRole('cell', { name: '28' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Rajesh (OT)' }).click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(6000);

  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('cell', { name: '25' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Rajesh (OT)' }).click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(6000);
  
  await page.getByRole('cell', { name: '26' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByText('Shiva (OT)').click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(6000);

  await page.getByRole('cell', { name: '31' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Shiva (OT)' }).click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(6000);

  await page.getByRole('cell', { name: '20' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'James (OT)' }).click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(6000);
   
  await page.getByRole('cell', { name: '20' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'James (OT)' }).click();
  await page.getByPlaceholder('hh:mm aa').click();
  await page.getByPlaceholder('hh:mm aa').fill('06:00 PM');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(6000);

  await page.getByRole('cell', { name: '21' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Colin (OT)' }).click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(6000);

  await page.getByRole('cell', { name: '21' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Colin (OT)' }).click();
  await page.getByPlaceholder('hh:mm aa').click();
  await page.getByPlaceholder('hh:mm aa').fill('06:00 PM');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(6000);

  await page.getByRole('cell', { name: '22' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Test (OT)' }).click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(6000);

  await page.getByRole('cell', { name: '22' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Test (OT)' }).click();
  await page.getByPlaceholder('hh:mm aa').click();
  await page.getByPlaceholder('hh:mm aa').fill('06:00 PM');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(6000);

  await page.getByRole('cell', { name: '23' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Manchu (OT)' }).click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(6000);

  await page.getByRole('cell', { name: '23' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Manchu (OT)' }).click();
  await page.getByPlaceholder('hh:mm aa').click();
  await page.getByPlaceholder('hh:mm aa').fill('06:00 PM');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(6000);

  await page.getByRole('cell', { name: '24' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Venki (OT)' }).click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(6000);

  await page.getByRole('cell', { name: '24' }).first().click();
  await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Venki (OT)' }).click();
  await page.getByPlaceholder('hh:mm aa').click();
  await page.getByPlaceholder('hh:mm aa').fill('06:00 PM');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(6000);
  
});

test('Insurance Tab', async () => {

//  STATUS: Create Claims and Submit Claims
await page.waitForTimeout(4000);
await page.getByText('Insurance').click();
await page.waitForTimeout(4000);
await page.getByLabel('Client').click();
  await page.getByRole('combobox', { name: 'Client' }).fill('shiva');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByRole('button', { name: 'Create claim' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Create Claim Without' }).nth(1).click();
 
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
 

// Assignements
// await page.waitForSelector('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input', { state: 'visible' });
// await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click({ force: true });
await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(9000);
  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(10000);
  
  await page.getByRole('tab', { name: 'Claim History' }).click();
  await page.getByRole('tab', { name: 'Claim', exact: true }).click();
  await page.getByText('Insurance', { exact: true }).click();
  await page.waitForTimeout(3000);

  // STATUS :Rejected Cliams 
  // await page.getByLabel('Client').click();
  try {
    await page.locator('div').filter({ hasText: /^Settings$/ }).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
     await page.getByText('Settings').click();
  }
  await page.getByText('Insurance').click();
  await page.getByLabel('Client').click();
  await page.getByRole('option', { name: 'Rajesh (OT)' }).click();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(8000);
  await page.getByRole('button', { name: 'Create claim' }).nth(1).click();
  await page.waitForTimeout(8000);
  await page.getByRole('button', { name: 'Create Claim Without' }).nth(1).click();
  await page.getByRole('button', { name: 'Created' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click()
  await page.waitForTimeout(3000);
  await page.getByText('Absolute Total Care').click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('First Claims Added here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Edit' }).nth(3).click();
  await page.waitForTimeout(9000);
  await page.getByLabel('Insured\'s ID number').clear();
  await page.getByLabel('Insured\'s ID number').fill('REJECTED');
  await page.waitForTimeout(3000);
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
// Assignement
await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click({ force: true });
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.waitForTimeout(10000);
 await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(11000);
  
  await page.getByRole('tab', { name: 'Claim History' }).click();
  await page.getByRole('tab', { name: 'Claim', exact: true }).click();
  await page.getByText('Insurance', { exact: true }).click();
  await page.waitForTimeout(4000);

  // STATUS:  Denied Claims 
  try {
    await page.locator('div').filter({ hasText: /^Settings$/ }).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
     await page.getByText('Settings').click();
  }
  await page.getByText('Insurance').click();
  await page.getByLabel('Client').click();
  await page.getByRole('option', { name: 'Rajesh (OT)' }).click();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(8000);
  await page.getByRole('button', { name: 'Create claim' }).nth(1).click();
  await page.waitForTimeout(8000);
  await page.getByRole('button', { name: 'Create Claim Without' }).nth(1).click();
  await page.getByRole('button', { name: 'Created' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click()
  await page.waitForTimeout(3000);
  await page.getByText('Absolute Total Care').nth(1).click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('First Claims Added here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Edit' }).nth(3).click();
  await page.waitForTimeout(9000);
  await page.getByLabel('Insured\'s ID number').clear();
  await page.getByLabel('Insured\'s ID number').fill('DENY');
  await page.waitForTimeout(3000);
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
// Assignement
await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click({ force: true });
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.waitForTimeout(11000);
 await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(11000);
  
  await page.getByRole('tab', { name: 'Claim History' }).click();
  await page.getByRole('tab', { name: 'Claim', exact: true }).click();
  await page.getByText('Insurance', { exact: true }).click();

  // Claims Status: Scrub Status
  
  await page.getByLabel('Client').click();
  await page.waitForTimeout(4000);
  await page.getByRole('combobox', { name: 'Client' }).fill('shiva');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByRole('button', { name: 'Create claim' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Create Claim Without' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('cell', { name: 'Access Integra' }).nth(1).click();
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();
  await page.waitForTimeout(9000);

  // Gender Select
  await page.getByLabel('Female').first().check();
  await page.waitForTimeout(9000);
  // Add Diagnosis code
  await page.getByLabel('A', { exact: true }).click();
  await page.getByLabel('A', { exact: true }).fill('ABCDF');
  await page.waitForTimeout(5000);
  // Employement (Current)
  await page.locator('div:nth-child(3) > div > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
  // Auto accidents
  await page.locator('div').filter({ hasText: /^Yes No statestate$/ }).getByLabel('No').check();
  await page.waitForTimeout(7000);
// Assignement
await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click({ force: true });
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.waitForTimeout(11000);
 await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
 await page.waitForTimeout(11000);

 try {
  await page.locator('div').filter({ hasText: /^Settings$/ }).click();
} catch (error) {
  console.log('Failed to find first locator, trying second locator');
   await page.getByText('Settings').click();
}

// Claims Status: Submitted ( James)
await page.getByText('Insurance').click();
await page.getByLabel('Client').click();
await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Client' }).fill('James');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByRole('button', { name: 'Create claim' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Create Claim Without' }).nth(1).click();
 
  await page.getByText('Alliant Energy').first().click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('First Claims Added here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(5000);
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
 

// Assignements
// await page.waitForSelector('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input', { state: 'visible' });
// await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click({ force: true });
await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(9000);
  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(10000);
  
  await page.getByRole('tab', { name: 'Claim History' }).click();
  await page.getByRole('tab', { name: 'Claim', exact: true }).click();
  await page.getByText('Insurance', { exact: true }).click();
  await page.waitForTimeout(3000);

//  Cliams Status: Rejected

  await page.getByLabel('Client').click();
  await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Client' }).fill('James');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByRole('button', { name: 'Create claim' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Create Claim Without' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByLabel('Client').click();
  await page.getByRole('combobox', { name: 'Client' }).fill('James');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByText('Alliant Energy').nth(1).click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('First Claims Added here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Edit' }).nth(3).click();
  await page.waitForTimeout(9000);
  // Gender Select
  await page.getByLabel('Female').first().check();
  await page.waitForTimeout(9000);
// Insured ID 
  await page.getByLabel('Insured\'s ID number').clear();
  await page.getByLabel('Insured\'s ID number').fill('REJECTED');
  await page.waitForTimeout(3000);
  // Add Diagnosis code
  await page.getByLabel('A', { exact: true }).click();
  await page.getByLabel('A', { exact: true }).fill('K5289');
  await page.waitForTimeout(5000);
  // Employement (Current)
  await page.locator('div:nth-child(3) > div > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
  // Auto accidents
  await page.locator('div').filter({ hasText: /^Yes No statestate$/ }).getByLabel('No').check();
  await page.waitForTimeout(7000);
 

// Assignements
// await page.waitForSelector('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input', { state: 'visible' });
// await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click({ force: true });
await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(9000);
  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(10000);
  
  await page.getByRole('tab', { name: 'Claim History' }).click();
  await page.getByRole('tab', { name: 'Claim', exact: true }).click();
  await page.getByText('Insurance', { exact: true }).click();
  await page.waitForTimeout(3000);

// Claims Status: Submitted Claims

await page.getByLabel('Client').click();
await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Client' }).fill('Colin');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByRole('button', { name: 'Create claim' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Create Claim Without' }).nth(1).click();
 
  await page.getByText('AIG').first().click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('First Claims Added here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Edit' }).nth(3).click();
  await page.waitForTimeout(9000);
  // Gender Select
  await page.getByLabel('Female').first().check();
  await page.waitForTimeout(9000);
// // Insured ID 
//   await page.getByLabel('Insured\'s ID number').clear();
//   await page.getByLabel('Insured\'s ID number').fill('REJECTED');
//   await page.waitForTimeout(3000);
  // Add Diagnosis code
  await page.getByLabel('A', { exact: true }).click();
  await page.getByLabel('A', { exact: true }).fill('K5289');
  await page.waitForTimeout(5000);
  // Employement (Current)
  await page.locator('div:nth-child(3) > div > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
  // Auto accidents
  await page.locator('div').filter({ hasText: /^Yes No statestate$/ }).getByLabel('No').check();
  await page.waitForTimeout(7000);
 

// Assignements
// await page.waitForSelector('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input', { state: 'visible' });
// await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click({ force: true });
await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(9000);
  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(10000);
  
  await page.getByRole('tab', { name: 'Claim History' }).click();
  await page.getByRole('tab', { name: 'Claim', exact: true }).click();
  await page.getByText('Insurance', { exact: true }).click();
  await page.waitForTimeout(3000);

// Claims Status : DENY
 
await page.getByLabel('Client').click();
await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Client' }).fill('Colin');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByRole('button', { name: 'Create claim' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Create Claim Without' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByLabel('Client').click();
  await page.getByRole('combobox', { name: 'Client' }).fill('Colin');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByText('AIG').nth(1).click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('First Claims Added here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Edit' }).nth(3).click();
  await page.waitForTimeout(9000);
  // Gender Select
  await page.getByLabel('Female').first().check();
  await page.waitForTimeout(9000);
// Insured ID 
  await page.getByLabel('Insured\'s ID number').clear();
  await page.getByLabel('Insured\'s ID number').fill('DENY');
  await page.waitForTimeout(3000);
  // Add Diagnosis code
  await page.getByLabel('A', { exact: true }).click();
  await page.getByLabel('A', { exact: true }).fill('K5289');
  await page.waitForTimeout(5000);
  // Employement (Current)
  await page.locator('div:nth-child(3) > div > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
  // Auto accidents
  await page.locator('div').filter({ hasText: /^Yes No statestate$/ }).getByLabel('No').check();
  await page.waitForTimeout(7000);
 

// Assignements
// await page.waitForSelector('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input', { state: 'visible' });
// await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click({ force: true });
await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(9000);
  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(10000);
  
  await page.getByRole('tab', { name: 'Claim History' }).click();
  await page.getByRole('tab', { name: 'Claim', exact: true }).click();
  await page.getByText('Insurance', { exact: true }).click();
  await page.waitForTimeout(3000);

// Claims Satus : Scrub Status 

await page.getByLabel('Client').click();
await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Client' }).fill('Test');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByRole('button', { name: 'Create claim' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Create Claim Without' }).nth(1).click();
 
  await page.getByText('Arrowpoint').first().click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('First Claims Added here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Edit' }).nth(3).click();
  await page.waitForTimeout(9000);
  // Gender Select
  await page.getByLabel('Female').first().check();
  await page.waitForTimeout(9000);
// Insured ID 
  // await page.getByLabel('Insured\'s ID number').clear();
  // await page.getByLabel('Insured\'s ID number').fill('REJECTED');
  // await page.waitForTimeout(3000);
  // Add Diagnosis code
  await page.getByLabel('A', { exact: true }).click();
  await page.getByLabel('A', { exact: true }).fill('MGHGR');
  await page.waitForTimeout(5000);
  // Employement (Current)
  await page.locator('div:nth-child(3) > div > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
  // Auto accidents
  await page.locator('div').filter({ hasText: /^Yes No statestate$/ }).getByLabel('No').check();
  await page.waitForTimeout(7000);
 

// Assignements
// await page.waitForSelector('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input', { state: 'visible' });
// await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click({ force: true });
await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(9000);
  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(10000);
  
  await page.getByRole('tab', { name: 'Claim History' }).click();
  await page.getByRole('tab', { name: 'Claim', exact: true }).click();
  await page.getByText('Insurance', { exact: true }).click();
  await page.waitForTimeout(3000);

  //  Claims Status : Rejected Test Das

await page.getByLabel('Client').click();
await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Client' }).fill('Test');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByRole('button', { name: 'Create claim' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Create Claim Without' }).nth(1).click();
  await page.waitForTimeout(8000);
  await page.getByLabel('Client').click();
  await page.getByRole('combobox', { name: 'Client' }).fill('Test');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByText('Arrowpoint').nth(1).click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('First Claims Added here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Edit' }).nth(3).click();
  await page.waitForTimeout(9000);
  // Gender Select
  await page.getByLabel('Female').first().check();
  await page.waitForTimeout(9000);
// Insured ID 
  await page.getByLabel('Insured\'s ID number').clear();
  await page.getByLabel('Insured\'s ID number').fill('REJECTED');
  await page.waitForTimeout(3000);
  // Add Diagnosis code
  await page.getByLabel('A', { exact: true }).click();
  await page.getByLabel('A', { exact: true }).fill('K5289');
  await page.waitForTimeout(5000);
  // Employement (Current)
  await page.locator('div:nth-child(3) > div > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
  // Auto accidents
  await page.locator('div').filter({ hasText: /^Yes No statestate$/ }).getByLabel('No').check();
  await page.waitForTimeout(7000);
 

// Assignements
// await page.waitForSelector('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input', { state: 'visible' });
// await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click({ force: true });
await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(9000);
  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(10000);
  
  await page.getByRole('tab', { name: 'Claim History' }).click();
  await page.getByRole('tab', { name: 'Claim', exact: true }).click();
  await page.getByText('Insurance', { exact: true }).click();
  await page.waitForTimeout(3000);


  //  Claims Submitted : Paid ( Manchu Das)


await page.getByLabel('Client').click();
await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Client' }).fill('Manchu');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByRole('button', { name: 'Create claim' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Create Claim Without' }).nth(1).click();
 
  await page.getByText('Bass Pro Group, LLC').first().click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('First Claims Added here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Edit' }).nth(3).click();
  await page.waitForTimeout(9000);
  // Gender Select
  await page.getByLabel('Female').first().check();
  await page.waitForTimeout(9000);
// Insured ID 
  // await page.getByLabel('Insured\'s ID number').clear();
  // await page.getByLabel('Insured\'s ID number').fill('REJECTED');
  // await page.waitForTimeout(3000);
  // Add Diagnosis code
  await page.getByLabel('A', { exact: true }).click();
  await page.getByLabel('A', { exact: true }).fill('K5289');
  await page.waitForTimeout(5000);
  // Employement (Current)
  await page.locator('div:nth-child(3) > div > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
  // Auto accidents
  await page.locator('div').filter({ hasText: /^Yes No statestate$/ }).getByLabel('No').check();
  await page.waitForTimeout(7000);
 

// Assignements
// await page.waitForSelector('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input', { state: 'visible' });
// await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click({ force: true });
await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(9000);
  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(10000);
  
  await page.getByRole('tab', { name: 'Claim History' }).click();
  await page.getByRole('tab', { name: 'Claim', exact: true }).click();
  await page.getByText('Insurance', { exact: true }).click();
  await page.waitForTimeout(3000);

// Claims Status : DENY Status ( Manchu Das)


await page.getByLabel('Client').click();
await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Client' }).fill('Manchu');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByRole('button', { name: 'Create claim' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Create Claim Without' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByLabel('Client').click();
  await page.getByRole('combobox', { name: 'Client' }).fill('Manchu');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByText('Bass Pro Group, LLC').nth(1).click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('First Claims Added here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Edit' }).nth(3).click();
  await page.waitForTimeout(9000);
  // Gender Select
  await page.getByLabel('Female').first().check();
  await page.waitForTimeout(9000);
// Insured ID 
  await page.getByLabel('Insured\'s ID number').clear();
  await page.getByLabel('Insured\'s ID number').fill('DENY');
  await page.waitForTimeout(3000);
  // Add Diagnosis code
  await page.getByLabel('A', { exact: true }).click();
  await page.getByLabel('A', { exact: true }).fill('K5289');
  await page.waitForTimeout(5000);
  // Employement (Current)
  await page.locator('div:nth-child(3) > div > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
  // Auto accidents
  await page.locator('div').filter({ hasText: /^Yes No statestate$/ }).getByLabel('No').check();
  await page.waitForTimeout(7000);
 

// Assignements
// await page.waitForSelector('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input', { state: 'visible' });
// await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click({ force: true });
await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(9000);
  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(10000);
  
  await page.getByRole('tab', { name: 'Claim History' }).click();
  await page.getByRole('tab', { name: 'Claim', exact: true }).click();
  await page.getByText('Insurance', { exact: true }).click();
  await page.waitForTimeout(3000);


  // Claims Status : Paid Claims (Venki Das)

await page.getByLabel('Client').click();
await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Client' }).fill('Venki');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByRole('button', { name: 'Create claim' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Create Claim Without' }).nth(1).click();
 
  await page.getByText('Carhartt').first().click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('First Claims Added here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Edit' }).nth(3).click();
  await page.waitForTimeout(9000);
  // Gender Select
  await page.getByLabel('Female').first().check();
  await page.waitForTimeout(9000);
// Insured ID 
  // await page.getByLabel('Insured\'s ID number').clear();
  // await page.getByLabel('Insured\'s ID number').fill('REJECTED');
  // await page.waitForTimeout(3000);
  // Add Diagnosis code
  await page.getByLabel('A', { exact: true }).click();
  await page.getByLabel('A', { exact: true }).fill('K5289');
  await page.waitForTimeout(5000);
  // Employement (Current)
  await page.locator('div:nth-child(3) > div > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
  // Auto accidents
  await page.locator('div').filter({ hasText: /^Yes No statestate$/ }).getByLabel('No').check();
  await page.waitForTimeout(7000);
 

// Assignements
// await page.waitForSelector('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input', { state: 'visible' });
// await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click({ force: true });
await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(9000);
  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(10000);
  
  await page.getByRole('tab', { name: 'Claim History' }).click();
  await page.getByRole('tab', { name: 'Claim', exact: true }).click();
  await page.getByText('Insurance', { exact: true }).click();
  await page.waitForTimeout(3000);

//  Cliams Status : REJECTED 

await page.getByLabel('Client').click();
await page.waitForTimeout(1000);
  await page.getByRole('combobox', { name: 'Client' }).fill('Venki');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByRole('button', { name: 'Create claim' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Create Claim Without' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByLabel('Client').click();
  await page.getByRole('combobox', { name: 'Client' }).fill('Venki');
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox', { name: 'Client' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.waitForTimeout(7000);
  await page.getByText('Carhartt').nth(1).click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('First Claims Added here');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Edit' }).nth(3).click();
  await page.waitForTimeout(9000);
  // Gender Select
  await page.getByLabel('Female').first().check();
  await page.waitForTimeout(9000);
// Insured ID 
  await page.getByLabel('Insured\'s ID number').clear();
  await page.getByLabel('Insured\'s ID number').fill('REJECTED');
  await page.waitForTimeout(3000);
  // Add Diagnosis code
  await page.getByLabel('A', { exact: true }).click();
  await page.getByLabel('A', { exact: true }).fill('K5289');
  await page.waitForTimeout(5000);
  // Employement (Current)
  await page.locator('div:nth-child(3) > div > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
  // Auto accidents
  await page.locator('div').filter({ hasText: /^Yes No statestate$/ }).getByLabel('No').check();
  await page.waitForTimeout(7000);
 

// Assignements
// await page.waitForSelector('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input', { state: 'visible' });
// await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
await page.locator('div:nth-child(27) > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().click({ force: true });
await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(9000);
  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(10000);
  
  await page.getByRole('tab', { name: 'Claim History' }).click();
  await page.getByRole('tab', { name: 'Claim', exact: true }).click();
  await page.getByText('Insurance', { exact: true }).click();
  await page.waitForTimeout(3000);


  // Personal Settings

  
  try {
    await page.locator('div').filter({ hasText: /^Settings$/ }).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
    await page.getByText('Settings').click();
  }
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
  await page.getByLabel('Duration *').fill('3');
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

  //   Privacy Policy
await page.getByText('Website Privacy Policy').click();
await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
await page.getByText('Terms & Conditions').click();
await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();


// Billing Invoice and ERA Reports
  await page.getByText('Insurance').click();
  await page.getByRole('tab', { name: 'ERA\'s' }).click();
  await page.getByText('Access Integra').click();
  await page.getByTestId('ArrowBackIcon').click();
  
  await page.getByText('Billing').click();
  await page.getByRole('button', { name: 'Insurance' }).click();
  await page.getByRole('cell', { name: '$100' }).nth(1).click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('Insurance Claims');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByText('Reports').click();

  await page.getByText('Billing').first().click();
  await page.getByRole('button', { name: 'Insurance' }).click();
  await page.getByRole('cell', { name: '$100' }).nth(3).click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('Second Cliams Added');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(5000);

  // Insurance Reports
  await page.getByText('Reports').click();
  
 // Outstanding Claims
 await page.getByText('Outstanding Claims').click();
 await page.getByLabel('Payment Aging').click();
 await page.getByRole('option', { name: 'Due 30-60 days' }).getByRole('paragraph').click();
 await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
 await page.waitForTimeout(4000);
// Unpaid Insurance Appoinments 
 await page.getByText('Unpaid insurance appointments').click();
 await page.getByLabel('Status').click();
 await page.getByRole('option', { name: 'All' }).click();
 await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
 await page.waitForTimeout(2000);
 await page.locator('div').filter({ hasText: /^Status$/ }).getByLabel('Open').click();
 await page.getByText('Claim filed').click();
 await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
 await page.waitForTimeout(2000);
 await page.locator('div').filter({ hasText: /^Status$/ }).getByLabel('Open').click();
 await page.getByText('Claim not filed').click();
 await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
 await page.waitForTimeout(2000);

// ERA Reports 

await page.getByText('ERA Report').click();
 await page.getByLabel('Status').click();
 await page.getByText('Pending', { exact: true }).click();
 await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
 await page.waitForTimeout(2000);
 await page.locator('div').filter({ hasText: /^Status$/ }).getByLabel('Open').click();
 await page.getByRole('option', { name: 'Paid' }).getByRole('paragraph').click();
 await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
 await page.waitForTimeout(2000);
 await page.locator('div').filter({ hasText: /^Status$/ }).getByLabel('Open').click();
 await page.getByRole('option', { name: 'Denied' }).getByRole('paragraph').click();
 await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
 await page.waitForTimeout(2000);

 // Filed Claims 
 await page.getByText('Filed Claims').click();
  await page.getByLabel('Status').click();
 await page.getByRole('option', { name: 'Submitted' }).getByRole('checkbox').check();
 await page.getByRole('option', { name: 'Sent' }).getByRole('checkbox').check();
 await page.getByRole('option', { name: 'Accepted' }).getByRole('checkbox').check();
 await page.getByRole('option', { name: 'Rejected' }).getByRole('checkbox').check();
 await page.getByRole('option', { name: 'Paid' }).getByRole('checkbox').check();
 await page.getByRole('option', { name: 'Denied' }).getByRole('checkbox').check();
 await page.getByRole('option', { name: 'Refiled' }).getByRole('checkbox').check();
 await page.reload();
 await page.waitForTimeout(4000);

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
