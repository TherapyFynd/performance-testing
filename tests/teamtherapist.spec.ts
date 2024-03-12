import { test, expect } from '@playwright/test';
import { MailSlurp } from "mailslurp-client";
test.describe.configure( {mode:'parallel',retries:0,timeout:2800000})
test('test', async ({ page,request }) => {
  const mailslurp = new MailSlurp({ apiKey: "3530d606b4ce0941991afe391ad3bc4b2008b06473b1ed274cf576a714845db7" });
    const inbox = await mailslurp.inboxController.createInbox({});
  const data = await request.post(

    'https://leafs-ehr-nest-stage-nmvorvf7ga-as.a.run.app/test/get-passwordless-login-link-by-email',
    {
      headers: {
        'Content-Type': 'application/json',
        'x-test-key': `omnipractice_random_a83500678d`,
      },
      data: { email: "67a63700-0dab-425e-8d7c-dd320990aab3@mailslurp.net", isTestMode: true },
    },
  ); 
// console.log(data);
const c = await data.text();
  await page.goto(c);

  // Onbaording flows for Supervisor
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

  // Settings tab
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

  // Associate Mangaments
  // await page.getByText('Associate management').click();
  // // await page.getByRole('button', { name: 'Remove' }).nth(1).click();
  // // await page.getByRole('button', { name: 'Remove' }).nth(1).click();
  // await page.getByRole('button', { name: 'Add Associate' }).nth(1).click();
  // await page.getByLabel('Select team member').click();
  // await page.getByText('Therapist 1').click();
  // await page.getByRole('button', { name: 'Add' }).nth(1).click();
  // await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();

  // Booking widget
  await page.getByText('Booking widget').click();
  // await page.getByRole('button', { name: 'Generate link' }).nth(1).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._bookingWidgetWrapper_4jerd_1 > div._link_zqbdd_1 > p').click();
  const page1 = await page1Promise;
  // await page1.locator('div').filter({ hasText: /^Owner TeamSelect$/ }).getByRole('button').nth(1).click();
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
  // await page1.getByPlaceholder('Enter email').fill('therapistsuperman+3@gmail.com');
  await page1.getByPlaceholder('Enter phone').click();
  await page1.getByPlaceholder('Enter phone').fill('(890) 553-00024');
  await page1.getByRole('button', { name: 'Request appointment' }).nth(1).click();
  await page1.waitForTimeout(2000);
  await page1.close();
  await page.getByTestId('ArrowBackRoundedIcon').click();
  await page.waitForTimeout(1000);

  // Calender tab
  // await page.getByText('Calendar').click();
  // // await page.locator('#root > div._layout_731gc_1 > div._content_731gc_7 > div > div > div._linkContainers_1rwfr_19 > div:nth-child(3) > div:nth-child(2) > p').click;
  // await page.getByLabel('Monday').check();
  // await page.locator('#root > div._layout_731gc_1 > div._content_731gc_7 > div > div._header_ml86x_4 > button > svg > path').click();

// All Forms tab
// All Forms create Forms
await page.locator('div').filter({ hasText: /^Documents$/ }).getByRole('img').click();
await page.getByRole('button', { name: 'Create new' }).nth(1).click();

// // Questionaries Form Code
await page.getByText('Questionnaire').click();
await page.getByPlaceholder('type here').click();
await page.getByPlaceholder('type here').fill('Therapist Automation Forms');
await page.getByRole('button', { name: 'Done' }).nth(1).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('Gender?');
await page.getByRole('button', { name: '1 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByRole('button', { name: 'Single choice', exact: true }).click();
await page.getByRole('option', { name: 'Short answer' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('Name of Client?');
await page.getByLabel('Mandatory').check();
await page.getByRole('button', { name: '2 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Long answer' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('NAme of Client and Tell Your Health Conditions?');
await page.getByRole('button', { name: '3 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Date' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('Client Date Of Birth?');
await page.getByLabel('Mandatory').uncheck();
await page.getByRole('button', { name: '4 Please enter a question' }).getByRole('button').nth(3).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'E-signature' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('Please Sign Your Sing?');
await page.getByLabel('Mandatory').check();
await page.getByRole('button', { name: 'Preview' }).nth(1).click();
await page.getByRole('button').first().click();
await page.getByRole('button', { name: 'Save' }).nth(1).click();

// Action in Forms
// await page.locator('#root > div._layout_731gc_1 > div._content_731gc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path').click();
// await page.getByRole('menuitem', { name: 'Send' }).click();
// await page.getByLabel('Select Clients').click();
// await page.getByRole('option', { name: 'Automation Forms' }).click();
// await page.getByRole('combobox', { name: 'Select Clients' }).click();
// await page.getByRole('button', { name: 'Send' }).nth(1).click();
// await page.reload();
// await page.waitForTimeout(1000);

await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path').click();
await page.getByRole('menuitem', { name: 'Preview' }).click();
await page.locator('.MuiButtonBase-root').first().click();

await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path').click();
await page.getByRole('menuitem', { name: 'Rename' }).click();
await page.getByPlaceholder('type here').clear();
await page.getByPlaceholder('type here').fill('Supervisor Automation Forms');
await page.reload();
await page.waitForTimeout(1000);
// await page.getByRole('button', { name: 'Rename' }).nth(1).click();

await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path').click();
await page.getByRole('menuitem', { name: 'Edit' }).click();
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.getByTestId('ArrowBackRoundedIcon').click();
await page.getByRole('button', { name: 'Create new' }).nth(1).click();
// // Consent Form
await page.getByText('Consent form', { exact: true }).click();
await page.getByPlaceholder('type here').click();
await page.getByPlaceholder('type here').fill('Therapist Consent Form');
await page.getByRole('button', { name: 'Done' }).nth(1).click();
await page.locator('pre').getByRole('paragraph').click();
await page.locator('pre div').first().fill('Here I am Writing Praragraph?');
// Add Pdf code
await page.locator('#root > div > div > div._formContainer_1srfm_1 > div > div._editor_1srfm_16 > input[type=file]').setInputFiles("C:/Users/Rajesh/Downloads/testpdf.pdf");
await page.getByLabel('Add Provider signature').check();
await page.getByRole('button', { name: 'Preview' }).nth(1).click();
await page.getByRole('button').click();
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.getByTestId('ArrowBackRoundedIcon').click();
// // Progress Note
await page.getByRole('button', { name: 'Create new' }).nth(1).click();
await page.getByText('Progress note', { exact: true }).click();
await page.getByPlaceholder('type here').click();
await page.getByPlaceholder('type here').fill('Therapist Automation Testing');
await page.getByRole('button', { name: 'Done' }).nth(1).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('what is Your Gender?');
await page.getByRole('button', { name: '1 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByRole('button', { name: 'Single choice', exact: true }).click();
await page.getByRole('option', { name: 'Short answer' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('Name of Client?');
await page.getByLabel('Mandatory').check();
await page.getByRole('button', { name: '2 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Long answer' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('Name of Client and Tell your Self?');
await page.getByRole('button', { name: '3 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Date' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('Client date of Brithday?');
await page.getByRole('button', { name: '4 Please enter a question' }).getByRole('button').nth(3).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Multiple choice' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('Client Symptoms?');
await page.getByRole('button', { name: '5 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByRole('button', { name: 'Multiple choice', exact: true }).click();
await page.getByRole('option', { name: 'CPT code' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('Client CPT code?');
await page.getByRole('button', { name: '6 Please enter a question CPT' }).getByRole('button').nth(3).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Diagnosis code' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('Client Diagnosis Code?');
await page.getByRole('button', { name: '7 Please enter a question' }).getByRole('button').nth(3).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'E-signature' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('Please Sign here?');
await page.getByRole('button', { name: 'Preview' }).nth(1).click();
await page.getByRole('button').first().click();
await page.getByRole('button', { name: 'Save' }).nth(1).click();
// await page.waitForTimeout(1000);
await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._formsList_faptv_1 > div._header_faptv_4 > div > div > svg > path').click();
// await page.getByTestId('ArrowBackRoundedIcon').click();
// // Treatment plan
await page.getByRole('button', { name: 'Create new' }).nth(1).click();
await page.getByText('Treatment plan', { exact: true }).click();
await page.getByPlaceholder('type here').click();
await page.getByPlaceholder('type here').fill('Therapist Treatement Plan');
await page.getByRole('button', { name: 'Done' }).nth(1).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('What is your Gender?');
await page.getByRole('button', { name: '1 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByRole('button', { name: 'Single choice', exact: true }).click();
await page.getByRole('option', { name: 'Short answer' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('What is your name?');
await page.getByLabel('Mandatory').check();
await page.getByRole('button', { name: '2 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Long answer' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('What is your Health Conditions?');
await page.getByRole('button', { name: '3 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Date' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('What is your Date of Birthday?');
await page.getByRole('button', { name: '4 Please enter a question' }).getByRole('button').nth(3).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Multiple choice' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('What is your Health Conditions?');
await page.getByLabel('Mandatory').uncheck();
await page.getByRole('button', { name: '5 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByRole('button', { name: 'Multiple choice', exact: true }).click();
await page.getByRole('option', { name: 'CPT code' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('What is your CPT code?');
await page.getByLabel('Mandatory').check();
await page.getByRole('button', { name: '6 Please enter a question CPT' }).getByRole('button').nth(3).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Diagnosis code' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('What is your Diagnosis code?');
await page.getByRole('button', { name: '7 Please enter a question' }).getByRole('button').nth(3).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'E-signature' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('What is your Sign?');
await page.getByRole('button', { name: 'Preview' }).nth(1).click();
await page.getByRole('button').first().click();
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.getByTestId('ArrowBackRoundedIcon').click();
// // Assessment form Code
await page.getByRole('button', { name: 'Create new' }).nth(1).click();
await page.getByText('Assesment').click();
await page.getByPlaceholder('type here').click();
await page.getByPlaceholder('type here').fill('Therapist Assesment Form');
await page.getByRole('button', { name: 'Done' }).nth(1).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('What is Your Gender?');
await page.getByRole('button', { name: '1 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByRole('button', { name: 'Single choice', exact: true }).click();
await page.getByRole('option', { name: 'Short answer' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('What is Your Name?');
await page.getByLabel('Mandatory').check();
await page.getByRole('button', { name: '2 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Long answer' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('What is Your Health Conditions?');
await page.getByRole('button', { name: '3 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Multiple choice' }).click();
await page.getByLabel('Mandatory').uncheck();
await page.getByRole('button', { name: '4 Please enter a question' }).getByRole('button').nth(2).click();
await page.getByRole('button', { name: 'Multiple choice', exact: true }).click();
await page.getByRole('option', { name: 'Date' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('What is Your Health Cerificate Date?');
await page.getByLabel('Mandatory').check();
await page.getByRole('button', { name: '5 Please enter a question' }).getByRole('button').nth(3).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'CPT code' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('What is Your CPT code?');
await page.getByRole('button', { name: '6 Please enter a question CPT' }).getByRole('button').nth(3).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'Diagnosis code' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('What is Your Diagosis code?');
await page.getByRole('button', { name: '7 Please enter a question' }).getByRole('button').nth(3).click();
await page.getByLabel('', { exact: true }).click();
await page.getByRole('option', { name: 'E-signature' }).click();
await page.getByPlaceholder('Please enter a question').click();
await page.getByPlaceholder('Please enter a question').fill('What is Your Sign Here?');
await page.getByRole('button', { name: 'Preview' }).nth(1).click();
await page.getByRole('button').first().click();
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.getByTestId('ArrowBackRoundedIcon').click();

// Intake Pacakge
  await page.getByRole('button', { name: 'My intake packet' }).nth(1).click();
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByRole('tab', { name: 'My Forms' }).click();
  await page.getByLabel('Select forms').click();
  await page.getByRole('combobox', { name: 'Select forms' }).fill('Therapist Automation Forms');
  await page.getByRole('option', { name: 'Therapist Automation Forms' }).click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(2000);

  await page.getByRole('tab', { name: 'Minor' }).click();
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByRole('tab', { name: 'My Forms' }).click();
  await page.getByLabel('Select forms').click();
  await page.getByRole('combobox', { name: 'Select forms' }).fill('Therapist Automation Forms');
  await page.getByRole('option', { name: 'Therapist Automation Forms' }).click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(2000);

  await page.getByRole('tab', { name: 'Couple' }).click();
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByRole('tab', { name: 'My Forms' }).click();
  await page.getByLabel('Select forms').click();
  await page.getByRole('combobox', { name: 'Select forms' }).fill('Therapist Automation Forms');
  await page.getByRole('option', { name: 'Therapist Automation Forms' }).click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.reload();
  await page.waitForTimeout(2000);
  await page.getByTestId('ArrowBackRoundedIcon').click();
  await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();

// Create Clients
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create client' }).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Rajesh');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Das');
  await page.getByLabel('Email*').click();
  // 
  const clientinbox = await mailslurp.inboxController.createInbox({});
  await page.getByLabel('Email*').fill(clientinbox.emailAddress);
  // await page.getByLabel('Email*').fill('createtherapist+6@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
  
  //   Minor client
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create client' }).click();
  await page.getByLabel('Minor').check();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Shiva');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Kumar');
  await page.getByLabel('Email*').click();
  // 
  const Minorinbox = await mailslurp.inboxController.createInbox({});
  await page.getByLabel('Email*').fill(Minorinbox.emailAddress);
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Venkatesh');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Prasad');
  await page.getByLabel('Email*').click();
  // 
  const Minor1inbox = await mailslurp.inboxController.createInbox({});
  await page.getByLabel('Email*').fill(Minor1inbox.emailAddress);
  // await page.getByLabel('Email*').fill('a---1@gmail.com');
  await page.getByLabel('Guardian relationship to').click();
  await page.getByLabel('Guardian relationship to').fill('Brother');
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('button', { name: 'Create Client' }).nth(1).click();

// //   Create Couple Account
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create client' }).click();
  await page.getByLabel('Couple').check();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Rakesh');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Das');
  await page.getByLabel('Email*').click();
  // 
  const Coupleinbox = await mailslurp.inboxController.createInbox({});
  await page.getByLabel('Email*').fill(Coupleinbox.emailAddress);
  // await page.getByLabel('Email*').fill('pp1@gmail.com');
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Poornima');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Das');
  await page.getByLabel('Email*').click();
  // 
  const Couple1inbox = await mailslurp.inboxController.createInbox({});
  await page.getByLabel('Email*').fill(Couple1inbox.emailAddress);
  // await page.getByLabel('Email*').fill('pp+1@gmail.com');
  await page.getByLabel('Phone').click();
  await page.getByLabel('Phone').fill('(506) 704-23454');
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
  await page.waitForTimeout(2000)
 
  // Create Appoinments
  await page.locator('div').filter({ hasText: /^Calendar$/ }).getByRole('img').click();
  await page.getByRole('button', { name: 'Month' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('div').filter({ hasText: /^20$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Rajesh (T1)' }).first().click();
  await page.getByLabel('Select service *').click();
  await page.getByText('Developmental Testing, ...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('New every day testing');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(1000);
  // Past Date Appoinments
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.locator('div').filter({ hasText: /^04$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Rajesh (T1)' }).first().click();
  await page.getByLabel('Select service *').click();
  await page.getByText('Developmental Testing, ...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('New every day testing');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  // Create Appoinment Button( top Bar)
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create appointment' }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Rajesh (T1)' }).first().click();
  await page.getByLabel('Select service *').click();
  await page.getByText('Family psychotherapy...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(3000);

  // Reports

  // await page.locator('div').filter({ hasText: /^Reports$/ }).getByRole('img').click();
  // await page.getByText('Appointment Notes').click();
  // await page.locator('.btn-outline-default').first().click();
  // // await page.getByRole('tab', { name: 'Personal' }).click();
  // await page.getByRole('button', { name: 'Add psychotherapy note' }).nth(1).click();
  // await page.getByPlaceholder('Enter your response here').click();
  // await page.getByPlaceholder('Enter your response here').fill('Added Psychotherapy Note for this Appoinment');
  // await page.getByRole('button', { name: 'Save' }).nth(1).click();
  // await page.waitForTimeout(3000);

//  Client file
await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
await page.getByText('Rajesh Das').click();

// Info and Settings
await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
await page.getByLabel('First Name*').click();
await page.getByLabel('First Name*').fill('Rajesh');
await page.getByLabel('Last Name*').click();
await page.getByLabel('Last Name*').fill('Das');
await page.getByLabel('Pronouns').click();
await page.getByText('She/They').click();
await page.getByRole('button', { name: 'Save' }).nth(1).click();

// Files tab
await page.getByRole('tab', { name: 'Files' }).click();
await page.getByRole('button', { name: 'Request upload' }).nth(1).click();
await page.getByLabel('Enter file name').click();
await page.getByLabel('Enter file name').fill('test');
await page.getByRole('button', { name: 'Add' }).nth(1).click();
await page.getByLabel('Enter file name').nth(1).click();
await page.getByLabel('Enter file name').nth(1).fill('test1');
await page.getByRole('button', { name: 'Request' }).nth(1).click();
await page.locator('div').filter({ hasText: /^Basic InfoIndividual$/ }).getByRole('button').click();


// Forms Section
// await page.getByRole('tab', { name: 'Forms' }).click();
// await page.getByRole('button', { name: 'Send forms' }).nth(1).click();
// await page.getByRole('tab', { name: 'Personal' }).click();
// await page.getByText('Questionnaires').click();
// await page.getByLabel('Select Forms to send').click();
// await page.getByRole('combobox', { name: 'Select Forms to send' }).fill('Therapist Automation Testing');
// await page.getByRole('option', { name: 'Therapist Automation Testing' }).click();
// await page.getByRole('combobox', { name: 'Select Forms to send' }).click();
// await page.getByRole('button', { name: 'Send' }).nth(1).click();

//   Notes Section
await page.getByRole('tab', { name: 'Notes' }).click();
await page.getByRole('button', { name: 'Add note' }).nth(1).click();
await page.getByRole('tab', { name: 'Personal' }).click();
await page.getByText('Progress notes').click();
await page.getByPlaceholder('Search').click();
await page.getByPlaceholder('Search').fill('Therapist');
await page.getByRole('dialog').locator('div').filter({ hasText: /^Therapist Automation Testing$/ }).click();
await page.getByPlaceholder('Enter your response here').first().click();
await page.getByPlaceholder('Enter your response here').first().fill('Rajesh');
await page.getByPlaceholder('Enter your response here').nth(1).click();
await page.getByPlaceholder('Enter your response here').nth(1).fill('Good');
await page.getByPlaceholder('MM/DD/YYYY').click();
await page.getByPlaceholder('MM/DD/YYYY').fill('10/09/1999');
await page.getByRole('checkbox', { name: 'option1' }).check();
await page.locator('div').filter({ hasText: /^6Client CPT code\? \*Enter your response hereEnter your response here$/ }).getByLabel('Enter your response here').click();
await page.locator('div').filter({ hasText: /^6Client CPT code\? \*Enter your response hereEnter your response here$/ }).getByLabel('Enter your response here').fill('90791');
await page.getByRole('option', { name: '90791 - Psychiatric' }).click();
await page.locator('div').filter({ hasText: /^90791 - Psychiatric diagnostic evaluationEnter your response here$/ }).getByLabel('Enter your response here').click();
await page.locator('div').filter({ hasText: /^Enter your response here$/ }).getByLabel('Enter your response here').click();
await page.locator('div').filter({ hasText: /^Enter your response here$/ }).getByLabel('Enter your response here').fill('F05');
await page.getByRole('option', { name: 'F05 - Delirium due to known' }).click();
await page.locator('div').filter({ hasText: /^F05 - Delirium due to known physiological conditionEnter your response here$/ }).getByLabel('Enter your response here').click();
await page.locator('div').filter({ hasText: /^Sign here$/ }).nth(2).click();
await page.getByPlaceholder('Please type your name here').click();
await page.getByPlaceholder('Please type your name here').fill('Rajesh');
await page.getByRole('button', { name: 'Sign' }).nth(1).click();
await page.getByRole('button', { name: 'Save' }).nth(1).click();

// Create Appoinment
await page.getByRole('button', { name: 'Add' }).nth(1).click();
await page.getByRole('menuitem', { name: 'Appointment' }).getByRole('img').click();
await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
await page.waitForTimeout(1000);
await page.locator('._nameDetails_111x7_20 > .MuiButtonBase-root').click();

// Multi Client Flows
await page.getByText('Rajesh Das').click();
  await page.getByRole('button', { name: 'Profile & Clinician' }).nth(1).click();
  await page.getByRole('button', { name: 'Add profile' }).nth(1).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Owner Team' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Rajesh@1');
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._clientFileWrapper_17198_1 > div > div._clientNavigationFixedTop_111x7_1 > div > button > svg > path').click();
  await page.locator('._nameDetails_111x7_20 > .MuiButtonBase-root').click();
  // Minor 
  await page.getByText('Shiva Kumar').click();
  await page.getByRole('button', { name: 'Profile & Clinician' }).nth(1).click();
  await page.getByRole('button', { name: 'Add profile' }).nth(1).click();
  await page.getByLabel('Minor').check();
  await page.getByLabel('', { exact: true }).first().click();
  await page.getByRole('option', { name: 'Owner Team' }).click();
  await page.getByRole('button', { name: '​', exact: true }).click();
  await page.getByRole('option', { name: 'Venkatesh Prasad' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Shiva &Venkatesh@1');
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._clientFileWrapper_17198_1 > div > div._clientNavigationFixedTop_111x7_1 > div > button > svg > path').click();
  await page.locator('._nameDetails_111x7_20 > .MuiButtonBase-root').click();
  // Couple 
  await page.getByText('Rakesh Das').click();
  await page.getByRole('button', { name: 'Profile & Clinician' }).nth(1).click();
  await page.getByRole('button', { name: 'Add profile' }).nth(1).click();
  await page.getByLabel('Couple').check();
  await page.getByLabel('', { exact: true }).first().click();
  await page.getByRole('option', { name: 'Owner Team' }).click();
  await page.getByRole('button', { name: '​', exact: true }).click();
  await page.getByRole('option', { name: 'Poornima Das' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Rakesh &Poornima@1');
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._clientFileWrapper_17198_1 > div > div._clientNavigationFixedTop_111x7_1 > div > button > svg > path').click();
  await page.locator('._nameDetails_111x7_20 > .MuiButtonBase-root').click();

// Supervision Flows
// await page.getByText('Upcoming').click();
// await page.getByRole('button', { name: 'Add note' }).nth(1).click();
// await page.getByRole('tab', { name: 'Personal' }).click();
// await page.getByText('Progress notes').click();
// await page.getByPlaceholder('Search').click();
// await page.getByPlaceholder('Search').fill('Therapist');
// await page.getByRole('dialog').locator('div').filter({ hasText: /^Therapist Automation Testing$/ }).click();
// await page.getByPlaceholder('Enter your response here').first().click();
// await page.getByPlaceholder('Enter your response here').first().fill('Rajesh');
// await page.getByPlaceholder('Enter your response here').nth(1).click();
// await page.getByPlaceholder('Enter your response here').nth(1).fill('Good');
// await page.getByPlaceholder('MM/DD/YYYY').click();
// await page.getByPlaceholder('MM/DD/YYYY').fill('10/09/1999');
// await page.getByRole('checkbox', { name: 'option1' }).check();
// await page.locator('div').filter({ hasText: /^6Client CPT code\? \*Enter your response hereEnter your response here$/ }).getByLabel('Enter your response here').click();
// await page.locator('div').filter({ hasText: /^6Client CPT code\? \*Enter your response hereEnter your response here$/ }).getByLabel('Enter your response here').fill('90791');
// await page.getByRole('option', { name: '90791 - Psychiatric' }).click();
// await page.locator('div').filter({ hasText: /^90791 - Psychiatric diagnostic evaluationEnter your response here$/ }).getByLabel('Enter your response here').click();
// await page.locator('div').filter({ hasText: /^Enter your response here$/ }).getByLabel('Enter your response here').click();
// await page.locator('div').filter({ hasText: /^Enter your response here$/ }).getByLabel('Enter your response here').fill('F05');
// await page.getByRole('option', { name: 'F05 - Delirium due to known' }).click();
// await page.locator('div').filter({ hasText: /^F05 - Delirium due to known physiological conditionEnter your response here$/ }).getByLabel('Enter your response here').click();
// await page.locator('div').filter({ hasText: /^Sign here$/ }).nth(2).click();
// await page.getByPlaceholder('Please type your name here').click();
// await page.getByPlaceholder('Please type your name here').fill('Rajesh');
// await page.getByRole('button', { name: 'Sign' }).nth(1).click();
// await page.getByRole('button', { name: 'Save' }).nth(1).click();
// await page.waitForTimeout(1000);
// await page.getByText('Upcoming').click();
// await page.waitForTimeout(2000);
// await page.getByText('Therapist Automation Testing').click();
// await page.getByRole('button', { name: 'Sign & Lock' }).nth(1).click();
// await page.getByPlaceholder('Sign').click();
// await page.getByPlaceholder('Sign').fill('Therapist 1');
// await page.getByRole('button', { name: 'Sign and Lock' }).nth(1).click();
// await page.locator('div').filter({ hasText: /^Therapist Automation Testing$/ }).getByRole('button').click();
// await page.locator('div').filter({ hasText: /^Supervision$/ }).getByRole('img').click();
// await page.getByText('Therapist Automation Testing').nth(1).click();
// await page.locator('div').filter({ hasText: /^Therapist Automation Testing$/ }).getByRole('button').click();

// Intake tabs
await page.locator('div').filter({ hasText: /^Referrals$/ }).getByRole('img').click();
await page.getByRole('button', { name: 'Create Lead' }).nth(1).click();
await page.getByLabel('First Name*').click();
await page.getByLabel('First Name*').fill('Lead');
await page.getByLabel('Last Name').click();
await page.getByLabel('Last Name').fill('1');
await page.getByLabel('Email').click();
// 
const Leadinbox = await mailslurp.inboxController.createInbox({});
await page.getByLabel('Email').fill(Leadinbox.emailAddress);
// await page.getByLabel('Email').fill('intaketabSuperman+3@gmail.com')
await page.getByLabel('Seeking treatment for').click();
await page.getByRole('option', { name: 'Cancer' }).click();
await page.getByLabel('Note').click();
await page.getByLabel('Note').fill('I am Very sick');
await page.getByRole('button', { name: 'Create' }).nth(1).click();
await page.waitForTimeout(2000);

await page.getByRole('cell', { name: 'Lead 1' }).click();
await page.getByRole('tab', { name: 'Basic Information' }).click();
await page.getByLabel('Sex').click();
await page.getByRole('option', { name: 'Male', exact: true }).click();
await page.getByLabel('Member ID').click();
await page.getByLabel('Member ID').fill('GAH23');
await page.getByLabel('Name on Card').click();
await page.getByLabel('Name on Card').fill('Rajesh');
await page.getByLabel('Payer ID').click();
await page.getByLabel('Payer ID').fill('BDJSB546');
await page.getByLabel('Insurance Company').click();
await page.getByRole('combobox', { name: 'Insurance Company' }).fill('abso');
await page.getByText('ABSOLUTE TOTAL CARE-').click();
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.locator('span').filter({ hasText: 'Current Status :Inquiry' }).locator('div').nth(2).click();
await page.getByRole('option', { name: 'Initial consultation call' }).click();
await page.waitForTimeout(1000);
await page.getByLabel('Send inquiry form').click();
await page.getByRole('button', { name: 'Send' }).nth(1).click();
await page.waitForTimeout(1000);
await page.getByLabel('Send therapist scheduling link').click();
await page.getByLabel('Select Therapist').click();
await page.getByRole('option', { name: 'Therapist 1, ALC' }).click();
await page.getByRole('button', { name: 'Send' }).nth(1).click();
await page.locator('div').filter({ hasText: /^Filters \(01\)$/ }).getByRole('button').nth(2).click();
await page.waitForTimeout(1000);
// Request Booking Widget flow
await page.getByText('Requests').click();
await page.getByRole('tab', { name: 'Requests' }).click();
await page.getByRole('button', { name: 'Accept' }).nth(1).click();
await page.getByRole('button', { name: 'Continue' }).nth(1).click();
await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
await page.waitForTimeout(6000);
await page.reload();
// Dp Updates and Logout
await page.locator('#root > div._header_1uy0f_1 > div > div:nth-child(4)').click();
await page.getByRole('menuitem', { name: 'Profile' }).click();
await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._generalSettingsTab_18vvz_1 > div > div._flexContainer_18vvz_4 > div._userNameDetailsContainer_18vvz_8 > div > div._imagePicker_18vvz_17 > input[type=file]').setInputFiles("C:/Users/Rajesh/Downloads/therapist.jpg");
await page.getByRole('button', { name: 'Done' }).nth(1).click();
await page.getByRole('button', { name: 'Save' }).nth(1).click();
await page.locator('#root > div._header_1uy0f_1 > div > div:nth-child(4)').click();
await page.getByRole('menuitem', { name: 'Logout' }).click();



});



