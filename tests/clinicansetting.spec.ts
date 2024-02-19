import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21yFIJR9Zg2GyhdRC8oVuqOtbidbO9GlhaJ3oVcwxBrG11qocgAYVY-2BOMdoW6dzz9pNj0qVjESbKcK8MrNaoAZYJ5PKXyLNOOn9VgAY5Wk1haCl7z12kj5vR-2FXcT9QQ2nfox1OFoXoAQRaOrN3KhOgi7dwM-2Bhhmukzd4zz65qYWVwzrnKDHUDXvjKOm1HKtgHZNoJkPtE7R5kRQcNZdKvvkBNXXy1k-2FkxpqExBK1AXCatw-3D-3DO5oR_6-2FINxZRg6KhG3dyJk85U1c7eANxlMFjpWIk-2B7CBzQ6cLaE28YiWLoaikHGz1pfa-2BgUEDeIOt52W5DMSi7fBR685dkr9pxtKePgLlH9tvnueCaHEr3fSUwm6DzlciWwN6DTPfB0hp0PLNBscDOFL3lzgX7ZxyvXQa-2FG4q9aFEi4DhjwTscQVoWVpGZ7KXv-2FwFqCQzDk1lDVVpQkfJSefTn8UPn6E4b-2B6VFLQ7UiXlmnddR3F6esnXcWjjf-2F9hcFPXzZlToSLRSPyzqxwPyYyHZIo4yNWabg3SRE76TvJdGyqdnh-2FU39y1WlFKYSkTqxNEetlK6UhEqnxiF54qdXDsf5wzaYNTGFXdVTdey7wJpJI-3D');
  // Clinican settings
  await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
  await page.getByText('Clinician settings').click();
  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('Rajesh');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('Kumar');
  await page.getByLabel('Address Line').click();
  await page.getByLabel('Address Line').fill('Name');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByRole('tab', { name: 'Clinical' }).click();
  // License Type
  await page.getByLabel('License Type*').click();
  await page.getByRole('combobox', { name: 'License Type*' }).fill('ALC');
  await page.getByRole('option', { name: 'ALC' }).click();
  await page.getByLabel('License State').click();
  await page.getByRole('combobox', { name: 'License State' }).fill('ca');
  await page.getByText('California').click();
  await page.getByLabel('License No.').click();
  await page.getByLabel('License No.').press('CapsLock');
  await page.getByLabel('License No.').fill('QEY355');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  // Locations
  await page.getByRole('tab', { name: 'Locations' }).click();
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('Office name').click();
  await page.getByLabel('Office name').press('CapsLock');
  await page.getByLabel('Office name').fill('New Hospital');
  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('New city and new Road');
  await page.getByLabel('Make default location').check();
  await page.getByRole('button', { name: 'Add location' }).nth(1).click();
  // Services
  await page.getByRole('tab', { name: 'Services' }).click();
  await page.getByRole('button', { name: 'Add new' }).nth(1).click();
  await page.getByLabel('CPT Code').click();
  await page.getByRole('combobox', { name: 'CPT Code' }).fill('90792');
  await page.getByText('90792, Psychiatric diagnostic').click();
  await page.getByLabel('Fee *').click();
  await page.getByLabel('Fee *').fill('50');
  await page.getByLabel('Duration *').click();
  await page.getByLabel('Duration *').fill('15');
  await page.getByLabel('Make default service').check();
  await page.getByRole('button', { name: 'Add service' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').click();

// Practise settings
  await page.getByText('Practice settings').click();
  await page.getByLabel('Practice Name').click();
  await page.getByLabel('Practice Name').fill('Mind Simple Practice');
  await page.getByLabel('About').click();
  await page.getByLabel('About').fill('This Nice company');
  await page.getByPlaceholder('Enter phone').click();
  await page.getByPlaceholder('Enter phone').fill('(975) 734-53565');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();
});
