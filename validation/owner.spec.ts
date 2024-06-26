// // import { test, type Page, } from '@playwright/test';
// // import path from 'path';
// // import { generatePasswordlessLoginLink } from '../helpers/api';
// // import { createNewEmail } from '../helpers/mailsurp';
// // import {
// //   BASE_FRONTEND_URL,
// //   isRunningOnLocal,
// //   localBaseUrl,
// // } from '../localemails.js/const';
// // import { readEmails, setEmails } from '../localemails.js/emails';

// import { url } from "inspector";

// // // Annotate entire file as serial.
// // test.describe.configure({ mode: 'serial' });

// // let page: Page;

// // test.beforeAll(async ({ browser }) => {
// //   page = await browser.newPage();
// // });

// // test.afterAll(async () => {
// //   await page.close();
// // });
// // test.describe('All OwnerRole Test case ', () => {

// // test('Owner login and  onboarding ', async ({ request }) => {
// //   const inbox = await createNewEmail();

// //   const data = await generatePasswordlessLoginLink({
// //     email: inbox!,
// //     request: request,
// //   });
// //   await page.goto(data!);

// //   // Onboarding Flows for Owner
 
// //   await page.getByPlaceholder('Enter first name').click();
// //   await page.getByPlaceholder('Enter first name').fill('Owner ');
// //   await page.getByPlaceholder('Enter last name').click();
// //   await page.getByPlaceholder('Enter last name').fill('Team');
// //   await page.getByPlaceholder('Enter phone').click();
// //   await page.getByPlaceholder('Enter phone').fill('(846) 534-65833');
// //   await page.getByRole('button', { name: 'Continue' }).nth(1).click();

// // // Vadloation check
// //   await page.getByRole('button', { name: 'Next' }).nth(1).click();
// // const err = new Error('The message');
// // console.error(err.message);
// // // Prints: The message

// //   await page.getByPlaceholder('Enter your practice name').click();
// //   await page.getByPlaceholder('Enter your practice name').fill('KanTime Healthcare System ');
// //   await page.getByLabel('Address Line').click();
// //   await page.getByLabel('Address Line').fill('New York City');
// //   await page.waitForTimeout(2000);
// //   await page.getByPlaceholder('Street address').click();
// //   await page.getByPlaceholder('Street address').fill('New Area City ');
// //   await page.getByLabel('State').click();
// //   await page.getByRole('combobox', { name: 'State' }).fill('cali');
// //   await page.getByText('California').click();
// //   await page.getByLabel('City').click();
// //   await page.getByRole('combobox', { name: 'City' }).fill('Azu');
// //   await page.getByText('Azusa').click();
// //   await page.getByPlaceholder('Zip code').click();
// //   await page.getByPlaceholder('Zip code').fill('561202');
// //   await page.getByPlaceholder('Enter your practice name').click();
// //   await page.getByPlaceholder('Enter your practice name').fill('KanTime Healthcare System ');

// //   await page.getByRole('button', { name: 'Next' }).nth(1).click();
  
// //   await page.getByRole('button', { name: 'Add new' }).nth(1).click();
// //   await page.getByLabel('Office name').click();
// //   await page.getByLabel('Office name').fill('KanTime Healthcare System ');
// //   await page.getByLabel('Address').click();
// //   await page.getByLabel('Address').fill('New area City');
// //   await page.getByLabel('State').click();
// //   await page.getByRole('combobox', { name: 'State' }).fill('New york');
// //   await page.getByText('New York').click();
// //   await page.getByLabel('City').click();
// //   await page.getByRole('combobox', { name: 'City' }).fill('Fre');
// //   await page.getByText('Freeport').click();
// //   await page.getByPlaceholder('Zip code').click();
// //   await page.getByPlaceholder('Zip code').fill('56192');
// //   await page.getByLabel('Make default location').check();
// //   await page.getByRole('button', { name: 'Add location' }).nth(1).click();

// //   await page.getByRole('button', { name: 'Next' }).nth(1).click();

// //   await page.getByRole('button', { name: 'Add new' }).nth(1).click();
// //   await page.getByLabel('CPT Code').click();
// //   await page.getByRole('combobox', { name: 'CPT Code' }).fill('90832');
// //   await page.getByRole('option', { name: '90832, Psychotherapy, 30' }).click();
// //   await page.getByLabel('Fee *').click();
// //   await page.getByLabel('Fee *').fill('100');
// //   await page.getByLabel('Duration *').click();
// //   await page.getByLabel('Duration *').fill('10');
// //   await page.getByLabel('Make default service').check();
// //   await page.getByRole('button', { name: 'Add service' }).nth(1).click();
// //   await page.getByRole('button', { name: 'Next' }).nth(1).click();
// //   await page.getByRole('button', { name: 'Next' }).nth(1).click();
 
// //   await page.getByLabel('').check();
// //   await page.waitForTimeout(2000);
// //   await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
// //   await page.waitForTimeout(2000);
// //   await page.getByLabel('').check();
// //   await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
// // });
// // test('Settings Flows', async () => {
// //     await page
// //       .locator('div')
// //       .filter({ hasText: /^Settings$/ })
// //       .getByRole('img')
// //       .click();
// //     //Clinican Settings Flows
// //     await page.getByText('Clinician settings').click();
// //     await page.getByText('Practice settings').click();
// //   await page.getByLabel('Practice Name').click();
// //   await page.getByLabel('Practice Name').fill('Mind Simple Hospital');
// //   await page.getByLabel('About').click();
// //   await page.getByLabel('About').fill('This Nice company change Company info ');
// //   await page.getByPlaceholder('Enter phone').click();
// //   await page.getByPlaceholder('Enter phone').fill('(975) 734-53525');
// //   await page.getByRole('button', { name: 'Save' }).nth(1).click();
// //   await page.getByPlaceholder('Address Line 1').clear();
// //   await page.getByPlaceholder('Address Line 1').fill('New States');
// //   await page.getByRole('button', { name: 'Save' }).nth(1).click();

// //    // Team member invites flows ( Therapist role)
// //    await page.getByText('Team members').first().click();
// //    await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();

// //    await page.getByRole('button', { name: 'Next' }).nth(1).click();
// //    await page.waitForTimeout(4000);
// //    await page.getByLabel('First Name*').click();
// //    await page.getByLabel('First Name*').fill('Therapist');
// //    await page.getByLabel('Last Name*').click();
// //    await page.getByLabel('Last Name*').fill('1');
// //    await page.getByLabel('Email*').click();
 
// //    //
// //    const Bookinginbox1 = await createNewEmail();
// //    await page.getByLabel('Email*').fill(Bookinginbox1!);

// //    await page.getByRole('button', { name: 'Next' }).nth(1).click();
// //    await page.getByLabel('Therapist').check();
// //    await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
// //    await page.waitForTimeout(4000);
// //    await page.reload();

// //    await page.getByText('Role settings').click();
// // await page.getByRole('button', { name: 'Create custom role' }).nth(1).click();
// // await page .waitForTimeout(5000);
// // await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
// // await page.getByLabel('Practice Manager').check();
// // await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
// // await page.getByLabel('Role title').click();
// // await page.getByLabel('Role title').fill('Test Custom');
// // await page.getByRole('button', { name: 'Save' }).nth(1).click();
// // await page .waitForTimeout(8000);

// // await page.getByRole('button', { name: 'Create custom role' }).nth(1).click();
// // await page .waitForTimeout(5000);
// // await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
// // await page.getByLabel('Practice Manager').check();
// // await page.getByRole('button', { name: 'Copy permissions' }).nth(1).click();
// // await page.getByLabel('Role title').click();
// // await page.getByLabel('Role title').fill('Test Custom');
// // await page.getByLabel('Role title').clear();
// // await page.getByLabel('Role title').fill('Custom Test');
// // await page.getByRole('button', { name: 'Save' }).nth(1).click();
// // await page .waitForTimeout(8000);

// // //   Scheduler Calender 
// // await page.getByText('Calendar').click();
// // try {
// //  await page.locator('div').filter({ hasText: /^Currently accepting appointments$/ }).getByRole('checkbox').click();

// // } catch (error) {
// //   console.log('Failed to find first locator, trying second locator');
// //   await page.locator('#root > div._layout_cqogi_1 > div._content_cqogi_7 > div > div._acceptingAppointmentsSwitch_ml86x_17 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383').click();
// // }

// // await page.getByRole('button', { name: 'Edit' }).nth(1).click();
// // await page.getByLabel('Monday').check();
// // await page.getByLabel('Tuesday').check();
// // await page.getByLabel('Wednesday').check();
// // await page.getByLabel('Thursday').check();
// // await page.getByLabel('Friday').check();
// // await page.getByLabel('Saturday').check();
// // await page.getByLabel('Sunday').check();
// // await page.getByRole('button', { name: 'Save' }).nth(1).click();
// // await page.locator('p').filter({ hasText: /^Calendar$/ }).click();
// // await page.getByLabel('Monday').check();

// // //Booking widget flows
// // await page.getByText('Booking widget').click();
// // await page.getByRole('button', { name: 'Generate link' }).nth(1).click();
// // await page.waitForTimeout(2000);
// // const page1Promise = page.waitForEvent('popup');
// // await page
// //   .locator(
// //     '#root > div._layout_cqogi_1 > div._content_cqogi_7 > div._bookingWidgetWrapper_4jerd_1 > div._therapistLinks_4jerd_53 > div:nth-child(1) > p')
// //   .click();
// // const page1 = await page1Promise;
// // await page1
// //   .locator('div')
// //   .filter({ hasText: /^Psychotherapy, 45 mins- 45 mins$/ })
// //   .nth(1)
// //   .click();
// // await page1
// //   .locator(
// //     '#root > div._layout_cqogi_1 > div > div._bookingWidgetWrapper_tlkra_1 > div._bookingWidgetContainer_tlkra_21 > div._bookingContent_tlkra_44 > div:nth-child(2) > div > div._dateTime_142fu_33 > div > div:nth-child(2) > div > div._timeSlotsWrapper_vyf9q_11 div:first-child'
// //   )
// //   .click();

// //   await page1
// //   .getByRole('button', { name: 'Request appointment' })
// //   .nth(1)
// //   .click();

// // await page1.getByPlaceholder('Enter first name').click();
// // await page1.getByPlaceholder('Enter first name').fill('James');
// // await page1.getByPlaceholder('Enter last name').click();
// // await page1.getByPlaceholder('Enter last name').fill('Willy');
// // await page1.getByPlaceholder('Enter email').click();
// // //
// // const inviteinbox1 = await createNewEmail();
// // await page1.getByPlaceholder('Enter email').fill(inviteinbox1!);

// // await page1.getByPlaceholder('Enter phone').click();
// // await page1.getByPlaceholder('Enter phone').fill('(893) 553-00024');
// // await page1
// //   .getByRole('button', { name: 'Request appointment' })
// //   .nth(1)
// //   .click();
// // await page1.waitForTimeout(1000);
// // await page1.close();

// // });

// // });


// const { chromium } = require('playwright');

// (async () => {
//   const browser = await chromium.launch({
//     headless: false
//   });

//   await page.getByText('Subscription').click();
//   await page.getByText('Frontdesk').click();
//   await page .waitForTimeout(3000);
//   await page.getByText('Bundle').click();
//   await page .waitForTimeout(3000);
//   await page.getByText('EHR', { exact: true }).click();
//   await page .waitForTimeout(2000);
//   await page.getByRole('button', { name: 'Subscribe' }).nth(1).click();
//   await page .waitForTimeout(3000);
//   await page.getByPlaceholder('Card number').click();
//   await page.getByPlaceholder('Card number').fill('4242 4242 4242 424');
//   await page .waitForTimeout(3000);
//   await page.getByPlaceholder('Expiry date (MM/YY)').click();
//   await page.getByPlaceholder('Expiry date (MM/YY)').fill('09 / 30');
//   await page .waitForTimeout(3000);
//   await page.getByPlaceholder('CVV').click();
//   await page.getByPlaceholder('CVV').fill('689');

//   await page.getByLabel('Name on invoices').click();
//   await page.getByLabel('Name on invoices').fill('Owner Team');
//   await page.getByLabel('Email Id to send Invoices').click();
//   await page.getByLabel('Email Id to send Invoices').fill('testemails@gmail.com');
//   await page.getByLabel('Address').click();
//   await page.getByLabel('Address').fill('New Jersy city ');
//   await page.getByLabel('Street').click();
//   await page.getByLabel('Street').fill('Main city side road');
//   await page.getByLabel('State').click();
//   await page.getByRole('combobox', { name: 'State' }).fill('Lou');
//   await page.getByText('Louisiana').click();
//   await page.getByLabel('City').click();
//   await page.getByRole('combobox', { name: 'City' }).fill('Ken');
//   await page.getByText('Kenner').click();
//   await page.getByLabel('Zipcode').click();
//   await page.getByLabel('Zipcode').fill('5612012');
//   await page.getByLabel('', { exact: true }).first().check();
//   await page.getByPlaceholder('Enter coupon code').click();
//   await page.getByPlaceholder('Enter coupon code').fill('LIVE');
//   await page.getByRole('button', { name: 'Apply' }).nth(1).click();
//   await page .waitForTimeout(6000);
//   await page.getByRole('button', { name: 'Subscribe to Ehr Plus Plan' }).nth(1).click();
//   await page .waitForTimeout(7000);
//   await page.getByRole('heading', { name: 'Update' }).first().click();
//   await page.getByRole('button', { name: 'Add new card' }).nth(1).click();

//   await page.getByPlaceholder('Card number').click();
//   await page.getByPlaceholder('Card number').fill('4242 4242 4242 424');
//   await page .waitForTimeout(3000);
//   await page.getByPlaceholder('Expiry date (MM/YY)').click();
//   await page.getByPlaceholder('Expiry date (MM/YY)').fill('09 / 30');
//   await page .waitForTimeout(3000);
//   await page.getByPlaceholder('CVV').click();
//   await page.getByPlaceholder('CVV').fill('689');
//   // await page.frameLocator('iframe[name="__privateStripeFrame54811"]').getByPlaceholder('Card number').click();
//   // await page.frameLocator('iframe[name="__privateStripeFrame54811"]').getByPlaceholder('Card number').click();
//   // await page.frameLocator('iframe[name="__privateStripeFrame54811"]').getByPlaceholder('Card number').fill('4000056655665556');
//   // await page.frameLocator('iframe[name="__privateStripeFrame54812"]').getByPlaceholder('Expiry date (MM/YY)').click();
//   // await page.frameLocator('iframe[name="__privateStripeFrame54812"]').getByPlaceholder('Expiry date (MM/YY)').fill('08 / 31');
//   // await page.frameLocator('iframe[name="__privateStripeFrame54813"]').getByPlaceholder('CVV').click();
//   // await page.frameLocator('iframe[name="__privateStripeFrame54813"]').getByPlaceholder('CVV').fill('2545');
//   await page.getByRole('button', { name: 'Add card' }).nth(1).click();
//   await page .waitForTimeout(3000);
//   await page.getByText('Make Primary').click();
//   await page .waitForTimeout(3000);
//   await page.getByRole('img', { name: 'cross icon' }).click();
//   await page .waitForTimeout(3000);
//   await page.getByRole('heading', { name: 'Update' }).nth(1).click();
//   await page.getByRole('button', { name: 'cancel' }).nth(1).click();
//   await page.getByRole('heading', { name: 'Update' }).nth(2).click();
//   await page.getByLabel('Make default across practice').check();
//   await page .waitForTimeout(3000);
//   await page.getByLabel('Address').click();
//   await page.getByLabel('Address').fill('2nd Stage nagarabahvi road bangalore');
//   await page.getByRole('button', { name: 'update' }).nth(1).click();
//   await page .waitForTimeout(3000);
//   await page.getByRole('heading', { name: 'Manage members' }).click();
//   await page.getByRole('img', { name: 'cross icon' }).click();
//   await page .waitForTimeout(3000);
  
//   // ---------------------
//   await context.close();
//   await browser.close();
// })();





// //   await page.getByText('Subscription').click();
// //   await page.getByText('Frontdesk').click();
// //   await page .waitForTimeout(3000);
// //   await page.getByText('Bundle').click();
// //   await page .waitForTimeout(3000);
// //   await page.getByText('EHR', { exact: true }).click();
// //   await page .waitForTimeout(2000);
// //   await page.getByRole('button', { name: 'Subscribe' }).nth(1).click();
// //   await page .waitForTimeout(3000);

// //   // Total Frames
// //   const allframes = await page.frames();
// //   console.log("Number of Frames:" ,allframes.length)

// //   // Get frame using the frame's name attribute
// // // const frame1 = page.frame("name='__privateStripeFrame1623'");
// // const frame1 = page.frame("title='Secure card number input frame'");
// //  await frame1?.fill("[name='cardnumber']",'4242424242424242');
// //  await page .waitForTimeout(5000);

// // const frame2 = page.frame("title='Secure expiration date input frame'");
// // await frame2?.fill("[name='exp-date']",'09 /30');
// // await page .waitForTimeout(5000);

// // const frame3 = page.frame("title='Secure CVC input frame'");
// // await frame3?.fill("[name='cvc']",'743');
// // await page .waitForTimeout(5000);


// const myframe = page.frame ({url:"https://js.stripe.com/v3/m-outer-3437aaddcdf6922d623e172c2d6f9278.html#url=https%3A%2F%2Fleafs-ehr-web-stage-nmvorvf7ga-as.a.run.app%2Fverify%3Fredirect_url%3D%2Fclients%2F667b8e21b2eada8df4e78759%3Ftab%3DPayment&title=Omnipractice%20ehr&referrer=&muid=47dc1c17-5899-4985-86bc-ed9c84892c60724fd7&sid=ced2327c-ec20-41c3-b99d-764a0069a52d73b2d2&version=6&preview=false" })
// myframe.locator("input.__PrivateStripeElement-input").first().fill("4242424242424242");
// myframe.locator("input.__PrivateStripeElement-input").nth(1).fill("05 /30");
// myframe.locator("input.__PrivateStripeElement-input").nth(2).fill("343");

// // await page.pause();

// //   await page.getByLabel('Name on invoices').click();
// //   await page.getByLabel('Name on invoices').fill('Owner Team');
// //   await page.getByLabel('Email Id to send Invoices').click();
// //   await page.getByLabel('Email Id to send Invoices').fill('testemails@gmail.com');
// //   await page.getByLabel('Address').click();
// //   await page.getByLabel('Address').fill('New Jersy city ');
// //   await page.getByLabel('Street').click();
// //   await page.getByLabel('Street').fill('Main city side road');
// //   await page.getByLabel('State').click();
// //   await page.getByRole('combobox', { name: 'State' }).fill('Lou');
// //   await page.getByText('Louisiana').click();
// //   await page.getByLabel('City').click();
// //   await page.getByRole('combobox', { name: 'City' }).fill('Ken');
// //   await page.getByText('Kenner').click();
// //   await page.getByLabel('Zipcode').click();
// //   await page.getByLabel('Zipcode').fill('5612012');
// //   await page.getByLabel('', { exact: true }).first().check();
// //   await page.getByPlaceholder('Enter coupon code').click();
// //   await page.getByPlaceholder('Enter coupon code').fill('LIVE');
// //   await page.getByRole('button', { name: 'Apply' }).nth(1).click();
// //   await page .waitForTimeout(6000);
// //   await page.getByRole('button', { name: 'Subscribe to Ehr Plus Plan' }).nth(1).click();
// //   await page .waitForTimeout(7000);
// //   await page.getByRole('heading', { name: 'Update' }).first().click();
// //   await page.getByRole('button', { name: 'Add new card' }).nth(1).click();

// //   // await page.frameLocator('iframe[name="__privateStripeFrame54811"]').getByPlaceholder('Card number').click();
// //   // await page.frameLocator('iframe[name="__privateStripeFrame54811"]').getByPlaceholder('Card number').click();
// //   // await page.frameLocator('iframe[name="__privateStripeFrame54811"]').getByPlaceholder('Card number').fill('4000056655665556');
// //   // await page.frameLocator('iframe[name="__privateStripeFrame54812"]').getByPlaceholder('Expiry date (MM/YY)').click();
// //   // await page.frameLocator('iframe[name="__privateStripeFrame54812"]').getByPlaceholder('Expiry date (MM/YY)').fill('08 / 31');
// //   // await page.frameLocator('iframe[name="__privateStripeFrame54813"]').getByPlaceholder('CVV').click();
// //   // await page.frameLocator('iframe[name="__privateStripeFrame54813"]').getByPlaceholder('CVV').fill('2545');
// //   await page.getByRole('button', { name: 'Add card' }).nth(1).click();
// //   await page .waitForTimeout(3000);
// //   await page.getByText('Make Primary').click();
// //   await page .waitForTimeout(3000);
// //   await page.getByRole('img', { name: 'cross icon' }).click();
// //   await page .waitForTimeout(3000);
// //   await page.getByRole('heading', { name: 'Update' }).nth(1).click();
// //   await page.getByRole('button', { name: 'cancel' }).nth(1).click();
// //   await page.getByRole('heading', { name: 'Update' }).nth(2).click();
// //   await page.getByLabel('Make default across practice').check();
// //   await page .waitForTimeout(3000);
// //   await page.getByLabel('Address').click();
// //   await page.getByLabel('Address').fill('2nd Stage nagarabahvi road bangalore');
// //   await page.getByRole('button', { name: 'update' }).nth(1).click();
// //   await page .waitForTimeout(3000);
// //   await page.getByRole('heading', { name: 'Manage members' }).click();
// //   await page.getByRole('img', { name: 'cross icon' }).click();
// //   await page .waitForTimeout(3000);