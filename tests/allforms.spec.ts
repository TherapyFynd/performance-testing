import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Oj6l-2F48KPM7irobpFUtrCBRsrs-2Bn2mCVlI6tMOxjILghwP1OUm3ED4gzcx2HtHLu-2FlYSNDOxeyPdpVvrFwVJ1pzJzgDrqINJNpQ7unPtoDaOWN5hX-2F1uy8lFttNymxrVtIoEAv8aEip25p3Jn2BvvCQS0FxnqVRJQP2oWsa1qy8cCrqBX93SPZVeA9tsLr0F7fD4w90vDplqKfKDn4I5qytxIzoWjCrh8e7PLIvqDrWvPp81st0B5EbmBuvwthhSUPpdMWzfBhtDqRQHpdD270Y-2FmoG835eRcPrynwDLhUIX-2BJvAnUw2h3LTZtTDjPMMcYcgmH4z4PBmmGOI3-2FfQwM15siNEtomzYy1AXNXF4-2B7yNYzfX_gvomvQ58qdGBXEcwvE3iL8md1qnV9YlfzE1tVDoVXBNb8KRxZEnh5393j96iP9-2FPuuvXtXbj7RW6YtbTu78-2FkJoVUr913oS9ydmAYas4n5i-2BMv9x9UYKMFfUJ3Jj-2BChxttA-2BNmjwQwrAnwoF97oIcb8O3MvSPu6iqV3Z16XEsziUOc-2FUmOX5oZ-2B-2BQflP46Jx9aqUV8RJ3FNS8UvmbhnXBg-2Bk5B5KLA70Xoqz78lldWk2UP93EqxqKGUIE43wQ8obf-2BBcwjuxD256CSQvbvKkmkGsZEzceXhKRl7Ezydnz6H3pPxgKBSHgNRZ1I174MLUG5UD3dS1wVic-2FMavCFFGMxxSinTUj3ftonDh31ggTAw-3D');
  await page.locator('div').filter({ hasText: /^Documents$/ }).getByRole('img').click();
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  
  // Questionaries Form Code
  await page.getByText('Questionnaire').click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Automation Forms');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  // Single Choices
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Gender?');
  await page.getByRole('button', { name: '1 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Single choice', exact: true }).click();
  // Short Answer
  await page.getByRole('option', { name: 'Short answer' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Name of Client?');
  await page.getByLabel('Mandatory').check();
  await page.getByRole('button', { name: '2 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByLabel('', { exact: true }).click();
  // Long Answer
  await page.getByRole('option', { name: 'Long answer' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('NAme of Client and Tell Your Health Conditions?');
  await page.getByRole('button', { name: '3 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByLabel('', { exact: true }).click();
  // Date 
  await page.getByRole('option', { name: 'Date' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Client Date Of Birth?');
  await page.getByLabel('Mandatory').uncheck();
  await page.getByRole('button', { name: '4 Please enter a question' }).getByRole('button').nth(3).click();
  await page.getByLabel('', { exact: true }).click();

  // // Mutiple Choices
  // await page.getByRole('option', { name: 'Multiple choice' }).click();
  // await page.getByPlaceholder('Please enter a question').click();
  // await page.getByPlaceholder('Please enter a question').fill('Client Symptoms?');
  // await page.getByRole('button', { name: '5 Please enter a question' }).getByRole('button').nth(2).click();
  // await page.getByLabel('', { exact: true }).click();
  
  // E- Singature
  await page.getByRole('option', { name: 'E-signature' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Please Sign Your Sing?');
  await page.getByLabel('Mandatory').check();
 
  await page.getByRole('button', { name: 'Preview' }).nth(1).click();
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').click();
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  // Consent Form
  await page.getByText('Consent form', { exact: true }).click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Consent Automation');
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
  // Progress Note
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  await page.getByText('Progress note', { exact: true }).click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Automation Progress');
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
  await page.getByTestId('ArrowBackRoundedIcon').click();
  // Treatment plan
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  await page.getByText('Treatment plan', { exact: true }).click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Automation Treatement Plan');
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
  // Assessment form Code
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  await page.getByText('Assesment').click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Automation Assesment Form');
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

  // System Templates Actions
  
});