import { test, expect } from '@playwright/test';
test.describe.configure( {mode:'parallel',retries:0,timeout:60000})
test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21znPGFK8sseuCXG3PUWf-2BGx3q8EzDB68fpV2x4dauhbGRCr8l9ZzDPAWHdHvrHdMYGTX-2BN6cVuWkcFMdxlDcRscLvapj5sO4oSi-2F-2FXYTjbNaxZfcrdN5KsX7xhK7gqhJhTZNPbmbiJnOPSHhDTjYXO51-2FbG9vOztAB5Qv3KhqdGaYv0MHowrjhqRAJpJpciszFj2nmYqzZqd6V-2Bw4enLrTo-2Bqx0v4Er9L4X7qcpdRr4QT3CVW2P8I9X-2B1wShcVrDlg-3DhK2R_hDR617gYR-2FTAeQ2ywDUJxLoDNehKzqARZypjGGelOH78CTJm08WXw0c1YCwPMYwTH9EhOClf8ubin7-2BnkfycghiVd0R-2BcFpRLf0B25-2FTNPVb9RZ-2BFmC5JdfQy9Xmt2w1BdK96wAMtcgNSLGkSIj5Ofhuqk6eCFxDTtKby83VaXC5Y66nXfKtoaLIo7fUVCDSi4GnfOou924QjgydYQG-2F9aZjc-2BM0p4vOx3V0-2FS-2FAIS4WxJ34ME8fhXOsGnyVI0gmpjuq4hI0oG-2BjvyIrKgkZT6qGMX6HXKF2ja1-2BcBgbhJhI51Hxz3m1lHfOLoLaPqYgFIqNz2ds-2FV7aXS8-2Fw96Orel-2FFohq6Q6Ii0vP-2B49kNeM-3D');

  await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
  await page.getByText('Booking widget').click();
  const page1Promise = page.waitForEvent('popup');
  // const linkSelector = `:contains("${linkText}")`;  // :contains is a jQuery pseudo-selector
  // await page.waitForSelector(linkSelector, { visible: true });

  // Click on the link
  // await page.click(linkSelector);
  await page.getByText('https://leafs-ehr-web-stage-nmvorvf7ga-as.a.run.app/public/testing-dr4s?all=true').click();
  const page1 = await page1Promise;
  await page1.locator('div').filter({ hasText: /^Owner TeamSelect$/ }).getByRole('button').nth(1).click();
  await page1.locator('div').filter({ hasText: /^Psychotherapy, 45 mins- 45 mins$/ }).nth(1).click();
  await page1.locator('#root > div._layout_731gc_1 > div > div._bookingWidgetWrapper_tlkra_1 > div._bookingWidgetContainer_tlkra_21 > div._bookingContent_tlkra_44 > div:nth-child(2) > div > div._dateTime_142fu_33 > div > div:nth-child(2) > div > div._timeSlotsWrapper_n1juz_6 > div:first-child').click();
  // await page1.getByLabel('Next month').click();
  // // March 1
  // await page1.locator('#root > div._layout_731gc_1 > div > div._bookingWidgetWrapper_tlkra_1 > div._bookingWidgetContainer_tlkra_21 > div._bookingContent_tlkra_44 > div:nth-child(2) > div > div._dateTime_142fu_33 > div > div:nth-child(1) > div > div > div > div.MuiPickersFadeTransitionGroup-root.MuiDateCalendar-viewTransitionContainer.css-1h73gvd > div > div > div.MuiPickersSlideTransition-root.MuiDayCalendar-slideTransition.css-2ldko6 > div > div:nth-child(1) > button:nth-child(2)').click;
  // // await page1.locator('#root > div._layout_731gc_1 > div > div._bookingWidgetWrapper_tlkra_1 > div._bookingWidgetContainer_tlkra_21 > div._bookingContent_tlkra_44 > div:nth-child(2) > div > div._dateTime_142fu_33 > div > div:nth-child(1) > div > div > div > div.MuiPickersFadeTransitionGroup-root.MuiDateCalendar-viewTransitionContainer.css-1h73gvd > div > div > div.MuiPickersSlideTransition-root.MuiDayCalendar-slideTransition.css-2ldko6 > div > div:nth-child(4) > button:nth-child(6)').click;
  // // await page1.locator('#root > div._layout_731gc_1 > div > div._bookingWidgetWrapper_tlkra_1 > div._bookingWidgetContainer_tlkra_21 > div._bookingContent_tlkra_44 > div:nth-child(2) > div > div._dateTime_142fu_33 > div > div:nth-child(1) > div > div > div > div.MuiPickersFadeTransitionGroup-root.MuiDateCalendar-viewTransitionContainer.css-1h73gvd > div > div > div.MuiPickersSlideTransition-root.MuiDayCalendar-slideTransition.css-2ldko6 > div > div:nth-child(4) > button:nth-child(7)').click;
  // // await page1.locator('#root > div._layout_731gc_1 > div > div._bookingWidgetWrapper_tlkra_1 > div._bookingWidgetContainer_tlkra_21 > div._bookingContent_tlkra_44 > div:nth-child(2) > div > div._dateTime_142fu_33 > div > div:nth-child(1) > div > div > div > div.MuiPickersFadeTransitionGroup-root.MuiDateCalendar-viewTransitionContainer.css-1h73gvd > div > div > div.MuiPickersSlideTransition-root.MuiDayCalendar-slideTransition.css-2ldko6 > div > div:nth-child(5) > button:nth-child(1)')
  // await page1.getByRole('button', { name: '12:00 AM' }).click();
  await page1.getByPlaceholder('Enter first name').click();
  await page1.getByPlaceholder('Enter first name').fill('widgetram1');
  await page1.getByPlaceholder('Enter last name').click();
  await page1.getByPlaceholder('Enter last name').fill('Bookingram2');
  await page1.getByPlaceholder('Enter email').click();
  await page1.getByPlaceholder('Enter email').fill('llb+01@gmail.com');
  await page1.getByPlaceholder('Enter phone').click();
  await page1.getByPlaceholder('Enter phone').fill('(963) 553-00000');
  await page1.getByRole('button', { name: 'Request appointment' }).nth(1).click();
  await page1.waitForTimeout(3000);
  await page1.close();
//  Accept the Request Appoinment
  await page.reload();
  await page.waitForTimeout(2000);
  await page.getByText('Requests').click();
  await page.getByRole('tab', { name: 'Requests' }).click();
  await page.getByRole('button', { name: 'Accept' }).nth(1).click();
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.locator('div').filter({ hasText: /^Documents$/ }).getByRole('img').click();
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  
  // Questionaries Form Code
  await page.getByText('Questionnaire').click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Automation Forms');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  // Single Choices
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Gender?');
  await page.getByRole('button', { name: '1 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Single choice', exact: true }).click();
  // Short Answer
  await page.getByRole('option', { name: 'Short answer' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Name of Client?');
  await page.getByLabel('Mandatory').check();
  await page.getByRole('button', { name: '2 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByLabel('', { exact: true }).click();
  // Long Answer
  await page.getByRole('option', { name: 'Long answer' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('NAme of Client and Tell Your Health Conditions?');
  await page.getByRole('button', { name: '3 Please enter a question' }).getByRole('button').nth(2).click();
  await page.getByLabel('', { exact: true }).click();
  // Date 
  await page.getByRole('option', { name: 'Date' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Client Date Of Birth?');
  await page.getByLabel('Mandatory').uncheck();
  await page.getByRole('button', { name: '4 Please enter a question' }).getByRole('button').nth(3).click();
  await page.getByLabel('', { exact: true }).click();

  // // Mutiple Choices
  // await page.getByRole('option', { name: 'Multiple choice' }).click();
  // await page.getByPlaceholder('Please enter a question').click();
  // await page.getByPlaceholder('Please enter a question').fill('Client Symptoms?');
  // await page.getByRole('button', { name: '5 Please enter a question' }).getByRole('button').nth(2).click();
  // await page.getByLabel('', { exact: true }).click();
  
  // E- Singature
  await page.getByRole('option', { name: 'E-signature' }).click();
  await page.getByPlaceholder('Please enter a question').click();
  await page.getByPlaceholder('Please enter a question').fill('Please Sign Your Sing?');
  await page.getByLabel('Mandatory').check();
 
  await page.getByRole('button', { name: 'Preview' }).nth(1).click();
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByTestId('ArrowBackRoundedIcon').click();


});