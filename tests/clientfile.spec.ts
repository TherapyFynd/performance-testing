import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21yh19-2FB0X-2FqgFEO295587q1jyqQhjYRodaVDBNJXzKDYZbHvUJNPlIk6jffRUe80h7oBOFe8vkKsjyXfvvANbT14mYU9qrL4IBRVry7iw8SyRi1CqpZbORY831STtiOfvsPzIvXyvXBecanGwYb7fZeJzsA4qcd7wFK47MuKTRJKwaYMX-2BULho-2BgE0hFgRMI4uKlP525WWhk9Yr1vAQ2-2BjPolqX6oPuGw0OAqp0X54jfVZsdIMrO1sXhtfj9o-2BJfmw-3DA3N__hDR617gYR-2FTAeQ2ywDUJxLoDNehKzqARZypjGGelOH78CTJm08WXw0c1YCwPMYwTH9EhOClf8ubin7-2BnkfycghiVd0R-2BcFpRLf0B25-2FTNPVb9RZ-2BFmC5JdfQy9Xmt2w1BdK96wAMtcgNSLGkSIj5Ofhuqk6eCFxDTtKby83VaXC5Y66nXfKtoaLIo7fUVCDSKv6zEBxwov2v0LXGIcsB0yoX1H-2FCIgf6tXop0GpOrFVkOg-2FTEkG0UYXVOS2VbZu7EdBEWPY0JEr4B5jvOOzgedHREBOdXzrAnJWRQKXVGs5aVFdotTD119mZhcwRPnI1iZQQMWbhP8B72H3sTCAuFZSXcKrDPb7BOU-2BBCG4VxHg-3D');
  await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
  await page.getByText('Automation client').click();
  // Info and Settings
  await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Remote');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('1');
  await page.getByLabel('Pronouns').click();
  await page.getByText('She/They').click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
// Payment Tab

//   await page.getByRole('tab', { name: 'Payment' }).click();
  
//   await page.getByRole('button', { name: 'Add card' }).nth(1).click();
//   await page.getByPlaceholder('Card number').click();
//   await page.getByPlaceholder('Card number').fill('4242 4242 4242 42424');
//   await page.getByPlaceholder('Expiry date (MM/YY)').click();
//   await page.getByPlaceholder('Expiry date (MM/YY)').fill('09 / 36');
//   await page.getByPlaceholder('CVV').click();
//   await page.getByPlaceholder('CVV').fill('789');
//   await page.getByRole('button', { name: 'Add card' }).nth(1).click();

//   await page.getByTestId('MoreVertIcon').locator('path').click();
//   await page.getByRole('menuitem', { name: 'Delete' }).click();
//   await page.getByRole('button', { name: 'Confirm delete' }).nth(1).click();
  
// Files tab
  await page.getByRole('tab', { name: 'Files' }).click();
  await page.getByRole('button', { name: 'Request upload' }).nth(1).click();
  await page.getByLabel('Enter file name').click();
  await page.getByLabel('Enter file name').fill('Your Insurance card');
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.getByLabel('Enter file name').nth(1).click();
  await page.getByLabel('Enter file name').nth(1).fill('Your Date of Birth Certificate');
  await page.getByRole('img').nth(1).click();
  await page.getByRole('button', { name: 'Request' }).nth(1).click();
  await page.locator('#root > div._layout_731gc_1 > div._content_731gc_7 > div > div._filesTabContainer_x44bt_1 > div > div.primary-b2-semi-bold._promptConatiner_16kg3_41 > div._closeIcon_16kg3_58 > svg > path').click;
  await page.locator('div').filter({ hasText: /^Basic Info$/ }).getByRole('button').click();
  
// Forms Section
  await page.getByRole('tab', { name: 'Forms' }).click();
  await page.getByRole('button', { name: 'Send forms' }).nth(1).click();
  await page.getByRole('tab', { name: 'Personal' }).click();
  await page.getByText('Questionnaires').click();
  await page.getByLabel('Select Forms to send').click();
  await page.getByRole('combobox', { name: 'Select Forms to send' }).fill('Automation');
  await page.getByRole('option', { name: 'Automation Forms' }).click();
  await page.getByRole('combobox', { name: 'Select Forms to send' }).click();
  await page.getByRole('button', { name: 'Send' }).nth(1).click();
  
//   Notes Section
  await page.getByRole('tab', { name: 'Notes' }).click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByRole('tab', { name: 'Personal' }).click();
  await page.getByText('Progress notes').click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('Automation');
  await page.getByRole('dialog').locator('div').filter({ hasText: /^Automation Testing$/ }).click();
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
  await page.locator('div').filter({ hasText: /^Enter your response here$/ }).getByLabel('Enter your response here').click();
  await page.locator('div').filter({ hasText: /^Enter your response here$/ }).getByLabel('Enter your response here').fill('F05');
  await page.getByRole('option', { name: 'F05 - Delirium due to known' }).click();
   await page.getByRole('button', { name: 'Sign' }).nth(1).click();
  await page.getByPlaceholder('Please type your name here').click();
  await page.getByPlaceholder('Please type your name here').fill('Remote 2');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

//   Diagnosis Tab
  // await page.getByRole('tab', { name: 'Diagnosis' }).click();
  // await page.getByRole('button', { name: 'Add' }).nth(3).click();
  // await page.getByLabel('Code').click();
  
  // await page.getByRole('combobox', { name: 'Code' }).fill('F01A0');
  // await page.getByText('F01A0').click();
  // await page.getByLabel('Set as primary diagnosis').check();
  // await page.getByRole('button', { name: 'Add diagnosis' }).nth(1).click();
  // Generate SuperBill


// Message Section
  await page.getByRole('button', { name: 'Message' }).nth(1).click();
  await page.getByTestId('message-input').click();
  await page.getByTestId('message-input').fill('hey are fine right');
  await page.getByRole('img', { name: 'logo' }).click();
  await page.getByText('Clients').click();
// Generate SuperBill

});