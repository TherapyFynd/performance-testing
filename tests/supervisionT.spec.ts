import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21xS3XhG-2BtLCdbczKpd9kCmaX5R8Gu-2F5cTPVT-2BOP0NW-2FsMTAomjWGi3WmDW6TaFolPG7WB-2BEfuipKLbJ4kEiqu-2F6UVrzhnxYwaLm0nXNe7ggiOfP1I4P-2BPu5lI3zGFM5zxcYQF04wJeseksWDd675hvxgf-2FsAQDZVMY8HH7GZBnFrWdn-2BIkklSeEU4Tf9S4hT9fJpDJxjfvieKvW1dhHZNS-2F9OBbmxPggvb7PyZE9r0Xzg-3D-3DBBgv_ArCrvQPdlRhqTvBSr7IJqgDGxmP2QX4yyliBJbXOEUROd1C3qhiMfXErbBCWZRD95VdZZi-2FCNjk9ikN5HAJCLITBGe0f5h844xw9mMWQEr-2BHo09GH5a9V6lI9ZGMC89EiWz0tO806STrP0HO7pkKBPF5WI98uMRv43VE9luDA-2Fm6-2BjXk0cax8CtsK-2BsHI8RGwyxkt-2BcAR0y2QMp-2BzWaDhsd-2BtrYEJy-2FyjVxo4s7N0-2Fl7HeAM0AhPA4YyfgWBn3UHuPBwv-2BMRBnPpQZR8RboaqqQDWeD7-2B7fX-2FUYkCl7cenGc6814-2FMT4KpwFfhjJUSb-2BKRrPVdCXazM6J-2FwI6h4kAeDtbyLrNpwHKP-2FwDBUrg7A-3D');
  // Create Appoinment
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create appointment' }).click();
  await page.getByLabel('Select client *').click();
  await page.getByRole('option', { name: 'Couple 2', exact: true }).click();
  await page.getByLabel('Select service *').click();
  await page.getByText('Developmental Testing, ...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('Quick Session and add Note Lock Flow');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();

// Reports Lock the Notes
  await page.getByText('Reports').click();
  await page.getByText('Appointment Notes').click();
  await page.getByRole('row', { name: 'Jan 2024 Therapist 1 Couple 2 Developmental Testing, Extended - 50 mins Add note' }).getByRole('button').nth(1).click();
  await page.getByRole('tab', { name: 'Personal' }).click();
  await page.getByText('Progress notes').click();
  await page.getByRole('dialog').locator('div').filter({ hasText: /^Automation Testing form$/ }).click();
  await page.getByPlaceholder('Enter your response here').click();
  await page.getByPlaceholder('Enter your response here').fill('James Willy');
  await page.getByLabel('Male', { exact: true }).check();
  await page.locator('div').filter({ hasText: /^3CPT code\? \*Enter your response hereEnter your response here$/ }).getByLabel('Enter your response here').click();
  await page.getByRole('option', { name: '90791 - Psychiatric' }).getByRole('checkbox').check();
  await page.getByRole('option', { name: '90792 - Psychiatric' }).getByRole('checkbox').check();
  await page.getByLabel('Enter your response here').first().click();
  await page.locator('div').filter({ hasText: /^Enter your response here$/ }).getByLabel('Enter your response here').click();
  await page.getByRole('option', { name: 'F0153 - Vascular dementia,' }).getByRole('checkbox').check();
  await page.locator('div').filter({ hasText: /^Sign here$/ }).nth(2).click();
  await page.getByPlaceholder('Please type your name here').click();
  await page.getByPlaceholder('Please type your name here').fill('James Willy');
  await page.getByRole('button', { name: 'Sign' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  // Lock The notes
  await page.getByText('Reports').click();
  await page.getByText('Appointment Notes').click();
  await page.getByText('Automation Testing form').first().click();
  await page.getByRole('button', { name: 'Sign & Lock' }).nth(1).click();
  await page.getByPlaceholder('Sign').click();
  await page.getByPlaceholder('Sign').fill('Therapist 1 Signed');
  await page.getByRole('button', { name: 'Sign and Lock' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Automation Testing form$/ }).getByRole('button').click();
});