import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=u001.bGPC89E1b-2BR6sAgrMRX5pMCAFLd0GRFBAYQ-2Bw1BvVCRkjRzLfazgIk4E2lBlnyAxXk5-2BRHNgvVvGfhBFxf5VhakbAxrCoxcVKgy6Z3QoRWtMTzXYn1YKaWR0BoTpK-2FrYF8cFmi5zIXcO2snbtxLLT4FO7BT2mjtxhoZOTsvNrzK5Sg4HNfL8gLP5s4994lVV-2FE00alEdHz1GyzdRuPtvEKnCsNa0qBcYQUnV1sRu-2FnRzBSkuOY2D1CKL-2BwnESQHpQfkDT3In1-2BU6pTRxnmFbXAdQRBHyxgcIMORMq-2BxGXNorKGJGYg5ifx61KxLYCSmXC9DFxMyz-2Fa-2Fte4R0S2Z43OojU0TyqBseMIF8xr8U6q71ZFeXJVq-2BoQrwxuLiEoYQmbDCGjPX95-2Fli83MsZWpjw-3D-3DeLFG_5y7MbatOEP89q1Cu8HxvHH-2FENdMmSYcAHJhv0ySewXh5874h2NArKLn-2FYJStU6VcY5kQY9k18BA5jnjdNaAVxvWmeHkcTHoO5LHpgZ8cG7pA6q9FGdohBdd0JFs63OoftLjgU17beD-2B2A7PGtN6vb4zF8ZgnOIZ9H0KlmdIi2Htek64iQpIoX9o2QBoaTbvhN9DbHVBCygfVlxlIoWb4AZkDj64UWslA-2F9Rxifi1rA8ivuebUMbp8D-2BCwUlMcJdiVL5DXzwOuQ0nbfqhCkyKEf9WhV2sSfi9PipoSmnYdr7V79mioo6vnVNOmt5cRHeewhmF9D9A3MmUKTtrwpH2BNJ8n4R7T6G4j6T-2FjmW3lkI-3D')
  await page.locator('div').filter({ hasText: /^Insurance$/ }).getByRole('img').click();
  await page.getByRole('button', { name: 'Select all' }).nth(1).click();
  await page.getByRole('button', { name: 'Deselect all' }).nth(1).click();
  // Click on the create Claim Button
  await page.locator('.primary-ca-semi-bold > .MuiButtonBase-root > .btn-outline-default').first().click();
  // await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div:nth-child(3) > div > div._table_avgkz_33 > table > tbody > tr:nth-child(1) > td:nth-child(8) > span > button > button').click();
  await page.locator('#root > div._layout_10ldc_1 > div > div._cms1500FormWrapper_hmd23_1 > div._cms1500FormContainer_hmd23_5 > div._formBody_hmd23_21.false > div:nth-child(4) > div._questionBody_hmd23_32 > div._radioContainer_hmd23_54 > div > div:nth-child(1) > div > label > span > input').click();
  // await page.locator('div:nth-child(3) > div > ._questionBody_hmd23_32 > ._radioContainer_hmd23_54 > ._options_hmd23_62 > div > .MuiFormControl-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check();
  // await page.waitForTimeout(2000);
  // await page.getByLabel('A', { exact: true }).click();
  // await page.getByLabel('A', { exact: true }).fill('Good');
  // await page.getByLabel('B', { exact: true }).click();
  // await page.getByLabel('B', { exact: true }).fill('Good');
  // await page.getByLabel('C', { exact: true }).click();
  // await page.getByLabel('C', { exact: true }).fill('Good');
  // await page.getByLabel('D', { exact: true }).click();
  // await page.getByLabel('D', { exact: true }).fill('Good');
  // await page.getByLabel('E', { exact: true }).click();
  // await page.getByLabel('E', { exact: true }).fill('Bad');
  // await page.getByLabel('F', { exact: true }).click();
  // await page.getByLabel('F', { exact: true }).fill('Bad');
  // await page.getByLabel('G', { exact: true }).click();
  // await page.getByLabel('G', { exact: true }).fill('Bad');
  // await page.getByLabel('H', { exact: true }).fill('Bad');
  // await page.getByLabel('H', { exact: true }).click();
  // await page.getByLabel('I', { exact: true }).click();
  // await page.getByLabel('I', { exact: true }).fill('Very Good');
  // await page.getByLabel('J').click();
  // await page.getByLabel('J').fill('Very Bad');
  // await page.getByLabel('K').click();
  // await page.getByLabel('K').fill('Very Good');
  // await page.getByLabel('L', { exact: true }).fill('Bad');
  // await page.getByLabel('L', { exact: true }).click();
  // await page.getByLabel('Charges').click();
  // await page.getByLabel('Charges').fill('0');
  // await page.getByLabel('ID', { exact: true }).click();
  // await page.getByLabel('ID', { exact: true }).press('CapsLock');
  // await page.getByLabel('ID', { exact: true }).fill('HGSGDAGW243');
  // await page.getByLabel('Service facility name').click();
  // await page.getByLabel('Service facility name').fill('nEW c');
  // await page.getByLabel('Service facility name').press('CapsLock');
  // await page.getByLabel('Service facility name').fill('New City man');
  // await page.locator('input[name="box32currentInjuryServiceFacilityAddress\\.addressLine1"]').click();
  // await page.locator('input[name="box32currentInjuryServiceFacilityAddress\\.addressLine1"]').fill('New City ');
  // await page.locator('input[name="box32currentInjuryServiceFacilityAddress\\.city"]').click();
  // await page.locator('input[name="box32currentInjuryServiceFacilityAddress\\.city"]').fill('Washigton');
  // await page.locator('input[name="box32currentInjuryServiceFacilityAddress\\.state"]').click();
  // await page.locator('input[name="box32currentInjuryServiceFacilityAddress\\.state"]').fill('Califonisa');
  // await page.locator('input[name="box32currentInjuryServiceFacilityAddress\\.zipCode"]').click();
  // await page.locator('input[name="box32currentInjuryServiceFacilityAddress\\.zipCode"]').fill('56102');
  // await page.getByLabel('Telephone (include area code)').click();
  // await page.getByLabel('Telephone (include area code)').fill('632312141');
  // await page.getByLabel('Name', { exact: true }).click();
  // await page.getByLabel('Name', { exact: true }).fill('New City Jourseny ');
  // await page.locator('input[name="box33billingProviderAddress\\.addressLine1"]').click();
  // await page.locator('input[name="box33billingProviderAddress\\.addressLine1"]').fill('New City main road');
  // await page.locator('input[name="box33billingProviderAddress\\.city"]').click();
  // await page.locator('input[name="box33billingProviderAddress\\.city"]').fill('Washogton');
  // await page.locator('input[name="box33billingProviderAddress\\.state"]').fill('C');
  // await page.locator('input[name="box33billingProviderAddress\\.state"]').click();
  // await page.locator('input[name="box33billingProviderAddress\\.state"]').fill('Califonia');
  // await page.locator('input[name="box33billingProviderAddress\\.zipCode"]').click();
  // await page.locator('input[name="box33billingProviderAddress\\.zipCode"]').fill('561202');
  // await page.getByLabel('Phone', { exact: true }).click();
  // await page.getByLabel('Phone', { exact: true }).fill('562674211271241');
  // await page.locator('input[name="box33billingProviderNpi"]').click();
  // await page.locator('input[name="box33billingProviderNpi"]').fill('HFASHF35');
  // await page.getByLabel('Taxonomy code').click();
  // await page.getByLabel('Taxonomy code').fill('6545646');
  // await page.getByRole('button', { name: 'Create Claim' }).nth(1).click();

  // await page.getByRole('tab', { name: 'Unclaimed appointments' }).click();
  await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div:nth-child(3) > div > div._table_avgkz_33 > table > tbody > tr:nth-child(1) > td:nth-child(1) > span > div > div > label > span > input').click();
  await page.getByRole('button', { name: 'Auto create claim' }).nth(1).click();

  // await page.locator('.PrivateSwitchBase-input').first().check();
  // await page.getByRole('button', { name: 'Auto submit claim' }).nth(1).click();
  // await page.getByLabel('Payer').click();
  // await page.getByRole('option', { name: '- ABSOLUTE TOTAL CARE' }).click();
  // await page.getByRole('combobox', { name: 'Payer' }).click();
  // await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  // await page.getByLabel('Clear').click();
  // await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();

  // await page.locator('div').filter({ hasText: /^Insurance$/ }).getByRole('img').click();
  // await page.locator('td').first().click();
  // await page.getByRole('button', { name: 'Auto create claim' }).nth(1).click();

  // await page.getByRole('tab', { name: 'Claims' }).click();
  await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div:nth-child(3) > div > div._table_1hgma_16 > table > tbody > tr:nth-child(1) > td:nth-child(8) > span > button > button').click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('Hey I am Adding Clients File Details here so check this');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

  await page.getByRole('button', { name: 'YZvo9S79' }).click();
  await page.locator('.MuiDialog-root > .MuiBackdrop-root').click();
  await page.getByRole('button', { name: 'Close' }).nth(1).click();

  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.locator('div').filter({ hasText: /^StatusSubmittedEdit$/ }).getByRole('button').nth(1).click();
  await page.getByLabel('Select status').click();
  await page.getByRole('option', { name: 'Sent' }).click();
  await page.getByPlaceholder('Remarks').click();
  await page.getByPlaceholder('Remarks').fill('Sent this Payer Details to Change Healthcare');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^StatusSentEdit$/ }).getByRole('button').nth(1).click();
  await page.getByLabel('Sent').click();
  await page.getByRole('option', { name: 'Paid', exact: true }).click();
  await page.getByPlaceholder('Remarks').click();
  await page.getByPlaceholder('Remarks').fill('Paid Form Payer Company');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('input[name="clientCopayAmount"]').click();
  await page.locator('input[name="clientCopayAmount"]').fill('50');
  await page.locator('input[name="insurancePaymentAmount"]').click();
  await page.locator('input[name="insurancePaymentAmount"]').fill('50');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('span').filter({ hasText: 'Insurance claim #frAD-xHR' }).getByRole('button').click();


  // await page.getByRole('button', { name: 'Created' }).click();
  // await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();
  // await page.getByRole('button', { name: 'All' }).click();
  // await page.getByRole('button', { name: 'Apply filters' }).nth(1).click();












  await page.locator('div').filter({ hasText: /^Insurance$/ }).getByRole('img').click();
  await page.getByRole('tab', { name: 'Claims' }).click();
  await page.getByRole('row', { name: 'Mar 2024 Rakesh (T1) Healthkeeper HMO 13 13 $100 Created View' }).getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByPlaceholder('Start typing here').click();
  await page.getByPlaceholder('Start typing here').fill('Hi this Client infomation adding');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByRole('button', { name: 'Submit claim' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^StatusSubmittedEdit$/ }).getByRole('button').nth(1).click();
  await page.getByLabel('Select status').click();
  await page.getByRole('option', { name: 'Paid', exact: true }).click();
  await page.getByPlaceholder('Remarks').click();
  await page.getByPlaceholder('Remarks').fill('Paid From Payer List');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('input[name="clientCopayAmount"]').click();
  await page.locator('input[name="clientCopayAmount"]').fill('50');
  await page.locator('input[name="insurancePaymentAmount"]').click();
  await page.locator('input[name="insurancePaymentAmount"]').fill('40');
  await page.locator('input[name="writeOffAmount"]').click();
  await page.locator('input[name="writeOffAmount"]').fill('10');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('span').filter({ hasText: 'Insurance claim #pvjOTT-C' }).getByRole('button').click();
 });