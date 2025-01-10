
// import fs from 'fs'; // Add this line for File System operations
// import { test, type Page } from '@playwright/test';
// import path from 'path';
// import { generatePasswordlessLoginLink } from '../helpers/api';
// import { createNewEmail } from '../helpers/mailsurp';
// import { IEmail, readEmails, setEmails } from '../localemails.js/emails';
// // Ensure logs directory exists
// const logsDir = path.resolve(__dirname, './logs');
// if (!fs.existsSync(logsDir)) {
//     fs.mkdirSync(logsDir, { recursive: true }); // Create directory if it doesn't exist
// }

// let page: Page;
// test.setTimeout(900000);

// // Function to save logs
// function saveLog(role: string, actionName: string, message: string) {
//     const fileName = path.join(logsDir, `${role.replace(/\s+/g, '_')}-logs.txt`);
//     const logMessage = `[${new Date().toISOString()}] [${actionName}] ${message}\n`;
//     fs.appendFileSync(fileName, logMessage);
// }

// // Utility function to measure and validate action time
// async function measureActionTime(
//     actionCallback: () => Promise<void>,
//     actionName: string,
//     rolePrefix: string = " ",
//     thresholdInMilliseconds = 1500
// ) {
//     const startTime = performance.now();
//     await actionCallback();
//     const endTime = performance.now();

//     const loadTimeInMilliseconds = endTime - startTime;
//     const loadTimeInSeconds = loadTimeInMilliseconds / 1000;

//     const logMessage = `${rolePrefix}Time for '${actionName}': ${loadTimeInSeconds.toFixed(2)} seconds`;
//     console.log(logMessage);
//     saveLog(rolePrefix, actionName, logMessage);

//     if (loadTimeInMilliseconds > thresholdInMilliseconds) {
//         const warningMessage = `${rolePrefix}WARNING: '${actionName}' took longer than ${thresholdInMilliseconds / 1000} seconds (${loadTimeInSeconds.toFixed(2)} seconds)`;
//         console.warn(warningMessage);
//         saveLog(rolePrefix, actionName, warningMessage);
//     }
// }

// test.beforeAll(async ({ browser }) => {
//     const myEmails: IEmail = await readEmails();
//     if (!myEmails?.therapist1?.length) {
//         throw new Error('Therapist1 Email not present. Exiting...');
//     }
//     page = await browser.newPage();
// });

// test.afterAll(async () => {
//     await page.close();
// });

// test.describe('Therapist 1 Role Test Cases', () => {
//     test('Therapist 1 Login and Onboarding', async ({ request }) => {
//         const myEmails: IEmail = await readEmails();
//         const rolePrefix = "Therapist 1";

//         // Navigate to the login page
//         await measureActionTime(async () => {
//             const data = await generatePasswordlessLoginLink({
//                 email: myEmails.therapist1!,
//                 request: request,
//             });
//             await page.goto(data!);
        
//         // Onbaording flows for therapist
//       await page.getByPlaceholder('Enter first name').click();
//       await page.getByPlaceholder('Enter first name').fill('Therapist ');
//       await page.waitForLoadState('load');
//     }, "Therapist 1 Navigate to login page", rolePrefix);

//     await page.getByPlaceholder('Enter last name').click();
//     await page.getByPlaceholder('Enter last name').fill('1');
//     await page.getByPlaceholder('Enter phone').click();
//     await page.getByPlaceholder('Enter phone').fill('(846) 534-65836');

//     await measureActionTime(async () => {
//       await page.getByRole('button', { name: 'Continue' }).nth(1).click();
//     }, "Click Continue button", rolePrefix);
// });
// });