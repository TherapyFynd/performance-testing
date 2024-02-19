import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21xkn-2BCQWDHZW49X08HFWMsnmvIvjTwrjCPMkN-2FF3HZtvvCCKezjcq66E3gq49xQqB7wAuwR0DXl7rhac9vVgWkkhXWWJRybyNGnVapSa8jwZvUeTcMdgQ-2F2Q7GE2z6uzCwlSkkNDYgEttekBcZVrxvIhCx8CyJSnPj19OYWEThRywE3PXGCQCZES0HYImvO6j-2FJWrDk13yPTqXwyV8NwHocREm2BZIBBOWvJ0muaGwE1m6hjEQvZIrXYKkN7yArDXw-3DlGsT_hDR617gYR-2FTAeQ2ywDUJxLoDNehKzqARZypjGGelOH78CTJm08WXw0c1YCwPMYwTH9EhOClf8ubin7-2BnkfycghiVd0R-2BcFpRLf0B25-2FTNPVb9RZ-2BFmC5JdfQy9Xmt2w1BdK96wAMtcgNSLGkSIj5Ofhuqk6eCFxDTtKby83VaXC5Y66nXfKtoaLIo7fUVCDSYdWfcVSGq0E8px9UiUy6RtQzxo9eBgdfZZ6mWgEFdnAWP0GNRuy9Yn-2BWDb6RoBsajRK2Pk9qD-2BmA5JJVDqffGGT-2FWmxV-2FHplcrDCydFm3ZPZJZKIpAe5fmEke7Qv9484US9KUg6iLUsN9-2B4KYAP18xc3LVzMZfz-2BhbkCuXb9W7U-3D');
  await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
  await page.getByText('Automation client').click();
//   Add Pop page( Create Appoinment)
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create appointment' }).click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
//   Link Notes for that Appoinment
  await page.getByRole('menuitem', { name: 'Add note' }).click();
  await page.getByRole('tab', { name: 'Personal' }).click();
  await page.getByText('Progress notes').click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('Automat');
  await page.locator('div').filter({ hasText: /^Automation Testing$/ }).click();
  await page.getByRole('button', { name: 'Link appointment' }).nth(1).click();
  await page.getByRole('radio').first().check();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('James Willy');
  await page.getByPlaceholder('Enter your response here').nth(1).click();
  await page.getByPlaceholder('Enter your response here').nth(1).fill('Area is Filled');
  await page.getByLabel('Male', { exact: true }).check();
  await page.getByText('Sign here').click();
  await page.getByPlaceholder('Please type your name here').click();
  await page.getByPlaceholder('Please type your name here').fill('James Willy');
  await page.getByRole('button', { name: 'Sign' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
});