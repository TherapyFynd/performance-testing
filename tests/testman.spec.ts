import { test, expect } from '@playwright/test';
headless:false
test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=u001.bGPC89E1b-2BR6sAgrMRX5pMCAFLd0GRFBAYQ-2Bw1BvVCRkjRzLfazgIk4E2lBlnyAxXk5-2BRHNgvVvGfhBFxf5VhakbAxrCoxcVKgy6Z3QoRWtMTzXYn1YKaWR0BoTpK-2FrYF8cFmi5zIXcO2snbtxLLT4FO7BT2mjtxhoZOTsvNrzKDaSLGMJDhPlJluqg7JvcoP3oKIbWvss1Hw3rw1SpWL8WSXUougBt2GVF-2BjYWNTkr5UwyJAfSdEqyPJtC5aj7kpv0OistuJHXiDInXp8P0mX7dx8gJ4yASvtKe-2Fj62qmEI36xzdQhFT87v0axaBHeTzyX0TaMV-2FpR8oB-2F2Kjdus66V-2Byp-2FTu8I-2FoDkmULfguWtPMiiUtFDKcd82u3cpJz3qrAu7fqbm5elVxk7IE4ZEA-3D-3Ddj5-_rt5NqHzEoYbMepUYv10bsE5PvG8KSPLleQWpo6UrDPNaspsy7KviSrxq7uiceYlaLtJibEKHlQ8UDdZahdanzKP3FsRHbjLBejYrocYF3OWdJ01MgwqM-2FPxkRiDE2m-2FZBSdWbzkV0GybAZ8xfef9QgVmv4peATG3852tFuCk8ZleAIUxkVqbuRO7ZnOxPbscYvKKLbuKY-2FD7UbKttyZo22-2BQyFU9mZb7f92C7lwmfxnYl7HeF-2FiLdsZm2L8zIvSeqNEqo1D0y7Rj1CKlWOMOXxWTm24yKmQXt4sSJOKm4tIFG28-2FeUfOAhPN4p78upabMlJARsgZ-2FrEwjesKl-2BrRioyoE7WA-2BF06cl0RyOU7Rrw-3D')
  await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
  await page.getByText('Billing').nth(2).click();
  await page.getByRole('tab', { name: 'Insurance' }).click();
//   await page.getByLabel('Practice name').click();
//   await page.getByLabel('Practice name').fill('Mind Simple Practice');
//   await page.getByLabel('NPI').click();
//   await page.getByLabel('NPI').press('CapsLock');
//   await page.getByLabel('NPI').fill('KARGH234');
//   await page.getByLabel('Taxonomy code').click();
//   await page.getByLabel('Taxonomy code').fill('GHRU34');
//   await page.getByLabel('SSN').click();
//   await page.getByLabel('SSN').fill('GGSDB34');
//   await page.getByLabel('SSN').press('CapsLock');
//   await page.getByPlaceholder('Address line').click();
//   await page.getByPlaceholder('Address line').fill('New City of Jersy and New City main road');
//   await page.getByLabel('State').click();
//   await page.getByRole('combobox', { name: 'State' }).fill('wash');
//   await page.getByText('Washington').click();
//   await page.getByLabel('City').click();
//   await page.getByRole('combobox', { name: 'City' }).fill('Kent');
//   await page.getByRole('option', { name: 'Kent' }).click();
//   await page.getByPlaceholder('Zip code').click();
//   await page.getByPlaceholder('Zip code').fill('561198');
//   await page.getByLabel('Include Service location in').check();
//   await page.getByLabel('Enable multiple diagnostic').check();
//   await page.getByRole('button', { name: 'Save' }).nth(1).click();

  await page.getByText('Payers').click();
  await page.getByRole('button', { name: 'Add Payer' }).nth(1).click();
  await page.getByLabel('Search for insurance payers').click();
  await page.getByRole('combobox', { name: 'Search for insurance payers' }).fill('Absolute');
  await page.getByText('ABSOLUTE TOTAL CARE-').click();
  await page.getByRole('button', { name: 'Add' }).nth(1).click();
  await page.locator('._title_g7u48_6 > .MuiButtonBase-root').click();

  await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
  await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Insurance');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('man');
  await page.getByLabel('Email*').click();
  await page.getByLabel('Email*').fill('manraod1+23@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByRole('button', { name: 'Create Client' }).nth(1).click();

  await page.getByText('Insurance man').click();
  await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();

  await page.getByRole('tab', { name: 'Payment' }).click();
  await page.getByLabel('Insurance').check();
  await page.getByLabel('Client itself').check();
  await page.getByPlaceholder('MM/DD/YYYY').first().click();
  await page.getByPlaceholder('MM/DD/YYYY').first().fill('01/01/1999');
  await page.getByLabel('Sex').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByPlaceholder('Phone').click();
  await page.getByPlaceholder('Phone').fill('(734) 573-25415');
  await page.getByLabel('Address line').click();
  await page.getByLabel('Address line').fill('New City main office');
  await page.getByLabel('State').click();

  await page.getByRole('combobox', { name: 'State' }).fill('Utah');
  await page.getByRole('option', { name: 'Utah' }).click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Roy');
  await page.getByRole('option', { name: 'Roy' }).click();
  await page.getByLabel('Zip code').click();
  await page.getByLabel('Zip code').fill('678203');
  await page.getByLabel('Insurance Company').click();
  await page.getByLabel('Insurance Company').fill('Absolute');
  await page.getByText('ABSOLUTE TOTAL CARE-').click();
  await page.getByLabel('Member ID').click();

  await page.getByLabel('Member ID').fill('GHR345');
  await page.getByLabel('Group ID').click();
  await page.getByLabel('Group ID').fill('GGH3');
  await page.getByLabel('Plan ID').click();
  await page.getByLabel('Plan ID').fill('KKH45');
  await page.getByPlaceholder('MM/DD/YYYY').nth(1).click();
  await page.getByPlaceholder('MM/DD/YYYY').nth(1).fill('10/10/2000');
  await page.getByPlaceholder('MM/DD/YYYY').nth(2).click();
  await page.getByPlaceholder('MM/DD/YYYY').nth(2).fill('10/10/2030');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  
});