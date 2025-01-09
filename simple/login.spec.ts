
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://account.simplepractice.com/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('pinkesh@joinleafs.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Go4949!!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForTimeout(4000);
 
  await page.getByLabel('Settings', { exact: true }).click();
  await page.getByRole('link', { name: 'Practice' }).click();
  await page.getByRole('link', { name: 'Practice details Practice' }).click();
  await page.getByRole('link', { name: 'Add a location' }).click();
  await page.getByLabel('Office Name').click();
  await page.getByLabel('Office Name').fill('Simple Healthcare Hospital');
  await page.getByText('Search address').click();
  await page.getByLabel('Street').click();
  await page.getByLabel('Street').fill('24241 Hesperian');
  await page.getByRole('option', { name: '24241 Hesperian Blvd, Hayward' }).click();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
//   await page.waitForTimeout(1000);
  await page.getByLabel('close dialog').click();

  await page.getByRole('link', { name: 'Client billing and insurance' }).click();
  await page.getByRole('link', { name: 'Insurance documents Manage' }).click();
  await page.getByLabel('Tax ID or Social Security').click();
  await page.getByLabel('Tax ID or Social Security').fill('207R00000X');
  await page.getByLabel('Select tax number display').selectOption('superbills and invoices');
  await page.getByLabel('Select organization NPI').click();
  await page.getByLabel('Select organization NPI').fill('1111111112');
  await page.getByLabel('Include multiple Diagnosis').check();
  await page.getByRole('button', { name: 'Save changes' }).click();
  await page.waitForTimeout(1000);

  await page.getByRole('link', { name: 'Payers Manage insurance' }).click();
  await page.getByRole('button', { name: 'Search available payers' }).first().click();
  await page.getByRole('row', { name: '60054 AETNA P. O. Box 981106' }).getByRole('button').click();
//   await page.getByRole('row', { name: '60054 AETNA P. O. Box 981106' }).getByRole('button').click();
  await page.getByLabel('close dialog').click();
  await page.waitForTimeout(2000);

  await page.getByLabel('Settings').click();
  await page.getByLabel('create').click();
  await page.getByRole('button', { name: 'Create client' }).click();
  await page.getByLabel('Legal first name').click();
  await page.getByLabel('Legal first name').fill('New');
  await page.getByLabel('Legal last name').click();
  await page.getByLabel('Legal last name').fill('Client');
  await page.getByLabel('Month').selectOption('January');
  await page.getByLabel('Day').selectOption('2');
  await page.getByLabel('Year').selectOption('2008');
  await page.getByLabel('Insurance').first().check();
  await page.getByLabel('Insurance').nth(1).check();
  await page.getByRole('button', { name: 'Add email' }).click();
  await page.getByLabel('email').fill('testmail1@outlook.com');
  await page.getByRole('button', { name: 'Add phone' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Continue to Email' }).click();
  await page.waitForTimeout(4000);
await page.getByRole('button', { name: 'Continue to Review' }).click();
await page.waitForTimeout(4000);
await page.getByRole('button', { name: 'Share and Send now' }).click();
await page.waitForTimeout(4000);
  
  await page.getByLabel('Clients').click();
  await page.getByRole('link', { name: 'New client' }).click();

  await page.getByRole('button', { name: 'New' }).click();
  await page.getByRole('link', { name: 'Diagnosis and treatment plan' }).click();
  await page.getByText('Search').click();
  await page.getByRole('option', { name: 'F43.22 - Adjustment disorder' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(4000);

  await page.getByLabel('Middle name').click();
  await page.getByLabel('Middle name').fill('M');
  await page.getByLabel('Suffix').click();
  await page.getByLabel('Suffix').fill('He');
  await page.getByLabel('What name do they go by?').click();
  await page.getByLabel('What name do they go by?').fill('Test');
  await page.getByRole('button', { name: '+ Address' }).click();
  await page.getByText('Search address').click();
  await page.getByLabel('Street').fill('new york location');
  await page.getByRole('option', { name: 'NY Location, 2699 Coney' }).click();
  await page.getByLabel('American Indian or Alaska').check();
  await page.getByLabel('Sex').selectOption('Male');
   await page.getByRole('button', { name: 'Save Client', exact: true }).click();
   await page.waitForTimeout(4000);

  await page.getByRole('tab', { name: 'Billing and Insurance' }).click();
  
  await page.getByRole('button', { name: '+ Insurance info' }).click();
  await page.getByText('Select Insurance Payer').click();
  await page.getByRole('option', { name: 'AETNA (60054)' }).click();
  await page.getByLabel('* Member ID').click();
  await page.getByLabel('* Member ID').fill('ASHPH');
  await page.getByLabel('Plan ID').click();
  await page.getByLabel('Plan ID').fill('JHWd');
  await page.getByLabel('Group ID').click();
  await page.getByLabel('Group ID').fill('DVJHHE');
  await page.getByLabel('Month').nth(2).selectOption('January');
  await page.getByLabel('Day').first().selectOption('3');
  await page.getByLabel('Year').first().selectOption('2010');
  await page.getByLabel('Month').nth(3).selectOption('March');
  await page.getByLabel('Day').nth(1).selectOption('8');
  await page.getByLabel('Year').nth(1).selectOption('2030');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.waitForTimeout(4000);

//   await page.getByLabel('create', { exact: true }).click();
//   await page.getByLabel('create', { exact: true }).click();

  await page.getByLabel('create').click();
  await page.getByRole('link', { name: 'Schedule appointment' }).click();
  await page.getByText('Search Client').click();
  await page.getByLabel('Search Client').getByText('New Client').click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.waitForTimeout(4000);
  await page.getByLabel('Insurance').click();
  await page.waitForTimeout(4000);
  
});
