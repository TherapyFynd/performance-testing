import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21y-2FxqjEXlPJWY2zPpWzzrO14K4OBrG3sEMXFUwK0XByeSWsv7J3O7Td55dia1n7oW8Hkjx-2B7TIsqT5NeKleCZRHmtT4kHqw6ZsjoAN6rYBx7NdHuohxTJQtaaui6SRyEbrUmAweW1CxOqNNFdnJLnJmOWgkY0WReEspmUJaKaeqAcbjUkaxr8VgwbOJQ7uiE2Mx-2B4-2FeXVyhd-2B-2BRdIY76GgIN6u-2FI8LYODqM5uFl26AfY2TeXBevXPCYTFr4gZTMNY8-3DLRSm_tczTrkoUlNpat26wNftQqfnty0pAu5E1OZWjHxbgoHI8O6YMJOPgdVXe3CoY-2FOyuTmuOWtDEDTcoxoFkT7IGEoM3P2cAAil4PguG3SB9Pb1fmRJBafGQvj0fxgnKs5xkpFwD-2BPpHRlcrlyjr-2Fchm-2BBB58HWKx6sBH9NTTfdjYc7Sqz0DLNVg3UGMDsWLQ2jv5JkxYjC5NcAPYPz7XT-2BH0e2AM2UoEGKHu1d1cWAlv57zuwx6ybpEmz2ZqkDt7mq3SbLRORuEGolmL3WYcFGUfgQ0DvCk6lA6nihICM-2FVibO2Z-2FfEhzBm0z7qQQewCmjkejpAZHSCRob6EOfCl9N-2FbA8qizfguPKNIiBMEF4OTwb1I9qysAMZDuQ2NRGxSyGM');

// Appoinment Notes add , Filtre with Options.
await page.locator('div').filter({ hasText: /^Reports$/ }).getByRole('img').click();
  // await page.getByText('Appointment Notes').click();
  // await page.getByLabel('Team members').click();
  // await page.getByRole('option', { name: 'All' }).getByRole('checkbox').uncheck();
  // await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
  // await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  // await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  // await page.getByRole('tab', { name: 'Personal' }).click();
  // await page.locator('div').filter({ hasText: /^Progress notes$/ }).click();
  // await page.getByText('Automation Testing').click();
  // await page.locator('input[type="text"]').click();
  // await page.locator('input[type="text"]').fill('James willy');
  // await page.getByPlaceholder('Enter your response here').nth(1).click();
  // await page.getByPlaceholder('Enter your response here').nth(1).fill('Yes I am good now and I am Looking better Condition.');
  // await page.getByLabel('Male', { exact: true }).check();
  // await page.locator('div').filter({ hasText: /^Sign here$/ }).nth(2).click();
  // await page.getByPlaceholder('Please type your name here').click();
  // await page.getByPlaceholder('Please type your name here').fill('James Rocky');
  // await page.getByRole('button', { name: 'Sign' }).nth(1).click();
  // await page.getByRole('button', { name: 'Save' }).nth(1).click();

  // await page.getByLabel('Team members').click();
  // await page.getByRole('option', { name: 'All' }).getByRole('checkbox').uncheck();
  // await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
  // await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  // await page.getByLabel('Status').click();
  // await page.getByRole('option', { name: 'All' }).getByRole('checkbox').uncheck();
  // await page.getByRole('option', { name: 'Completed notes' }).getByRole('checkbox').check();
  // await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  // await page.getByText('Automation Testing').click();
  // await page.locator('div').filter({ hasText: /^Automation Testing$/ }).getByRole('button').click();
  await page.getByText('Appointment Notes').click();
  await page.locator('.btn-outline-default').first().click();
  await page.getByRole('tab', { name: 'Personal' }).click();
  await page.getByText('Progress notes').click();


});