import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21wbZp6F0qIaDDQiVIyKDdH4Bo5GYJxTvK9Etm92S5p7CEJychCWbjA02-2Fx-2Fft8ZlAohAL01MUz3idGiRcSayRV-2BYhMNdnW8Tpxvsukdm02n1i6Ck9HaN1wqbVc7eu3s2oiovTl20U8vpw-2F-2FmlL8sz3CpXdMLEyhM4sBGkA8oqg-2FOAJgNL2ThYDWi9QjXa0ecpmCQxZIQbntr8AZ7WIu13F4TKt5ynBwMb4MnmW4I44-2B-2FSIpTIGkCfou-2Bj45Pl2NChc-3D4RPN_hDR617gYR-2FTAeQ2ywDUJxLoDNehKzqARZypjGGelOH78CTJm08WXw0c1YCwPMYwTH9EhOClf8ubin7-2BnkfycghiVd0R-2BcFpRLf0B25-2FTNPVb9RZ-2BFmC5JdfQy9Xmt2w1BdK96wAMtcgNSLGkSIj5Ofhuqk6eCFxDTtKby83VaXC5Y66nXfKtoaLIo7fUVCDSsCU5RXrRK8ZccUIcCZmJ4zPB5g92FK6tq7eCtM0ZkDsawL1A-2FLjcuSK-2Fdbx1V8OXfnu2PJqspvggBxtWQsQkV-2BFUVPVeCZvfQALhX-2FtS8WnK-2F0yLdnrdzJjtaSU-2B8lSuGuKKgDGiR60KYgrmXNS3UgbX5I-2FAsAg-2B-2FaOYbCvYSAo-3D');
  await page.locator('div').filter({ hasText: /^Documents$/ }).getByRole('img').click();
  await page.getByRole('tab', { name: 'Private' }).click();
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  await page.getByText('Questionnaire').click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill(' Action form1');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  await page.getByRole('button', { name: 'Single choice', exact: true }).click();
  await page.getByRole('option', { name: 'Short answer' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Test number');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  
// Send  Form
  await page.locator('div').filter({ hasText: /^ Action Form1$/ }).getByTestId('MoreVertIcon').click();
  await page.getByRole('menuitem', { name: 'Send' }).click();
  await page.getByLabel('Select Clients').click();
  await page.getByRole('option', { name: 'Rajesh (OT) - Rajesh Kumar' }).click();
  await page.getByRole('combobox', { name: 'Select Clients' }).click();
  await page.getByRole('button', { name: 'Send' }).nth(1).click();
  await page.reload();

 // Preview Button
  await page.locator('div').filter({ hasText: /^ Action Form1$/ }).getByTestId('MoreVertIcon').click();
  await page.getByRole('menuitem', { name: 'Preview' }).click();
  await page.locator('div').filter({ hasText: /^ Action Form1$/ }).getByRole('button').click();

//Rename
  await page.locator('div').filter({ hasText: /^ Action Form1$/ }).getByTestId('MoreVertIcon').click();
  await page.getByRole('menuitem', { name: 'Rename' }).click();
  await page.getByPlaceholder('type here').clear();
  await page.getByPlaceholder('type here').fill('Test action Form @1');
  await page.getByRole('button', { name: 'Rename' }).nth(1).click();
  await page.reload();

 // Edit the Form
  await page.locator('div').filter({ hasText: /^ Action Form1$/ }).getByTestId('MoreVertIcon').click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('button', { name: '1 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.reload();

//Duplicate form
  await page.locator('div').filter({ hasText: /^ Action Form1$/ }).getByTestId('MoreVertIcon').click();
  await page.getByRole('menuitem', { name: 'Duplicate' }).click();
  await page.reload();
  ;
//Move To Library
  await page.locator('div').filter({ hasText: /^Copy of Action Form1$/ }).getByTestId('MoreVertIcon').click();
  await page.getByRole('menuitem', { name: 'Move to library' }).click();
  await page.reload();
 
});