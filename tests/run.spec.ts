import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=u001.bGPC89E1b-2BR6sAgrMRX5pMCAFLd0GRFBAYQ-2Bw1BvVCRkjRzLfazgIk4E2lBlnyAxXk5-2BRHNgvVvGfhBFxf5VhakbAxrCoxcVKgy6Z3QoRWtMTzXYn1YKaWR0BoTpK-2FrYF8cFmi5zIXcO2snbtxLLT4FO7BT2mjtxhoZOTsvNrzKLkvThB2H9XYL08QC-2Fyeoity-2BDuPIHZwpncF3u5HNPbiqtIvqRH8-2FchglTf3cZQXXPn22ft3JII1vvUntaMhcABAmV7Lfn5ZfXHTGogfb4cpF7ObMhJCizseCXDxiOMubD5QOrnt-2FFlCNtEDMeYOv95jGjusF2gOpQvbafAYWtzDkqOds-2BKD2pF9Xx3i2p-2BkuaGl2aStKQjOP-2BmOBvOVaMZ5e1xkDKvUfM0tO1Sce23NsNq9-2FUck-2FoqQCc5vYHS10-3D6LBA_oDcKLxfNVJKHnGTf24LMch7lvHipuyo9mG3Hjco48iy-2FXRRrJe9vb1BJzy-2FojpwM83x0ze0Wchx7K93kbrdXaxDnTV-2BOZRsGHtGBeZa3DGwsJ0G-2BWX5YgNs-2B8uYahuRQz66COImCZNnJJM3TK8906DzvDtq-2FXtf6GL1T1CVeiEgxdlmr8-2BAE6TPE3QSZJppXRzycxaVqpfrrCs3n7KuSVhNpyWz0LChheQZGJdu9rgV-2FXp3rjuzRLr1GPXicESSs-2BY3CTaAqYbUX7sgDsRSEshq7VCOFsATWHE-2FwbSID1UPnQDJTGxdwSqnqYl3XjZFq23ffT-2F2fzqDm7uXYTj5QrmYqRoAUH-2FZTOVBVMqPLMRo-3D');
  
  await page.getByRole('button', { name: 'Month' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.locator('div').filter({ hasText: /^17$/ }).click();
  await page.getByLabel('Select client profile*').click();
  await page.getByRole('option', { name: 'Colin (OT)' }).click();
  await page.getByRole('button', { name: 'Create Appointment' }).nth(1).click();

//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.locator('div').filter({ hasText: /^20$/ }).click();
//   await page.getByLabel('Select client profile*').click();
//   await page.getByRole('option', { name: 'Colin (OT)' }).click();
//   await page.getByLabel('Choose date, selected date is').click();
//   await page.locator('div').filter({ hasText: /^Create appointment$/ }).getByRole('button').click();
});