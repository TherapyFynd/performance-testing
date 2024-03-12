import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=u001.bGPC89E1b-2BR6sAgrMRX5pMCAFLd0GRFBAYQ-2Bw1BvVCRkjRzLfazgIk4E2lBlnyAxXk5-2BRHNgvVvGfhBFxf5VhakbAxrCoxcVKgy6Z3QoRWtMTzXYn1YKaWR0BoTpK-2FrYF8cFmi5zIXcO2snbtxLLT4FO7BT2mjtxhoZOTsvNrzK8q4sk1Hk6nkmI5cS0rDno1Db9l1miv5KbZBZSkpX4Y7KeLUO11fpEH90AWbRlgj9QdYi-2FKJ-2B9sx2LIM78U-2BuIPAsXY9WubtbzA9csuMnuKgr1LRYl4vDpwfCQQcFVJTyCYq7FPNvv6ORkVpoS0H-2BY7RPZk4qoWOJs85sGR3tCmhpon9BkYK026PfQMKLGDvJ0HZGNWQVX2NjLo2AtnA4TLnASF0m3DGc-2B0ubbtYG2ow-3D-3DfFYX_5y7MbatOEP89q1Cu8HxvHH-2FENdMmSYcAHJhv0ySewXh5874h2NArKLn-2FYJStU6VcY5kQY9k18BA5jnjdNaAVxvWmeHkcTHoO5LHpgZ8cG7pA6q9FGdohBdd0JFs63OoftLjgU17beD-2B2A7PGtN6vb4zF8ZgnOIZ9H0KlmdIi2Htek64iQpIoX9o2QBoaTbvhzwXgciKn2dxDCCCGAJyWz-2BHP8H-2BMNNMrE8prTnRxzrCkcMc5sEIXKLroTpkUoeG-2F9uBm6lv8HSOwaI4iQ2gvNydp4JNxxyVZUPKVBMxEjUKWZN-2BS6FmX7VUHFdXvTfUXeIrm-2BR82Ju4JTEU86k2fgqZRu7vIrZaX4zwcPYX2KgU-3D');
  
  await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
  await page.getByText('Rajesh Das').click();
  await page.getByRole('button', { name: 'Profile & Clinician' }).nth(1).click();
  await page.getByRole('button', { name: 'Add profile' }).nth(1).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Owner Team' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Rajesh@1');
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._clientFileWrapper_17198_1 > div > div._clientNavigationFixedTop_111x7_1 > div > button > svg > path').click();
  await page.locator('._nameDetails_111x7_20 > .MuiButtonBase-root').click();
  // Minor 
  await page.getByText('Shiva Kumar').click();
  await page.getByRole('button', { name: 'Profile & Clinician' }).nth(1).click();
  await page.getByRole('button', { name: 'Add profile' }).nth(1).click();
  await page.getByLabel('Minor').check();
  await page.getByLabel('', { exact: true }).first().click();
  await page.getByRole('option', { name: 'Owner Team' }).click();
  await page.getByRole('button', { name: '​', exact: true }).click();
  await page.getByRole('option', { name: 'Venkatesh Prasad' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Shiva &Venkatesh@1');
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._clientFileWrapper_17198_1 > div > div._clientNavigationFixedTop_111x7_1 > div > button > svg > path').click();
  await page.locator('._nameDetails_111x7_20 > .MuiButtonBase-root').click();
  // Couple 
  await page.getByText('Rakesh Das').click();
  await page.getByRole('button', { name: 'Profile & Clinician' }).nth(1).click();
  await page.getByRole('button', { name: 'Add profile' }).nth(1).click();
  await page.getByLabel('Couple').check();
  await page.getByLabel('', { exact: true }).first().click();
  await page.getByRole('option', { name: 'Owner Team' }).click();
  await page.getByRole('button', { name: '​', exact: true }).click();
  await page.getByRole('option', { name: 'Poornima Das' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Rakesh &Poornima@1');
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div._clientFileWrapper_17198_1 > div > div._clientNavigationFixedTop_111x7_1 > div > button > svg > path').click();
  await page.locator('._nameDetails_111x7_20 > .MuiButtonBase-root').click();
});