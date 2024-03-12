import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=u001.bGPC89E1b-2BR6sAgrMRX5pMCAFLd0GRFBAYQ-2Bw1BvVCRkjRzLfazgIk4E2lBlnyAxXk5-2BRHNgvVvGfhBFxf5VhakbAxrCoxcVKgy6Z3QoRWtMTzXYn1YKaWR0BoTpK-2FrYF8cFmi5zIXcO2snbtxLLT4FO7BT2mjtxhoZOTsvNrzIJck-2Fc0lENg8GJBPDNuFU8wSREgcBR-2FjtZ-2Fo0ELTnXofPiEB5UmYAPhvUbrcr8TjtJD6bjEP3K8bwiChdtSV1MJqhl-2B35Atvb3GhKKlGJ8w-2BO7r0G4qI-2FGzhJziN5yZoNOiynfRSJnZmHJEpJIvwjUUZTFnaGqGz6smBNpND2wWZd6bKNV-2Bb8AfbFpzcPMWF4upHbHy-2F1ponJlfm3Xx7dUd9rW8cBC-2BgOF5UwGT949wg-3D-3DcFAE_5y7MbatOEP89q1Cu8HxvHH-2FENdMmSYcAHJhv0ySewXh5874h2NArKLn-2FYJStU6VcY5kQY9k18BA5jnjdNaAVxvWmeHkcTHoO5LHpgZ8cG7pA6q9FGdohBdd0JFs63OoftLjgU17beD-2B2A7PGtN6vb4zF8ZgnOIZ9H0KlmdIi2Htek64iQpIoX9o2QBoaTbvh3YfV26mYEaf1ci0L0oCRzAGyvmqaNJPhzHooAK2aZzE3U-2BAnO4n-2Bcsf5aJbdsO11PlYKtdCO-2Fct2UaKSj8UcW5q-2BBpNjUTIJsuMz2eMjonkLEXFLfDHldOU0xUrixqaVovMoC7BGz8U-2Bn6BRR7S2Of9afBe10Dl9omqHYZRBewA-3D');
  // await page.locator('div').filter({ hasText: /^Referrals$/ }).getByRole('img').click();
  
  // await page.getByRole('button', { name: 'Create Lead' }).nth(1).click();
  // await page.getByLabel('First Name*').click();
  // await page.getByLabel('First Name*').fill('bangaloe');
  // await page.getByLabel('Last Name').click();
  // await page.getByLabel('Last Name').fill('23');
  // // await page.getByLabel('Phone').click();
  // // await page.getByLabel('Phone').fill('(939) 276-46294');

  // // add Random emails
  // await page.getByLabel('Email').click();
  // // await page.getByLabel('Email').fill('bank+1@gmail.com');

  // await page.getByLabel('Seeking treatment for').click();
  // await page.getByRole('option', { name: 'Cancer' }).click();
  // await page.getByLabel('Note').click();
  // await page.getByLabel('Note').fill('I am Very sick');
  // await page.getByRole('button', { name: 'Create' }).nth(1).click();
  // await page.waitForTimeout(2000);

  // await page.getByRole('cell', { name: 'bangaloe' }).click();
  // await page.getByRole('tab', { name: 'Basic Information' }).click();
  // await page.getByLabel('Sex').click();
  // await page.getByRole('option', { name: 'Male', exact: true }).click();
  // await page.getByPlaceholder('MM/DD/YYYY').click();
  // await page.getByPlaceholder('MM/DD/YYYY').fill('09/15/1999');
  // await page.getByLabel('Member ID').click();
  // await page.getByLabel('Member ID').fill('GAH23');
  // await page.getByLabel('Name on Card').click();
  // await page.getByLabel('Name on Card').fill('Rajesh');
  // await page.getByLabel('Payer ID').click();
  // await page.getByLabel('Payer ID').fill('BDJSB546');
  // await page.getByLabel('Insurance Company').click();
  // await page.getByRole('combobox', { name: 'Insurance Company' }).fill('abso');
  // await page.getByText('ABSOLUTE TOTAL CARE-').click();
  // await page.getByRole('button', { name: 'Save' }).nth(1).click();

  // // await page.getByRole('tab', { name: 'Insurance' }).click();
  // // await page.getByRole('button', { name: 'Verify Benefits' }).nth(1).click();
  // // await page.waitForTimeout(1000);
  // // await page.getByRole('tab', { name: 'Attachments' }).click();
  // // await page.waitForTimeout(1000);

  // await page.locator('span').filter({ hasText: 'Current Status :Inquiry' }).locator('div').nth(2).click();
  // await page.getByRole('option', { name: 'Initial consultation call' }).click();
  // await page.waitForTimeout(1000);
  // await page.getByLabel('Send inquiry form').click();
  // await page.getByRole('button', { name: 'Send' }).nth(1).click();
  // await page.waitForTimeout(1000);

  // // await page.getByLabel('Send inquiry form').click();
  // // await page.getByLabel('SMS').check();
  // // await page.getByRole('button', { name: 'Send' }).nth(1).click();
  

  // await page.getByLabel('Send therapist scheduling link').click();
  // await page.getByLabel('Select Therapist').click();
  // await page.getByRole('option', { name: 'Owner Team' }).click();
  // await page.getByRole('button', { name: 'Send' }).nth(1).click();
  // await page.waitForTimeout(1000);

  // // await page.getByLabel('Add as client').click();
  // // await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  // // await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  // // await page.getByRole('button', { name: 'Create Client' }).nth(1).click();


  await page.locator('div').filter({ hasText: /^Documents$/ }).getByRole('img').click();
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();

  // await page.getByRole('button', { name: 'Create new' }).nth(1).click();
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





});