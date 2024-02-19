import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21xkvoM8JpvD0PwjIDmWnsJZC2RVhkRAyVe-2BlvSed3dVlmbbL5NmBsb3rsg7cLjhsFp3TKej4eKUA-2FYyuZYPBqD0J-2FuTo-2Fvx0qORhjBVpuAidtYP8AxLBe0icg2mgE86s2Pj92z-2ByWhd7m5fITdi6-2BRlGpoJ3cOx-2Fl7CjeCW-2BlECE5dVWeYBOJo1bRBWHZguCa0KDnXu42dt5dU-2B-2BwEA4ssxHDefGj277ZcEHawbqWBkjba7wYRkCtih9JmukfirDdI-3DaTyk_hDR617gYR-2FTAeQ2ywDUJxLoDNehKzqARZypjGGelOH78CTJm08WXw0c1YCwPMYwTH9EhOClf8ubin7-2BnkfycghiVd0R-2BcFpRLf0B25-2FTNPVb9RZ-2BFmC5JdfQy9Xmt2w1BdK96wAMtcgNSLGkSIj5Ofhuqk6eCFxDTtKby83VaXC5Y66nXfKtoaLIo7fUVCDSNQ2gcMSSom8qZGFhrCRjrRje9V4p36N07pZmA265aSGGvulJou8ooxCaLN-2FppDihsHm-2FMgOnU9ZLWtIsh-2B4NKf5Y1-2Fblve0lhtAljesoJHLoqbuSxwTz08Is50dtVQy7YMzrE3oWLoeXibl8-2BKuPOlSgFFOTazTgCtk23m8MTWfznb1P1UU6Ijzle39DmnIN');
//   await page.getByRole('button', { name: 'Month' }).click();
//   await page.getByRole('button', { name: 'Day', exact: true }).click();
//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.locator('div').filter({ hasText: /^9:00 AM – 9:05 AMOT: Owner Client9:00 AM$/ }).nth(1).click();
//   await page.getByLabel('Select client *').click();
//   await page.getByRole('combobox', { name: 'Select client *' }).fill('Owner client');
//   await page.getByRole('combobox', { name: 'Select client *' }).press('Enter');
//   await page.getByLabel('Select service *').click();
//   await page.getByText('Developmental Testing, ...').click();
//   await page.getByPlaceholder('Enter text here').click();
//   await page.getByPlaceholder('Enter text here').fill('New every day testing');
//   await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
//   await page.getByText('OT: Owner Client').nth(1).click();
//   await page.locator('._appointmentHeader_15uwk_6 > .MuiButtonBase-root').click();
//   await page.getByRole('button', { name: 'Month' }).click();

// Create Appoinment Using the Month Methods
  await page.getByRole('button', { name: 'Month' }).click();
  await page.locator('div').filter({ hasText: 'Create0RequestsChatsOwner Team' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^23$/ }).click();
  await page.getByLabel('Select client *').click();
  await page.getByText('Owner Client', { exact: true }).click();
  await page.getByLabel('Select service *').click();
  await page.getByText('Developmental Testing, ...').click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('New every day testing');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();

//   Create Appoinment in Top bar
await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create appointment' }).click();
  await page.getByLabel('Select client *').click();
  await page.getByRole('option', { name: 'Owner Client' }).click();
  await page.getByLabel('Select service *').click();
  await page.getByText('Family psychotherapy...').click();
  await page.getByLabel('Choose date, selected date is').click();
  await page.getByLabel('Next month').click();
  await page.locator('body > div.MuiPickersPopper-root.css-1mtsuo7.MuiPopper-root > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPickersPopper-paper.css-1ovyxhj > div > div > div > div.MuiPickersFadeTransitionGroup-root.MuiDateCalendar-viewTransitionContainer.css-1h73gvd > div > div > div.MuiPickersSlideTransition-root.MuiDayCalendar-slideTransition.css-2ldko6 > div > div:nth-child(5) > button:nth-child(4)').click;
  await page.getByLabel('Choose time, selected time is').click();
  await page.getByLabel('3 hours').click();
  await page.getByLabel('0 minutes', { exact: true }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByPlaceholder('Enter text here').click();
  await page.getByPlaceholder('Enter text here').fill('This long month test');
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();
  await page.getByRole('button', { name: 'Month' }).click();
  await page.getByRole('button', { name: 'Next' }).click();

});

