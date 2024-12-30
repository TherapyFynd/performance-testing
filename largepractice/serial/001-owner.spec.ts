import { test, type Page, } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../../helpers/api';
import { createNewEmail } from '../../helpers/mailsurp';
import { IEmail, readEmails, setEmails } from '../../localemails.js/emails';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe('All OwnerRole Test case ', () => {
// test.describe.configure({ mode: 'serial' });
test('Owner login and  onboarding ', async ({ request }) => {
const inbox = await createNewEmail();

  const data = await generatePasswordlessLoginLink({
    email: inbox!,
    request: request,
  });
  await page.goto(data!);

  // Onboarding Flows for Owner
 
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
  await page.waitForTimeout(2000);
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
  await page.getByRole('combobox', { name: 'State' }).fill('New york');
  // await page.getByText('New York').click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Fre');
  await page.getByText('Freeport').click();
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

  try {
    await page.locator('div').filter({ hasText: /^Settings$/ }).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
     await page.getByText('Settings').click();
  }
  //Clinican Settings Flows
  await page.getByText('Clinician settings').click();


  // Invite team 100 Therapist , 10 Supervisor, 5 Admins.

  //   Therapist 1
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
  await setEmails({ ...myEmails, therapist1: Bookinginbox1! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

//  Therapist 2
  await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('2');
  await page.getByLabel('Email*').click();

  //
  const Large1 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large1!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist2: Large1! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

  // Therapist 3
  await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('3');
  await page.getByLabel('Email*').click();

  //

  const Large2 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large2!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist3: Large2! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

  // Therapist 4
  await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('4');
  await page.getByLabel('Email*').click();

  //
  const Large3 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large3!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist4: Large3! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

  // Therapist 5
  await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('5');
  await page.getByLabel('Email*').click();

  //
  const Large4 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large4!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist5: Large4! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

  // Therapist 6

  await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('6');
  await page.getByLabel('Email*').click();

  //
  const Large5 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large5!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist6: Large5! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

  // Therapist 7

  await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('7');
  await page.getByLabel('Email*').click();

  //
  const Large6 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large6!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist7: Large6! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

  // Therapist 8
  await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('8');
  await page.getByLabel('Email*').click();

  //
  const Large7 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large7!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist8: Large7! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();


// Therapist 9
  await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('9');
  await page.getByLabel('Email*').click();

  //
  const Large8 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large8!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist9: Large8! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

//  Therapist 10
await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('10');
  await page.getByLabel('Email*').click();

  //
  const Large9 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large9!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist10: Large9! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

// Therapist 11
await page.getByText('Team members').first().click();
await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
await page.getByLabel('First Name*').click();
await page.getByLabel('First Name*').fill('Therapist');
await page.getByLabel('Last Name*').click();
await page.getByLabel('Last Name*').fill('11');
await page.getByLabel('Email*').click();

//
const Large10 = await createNewEmail();
await page.getByLabel('Email*').fill(Large10!);
myEmails = await readEmails();
await setEmails({ ...myEmails, therapist11: Large10! });
console.log(myEmails);

await page.getByRole('button', { name: 'Next' }).nth(1).click();
await page.getByLabel('Therapist').check();
await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
await page.waitForTimeout(4000);
await page.reload();


// Therapist 12
await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('12');
  await page.getByLabel('Email*').click();

  //
  const Large11 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large11!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist12: Large11! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

// Therapist 13
await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('13');
  await page.getByLabel('Email*').click();

  //
  const Large12 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large12!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist13: Large12! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

// Therapist 14
await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('14');
  await page.getByLabel('Email*').click();

  //
  const Large13 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large13!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist14: Large13! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

// Therapist 15
await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('15');
  await page.getByLabel('Email*').click();

  //
  const Large14 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large14!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist15: Large14! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();


// Therapist 16
await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('16');
  await page.getByLabel('Email*').click();

  //
  const Large15 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large15!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist16: Large15! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

// Therapist 17
await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('17');
  await page.getByLabel('Email*').click();

  //
  const Large16 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large16!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist17: Large16! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

// Therapist 18
await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('18');
  await page.getByLabel('Email*').click();

  //
  const Large17 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large17!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist18: Large17! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();


// Therapist 19
await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('19');
  await page.getByLabel('Email*').click();

  //
  const Large18 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large18!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist19: Large18! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

// Therapist 20
await page.getByText('Team members').first().click();
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Therapist');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('20');
  await page.getByLabel('Email*').click();

  //
  const Large19 = await createNewEmail();
  await page.getByLabel('Email*').fill(Large19!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, therapist20: Large19! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Therapist').check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

  // Supervisor 1
    await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Supervisor');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('1');
    await page.getByLabel('Email*').click();
    //
    const Super1 = await createNewEmail();
    await page.getByLabel('Email*').fill(Super1!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, supervisor1: Super1! });
    console.log(myEmails);
  
    await page.getByRole('button', { name: 'Next' }).nth(1).click();
    await page.getByLabel('Supervisor').check();
    await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    await page.waitForTimeout(4000);
    await page.reload();

// Supervsior 2 
await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
await page.getByLabel('First Name*').click();
await page.getByLabel('First Name*').fill('Supervisor');
await page.getByLabel('Last Name*').click();
await page.getByLabel('Last Name*').fill('2');
await page.getByLabel('Email*').click();
//
const Super2 = await createNewEmail();
await page.getByLabel('Email*').fill(Super2!);
myEmails = await readEmails();
await setEmails({ ...myEmails, supervisor2: Super2! });
console.log(myEmails);

await page.getByRole('button', { name: 'Next' }).nth(1).click();
await page.getByLabel('Supervisor').check();
await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
await page.waitForTimeout(4000);
await page.reload();

// Supervisor 3
await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
await page.getByLabel('First Name*').click();
await page.getByLabel('First Name*').fill('Supervisor');
await page.getByLabel('Last Name*').click();
await page.getByLabel('Last Name*').fill('3');
await page.getByLabel('Email*').click();
//
const Super3 = await createNewEmail();
await page.getByLabel('Email*').fill(Super3!);
myEmails = await readEmails();
await setEmails({ ...myEmails, supervisor3: Super3! });
console.log(myEmails);

await page.getByRole('button', { name: 'Next' }).nth(1).click();
await page.getByLabel('Supervisor').check();
await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
await page.waitForTimeout(4000);
await page.reload();

// Supervisor 4

await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
await page.getByLabel('First Name*').click();
await page.getByLabel('First Name*').fill('Supervisor');
await page.getByLabel('Last Name*').click();
await page.getByLabel('Last Name*').fill('4');
await page.getByLabel('Email*').click();
//
const Super4 = await createNewEmail();
await page.getByLabel('Email*').fill(Super4!);
myEmails = await readEmails();
await setEmails({ ...myEmails, supervisor4: Super4! });
console.log(myEmails);

await page.getByRole('button', { name: 'Next' }).nth(1).click();
await page.getByLabel('Supervisor').check();
await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
await page.waitForTimeout(4000);
await page.reload();


// Supervisor 5
await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
await page.getByLabel('First Name*').click();
await page.getByLabel('First Name*').fill('Supervisor');
await page.getByLabel('Last Name*').click();
await page.getByLabel('Last Name*').fill('5');
await page.getByLabel('Email*').click();
//
const Super5 = await createNewEmail();
await page.getByLabel('Email*').fill(Super5!);
myEmails = await readEmails();
await setEmails({ ...myEmails, supervisor5: Super5! });
console.log(myEmails);

await page.getByRole('button', { name: 'Next' }).nth(1).click();
await page.getByLabel('Supervisor').check();
await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
await page.waitForTimeout(4000);
await page.reload();
await page.waitForTimeout(2000);

// Practice 1
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Practice');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('1');
  await page.getByLabel('Email*').click();
  //
  const Bookinginbox3 = await createNewEmail();
  await page.getByLabel('Email*').fill(Bookinginbox3!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, practiceAdminEmail: Bookinginbox3! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Practice manager', { exact: true }).check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

  // Practice 2
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Practice');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('2');
  await page.getByLabel('Email*').click();
  //
  const Book1 = await createNewEmail();
  await page.getByLabel('Email*').fill(Book1!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, practice2: Book1! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Practice manager', { exact: true }).check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

  // Practice 3
  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Practice');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('3');
  await page.getByLabel('Email*').click();
  //
  const Book2 = await createNewEmail();
  await page.getByLabel('Email*').fill(Book2!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, practice3: Book2! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Practice manager', { exact: true }).check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

  // Practice 4 

  await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Practice');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('4');
  await page.getByLabel('Email*').click();
  //
  const Book3 = await createNewEmail();
  await page.getByLabel('Email*').fill(Book3!);
  myEmails = await readEmails();
  await setEmails({ ...myEmails, practice4: Book3! });
  console.log(myEmails);

  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Practice manager', { exact: true }).check();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.waitForTimeout(4000);
  await page.reload();

   // Practice 5

   await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
   await page.getByLabel('First Name*').click();
   await page.getByLabel('First Name*').fill('Practice');
   await page.getByLabel('Last Name*').click();
   await page.getByLabel('Last Name*').fill('5');
   await page.getByLabel('Email*').click();
   //
   const Book4 = await createNewEmail();
   await page.getByLabel('Email*').fill(Book4!);
   myEmails = await readEmails();
   await setEmails({ ...myEmails, practice5: Book4! });
   console.log(myEmails);
 
   await page.getByRole('button', { name: 'Next' }).nth(1).click();
   await page.getByLabel('Practice manager', { exact: true }).check();
   await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
   await page.waitForTimeout(4000);
   await page.reload();

  try {
    await page.getByRole('img').nth(1).click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
    await page.locator('.MuiAvatar-img').click();
  }  

  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.waitForTimeout(7000);
});
});


