import { test, expect } from '@playwright/test';
test.describe.configure( {mode:'parallel',retries:0,timeout:60000})
test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21znPGFK8sseuCXG3PUWf-2BGx3q8EzDB68fpV2x4dauhbGRCr8l9ZzDPAWHdHvrHdMYGTX-2BN6cVuWkcFMdxlDcRscLvapj5sO4oSi-2F-2FXYTjbNaxZfcrdN5KsX7xhK7gqhJhTZNPbmbiJnOPSHhDTjYXO51-2FbG9vOztAB5Qv3KhqdGaYv0MHowrjhqRAJpJpciszFj2nmYqzZqd6V-2Bw4enLrTo-2Bqx0v4Er9L4X7qcpdRr4QT3CVW2P8I9X-2B1wShcVrDlg-3DhK2R_hDR617gYR-2FTAeQ2ywDUJxLoDNehKzqARZypjGGelOH78CTJm08WXw0c1YCwPMYwTH9EhOClf8ubin7-2BnkfycghiVd0R-2BcFpRLf0B25-2FTNPVb9RZ-2BFmC5JdfQy9Xmt2w1BdK96wAMtcgNSLGkSIj5Ofhuqk6eCFxDTtKby83VaXC5Y66nXfKtoaLIo7fUVCDSi4GnfOou924QjgydYQG-2F9aZjc-2BM0p4vOx3V0-2FS-2FAIS4WxJ34ME8fhXOsGnyVI0gmpjuq4hI0oG-2BjvyIrKgkZT6qGMX6HXKF2ja1-2BcBgbhJhI51Hxz3m1lHfOLoLaPqYgFIqNz2ds-2FV7aXS8-2Fw96Orel-2FFohq6Q6Ii0vP-2B49kNeM-3D');
  await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
  //Booking widget flows
  await page.getByText('Booking widget').click();
  await page.getByRole('button', { name: 'Generate link' }).nth(1).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#root > div._layout_731gc_1 > div._content_731gc_7 > div._bookingWidgetWrapper_4jerd_1 > div._copyLinkContainer_4jerd_19 > div._link_4jerd_28 > p').click();
  const page1 = await page1Promise;
  await page1.locator('div').filter({ hasText: /^Owner TeamSelect$/ }).getByRole('button').nth(1).click();
  await page1.locator('div').filter({ hasText: /^Psychotherapy, 45 mins- 45 mins$/ }).nth(1).click();
  await page1.locator('#root > div._layout_731gc_1 > div > div._bookingWidgetWrapper_tlkra_1 > div._bookingWidgetContainer_tlkra_21 > div._bookingContent_tlkra_44 > div:nth-child(2) > div > div._dateTime_142fu_33 > div > div:nth-child(2) > div > div._timeSlotsWrapper_n1juz_6 > div:first-child').click();
  // await page1.getByLabel('Next month').click();
  await page1.getByPlaceholder('Enter first name').click();
  await page1.getByPlaceholder('Enter first name').fill('James');
  await page1.getByPlaceholder('Enter last name').click();
  await page1.getByPlaceholder('Enter last name').fill('Willy');
  await page1.getByPlaceholder('Enter email').click();
  // 
  // const Bookinginbox = await mailslurp.inboxController.createInbox({});
  // await page1.getByPlaceholder('Enter email').fill(Bookinginbox.emailAddress);
  await page1.getByPlaceholder('Enter email').fill('xyz+5@gmail.com');
  await page1.getByPlaceholder('Enter phone').click();
  await page1.getByPlaceholder('Enter phone').fill('(893) 553-00024');
  await page1.getByRole('button', { name: 'Request appointment' }).nth(1).click();
  await page1.waitForTimeout(1000);
  await page1.close();
  await page.reload();
  await page.getByText('Requests').click();
  await page.getByRole('tab', { name: 'Requests' }).click();
  await page.getByRole('button', { name: 'Accept' }).nth(1).click();
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
  await page.waitForTimeout(6000);
  await page.reload();
  await page.getByTestId('ArrowBackRoundedIcon').click();

  

});