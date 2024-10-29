// import { test, type Page } from '@playwright/test';
// import path from 'path';
// import { generatePasswordlessLoginLink } from '../helpers/api';
// import { createNewEmail } from '../helpers/mailsurp';
// import {
//   BASE_FRONTEND_URL,
//   isRunningOnLocal,
//   localBaseUrl,
// } from '../localemails.js/const';
// import { IEmail, readEmails } from '../localemails.js/emails';


// // Annotate entire file as serial.
// test.describe.configure({ mode: 'serial' });

// let page: Page;

// test.beforeAll(async ({ browser }) => {
//   const myEmails: IEmail = await readEmails();
//   console.log(myEmails);
//   if (!myEmails?.billingsection?.length) {
//     throw new Error(`billerSectionEmail not present returning...`);
//   }
//   page = await browser.newPage();
// });

// test.afterAll(async () => {
//   await page.close();
// });
// test.describe.skip('All BillerSectionRole Test case ', () => {
// test('BillingSection  login and  onboarding ', async ({ request }) => {
//   let myEmails: IEmail = await readEmails();
//     const data = await generatePasswordlessLoginLink({
//       email: myEmails.billingsection!,
      
//       request: request,
//     });
//     await page.goto(data!);
  
//   // Onbaording flows for Practice Manager
  
// await page.getByPlaceholder('Enter first name').click();
// await page.getByPlaceholder('Enter first name').fill('Billing');
// await page.getByPlaceholder('Enter last name').click();
// await page.getByPlaceholder('Enter last name').fill('Section');
// await page.getByPlaceholder('Enter phone').click();
// await page.getByPlaceholder('Enter phone').fill('(846) 534-65833');
// await page.getByRole('button', { name: 'Continue' }).nth(1).click();
// await page.waitForTimeout(2000);
// await page.getByLabel('', { exact: true }).check();
//    await page.waitForTimeout(1000);
//    await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
//    await page.waitForTimeout(1000);
//    await page.getByLabel('', { exact: true }).check();
//    await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
//    await page.waitForTimeout(6000);
//    });
//    test('Insurance Features', async () => {
//     const { chromium } = require('playwright');

// (async () => {
//   const browser = await chromium.launch({
//     headless: false
//   });
//   const context = await browser.newContext();
//   await page.getByText('Billing').nth(2).click();
//   await page.getByRole('tab', { name: 'Insurance' }).click();
//   await page.getByLabel('Practice name*').click();
//   await page.getByLabel('Practice name*').fill('Testing Insurance Practice');
//   await page.getByLabel('NPI*').click();
//   await page.getByLabel('NPI*').fill('1111111112');
//   await page.getByLabel('Taxonomy code').click();
//   await page.getByLabel('Taxonomy code').fill('207R00000X');
//   await page.getByLabel('Tax ID*').click();
//   await page.getByLabel('Tax ID*').fill('111111112');
//   await page.getByLabel('SSN').click();
//   await page.getByLabel('SSN').fill('1234567890');
//   await page.getByPlaceholder('Address line').click();
//   await page.getByPlaceholder('Address line').fill('New Testing Insurance Locations');
//   await page.getByLabel('State').click();
//   await page.getByRole('combobox', { name: 'State' }).fill('Vir');
//   await page.getByLabel('Clear').click();
//   await page.getByLabel('State').click();
//   await page.getByLabel('State').click();
//   await page.locator('div').filter({ hasText: /^City$/ }).click();
//   await page.getByLabel('State').click();
//   await page.getByRole('option', { name: 'Texas' }).click();
//   await page.getByLabel('City').click();
//   await page.getByRole('option', { name: 'Abilene' }).click();
//   await page.getByPlaceholder('Zip code').click();
//   await page.getByPlaceholder('Zip code').fill('45700');
//   await page.getByRole('button', { name: 'Save' }).nth(1).click();
//   

// await page.getByText('Payers').click();
//   await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByLabel('Search for insurance payers').fill('Cenpatico Kan');
//   await page.getByText('- Cenpatico Kansas').click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('button', { name: 'Enroll' }).nth(1).click();
//   const page1 = await page1Promise;
//   await page1.close();
//   await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByLabel('Search for insurance payers').fill('AIG');
//   await page.getByText('- AIG').click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
//   await page.getByRole('button', { name: 'Enroll' }).nth(3).click();
//   await page2.close();
//   await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByLabel('Search for insurance payers').fill('Alliant Energy');
//   await page.getByText('J1619- Alliant Energy').click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
//   await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByLabel('Search for insurance payers').fill('AlohaCare');
//   await page.getByText('ALOHA- AlohaCare').click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
//   await page.getByRole('row', { name: 'ALOHA AlohaCare Enroll Enroll' }).getByRole('button').nth(1).click();
//   await page3.getByRole('button', { name: 'Continue' }).click();
//   await page3.locator('#field_11').click();
//   await page3.locator('#field_11').fill('Test');
//   await page3.locator('#field_13').click();
//   await page3.locator('#field_13').fill('Test');
//   await page3.locator('#field_15').click();
//   await page3.locator('#field_15').fill('343546456');
//   await page3.locator('#field_14').click();
//   await page3.locator('#field_15').click();
//   await page3.locator('#field_15').click();
//   await page3.locator('#field_15').fill('3435464356');
//   await page3.locator('#field_14').click();
//   await page3.locator('#field_14').fill('She');
//   await page3.locator('#field_16').click();
//   await page3.locator('#field_16').fill('Test');
//   await page3.locator('#field_18').click();
//   await page3.locator('#field_18').fill('testmail@djjd.com');
//   await page3.locator('#field_17').click();
//   await page3.locator('#field_17').fill('MR');
//   await page3.locator('#field_19').click();
//   await page3.locator('#field_19').fill('8105671022');
//   await page3.getByText('SIGN HERE').click();
//   await page3.locator('#signature-canvas').click({
//     position: {
//       x: 148,
//       y: 184
//     }
//   });
//   await page3.getByRole('button', { name: 'Apply Signature' }).click();
//   await page3.close();
//   await page.getByRole('row', { name: 'ALOHA AlohaCare Enroll Enroll' }).getByRole('button').nth(4).click();
//   await page.getByText('Delete', { exact: true }).click();
//   await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByLabel('Search for insurance payers').fill('\t Arrowpoint');
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').fill('Arrowpoint');
//   await page.getByText('J1564- Arrowpoint').click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
//   await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByLabel('Search for insurance payers').fill('Bass Pro Group, LLC');
//   await page.getByText('J1958- Bass Pro Group, LLC').click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
//   await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByLabel('Search for insurance payers').fill('\t Carhartt');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').fill('Carhartt');
//   await page.getByText('J1931- Carhartt').click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
//   await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByLabel('Search for insurance payers').fill('Absolute');
//   await page.getByText('68055- Absolute Total Care').click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
//   await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByLabel('Search for insurance payers').fill('\t CarePlus Health Plans Inc');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').fill('CarePlus Health Plans Inc');
//   await page.getByText('- CarePlus Health Plans Inc').click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
//   await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByLabel('Search for insurance payers').fill('Boler Com');
//   await page.getByText('J1870- Boler Company').click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
//   await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByLabel('Search for insurance payers').fill('Dean Health');
//   await page.getByText('39113- Dean Health Plan').click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
//   await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
//   await page.getByLabel('Search for insurance payers').click();
//   await page.getByLabel('Search for insurance payers').fill('\t Access Integra');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').press('ArrowLeft');
//   await page.getByLabel('Search for insurance payers').fill('Access Integra');
//   await page.getByText('INTEG- Access Integra').click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();

//   // ---------------------
//   await context.close();
//   await browser.close();
// })();
