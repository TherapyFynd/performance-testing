import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21yhtYyd-2Baa3yj7qrlDZpjVcYTkg53Qq8l8RHsJ1rE8qupAHmbsQ3ilItMbWBQxPXFw1ikMAzRYuyC1xIwtEVHdSyruo3h2nqQJTwDvKDYkJ6AkNyfu1LL2NXrFvYGSTa2JsHa-2BdnvyVD5zejy21YY44xFncR5O2xpEEDzA0ZtrjstQUR6NVSRCdsJ-2F6jG7zw-2FK5pYhouJvszaNdwqqZ-2B2yJeF5-2FgOwEJSdrKmlmBv6nALan9mKkGJuu7UOK0Z6pMfU-3D5yb4_hDR617gYR-2FTAeQ2ywDUJxLoDNehKzqARZypjGGelOH78CTJm08WXw0c1YCwPMYwTH9EhOClf8ubin7-2BnkfycghiVd0R-2BcFpRLf0B25-2FTNPVb9RZ-2BFmC5JdfQy9Xmt2w1BdK96wAMtcgNSLGkSIj5Ofhuqk6eCFxDTtKby83VaXC5Y66nXfKtoaLIo7fUVCDSpfDnyA5bPgP6Zqe3-2BGcrlTDttHXXdkyR33RqQ3rxAk5Fh-2F370Y67sdxefsRmCBzitryynenHQP3wQIUL-2B6q6-2B1S-2Bv-2BAa-2FLvB1Fa9Je75-2FXgW7CRv3fmmINUh1BGnziZGl3OSiLO46CXXhKhmQxkQuCLh8El7ExG9YUo5psH4bDHNkMieYnlAy6fZpOIBXLuJ');
  
// Filter of Team, client,Lead, send message to Team Member and Client.
  await page.getByText('Chats').click();
  await page.getByTestId('KeyboardArrowDownIcon').click();
  await page.getByRole('menuitem', { name: 'Clients' }).click();
  await page.getByTestId('KeyboardArrowDownIcon').click();
  await page.getByRole('menuitem', { name: 'Team' }).click();
  await page.getByTestId('KeyboardArrowDownIcon').click();
  await page.getByRole('menuitem', { name: 'Lead' }).click();
  await page.getByTestId('KeyboardArrowDownIcon').click();
  await page.getByRole('menuitem', { name: 'All chats' }).click();
  await page.getByTestId('KeyboardArrowDownIcon').click();
  await page.getByRole('menuitem', { name: 'Team' }).click();
  await page.locator('p').filter({ hasText: 'Admin Team' }).click();
  await page.getByTestId('message-input').click();
  await page.getByTestId('message-input').fill('hi man ');
  await page.getByTestId('SendOutlinedIcon').click();
  await page.getByTestId('KeyboardArrowDownIcon').click();
  await page.getByRole('menuitem', { name: 'Clients' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('owner');
  await page.getByText('Owner Client').click();
  await page.getByTestId('message-input').click();
  await page.getByTestId('message-input').fill('hi man client how ar eu');
  await page.getByTestId('SendOutlinedIcon').click();
  await page.getByTestId('KeyboardArrowDownIcon').click();
  await page.getByRole('menuitem', { name: 'Lead' }).click();
  await page.locator('div').filter({ hasText: /^Test Demo3$/ }).click();
  await page.getByTestId('KeyboardArrowDownIcon').click();
  await page.getByRole('menuitem', { name: 'All chats' }).click();

});