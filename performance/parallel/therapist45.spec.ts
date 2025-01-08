import { test, type Page } from '@playwright/test';
import path from 'path';
import { generatePasswordlessLoginLink } from '../../helpers/api';
import { createNewEmail } from '../../helpers/mailsurp';
import { IEmail, readEmails, setEmails } from '../../localemails.js/emails';

import fs from 'fs';
// Ensure directory exists
const traceDir = path.resolve(__dirname, './playwright-report./trace/trace.json');
if (!fs.existsSync(traceDir)) {
  fs.mkdirSync(traceDir, { recursive: true }); // Create the directory if it doesn't exist
}

let page: Page;
test.setTimeout(900000)
// Utility function to measure and validate action time
async function measureActionTime(
  actionCallback: () => Promise<void>,
  actionName: string,
  rolePrefix: string = " ",
  thresholdInMilliseconds = 1500
) {
  const startTime = performance.now();
  await actionCallback();
  const endTime = performance.now();

  const loadTimeInMilliseconds = endTime - startTime; // Calculate load time in milliseconds
  const loadTimeInSeconds = loadTimeInMilliseconds / 1000; // Convert to seconds

  // Log action time including the role prefix
  console.log(`${rolePrefix}Time for '${actionName}': ${loadTimeInSeconds.toFixed(2)} seconds`);

  if (loadTimeInMilliseconds > thresholdInMilliseconds) {
    console.warn(
      `${rolePrefix}WARNING: '${actionName}' took longer than ${thresholdInMilliseconds / 1000} seconds (${loadTimeInSeconds.toFixed(2)} seconds)`
    );
  }
}
test.beforeAll(async ({ browser }) => {

  const myEmails: IEmail = await readEmails();
  // await page.tracing.start({ path: './performance/trace.json', screenshots: true });
  if (!myEmails?.therapist45?.length) {
    throw new Error(`Therapist Email not present returning...`);
  }
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});
test.describe('All Therapist45 Role Test case ', () => {
  test('Therapist45 login and  onboarding ', async ({ request }) => {
    const myEmails: IEmail = await readEmails();
    // Add "Owner Team" prefix to the log
    const rolePrefix = "Therapist 45";
    await measureActionTime(async () => {
      const data = await generatePasswordlessLoginLink({
        email: myEmails.therapist45!,
        request: request,
      });

      // goto page
      await page.goto(data!);

      //   // Onbaording flows for therapist
    await page.getByPlaceholder('Enter first name').click();
    await page.getByPlaceholder('Enter first name').fill('Therapist ');
    await page.waitForLoadState('load');
    }, "Therapist 45 Navigate to login page", rolePrefix);
    await page.getByPlaceholder('Enter last name').click();
    await page.getByPlaceholder('Enter last name').fill('45');
    await page.getByPlaceholder('Enter phone').click();
    await page.getByPlaceholder('Enter phone').fill('(846) 534-65836');

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Continue' }).nth(1).click();
    }, "Click Continue button", rolePrefix);

    await page.getByRole('button', { name: 'Add new' }).nth(1).click();
    await page.waitForTimeout(3000);
    await page.getByLabel('Office name').click();
    await page.getByLabel('Office name').fill('Therapist Clinican Settings Locations');
    await page.getByLabel('Address').click();
    await page.getByLabel('Address').fill('New area City');
    await page.waitForTimeout(1000);
    await page.getByLabel('State').click();
    await page.getByRole('combobox', { name: 'State' }).fill('Nev');
    await page.getByText('Nevada').click();
    await page.getByLabel('City').click();
    await page.getByRole('combobox', { name: 'City' }).fill('Re');
    await page.getByText('Reno').click();
    await page.getByPlaceholder('Zip code').click();
    await page.getByPlaceholder('Zip code').fill('56192');
    await page.getByLabel('Make default location').check();
    await page.getByRole('button', { name: 'Add location' }).nth(1).click();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click After Adding Add Location Next button", rolePrefix);

    await page.getByRole('button', { name: 'Add new' }).nth(1).click();
    await page.getByLabel('CPT Code').click();
    await page.getByRole('combobox', { name: 'CPT Code' }).fill('96133');
    await page.getByText('96133, Neuropsychological').click();
    await page.getByLabel('Fee *').click();
    await page.getByLabel('Fee *').fill('100');
    await page.getByLabel('Duration *').click();
    await page.getByLabel('Duration *').fill('10');

    await page.getByRole('button', { name: 'Add service' }).nth(1).click();
    await measureActionTime(async () => {
         await page.getByRole('button', { name: 'Next' }).nth(1).click();
       }, "Click After adding Add Service Next button", rolePrefix);
   
       await measureActionTime(async () => {
         await page.getByRole('checkbox').check();
         await page.waitForTimeout(2000);
         await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
       }, "Click Agree and Continue", rolePrefix);
   
       await measureActionTime(async () => {
         await page.getByRole('checkbox').check();
         await page.waitForTimeout(2000);
         await page.getByRole('button', { name: 'Agree & Continue' }).nth(1).click();
       }, "Click Agree and Continue", rolePrefix);
       await page.waitForTimeout(2000);
   
       await measureActionTime(async () => {
   
         await page.locator('div').filter({ hasText: /^Settings$/ }).click();
       }, "Navigate to Settings", rolePrefix);
   
       // Measure action for Clinician settings flow
       await measureActionTime(async () => {
         await page.getByText('Clinician settings').click();
       }, "Click Clinician setting", rolePrefix);

    await page.getByPlaceholder('Enter first name').click();
    await page.getByPlaceholder('Enter first name').fill('Therapist');
    await page.getByPlaceholder('Enter last name').click();
    await page.getByPlaceholder('Enter last name').fill('1');
    await page.getByLabel('Address Line').click();
    await page.getByLabel('Address Line').fill('Name');
    await measureActionTime(async () => {
          await page.getByRole('button', { name: 'Save' }).nth(1).click();
        }, "Save Clinican setting Info", rolePrefix);
    
        await measureActionTime(async () => {
          await page.getByRole('tab', { name: 'Clinical' }).click();
        }, "Swtich tab Clinical", rolePrefix);

    await page.getByLabel('License Type*').click();
    await page.getByRole('combobox', { name: 'License Type*' }).fill('ALC');
    await page.getByRole('option', { name: 'ALC' }).click();
    await page.getByLabel('License State').click();
    await page.getByRole('combobox', { name: 'License State' }).fill('ca');
    await page.getByText('California').click();
    await page.getByLabel('License No.').click();
    await page.getByLabel('License No.').press('CapsLock');
    await page.getByLabel('License No.').fill('QEY355');
     await measureActionTime(async () => {
          await page.getByRole('button', { name: 'Save' }).nth(1).click();
        }, "Save Clinican Info", rolePrefix);
    
        await measureActionTime(async () => {
          await page.getByRole('tab', { name: 'Locations' }).click();
        }, "Swtich tab Add Location", rolePrefix);

    await page.getByRole('button', { name: 'Add new' }).nth(1).click();
    await page.getByLabel('Office name').click();
    await page.getByLabel('Office name').fill('Therapist 1 Office Locations');
    await page.getByLabel('Address').click();
    await page.getByLabel('Address').fill('New Address added here');
    await page.getByLabel('State').click();
    await page.getByRole('option', { name: 'Illinois' }).click();
    await page.getByLabel('City').click();
    await page.getByText('Aurora').click();
    await page.getByPlaceholder('Zip code').click();
    await page.getByPlaceholder('Zip code').fill('8973');
    await page.getByRole('button', { name: 'Add location' }).nth(1).click();

    //   Privacy Policy
    await page.getByText('Website Privacy Policy').click();
    await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();
    await page.getByText('Terms & Conditions').click();
    await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click();

    // Create Clients
    await page.getByRole('button', { name: 'addIcon Create' }).nth(1).click();
    await measureActionTime(async () => {
      await page.getByRole('menuitem', { name: 'Create client' }).click();
    }, "Create Client pop page", rolePrefix);
    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('Client');
    await page.getByLabel('Email*').click();
    //
    const invitesinbox2 = await createNewEmail();
    await page.getByLabel('Email*').fill(invitesinbox2!);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Continue' }).nth(1).click();

      await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
    }, "Create Client", rolePrefix);
    await page.waitForTimeout(2000);

    // Calendar Create Appoinments 24 Appoinments
    await page.getByText('Calendar').first().click();
    await page.getByRole('button', { name: 'Month' }).click();
    await page.getByRole('button', { name: 'Back' }).click();
    await page.getByRole('button', { name: 'Back' }).click();
    await page.getByRole('button', { name: 'Back' }).click();
    await page.getByRole('button', { name: 'Back' }).click();
    await page.waitForTimeout(2000);

    // Appoinments 1
    await measureActionTime(async () => {
      await page.getByRole('cell', { name: '02' }).first().click();
    }, "02 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinments 2
    await measureActionTime(async () => {
      await page.getByRole('cell', { name: '04' }).first().click();
    }, "04 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinments 3
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^06$/ }).click();
    }, " 06 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinments 4
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^08$/ }).click();
    }, "08 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinments 5
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^10$/ }).click();
    }, "10 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinments 6
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^13$/ }).click();
    }, "13 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByRole('option', { name: 'Therapist (T1)' }).click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinments 7
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^14$/ }).click();
    }, "14 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinments 8
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^17$/ }).click();
    }, "17 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinments 9
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^20$/ }).click();
    }, " 20 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinments 10
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^21$/ }).click();
    }, " 21st Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinments 11
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^22$/ }).click();
    }, " 22nd Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Recurring Appointment').check();
    await page.getByLabel('Span').click();
    await page.getByRole('option', { name: 'days' }).click();
    await page.getByLabel('After').click();
    await page.getByLabel('After').fill('8');
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Logout 
    try {
      await page.getByRole('img').nth(1).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
      await page.locator('.MuiAvatar-img').click();
    }

    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.waitForTimeout(5000);
    //   await page.tracing.stop();

    // console.log('Performance metrics saved to trace.json');
  });
});

