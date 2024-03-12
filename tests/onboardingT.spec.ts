import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://enterprise-e8038.firebaseapp.com/__/auth/action?apiKey=AIzaSyD9w7OjQ1mbRxWX-kqUelVtwpnrxAhkpaA&mode=signIn&oobCode=k5LUxPeAd0m-d7keljnCkmCrRzQPE420cPFFQMDP_a8AAAGNy1CGgA&continueUrl=https://leafs-ehr-web-stage-nmvorvf7ga-as.a.run.app/auth/passwordless?email%3Dkatalonbussiness@gmail.com&lang=en');
  await page.getByPlaceholder('Enter first name').click();
  await page.getByPlaceholder('Enter first name').fill('Supervisor');
  await page.getByPlaceholder('Enter last name').click();
  await page.getByPlaceholder('Enter last name').fill('1');
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Agree  & Continue' }).nth(1).click();
  await page.waitForTimeout(4000);
});