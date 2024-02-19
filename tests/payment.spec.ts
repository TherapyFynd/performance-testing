import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21xWRhV7-2BoDpHySBK88rz3C7Cn8VBownne4v9C6A-2Fc1u83-2F6-2BO1jlbXdFy4IyoS3MCwKmpev-2F2blXcdblbTra2sPL1NN6jDua0BGTzZSqOKWLFOdIfHg0cF-2BHWGpj8vSXsT-2F0qL2PGNw22q-2BQRGdwESp6EkV-2FF7w-2Fr8F7wjRlgrBNf60EKp5iT0gO8DjxK3yVn1XMVmHOM5nBgjanhIww8A0WE-2FUMsjklu8fepMgGHUVFeH57RWojIoEOrHONv7Y124-3DlkbZ_hDR617gYR-2FTAeQ2ywDUJxLoDNehKzqARZypjGGelOH78CTJm08WXw0c1YCwPMYwTH9EhOClf8ubin7-2BnkfycghiVd0R-2BcFpRLf0B25-2FTNPVb9RZ-2BFmC5JdfQy9Xmt2w1BdK96wAMtcgNSLGkSIj5Ofhuqk6eCFxDTtKby83VaXC5Y66nXfKtoaLIo7fUVCDSCJ3rXO7j-2BX8R425ApAK5N2NDDx57EA4OkkwgtGsvfluxpNPvARpU6uH-2B2vj9WifuIjBzQowE7-2FB-2BibYDTSYE6fdAaGax2yv5OSjxWNaLFHCjL5DBLZcUk0EzqEO9l8V7NB3Utn-2FLo6CmThD0a7xBMlj1fZKWEOVtCflFl8S30Gc-3D');
  await page.getByText('Clients').click();
  await page.getByText('Automation client').click();
  await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
  await page.getByRole('tab', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'Add card' }).nth(1).click();
  await page.locator('#root > form > span:nth-child(4) > div > div > div.CardNumberField-input-wrapper > span > input').click;
  await page.locator('#root > form > span:nth-child(4) > div > div > div.CardNumberField-input-wrapper > span > input').fill('424242424242')
  await page.locator('#root > form > span:nth-child(4) > div > span > input').click;
  await page.locator('#root > form > span:nth-child(4) > div > span > input').fill('09/35')
  await page.locator('#root > form > span:nth-child(4) > div > span > input').click;
  await page.locator('#root > form > span:nth-child(4) > div > span > input').fill('876');
  await page.getByRole('button', { name: 'Add card' }).nth(1).click();
  await page.getByTestId('MoreVertIcon').click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Confirm delete' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Basic Info$/ }).getByRole('button').click();
});