import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21ywJM-2F8kysN7T6wGbs6-2BXShUACjQ6n-2FrqwpAXl6aAioIg-2BQZPIrCDe3VCdPU1-2B1T0EVCvrlWdw9EHW0x4kLI6hY8odUY9SHcNllUgSlsTi4iEskQgKDWmxBGdDzIsSole-2FxNVxgLbrSVoEgabvVnAoYybPnqoIue84R7fIk8AYF3xkfQ7Mutt6c-2B8F4Ew732kvhCpxGt7p-2FN9TXqTg5oOYsn6KFwP3AB7EkVgaPdbL-2Bog-3D-3DdCr8_6-2FINxZRg6KhG3dyJk85U1c7eANxlMFjpWIk-2B7CBzQ6cLaE28YiWLoaikHGz1pfa-2BgUEDeIOt52W5DMSi7fBR685dkr9pxtKePgLlH9tvnueCaHEr3fSUwm6DzlciWwN6DTPfB0hp0PLNBscDOFL3lzgX7ZxyvXQa-2FG4q9aFEi4DhjwTscQVoWVpGZ7KXv-2FwFL5lSng8s6X9GtG8aZG5iJpAYXI-2B6tcoMmoE4j5CNrkHlJr3TEt5lZ-2Fz4FGCjMMXWYr1FAzDDfwUjetNARaveQY8zWWRPMs9VXCpHtAe9YdfZiOCrp4sjm0es9Beh53T62SgnQeA8ykNG-2B0-2FstqiNDJM-2B1dKfqX7KGjIXUy3x-2F6k-3D');
  await page.locator('div').filter({ hasText: /^Documents$/ }).getByRole('img').click();
  await page.getByRole('tab', { name: 'System' }).click();
  await page.getByText('Questionnaires').click();
  await page.locator('div').filter({ hasText: /^100 question$/ }).getByTestId('MoreVertIcon').click();
  await page.getByRole('menuitem', { name: 'Preview' }).click();
  await page.getByRole('button', { name: 'Use template' }).nth(1).click();
//   Edit Icon
  await page.getByTestId('EditOutlinedIcon').click();
//   or
//   await page.locator('._edit_8mx9g_45').click();
  await page.getByPlaceholder('type here').clear;
  await page.getByPlaceholder('type here').fill('100 Question Form');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  await page.getByRole('button', { name: 'Preview' }).nth(1).click();
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').locator('path').click();
//   Consent form
  await page.getByRole('tab', { name: 'System' }).click();
  await page.getByText('Consent forms').click();
  await page.locator('div').filter({ hasText: /^Template2 for consent$/ }).getByTestId('MoreVertIcon').click();
  await page.getByRole('menuitem', { name: 'Preview' }).click();
  await page.getByRole('button', { name: 'Use template' }).nth(1).click();
  await page.getByTestId('EditOutlinedIcon').click();
  await page.getByPlaceholder('type here').clear;
  await page.getByPlaceholder('type here').fill('Templates For Consent Form');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  await page.getByLabel('Add Client signature').check();
  await page.getByLabel('Add Provider signature').check();
  await page.getByRole('button', { name: 'Preview' }).nth(1).click();
  await page.getByRole('button').click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').click();
//   Progess Note
  await page.getByRole('tab', { name: 'System' }).click();
  await page.getByText('Progress notes').click();
  await page.getByTestId('ArrowBackRoundedIcon').click();
//   Treatment Plan
  await page.getByText('Treatment plans').click();
  await page.getByTestId('ArrowBackRoundedIcon').click();
//   Assessment Form
  await page.getByText('Assessments').click();
  await page.getByTestId('ArrowBackRoundedIcon').click();
});