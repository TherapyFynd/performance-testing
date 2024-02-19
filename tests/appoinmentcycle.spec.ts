import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21wsvlZgA9DHed30y-2BuBqHNe33wLbtmmSIFlaKK-2B3rnYYjb-2Bfcnp4js5QCMiIuIsVlSRWkEt2MeNbL4MfsEJA1Z2NeIa4GaGcjpCzVLWeRKZfOXlPMFXnBI0TGs5S23TeGV30Y-2BmznQTFMyGpmT1Hp0g-2FI271KlNltOmGHX8xNxAKSYDs0Xg7GLsKsGqo9xyHFvkvRmUdoouJks4Kos0qzKk-2FnUNU6bvWs0Z4qwx0kMF2A-3D-3DY2pB_6-2FINxZRg6KhG3dyJk85U1c7eANxlMFjpWIk-2B7CBzQ6cLaE28YiWLoaikHGz1pfa-2BgUEDeIOt52W5DMSi7fBR685dkr9pxtKePgLlH9tvnueCaHEr3fSUwm6DzlciWwN6DTPfB0hp0PLNBscDOFL3lzgX7ZxyvXQa-2FG4q9aFEi4DhjwTscQVoWVpGZ7KXv-2FwFa4V7zsZKrZ7ChTSchA9cVe6-2BwZ-2FfGdol4rcO2AC6WvYsmndOzhwqomh3CRWEq4lMjpfj6KTkmvCbvu9-2BlgY7HJkPHQdeOgbCkiLhsN0XououTpI1uBmhy6aeP1Dwvp5RQD8z-2BlNdyi33kgO5j6hfRURSAVRPZc5cYodrWN8s7dU-3D');

  // Create Appoinment Using the Month Methods
  await page.getByRole('button', { name: 'Month' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('div').filter({ hasText: /^21$/ }).click();
  await page.getByLabel('Select client *').click();
  await page.getByText('James 1', { exact: true }).click();
  await page.getByLabel('Select service *').click();
  await page.getByText('Developmental Testing, ...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('New every day testing');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();

// //   Create Appoinment in Top bar
// await page.getByRole('button', { name: 'Create' }).nth(1).click();
//   await page.getByRole('menuitem', { name: 'Create appointment' }).click();
//   await page.getByLabel('Select client *').click();
//   await page.getByRole('option', { name: 'Owner Client' }).click();
//   await page.getByLabel('Select service *').click();
//   await page.getByText('Family psychotherapy...').click();
//   await page.getByLabel('Choose date, selected date is').click();
//   await page.getByLabel('Next month').click();
//   await page.locator('body > div.MuiPickersPopper-root.css-1mtsuo7.MuiPopper-root > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPickersPopper-paper.css-1ovyxhj > div > div > div > div.MuiPickersFadeTransitionGroup-root.MuiDateCalendar-viewTransitionContainer.css-1h73gvd > div > div > div.MuiPickersSlideTransition-root.MuiDayCalendar-slideTransition.css-2ldko6 > div > div:nth-child(5) > button:nth-child(4)').click;
//   await page.getByLabel('Choose time, selected time is').click();
//   await page.getByLabel('3 hours').click();
//   await page.getByLabel('0 minutes', { exact: true }).click();
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.getByPlaceholder('Enter text here').click();
//   await page.getByPlaceholder('Enter text here').fill('This long month test');
//   await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();

// Create Appoinment Button
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create appointment' }).click();
  await page.getByLabel('Select client *').click();
  await page.getByRole('option', { name: 'James 1' }).click();
  await page.getByLabel('Select service *').click();
  await page.getByText('Family psychotherapy...').click();
//   await page.getByLabel('Choose date, selected date is').click();
//   await page.getByLabel('Next month').click();
// //   Feb 28
//   await page.locator('body > div.MuiPickersPopper-root.css-1mtsuo7.MuiPopper-root > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPickersPopper-paper.css-1ovyxhj > div > div > div > div.MuiPickersFadeTransitionGroup-root.MuiDateCalendar-viewTransitionContainer.css-1h73gvd > div > div > div.MuiPickersSlideTransition-root.MuiDayCalendar-slideTransition.css-2ldko6 > div > div:nth-child(5) > button:nth-child(4)').click;
//   await page.waitForTimeout(3000);
//   await page.getByLabel('Choose time, selected time is').click();
//   await page.getByLabel('11 hours').click();
//   await page.getByLabel('0 minutes', { exact: true }).click();
//   await page.getByLabel('PM').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('Quick demo Please');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.waitForTimeout(4000);
  



//   In client File
await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
await page.getByText('James 1').click();
//   Add Pop page( Create Appoinment)
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create appointment' }).click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();

});