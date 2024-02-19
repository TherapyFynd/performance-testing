import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21xgHd-2Fz-2F-2BYL-2F0jR0iGunr8x2Z9KNQ-2BAYlu7tVu6iWEqZKqCVKUNdKBDPkRQHhplmtwXvRP6To40jqV938nEjNJ-2Ff-2BYD-2FR1YGQ3z77Q2xeGWLUMZcLQTtyZY0OeUgf43C-2FXJdMS1RZnDDlGiDXtS-2BDDZmL8Hi8udizxNA3pvMmyqF244OOvEbdkJwXkVAm9Bww1ozVbgHp8218mpZEn35UIbc5f9sCoPyt6r42XQ-2F64fog-3D-3Dg4g2_6-2FINxZRg6KhG3dyJk85U1c7eANxlMFjpWIk-2B7CBzQ6cLaE28YiWLoaikHGz1pfa-2BgUEDeIOt52W5DMSi7fBR685dkr9pxtKePgLlH9tvnueCaHEr3fSUwm6DzlciWwN6DTPfB0hp0PLNBscDOFL3lzgX7ZxyvXQa-2FG4q9aFEi4DhjwTscQVoWVpGZ7KXv-2FwFGO2YEj5FvEjH08RD363H3ujM-2FUzh5dhwm49kNQpZBFSJqYPZ-2FkOKIzhyqyg4ujHuum8qe1dX8FxFAoXI5kciWj92uoXHdnHEXblttpkU-2FcV8ZMSvgowiTY-2BuO8L7Jr8AnhaxlMxnj-2B5-2Fs3TrRSSPuDq6SrL1U1Kmn7oW8f9-2B8dY-3D');
  // Team Member Action Perform
  await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
  await page.getByText('Team members').nth(1).click();
  await page.getByRole('row', { name: 'Owner Team, ALC' }).getByRole('img').nth(1).click();
  await page.getByLabel('Select Specializations').click();
  await page.getByRole('combobox', { name: 'Select Specializations' }).fill('Abuse');
  await page.getByRole('option', { name: 'Abuse', exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Owner Team, ALC$/ }).getByRole('button').click();
  await page.getByRole('tab', { name: 'Accepted Insurance' }).click();
  await page.getByRole('row', { name: 'Rajesh Kumar, ALC' }).getByRole('img').nth(1).click();
  await page.getByLabel('Select accepted payment').click();
  await page.getByRole('combobox', { name: 'Select accepted payment' }).fill('Absolute');
  await page.getByText('ABSOLUTE TOTAL CARE-').click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Owner Team, ALC$/ }).getByRole('button').click();
  await page.getByRole('tab', { name: 'Email Imports' }).click();
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();
  await page.goto('https://leafs-ehr-web-stage-nmvorvf7ga-as.a.run.app/settings/intake-team-members/edit/email-imports');
  await page.locator('._form_ekpvv_1 > .MuiButtonBase-root > .btn-filled-default').first().click();
  await page.locator('[id="\\:ra\\:"]').click();
  await page.locator('[id="\\:ra\\:"]').fill('testtherapy@gmail.com');
  await page.locator('div:nth-child(2) > .MuiButtonBase-root > .btn-filled-default').click();
  await page.locator('[id="\\:rb\\:"]').click();
  await page.locator('[id="\\:rb\\:"]').fill('testpyhsco@gmail.com');
  await page.locator('[id="\\:r7\\:"]').click();
  await page.locator('[id="\\:r7\\:"]').fill('nicewebsite@gmail.com');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Mails to import$/ }).getByRole('button').click();

//   Practise Email Imports
  await page.locator('#root > div._layout_731gc_1 > div._sideBar_5tc5j_1 > div:nth-child(8)').click();
  await page.getByText('Practice Email Imports').click();
  await page.getByRole('button', { name: 'Add New' }).nth(1).click();
  await page.getByLabel('Email Address').click();
  await page.getByLabel('Email Address').fill('test1email@gmail.com');
  await page.getByLabel('Choose account type').click();
  await page.getByRole('option', { name: 'Google' }).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByRole('button', { name: 'Add New' }).nth(1).click();
  await page.getByLabel('Email Address').click();
  await page.getByLabel('Email Address').fill('test1outlook@gmail.com');
  await page.getByLabel('Choose account type').click();
  await page.getByRole('option', { name: 'Outlook' }).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('._title_aytdh_12 > .MuiButtonBase-root').click();
});