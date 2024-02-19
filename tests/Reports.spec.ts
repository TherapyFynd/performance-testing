import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21wq1IHZtdP-2FRyZoP6cwmlXxf6oBnuEhkixwCByr-2BpNYGPya67f-2BUvj6hnqpOzqDB8OmBT6lvl28uqAvuVulvJb97sbedg9DG9QvAE1B2p4Se9pT5pjDBUhtpwHOIenR50NCKL8Rdhoc5dtE41LS-2FQ23DoQoO57CajzNmWvlN4FWhFVaIJhrBGPcqXT6Tm5jclz4T5tazmq95KZQZUAOXgc9QJa23r59sX5rgMaLAh2QlCu4ZjTXBN1zcDv7tsjhO6k-3Dmj6o_hDR617gYR-2FTAeQ2ywDUJxLoDNehKzqARZypjGGelOH78CTJm08WXw0c1YCwPMYwTH9EhOClf8ubin7-2BnkfycghiVd0R-2BcFpRLf0B25-2FTNPVb9RZ-2BFmC5JdfQy9Xmt2w1BdK96wAMtcgNSLGkSIj5Ofhuqk6eCFxDTtKby83VaXC5Y66nXfKtoaLIo7fUVCDSQTH50i-2Fwi6XRNvfSrn8Rfn15U0PNy8lt-2FvQNuDt1HUWFmQFe-2Fp3GtyjuyE77YrV-2BusFo-2BkZuXt6q74cEwRm8eFlAB2DqVDqwdXVE24Twbsxa1G5PeD0mZ-2BeQtauh9PqwoT95-2BMTYUrGjWxVaYLKAyRA9WZHHcQx3G4r5CR4lSQJ-2B7rl3q4bTZb497uc0kUiT');

// Appoinment Notes add , Filtre with Options.
await page.locator('div').filter({ hasText: /^Reports$/ }).getByRole('img').click();
  await page.getByText('Appointment Notes').click();
  await page.getByLabel('Team members').click();
  await page.getByRole('option', { name: 'All' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByRole('button', { name: 'Add note' }).nth(1).click();
  await page.getByRole('tab', { name: 'Personal' }).click();
  await page.locator('div').filter({ hasText: /^Progress notes$/ }).click();
  await page.getByText('Automation Testing').click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('James willy');
  await page.getByPlaceholder('Enter your response here').nth(1).click();
  await page.getByPlaceholder('Enter your response here').nth(1).fill('Yes I am good now and I am Looking better Condition.');
  await page.getByLabel('Male', { exact: true }).check();
  await page.locator('div').filter({ hasText: /^Sign here$/ }).nth(2).click();
  await page.getByPlaceholder('Please type your name here').click();
  await page.getByPlaceholder('Please type your name here').fill('James Rocky');
  await page.getByRole('button', { name: 'Sign' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

  await page.getByLabel('Team members').click();
  await page.getByRole('option', { name: 'All' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Owner Team' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByLabel('Status').click();
  await page.getByRole('option', { name: 'All' }).getByRole('checkbox').uncheck();
  await page.getByRole('option', { name: 'Completed notes' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Apply' }).nth(1).click();
  await page.getByText('Automation Testing').click();
  await page.locator('div').filter({ hasText: /^Automation Testing$/ }).getByRole('button').click();

});