import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21yO6kvVoGbotk5Z-2Fefv0amwTYxy45sI18wzIUuLNRZo1Bg7cgbIZepLoDEr9Fbp4e6ru0TeSiqsx2Sj3QeLHL9phBxTtMeUCpt0w3Tmv9NcL1pr2S4uEDkkROLAhVvXWxGXBLX-2BGapPM39BOd7-2Bpr6-2B1-2BV4BYdI1Bf9nEFB6E-2FEuEUgVvfywkc0DgAXFprS9du-2BI0VL74NyBAVipuHYjpcqnl06Rz3TFrOdsFtPZ6Smzg-3D-3Doxjo_-2FPZadyxR0NDrP-2Fn406a0j-2FPhk5UoyYfVLvfsmFSTUTnJDmcTTYqLVGS3fp7QOJx3kH-2Fzs3ezfnQrXkHjICozPxFkJyXUidXvn7oqIPaN39vVntX6ekfdpCIswYghm5WUiuDTok9B0lW2U60o2tThs-2FkJKpOcTkHtzpk5mevVU6n8uQrjHVbkd7Bt80rwiTcpVXH3Yq4WSCQ5xJx1tv4F4-2BnZF-2BX5L0ZVzrRDqtdfutH8pLSNon8rs3uvxsbRLnsY2Eou4xaMU40PUB-2FdXQAoeWZq2wTUP9P8aQjCOjab2nKN-2FDArbDHuGpU-2BRDUZ9dUV7sf5Uvx82T2Z-2BuQ0i2AU1Q-2F5MgTVoqymPw9YbdLR4lQ-3D');
  await page.locator('div').filter({ hasText: /^Referrals$/ }).getByRole('img').click();
  await page.getByRole('tab', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Today' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
//   Uncheck
  await page.getByRole('button', { name: 'Today' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
//   await page.getByLabel('Emails').click();
//   await page.getByRole('combobox', { name: 'Emails' }).click();
//   await page.getByLabel('Clear').click();
//   await page.getByLabel('Emails').click();
//   await page.getByRole('option', { name: 'msprk98@gmail.com' }).getByRole('checkbox').check();
//   await page.getByRole('combobox', { name: 'Emails' }).click();
//   await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
//   await page.getByLabel('Clear').click();
//   await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
//   await page.getByLabel('Emails').click();
//   await page.getByRole('combobox', { name: 'Emails' }).click();
//   await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
//   await page.getByLabel('Emails').click();
//   await page.getByRole('option', { name: 'msprk98@gmail.com' }).click();
//   await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
//   await page.getByLabel('Emails').click();
//   await page.getByRole('combobox', { name: 'Emails' }).click();
//   await page.getByLabel('Clear').click();
  
  await page.getByRole('button', { name: 'Archived' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  await page.getByRole('button', { name: 'Archived' }).click();
  await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();

//   await page.getByPlaceholder('Search by sender name').click();
//   await page.getByPlaceholder('Search by sender name').fill('msprk98');
//   await page.getByPlaceholder('Search by sender name').press('Enter');
//   await page.getByPlaceholder('Search by sender name').fill('');
//   await page.getByPlaceholder('Search by sender name').press('Enter');

  await page.getByPlaceholder('Search by sender name').fill('adult');
  await page.getByPlaceholder('Search by sender name').press('Enter');
  await page.locator('.MuiInputAdornment-root > .MuiButtonBase-root').click();
  await page.getByPlaceholder('Search by sender name').click();
  await page.getByPlaceholder('Search by sender name').press('Enter');
//   View Button
  await page.getByRole('row', { name: '11:04 AM msprk98@gmail.com' }).getByLabel('View').click();
  await page.getByRole('button', { name: 'Create lead' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Automation');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Lead');
  await page.getByLabel('Phone').click();
  await page.getByLabel('Phone').fill('(980) 327-03743');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testautomation@gmail.com');
  await page.getByLabel('Referral Source').click();
  await page.getByRole('option', { name: 'Phone' }).click();
  await page.getByLabel('Seeking treatment for').click();
  await page.getByRole('option', { name: 'Attachment issues' }).click();
  await page.getByRole('button', { name: 'Create lead' }).nth(1).click();
//   await page.getByRole('button', { name: 'Create lead' }).click();
  await page.locator('div').filter({ hasText: /^Create lead$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Email detailsadult8582@gmail\.comCreate leadArchive$/ }).getByRole('button').first().click();
});