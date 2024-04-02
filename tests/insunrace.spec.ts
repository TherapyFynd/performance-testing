import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=u001.bGPC89E1b-2BR6sAgrMRX5pMCAFLd0GRFBAYQ-2Bw1BvVCRkjRzLfazgIk4E2lBlnyAxXk5-2BRHNgvVvGfhBFxf5VhakbAxrCoxcVKgy6Z3QoRWtMTzXYn1YKaWR0BoTpK-2FrYF8cFmi5zIXcO2snbtxLLT4FO7BT2mjtxhoZOTsvNrzKIYM3R-2BS5rcFzI4mSTufhY-2Fiq63yWCPQJ-2B-2BENYVkj8cpHILrvwlPvjXHBUafO1KDLi3ca6-2BQx273E-2BRA4yg0IVpF1uUPZ2wSsyXbijrIVr7GDRGIRK5lrV2gIhXZXcPZewCrvxD3Vi8Xd0BTuQQHuYr0S1XqgBUHI7dNtQlP8M6sl-2FN8RNUmCzJGMgdpO9V-2BoSS6eU65ITdmsV8jyH4A5gXh1u8rh86Ky2iKBSELPB99TAyMjM5ldaB-2FmGtr9x8oo-3DjpNG_oDcKLxfNVJKHnGTf24LMch7lvHipuyo9mG3Hjco48iy-2FXRRrJe9vb1BJzy-2FojpwM83x0ze0Wchx7K93kbrdXaxDnTV-2BOZRsGHtGBeZa3DGwsJ0G-2BWX5YgNs-2B8uYahuRQz66COImCZNnJJM3TK8906DzvDtq-2FXtf6GL1T1CVeiEgxdlmr8-2BAE6TPE3QSZJppXhnoazm51XgOMeFkaIslO43WBmGWwk0Nk4qocqA-2BklNasPxCq-2FG9YNKGywazGZJCzwcHE30rIoN-2BS8zG-2BxYeWgKpezpzQiH-2FOzzJmv69bS3Z2qWe2pO-2FoaoDtyeGk6JmKvhUemNXx02KjedM28b2GJ0cI8F2KzlSuLpwNqKEc0Lc-3D')
//     await page.locator('div').filter({ hasText: /^Insurance$/ }).getByRole('img').click();
//       await page.getByRole('button', { name: 'Select all' }).nth(1).click();
//       // await page.getByRole('button', { name: 'Deselect all' }).nth(1).click();
//       // await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div:nth-child(3) > div > div._table_126te_33 > table > tbody > tr:nth-child(1) > td:nth-child(1) > span > div > div > label > span > svg > path').click();
//       await page.getByRole('button', { name: 'Auto create claim' }).nth(1).click();
//       await page.getByRole('tab', { name: 'Claims' }).click(); 
//       await page.getByRole('cell', { name: 'View' }).first()
//       // await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div:nth-child(3) > div > div._table_13e1r_16 > table > tbody > tr:nth-child(2) > td:nth-child(8) > span > button > button > span > span._label_ns5gx_15').click();
//       await page.getByRole('button', { name: 'Add note' }).nth(1).click();
//   await page.getByPlaceholder('Start typing here').click();
//   await page.getByPlaceholder('Start typing here').fill('Hey I am Adding Clients File Details here so check this');
//   await page.getByRole('button', { name: 'Save' }).nth(1).click();
//   await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
//   await page.waitForTimeout(2000);
//   await page.locator('div').filter({ hasText: /^StatusSubmittedEdit$/ }).getByRole('button').nth(1).click();
//   await page.getByLabel('Select status').click();
//   await page.getByRole('option', { name: 'Sent' }).click();
//   await page.getByPlaceholder('Remarks').click();
//   await page.getByPlaceholder('Remarks').fill('Sent this Payer Details to Change Healthcare');
//   await page.getByRole('button', { name: 'Save' }).nth(1).click();
//   await page.locator('div').filter({ hasText: /^StatusSentEdit$/ }).getByRole('button').nth(1).click();
//   await page.getByLabel('Sent').click();
//   await page.getByRole('option', { name: 'Paid', exact: true }).click();
//   await page.getByPlaceholder('Remarks').click();
//   await page.getByPlaceholder('Remarks').fill('Paid Form Payer Company');
//   await page.getByRole('button', { name: 'Save' }).nth(1).click();
//   // await page.locator('input[name="clientCopayAmount"]').click();
//   // await page.locator('input[name="clientCopayAmount"]').fill('50');
//   // await page.locator('input[name="insurancePaymentAmount"]').click();
//   // await page.locator('input[name="insurancePaymentAmount"]').fill('40');
//   // await page.locator('input[name="writeOffAmount"]').click();
//   // await page.locator('input[name="writeOffAmount"]').fill('10');
//   // await page.getByRole('button', { name: 'Save' }).nth(1).click();
//   await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._header_174vt_7 > span > button > svg > path').click();

await page.locator('div').filter({ hasText: /^Notifications$/ }).getByRole('img').click();
await page.getByText('Requests').click();
await page.locator('button').filter({ hasText: 'Accept' }).nth(1).click();
await page.getByRole('button', { name: 'Continue' }).nth(1).click();
await page.getByRole('button', { name: 'Create Client' }).nth(1).click();

await page.locator('div').filter({ hasText: 'Owner Team' }).nth(3).click();
// await page.locator('#root > div._header_1uy0f_1 > div > div > p').click();
       await page.getByRole('menuitem', { name: 'Profile' }).click();
      await page
    .locator(
      '#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._generalSettingsTab_18vvz_1 > div > div._flexContainer_18vvz_4 > div._userNameDetailsContainer_18vvz_8 > div > div._imagePicker_18vvz_17 > input[type=file]'
    )
    .setInputFiles('C:/Users/Rajesh/Downloads/therapist.jpg');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
//   await page
//     .locator('#root > div._header_1uy0f_1 > div > div > p')
//     .click();
    await page.locator('div').filter({ hasText: 'Owner Team' }).nth(3).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

    }); 