import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=u001.bGPC89E1b-2BR6sAgrMRX5pMCAFLd0GRFBAYQ-2Bw1BvVCRkjRzLfazgIk4E2lBlnyAxXk5-2BRHNgvVvGfhBFxf5VhakbAxrCoxcVKgy6Z3QoRWtMTzXYn1YKaWR0BoTpK-2FrYF8cFmi5zIXcO2snbtxLLT4FO7BT2mjtxhoZOTsvNrzLkvHaRYvWJqTxfqSxsCkG30CvKBFuvG5NDTc5stujXwMLjYQtjkT8NRQvxGXm-2FrzyiooUbFtC8-2BXzJm3iUtwAnMqM8feXuzqPrimjcuICHAocNZ-2Bf7pH67DPjWUxJGwUNvn8NVxSnLoHqMIeDNkrj9DKwsb5VNaQYl7881gB8-2BO8dMfQWJhrRrZq-2BUe9pYmP5PKDlG-2FxTwlF6mGgxPICNpwSp4pDwDgy49lwmFTKgDFaO48kmIK-2FDBxVz7aor7xWQ-3Druqp_Gar1XziZ-2FC-2BZCWonDWJYk-2BSsWiCx-2FrMYpNPHDopm-2Ft86XWlhd51n0iFAHcrvCkeIrp96NfwB75rMM8ZJ0Czpdjzj62t0oFb9Wjx2Ljf57QUd33uioGdIOTt66b59OfQZNiI5VUNqVC5LkUNObSrivQomEHXLMUwzczEZXqZoKSGAgpTZ6muOJQH5eYg2vUryz6-2BmswNYfZTdW3BYj2XvfvJHDRBMrMOgjTasHCe6kKCVjhWqQiJFoxyFf2fo-2BL2BU-2Bw7j7vytd4jTVF0aRlt-2FjG3nZJPHMrC8u751pNrJjfxpEFoZcb49OJO25B2QzPfz-2B9A8nwkzZTEg-2BHVmXZ1db0xnfCeubCKc9wGPSpzjPnIBEBKnYTkWD-2F0Czla68NE');
  await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
  await page.getByText('Role settings').click();
  await page.getByRole('button', { name: 'Create custom role' }).nth(1).click();
  await page.getByLabel('Role title').clear();
  await page.getByLabel('Role title').fill('New Role');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  
});