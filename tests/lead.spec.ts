import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21xXEAtd4OAgwK45U-2BF3rxPDKURknQ1uZwo-2Bj2vMvda6bbAcTt8prWr36Dj9rAhtDCdtpfUNAmP9XEwU95gGlK6GZQRZZErwAKgc5fxAcvxqrRqDFpx1Ly2bE-2BPGr0Yjj82S8OmfguY54g5kfxFlxr-2BZVZCS5OYzBhel9nWk9BZSXXSLXkvSrATUO-2BajL29wuwyRQnpe7I3KnNsO9TzloMPL1e9RavWx-2BIE1eN-2BjgGxF4A-3D-3DxGkm_-2FPZadyxR0NDrP-2Fn406a0j-2FPhk5UoyYfVLvfsmFSTUTnJDmcTTYqLVGS3fp7QOJx3kH-2Fzs3ezfnQrXkHjICozPxFkJyXUidXvn7oqIPaN39vVntX6ekfdpCIswYghm5WUiuDTok9B0lW2U60o2tThs-2FkJKpOcTkHtzpk5mevVU6n8uQrjHVbkd7Bt80rwiTcp7mjBzopPax6Ix-2FJ9H-2FzHSDW9Bd2XgD764Krgz3jJeS2AhKhvN0shIxrxYHBk09QnnhmWYPGlQ5pRyKqMPtOVthxlteu2Jmbv-2Fv7CXOvLZLAvIDIaSdakkgtuJEJ9pVUsoLRbkmicn2OIIZTgasJypqhHiYF7-2BXGvzXBH3L3Tp3g-3D');
  await page.locator('div').filter({ hasText: /^Referrals$/ }).getByRole('img').click();
  // await page.getByRole('tab', { name: 'Email' }).click();
  // await page.getByRole('row', { name: '11:07 AM msprk98@gmail.com no' }).getByLabel('View').click();
  // await page.getByRole('button', { name: 'Create lead' }).nth(1).click();
  // await page.locator('div').filter({ hasText: 'Create0RequestsChatsAdmin Team' }).nth(1).click();
  // await page.locator('div').filter({ hasText: /^Create lead$/ }).getByRole('button').click();
  // await page.locator('div').filter({ hasText: /^Email detailsno-reply@accounts\.google\.comCreate leadArchive$/ }).getByRole('button').first().click();
  // await page.getByRole('tab', { name: 'Leads' }).click();
  await page.getByRole('button', { name: 'Create Lead' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Automation');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Lead2');
  await page.getByLabel('Phone').click();
  await page.getByLabel('Phone').fill('(232) 002-43567');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testautomation3@gmail.com');
  await page.getByLabel('Referral Source').click();
  await page.getByRole('option', { name: 'Phone' }).click();
  await page.getByLabel('Seeking treatment for').click();
  await page.getByRole('option', { name: 'Anger Issues' }).click();
  await page.getByLabel('Note').click();
  await page.getByLabel('Note').fill('Check this Lead');
  await page.getByRole('button', { name: 'Create' }).nth(1).click();

  // await page.getByRole('row', { name: 'Automation Lead1 12:17 PM' }).getByLabel('Inquiry received').click();
  // await page.getByRole('option', { name: 'New Lead' }).first().click();
  // await page.locator('._assigneeContainer_1ltg5_200 > img').first().click();
  // await page.getByLabel('Choose team member').click();
  // await page.getByRole('option', { name: 'Therapist 1' }).click();
  // await page.getByPlaceholder('Optional note for team member').click();
  // await page.getByPlaceholder('Optional note for team member').fill('Hey please look this man ');

  // await page.getByRole('button', { name: 'Assign' }).nth(1).click();
  // await page.getByRole('cell', { name: 'Automation Lead1' }).click();
  // await page.locator('._collapseFilter_1utqo_50 > button').click();
});