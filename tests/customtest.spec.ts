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

test('owner login and  onboarding ', async ({request}) => {
        const mailslurp = new MailSlurp({ apiKey: "1a568f348336d7850c0361f7c6f21ccb9f8f6af3dd7fb535bd33ed1db1a4cc85" });
        const inbox = await mailslurp.inboxController.createInbox({});
        // console.log(inbox);
        // console.log(inbox.emailAddress);
        const data = await request.post(
            'https://leafs-ehr-nest-stage-nmvorvf7ga-as.a.run.app/test/get-passwordless-login-link-by-email',
            // 'https://ehr-api.joinleafs.com/test/get-passwordless-login-link-by-email',
            {
              headers: {
                'Content-Type': 'application/json',
                'x-test-key': `omnipractice_random_a83500678d`,
              },
              data: { email: inbox.emailAddress, isTestMode: true },
            },
          ); 
        // console.log(data);
        const c = await data.text();
        console.log(c)
        // console.log(data.json());
        
    
    // goto page
      await page.goto(c);
    
    // Onboarding Flows for Owner
    
    // DP
      await page.locator('#root > div._layout_10ldc_1 > div > div._onboardProfile_bqqcv_1 > div > div > div > div._imagePicker_bqqcv_35 > input[type=file]').setInputFiles("C:/Users/Rajesh/Downloads/therapist.jpg");
      await page.getByRole('button', { name: 'Done' }).nth(1).click();
      // Onboarding Flows
      await page.getByPlaceholder('Enter first name').click();
      await page.getByPlaceholder('Enter first name').fill('Owner');
      await page.getByPlaceholder('Enter last name').click();
      await page.getByPlaceholder('Enter last name').fill('Team');
      await page.getByRole('button', { name: 'Continue' }).nth(1).click();
      await page.getByPlaceholder('Enter your practice name').click();
      await page.getByPlaceholder('Enter your practice name').fill('Simple Practice Hospital');
      await page.getByLabel('Address Line').click();
      await page.getByLabel('Address Line').fill('New York City');
      await page.getByLabel('State').click();
      await page.getByRole('combobox', { name: 'State' }).fill('cal');
      await page.getByRole('option', { name: 'California' }).click();
      await page.getByLabel('City').click();
      await page.getByRole('combobox', { name: 'City' }).fill('Azu');
      await page.getByRole('option', { name: 'Azusa' }).click();
      await page.getByPlaceholder('Zip code').click();
      await page.getByPlaceholder('Zip code').fill('561202');
      await page.getByPlaceholder('Enter your practice name').click();
      await page.getByPlaceholder('Enter your practice name').fill('Simple Practice Hospital');
      await page.getByLabel('Address Line').click();
      await page.getByLabel('Address Line').fill('New York City');
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
      await page.getByRole('heading', { name: 'Skip' }).click();
      await page.getByRole('heading', { name: 'Back' }).click();
      await page.getByRole('button', { name: 'Add new' }).nth(1).click();
      await page.getByLabel('Office name').click();
      await page.getByLabel('Office name').fill('KanTime Healthcare System');
      await page.getByLabel('Address').click();
      await page.getByLabel('Address').fill('New Jersy main road #3');
      await page.getByLabel('State').click();
      await page.getByRole('combobox', { name: 'State' }).fill('New');
      await page.getByText('New York', { exact: true }).click();
      await page.getByLabel('City').click();
      await page.getByRole('combobox', { name: 'City' }).fill('Mount');
      await page.getByText('Mount Vernon').click();
      await page.getByPlaceholder('Zip code').click();
      await page.getByPlaceholder('Zip code').fill('561202');
      await page.getByLabel('Make default location').check();
      await page.getByRole('button', { name: 'Add location' }).nth(1).click();
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
      await page.getByRole('button', { name: 'Add new' }).nth(1).click();
      await page.getByLabel('CPT Code').click();
      await page.getByRole('combobox', { name: 'CPT Code' }).fill('90832');
      await page.getByRole('option', { name: '90832, Psychotherapy, 30' }).click();
      await page.getByLabel('Fee *').click();
      await page.getByLabel('Fee *').fill('50');
      await page.getByLabel('Duration *').click();
      await page.getByLabel('Duration *').fill('10');
      await page.getByLabel('Make default service').check();
      await page.getByRole('button', { name: 'Add service' }).nth(1).click();
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
      await page.getByLabel('Enter email').click();
      // 
      const teaminbox = await mailslurp.inboxController.createInbox({});
      // console.log(teaminbox.emailAddress);
      await page.getByLabel('Enter email').fill(teaminbox.emailAddress);
      // await page.getByLabel('Enter email').fill('mn+5@gmail.com');
      await page.getByLabel('Role').click();
      await page.getByRole('option', { name: 'Therapist' }).click();
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
      await page.waitForTimeout(2000);
    //   await page.getByLabel('Enter email').click();
    // // 
    // const team1inbox = await mailslurp.inboxController.createInbox({});
    // await page.getByLabel('Enter email').fill(team1inbox.emailAddress);
    //   // await page.getByLabel('Enter email').fill('mn++5@gmail.com');
    //   await page.getByLabel('Role').click();
    //   await page.getByRole('option', { name: 'Supervisor' }).click();
    //   await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    //   await page.waitForTimeout(2000);
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
      await page.getByRole('checkbox').check();
      await page.waitForTimeout(2000);
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
      await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
      await page.waitForTimeout(1000);
      await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
      await page.waitForTimeout(4000);
});

test('Settings Flows', async () => {
    await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
    await page.getByText('Practice settings').click();
    await page.getByLabel('Practice Name').click();
    await page.getByLabel('Practice Name').fill('Mind Simple Hospital');
    await page.getByLabel('About').click();
    await page.getByLabel('About').fill('This Nice company');
    await page.getByPlaceholder('Enter phone').click();
    await page.getByPlaceholder('Enter phone').fill('(975) 734-53565');
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();
    //Clinican Settings Flows
    await page.getByText('Clinician settings').click();
    await page.getByPlaceholder('Enter first name').click();
    await page.getByPlaceholder('Enter first name').fill('Owner');
    await page.getByPlaceholder('Enter last name').click();
    await page.getByPlaceholder('Enter last name').fill('Team');
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
    await page.getByRole('combobox', { name: 'City' }).fill('Freeport');
    await page.getByText('Freeport').click();
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
    //Booking widget flows
    await page.getByText('Booking widget').click();
    await page.getByRole('button', { name: 'Generate link' }).nth(1).click();
    const page1Promise = page.waitForEvent('popup');
    await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._bookingWidgetWrapper_4jerd_1 > div._copyLinkContainer_4jerd_19 > div._link_4jerd_28 > p').click();
    const page1 = await page1Promise;
    await page1.locator('div').filter({ hasText: /^Owner TeamSelect$/ }).getByRole('button').nth(1).click();
    await page1.locator('div').filter({ hasText: /^Psychotherapy, 45 mins- 45 mins$/ }).nth(1).click();
    await page1.locator('#root > div._layout_10ldc_1 > div > div._bookingWidgetWrapper_tlkra_1 > div._bookingWidgetContainer_tlkra_21 > div._bookingContent_tlkra_44 > div:nth-child(2) > div > div._dateTime_142fu_33 > div > div:nth-child(2) > div > div._timeSlotsWrapper_vyf9q_11 div:first-child').click();
    // await page1.getByLabel('Next month').click();
    await page1.getByPlaceholder('Enter first name').click();
    await page1.getByPlaceholder('Enter first name').fill('James');
    await page1.getByPlaceholder('Enter last name').click();
    await page1.getByPlaceholder('Enter last name').fill('Willy');
    await page1.getByPlaceholder('Enter email').click();
    // 
    const Bookinginbox = await mailslurp.inboxController.createInbox({});
    await page1.getByPlaceholder('Enter email').fill(Bookinginbox.emailAddress);
    // await page1.getByPlaceholder('Enter email').fill('xyz+5@gmail.com');
    await page1.getByPlaceholder('Enter phone').click();
    await page1.getByPlaceholder('Enter phone').fill('(893) 553-00024');
    await page1.getByRole('button', { name: 'Request appointment' }).nth(1).click();
    await page1.waitForTimeout(1000);
    await page1.close();
    // await page.reload();
    // await page.getByText('Requests').click();
    // await page.getByRole('tab', { name: 'Requests' }).click();
    // await page.getByRole('button', { name: 'Accept' }).nth(1).click();
    // await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    // await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    // await page.waitForTimeout(6000);
    // await page.reload();
    await page.getByTestId('ArrowBackRoundedIcon').click();
    
    // Team Member Invite
    await page.getByText('Team members').first().click();
    await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    await page.getByLabel('Enter email').click();
    const team1inbox = await mailslurp.inboxController.createInbox({});
    await page.getByLabel('Enter email').fill(team1inbox.emailAddress);
  // await page.getByLabel('Enter email').fill('mn++5@gmail.com');
    await page.getByLabel('Role').click();
    await page.getByRole('option', { name: 'Supervisor' }).click();
    await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Done' }).nth(1).click();
    await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
    // Calender Day start
    await page.getByText('Calendar').nth(1).click();
    await page.getByLabel('Monday').check();
    await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._header_ml86x_4 > button > svg > path').click();
  
    // // Referal settings
    await page.getByText('Team members').nth(1).click();
    await page.getByRole('row', { name: 'Owner Team, ALC' }).getByRole('img').nth(1).click();
    await page.getByLabel('Select Specializations').click();
    await page.getByRole('combobox', { name: 'Select Specializations' }).fill('Abuse');
    await page.getByRole('option', { name: 'Abuse', exact: true }).click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.locator('div').filter({ hasText: /^Owner Team, ALC$/ }).getByRole('button').click();
    await page.getByRole('tab', { name: 'Accepted Insurance' }).click();
    await page.getByRole('row', { name: 'Owner Team, ALC' }).getByRole('img').nth(1).click();
    await page.getByLabel('Select accepted payment').click();
    await page.getByRole('combobox', { name: 'Select accepted payment' }).fill('Absolute');
    await page.getByText('ABSOLUTE TOTAL CARE-').click();
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.locator('div').filter({ hasText: /^Owner Team, ALC$/ }).getByRole('button').click();
    await page.getByRole('tab', { name: 'Email Imports' }).click();
    await page.getByRole('button', { name: 'Edit' }).nth(1).click();
    await page.goto('https://leafs-ehr-web-stage-nmvorvf7ga-as.a.run.app/settings/intake-team-members/edit/email-imports');
    await page.locator('._form_ekpvv_1 > .MuiButtonBase-root > .btn-filled-default').first().click();
    await page.locator('[id="\\:ra\\:"]').click();
    await page.locator('[id="\\:ra\\:"]').fill('testtherapy1@gmail.com');
    await page.locator('div:nth-child(2) > .MuiButtonBase-root > .btn-filled-default').click();
    await page.locator('[id="\\:rb\\:"]').click();
    await page.locator('[id="\\:rb\\:"]').fill('testpyhsco1@gmail.com');
    await page.locator('[id="\\:r7\\:"]').click();
    await page.locator('[id="\\:r7\\:"]').fill('nicewebsite1@gmail.com');
    await page.getByRole('button', { name: 'Save' }).nth(1).click();
    await page.locator('div').filter({ hasText: /^Mails to import$/ }).getByRole('button').click();
    await page.waitForTimeout(1000);
    await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();

});