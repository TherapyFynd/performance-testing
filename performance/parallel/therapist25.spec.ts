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

  if (!myEmails?.therapist25?.length) {
    throw new Error(`Therapist Email not present returning...`);
  }
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});


test.describe('All Therapist25 Role Test case ', () => {
  // test.describe.configure({ mode: 'parallel' });
  test('Therapist25 login and  onboarding ', async ({ request }) => {
    const myEmails: IEmail = await readEmails();
    // Add "Owner Team" prefix to the log
    const rolePrefix = "Therapist 25";
    await measureActionTime(async () => {
      const data = await generatePasswordlessLoginLink({
        email: myEmails.therapist25!,
        request: request,
      });

      // goto page
      await page.goto(data!);
      //   // Onbaording flows for therapist
    await page.getByPlaceholder('Enter first name').click();
    await page.getByPlaceholder('Enter first name').fill('Therapist ');
    await page.waitForLoadState('load');
    }, "Therapist 25 Navigate to login page", rolePrefix);
    await page.getByPlaceholder('Enter last name').click();
    await page.getByPlaceholder('Enter last name').fill('25');
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

    // Calendar Create Appoinments
    await page.getByText('Calendar').first().click();
    await page.getByRole('button', { name: 'Month' }).click();
    await page.getByRole('button', { name: 'Back' }).click();
    await page.getByRole('button', { name: 'Back' }).click();
    await page.getByRole('button', { name: 'Back' }).click();
    await page.getByRole('button', { name: 'Back' }).click();

    // Appoinments 1
    await measureActionTime(async () => {
      await page.getByRole('cell', { name: '01' }).first().click();
    }, "01 First Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinment 2
    await measureActionTime(async () => {
      await page.getByRole('cell', { name: '03' }).first().click();
    }, "03 First Appoinments", rolePrefix);
    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinment 3
    await measureActionTime(async () => {
      await page.getByRole('cell', { name: '05' }).first().click();
    }, "05 Appoinment", rolePrefix);
    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinment 4
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^07$/ }).click();
    }, "07 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinment 5
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^09$/ }).click();
    }, "09 Appoinment", rolePrefix);

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
      await page.locator('div').filter({ hasText: /^11$/ }).click();
    }, "11 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByRole('option', { name: 'Therapist (T1)' }).click();
    await page.getByLabel('Select location *').click();
    await page.getByText('KANTIME HEALTHCARE').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinment 7
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^13$/ }).click();
    }, "13 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinment 8 
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^15$/ }).click();
    }, "15 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinment 9
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^16$/ }).click();
    }, " 16 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinment 10
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^18$/ }).click();
    }, "18 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinment 11
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^19$/ }).click();
    }, "19 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Recurring Appointment').check();
    await page.getByLabel('Span').click();
    await page.getByRole('option', { name: 'days' }).click();
    await page.getByLabel('After').click();
    await page.getByLabel('After').fill('5');
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    // Appoinment 12
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^24$/ }).click();
    }, "24 Appoinment", rolePrefix);

    await page.getByRole('button', { name: 'Skip for now' }).nth(1).click();
    await page.getByLabel('Select client profile*').click();
    await page.getByText('Therapist (T1)').click();
    await page.getByLabel('Recurring Appointment').check();
    await page.getByLabel('After').click();
    await page.getByLabel('After').fill('8');
    await page.getByLabel('Span').click();
    await page.getByRole('option', { name: 'days' }).click();
    await page.getByLabel('Select location *').click();
    await page.getByRole('option', { name: 'Therapist 1 Office Locations' }).click();
    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
    }, "Create Appoinment", rolePrefix);
    await page.waitForTimeout(2000);

    try {
      await page.getByRole('img').nth(1).click();
    } catch (error) {
      console.log('Failed to find first locator, trying second locator');
      await page.locator('.MuiAvatar-img').click();
    }

    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.waitForTimeout(5000);
  });
});

