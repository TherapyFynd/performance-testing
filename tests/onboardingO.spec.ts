import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21yA0A0Ldc27UMlInjauauPmHvLVcTxp2nRc-2F9Y2ICdCtwdMUDYjZqT4R1TimjbmJW4AhoC00ZFGKoLgurCRchLrU-2Bpho249Y92cjnqepMP1EeoLd8YhQX5J2d-2FxDy9lBGKLXF1a96MV-2BaQitvcBp5EV35LTs5TIbzE085jP5-2F9JyVZ7a0eme4fpuz7Gr7X0XlvwbPad2yyaOYqi0llX8eNeYD8kwVEU8bkYB4sF4kVocA-3D-3DGKIY_6-2FINxZRg6KhG3dyJk85U1c7eANxlMFjpWIk-2B7CBzQ6cLaE28YiWLoaikHGz1pfa-2BgUEDeIOt52W5DMSi7fBR685dkr9pxtKePgLlH9tvnueCaHEr3fSUwm6DzlciWwN6DTPfB0hp0PLNBscDOFL3lzgX7ZxyvXQa-2FG4q9aFEi4DhjwTscQVoWVpGZ7KXv-2FwF-2BxtOBAqpDnm11mw6AgfrPoZmaLPTkMtrYxm22WhqJ7MBuNwv-2B2vdb3fMwpgDDxN5asW2z2XtSgjd1L0QJwsHoKhTzH7-2FGEqi-2BEiUicLRJK4lTLQeUvbl-2BI3ckj-2ByAA9TzCO-2B52UwrZF2IoW3cLxol8TU06JiJLVJUUKykuFmlIk-3D');
  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('Owner');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('Team');
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByPlaceholder('Enter your practice name').click();
  await page.getByPlaceholder('Enter your practice name').fill('Simple Practice Hospital');
  await page.getByLabel('Address Line').click();
  await page.getByLabel('Address Line').fill('New York City');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('cal');
  await page.getByRole('option', { name: 'California' }).click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Azu');
  await page.getByRole('option', { name: 'Azusa' }).click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('561202');
  await page.getByPlaceholder('Enter your practice name').click();
  await page.getByPlaceholder('Enter your practice name').fill('Simple Practice Hospital');
  await page.getByLabel('Address Line').click();
  await page.getByLabel('Address Line').fill('New York City');
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('heading', { name: 'Skip' }).click();
  await page.getByRole('heading', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('Office name').click();
  await page.getByLabel('Office name').fill('New Location');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('New City');
  await page.getByLabel('Make default location').check();
  await page.getByRole('button', { name: 'Add location' }).nth(1).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('CPT Code').click();
  await page.getByRole('combobox', { name: 'CPT Code' }).fill('90832');
  await page.getByRole('option', { name: '90832, Psychotherapy, 30' }).click();
  await page.getByLabel('Fee *').click();
  await page.getByLabel('Fee *').fill('50');
  await page.getByLabel('Duration *').click();
  await page.getByLabel('Duration *').fill('60');
  await page.getByLabel('Make default service').check();
  await page.getByRole('button', { name: 'Add service' }).nth(1).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  // Update Emails
  await page.getByLabel('Enter email').click();
  await page.getByLabel('Enter email').fill('testnoob23@gmail.com');
  await page.getByLabel('Role').click();
  await page.getByRole('option', { name: 'Therapist' }).click();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  // Update Emails
  await page.getByLabel('Enter email').click();
  await page.getByLabel('Enter email').fill('testnoob24@gmail.com');
  await page.getByLabel('Role').click();
  await page.getByRole('option', { name: 'Supervisor' }).click();
  await page.getByRole('button', { name: 'Send Invite' }).nth(1).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  
  await page.getByRole('checkbox').check();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  
  await page.getByLabel('Agree  & Continue').click;
  await page.waitForTimeout(5000);
  await page.getByLabel('Agree  & Continue').click;
  await page.waitForTimeout(60000);

  // Actions Perform in Product after Onboarding
  await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
  await page.getByText('Practice settings').click();
  await page.getByLabel('Practice Name').click();
  await page.getByLabel('Practice Name').fill('Mind Simple');
  await page.getByLabel('About').click();
  await page.getByLabel('About').fill('This Nice company');
  await page.getByPlaceholder('Enter phone').click();
  await page.getByPlaceholder('Enter phone').fill('(975) 734-53565');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();


});