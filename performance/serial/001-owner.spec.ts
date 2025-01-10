import { test, type Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { generatePasswordlessLoginLink } from '../../helpers/api';
import { createNewEmail } from '../../helpers/mailsurp';
import { IEmail, readEmails, setEmails } from '../../localemails.js/emails';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;
test.setTimeout(1200000);

// Directory to store logs
const logsDir = path.resolve(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// File paths for logs
const generalLogsFile = path.join(logsDir, 'general-logs.txt');
const responseLogsFile = path.join(logsDir, 'response-logs.txt');

// Function to append logs to a file
function saveLog(filePath: string, actionName: string, message: string) {
    const logMessage = `[${new Date().toISOString()}] [${actionName}] ${message}\n`;
    fs.appendFileSync(filePath, logMessage);
}

// Utility function to measure and validate action time
async function measureActionTime(
    actionCallback: () => Promise<void>,
    actionName: string,
    rolePrefix = "",
    thresholdInMilliseconds = 1500
) {
    const startTime = performance.now();
    await actionCallback();
    const endTime = performance.now();

    const loadTimeInMilliseconds = endTime - startTime;
    const loadTimeInSeconds = loadTimeInMilliseconds / 1000;

    const logMessage = `${rolePrefix}Time for '${actionName}': ${loadTimeInSeconds.toFixed(2)} seconds`;
    saveLog(responseLogsFile, actionName, logMessage);
    console.log(logMessage);

    if (loadTimeInMilliseconds > thresholdInMilliseconds) {
        const warningMessage = `${rolePrefix}WARNING: '${actionName}' took longer than ${thresholdInMilliseconds / 1000} seconds (${loadTimeInSeconds.toFixed(2)} seconds)`;
        saveLog(responseLogsFile, actionName, warningMessage);
        console.warn(warningMessage);
    }
}

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    // Capture console events and save them in the general logs
    page.on('console', (msg) => {
        saveLog(generalLogsFile, 'Console Event', msg.text());
    });
});

test.afterAll(async () => {
    await page.close();
});

// Tests for Owner Role
test.describe('All OwnerRole Test case', () => {
    test('Owner login and onboarding', async ({ request }) => {
        const inbox = await createNewEmail();
        const rolePrefix = "Owner Role";

        await measureActionTime(async () => {
            const data = await generatePasswordlessLoginLink({
                email: inbox!,
                request: request,
            });
            await page.goto(data!);
      
    // Onboarding Flows for Owner
    await page.getByPlaceholder('Enter first name').click();
    await page.getByPlaceholder('Enter first name').fill('Owner ');
    await page.waitForLoadState('load');
    }, "Owner role Navigate to login page", rolePrefix);
    await page.getByPlaceholder('Enter last name').click();
    await page.getByPlaceholder('Enter last name').fill('Team');
    await page.getByPlaceholder('Enter phone').click();
    await page.getByPlaceholder('Enter phone').fill('(846) 534-65833');

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Continue' }).nth(1).click();

      await page.getByPlaceholder('Enter Group Practice name').click();
    }, "Click Continue button", rolePrefix);
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

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click After filling practice details Next button", rolePrefix);

    await page.getByRole('button', { name: 'Add new' }).nth(1).click();
    await page.getByLabel('Office name').click();
    await page.getByLabel('Office name').fill('KANTIME HEALTHCARE');
    await page.getByLabel('Address').click();
    await page.getByLabel('Address').fill('New area City');
    await page.getByLabel('State').click();
    await page.getByRole('combobox', { name: 'State' }).fill('New york');
    await page.getByLabel('City').click();
    await page.getByRole('combobox', { name: 'City' }).fill('Fre');
    await page.getByText('Freeport').click();
    await page.getByPlaceholder('Zip code').click();
    await page.getByPlaceholder('Zip code').fill('56192');
    await page.getByLabel('Make default location').check();
    await page.getByRole('button', { name: 'Add location' }).nth(1).click();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click Add New Locations Next button", rolePrefix);

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

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click Add New Services Next button", rolePrefix);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click Invite Role Next button", rolePrefix);

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

  });
  test('Invite Team member', async () => {
    const rolePrefix = "Owner Role";
    // Measure action for navigating to Settings
    await measureActionTime(async () => {
      await page.locator('div').filter({ hasText: /^Settings$/ }).click();
    }, "Navigate to Settings", rolePrefix);


    //Clinican Settings Flows
    // Measure action for Clinician settings flow
    await measureActionTime(async () => {
      await page.getByText('Clinician settings').click();
    }, "Click Clinician setting", rolePrefix);

    // Invite team 100 Therapist , 10 Supervisor, 5 Admins.

    //   Therapist 1
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist1", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);

    //  Therapist 2

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist2", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);


    // Therapist 3
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist3", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);

    // Therapist 4
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist4", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);

    // Therapist 5
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);


    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist5", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);

    // Therapist 6

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);
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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist6", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);
    // Therapist 7

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist7", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);

    // Therapist 8
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist8", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);


    // Therapist 9
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist9", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);


    //  Therapist 10
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist10", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 11
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist11", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);


    // Therapist 12
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist12", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 13
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist13", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 14
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist14", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 15
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist15", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);


    // Therapist 16
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist16", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 17
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist17", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 18
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist18", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);


    // Therapist 19
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist19", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 20
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist20", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 21

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('21');
    await page.getByLabel('Email*').click();

    //
    const Large20 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large20!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist21: Large20! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist21", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 22

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('22');
    await page.getByLabel('Email*').click();

    //
    const Large21 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large21!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist22: Large21! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist22", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 23

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('23');
    await page.getByLabel('Email*').click();

    //
    const Large22 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large22!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist23: Large22! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist23", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 24

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('24');
    await page.getByLabel('Email*').click();

    //
    const Large23 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large23!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist24: Large23! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist24", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 25

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('25');
    await page.getByLabel('Email*').click();

    //
    const Large24 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large24!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist25: Large24! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist25", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 26

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('26');
    await page.getByLabel('Email*').click();

    //
    const Large25 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large25!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist26: Large25! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist26", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 27

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('27');
    await page.getByLabel('Email*').click();

    //
    const Large26 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large26!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist27: Large26! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist27", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 28 

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('28');
    await page.getByLabel('Email*').click();

    //
    const Large27 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large27!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist28: Large27! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist28", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);


    // Therapist 29

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('29');
    await page.getByLabel('Email*').click();

    //
    const Large28 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large28!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist29: Large28! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist29", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 30 

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('30');
    await page.getByLabel('Email*').click();

    //
    const Large29 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large29!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist30: Large29! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist30", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);


    // Therapist 31

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('31');
    await page.getByLabel('Email*').click();

    //
    const Large30 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large30!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist31: Large30! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist31", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 32

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('32');
    await page.getByLabel('Email*').click();

    //
    const Large31 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large31!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist32: Large31! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist32", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 33

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('33');
    await page.getByLabel('Email*').click();

    //
    const Large32 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large32!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist33: Large32! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist33", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);


    // Therapist 34

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('34');
    await page.getByLabel('Email*').click();

    //
    const Large33 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large33!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist34: Large33! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist34", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 35

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('35');
    await page.getByLabel('Email*').click();

    //
    const Large34 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large34!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist35: Large34! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist35", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 36

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('36');
    await page.getByLabel('Email*').click();

    //
    const Large35 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large35!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist36: Large35! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist36", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);


    // Therapist 37

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('37');
    await page.getByLabel('Email*').click();

    //
    const Large36 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large36!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist37: Large36! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist37", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 38

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('38');
    await page.getByLabel('Email*').click();

    //
    const Large37 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large37!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist38: Large37! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist38", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 39

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('39');
    await page.getByLabel('Email*').click();

    //
    const Large38 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large38!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist39: Large38! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist39", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 40

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('40');
    await page.getByLabel('Email*').click();

    //
    const Large39 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large39!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist40: Large39! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist40", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);


    // Therapist 41 

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('41');
    await page.getByLabel('Email*').click();

    //
    const Large40 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large40!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist41: Large40! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist41", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);


    // Therapist 42

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('42');
    await page.getByLabel('Email*').click();

    //
    const Large41 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large41!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist42: Large41! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist42", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 43

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('43');
    await page.getByLabel('Email*').click();

    //
    const Large42 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large42!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist43: Large42! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist43", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 44

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('44');
    await page.getByLabel('Email*').click();

    //
    const Large43 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large43!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist44: Large43! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist44", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 45

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('45');
    await page.getByLabel('Email*').click();

    //
    const Large44 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large44!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist45: Large44! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist45", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 46

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('46');
    await page.getByLabel('Email*').click();

    //
    const Large45 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large45!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist46: Large45! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist46", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 47

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('47');
    await page.getByLabel('Email*').click();

    //
    const Large46 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large46!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist47: Large46! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist47", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);


    // Therapist 48

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('48');
    await page.getByLabel('Email*').click();

    //
    const Large47 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large47!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist48: Large47! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist48", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);


    // Therapist 49

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('49');
    await page.getByLabel('Email*').click();

    //
    const Large48 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large48!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist49: Large48! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist49", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Therapist 50

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Therapist');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('50');
    await page.getByLabel('Email*').click();

    //
    const Large49 = await createNewEmail();
    await page.getByLabel('Email*').fill(Large49!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, therapist50: Large49! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Therapist').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for therapist50", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);



    // Supervisor 1
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

   
    await page.getByLabel('Supervisor').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for supervisor1", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Supervsior 2 
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    
    await page.getByLabel('Supervisor').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for supervisor2", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Supervisor 3
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    
    await page.getByLabel('Supervisor').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for supervisor3", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Supervisor 4

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

   
    await page.getByLabel('Supervisor').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for supervisor4", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);


    // Supervisor 5
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    
    await page.getByLabel('Supervisor').check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for supervisor5", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);


    // Practice 1
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

    await page.getByLabel('First Name*').click();
    await page.getByLabel('First Name*').fill('Practice');
    await page.getByLabel('Last Name*').click();
    await page.getByLabel('Last Name*').fill('1');
    await page.getByLabel('Email*').click();
    //
    const Bookinginbox3 = await createNewEmail();
    await page.getByLabel('Email*').fill(Bookinginbox3!);
    myEmails = await readEmails();
    await setEmails({ ...myEmails, practice1: Bookinginbox3! });
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    await page.getByLabel('Practice manager', { exact: true }).check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for PracticeManager1", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);

    // Practice 2
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    
    await page.getByLabel('Practice manager', { exact: true }).check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for PracticeManager2", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Practice 3
    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

    
    await page.getByLabel('Practice manager', { exact: true }).check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for PracticeManager3", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(2000);

    // Practice 4 

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

   
    await page.getByLabel('Practice manager', { exact: true }).check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for PracticeManager4", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

    // Practice 5

    // Measure action for inviting team member
    await measureActionTime(async () => {
      await page.getByText('Team members').first().click();
      await page.getByRole('button', { name: 'Invite team member' }).nth(1).click();
    }, "Click invite team member page", rolePrefix);

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
    //console.log(myEmails);

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Next' }).nth(1).click();
    }, "Click on Next Button", rolePrefix);

   
    await page.getByLabel('Practice manager', { exact: true }).check();

    await measureActionTime(async () => {
      await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
    }, "Send invite for PracticeManager5", rolePrefix);
    await page.waitForTimeout(4000);
    await page.reload();
  await page.waitForTimeout(2000);

// Logout flows

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


