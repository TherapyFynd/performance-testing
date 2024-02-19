import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('');
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByPlaceholder('MM/DD/YYYY').click();
  await page.getByPlaceholder('MM/DD/YYYY').fill('01/01/9');
  await page.getByLabel('Pronouns').click();
  await page.getByRole('option', { name: 'He/Him' }).click();
  await page.getByPlaceholder('Phone').click();
  await page.getByPlaceholder('Phone').fill('(893) 475-72545');
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('Address Line').click();
  await page.getByLabel('Address Line').fill('New land and new city');
  await page.getByPlaceholder('Street').click();
  await page.getByPlaceholder('Street').fill('Main road left cross and second building');
  await page.getByLabel('State').click();
  await page.getByRole('combobox', { name: 'State' }).fill('cali');
  await page.getByText('California').click();
  await page.getByLabel('City').click();
  await page.getByRole('combobox', { name: 'City' }).fill('Azu');
  await page.getByText('Azusa').click();
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('784567');
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('heading', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Test');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Emergency');
  await page.getByLabel('Relationship to client').click();
  await page.getByLabel('Relationship to client').fill('Test');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('testemergency@gmail.com');
  await page.getByPlaceholder('Phone').click();
  await page.getByPlaceholder('Phone').fill('(736) 487-35825');
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('button', { name: 'Add card' }).nth(1).click();
  await page.frameLocator('iframe[name="__privateStripeFrame6506"]').getByPlaceholder('Card number').click();
  await page.frameLocator('iframe[name="__privateStripeFrame6506"]').getByPlaceholder('Card number').fill('4242 4242 4242 42422');
  await page.frameLocator('iframe[name="__privateStripeFrame6507"]').getByPlaceholder('Expiry date (MM/YY)').click();
  await page.frameLocator('iframe[name="__privateStripeFrame6507"]').getByPlaceholder('Expiry date (MM/YY)').fill('09 / 34');
  await page.frameLocator('iframe[name="__privateStripeFrame6508"]').getByPlaceholder('CVV').click();
  await page.frameLocator('iframe[name="__privateStripeFrame6508"]').getByPlaceholder('CVV').fill('345');
  await page.getByRole('button', { name: 'Add card' }).nth(1).click();
  await page.getByRole('button', { name: 'Submit' }).nth(1).click();
  
// Action inside Product
//   await page.getByRole('tab', { name: 'Chats' }).click();
//   await page.getByTestId('message-input').click();
//   await page.getByTestId('message-input').fill('hi sir I ma logged in');

//   await page.getByRole('tab', { name: 'Appointments' }).click();
  await page.getByRole('tab', { name: 'Forms' }).click();
  await page.getByRole('tab', { name: 'Appointments' }).click();
});