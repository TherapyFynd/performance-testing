import { test, type Page } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { MailSlurp } from "mailslurp-client";
// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;
const mailslurp = new MailSlurp({ apiKey: "1a568f348336d7850c0361f7c6f21ccb9f8f6af3dd7fb535bd33ed1db1a4cc85" });
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test('therapist login and  onboarding ', async ({request}) => {
        const mailslurp = new MailSlurp({ apiKey: "1a568f348336d7850c0361f7c6f21ccb9f8f6af3dd7fb535bd33ed1db1a4cc85" });
        const inbox = await mailslurp.inboxController.createInbox({});
        // console.log(inbox);
        // console.log(inbox.emailAddress);
        const data = await request.post(
            'https://leafs-ehr-nest-stage-nmvorvf7ga-as.a.run.app/test/get-passwordless-login-link-by-email',
            {
            headers:{
             
                'Content-Type': 'application/json',
                'x-test-key': `omnipractice_random_a83500678d`,
              },
              data: { email: "850a3f8a-570d-49d5-bf92-4956e5aa2f20@mailslurp.net", isTestMode: true },
            },
          ); 
        // console.log(data);
        const c = await data.text();
          await page.goto(c);
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
  test('Settings Flows', async () => {
    await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();

  // // Cliniacan settings
  await page.getByText('Clinician settings').click();
  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('Therapist');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('1');
  await page.getByLabel('Address Line').click();
  await page.getByLabel('Address Line').fill('Name');
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
  await page.getByRole('combobox', { name: 'City' }).fill('Tro');
  await page.getByText('Troy').click();
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
  await page.getByLabel('Fee *').fill('50');
  await page.getByLabel('Duration *').click();
  await page.getByLabel('Duration *').fill('15');
  await page.getByLabel('Make default service').check();
  await page.getByRole('button', { name: 'Add service' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').click();
  
  


});