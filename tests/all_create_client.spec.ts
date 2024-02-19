import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21yG26IYFRKNI8LsckjwNdphhVKh-2Bwds-2Fx77pVr9iOqQ35q7G-2F7kD-2FOCQ07W-2FtdrX3ALlQ-2B4qCbTPbvKizlkuis-2FpKDes4SjgEBcfGqLwcBGiJb8-2BNVRn-2BoFtIr45c9xhzkKMLcUgZrnsG7zOMB5DMHVGPWXiI9k0H6WnA4ciEqtmmcox-2BNfaSiMtofu5lBC9a-2B4SgeopsTO0bWEvZD-2Fo4HXh2zbo4s0c7pz-2BAEbPqA-2B-2F6oInOSuZ19IH0SrFK1-2Bs9k-3D81V7_hDR617gYR-2FTAeQ2ywDUJxLoDNehKzqARZypjGGelOH78CTJm08WXw0c1YCwPMYwTH9EhOClf8ubin7-2BnkfycghiVd0R-2BcFpRLf0B25-2FTNPVb9RZ-2BFmC5JdfQy9Xmt2w1BdK96wAMtcgNSLGkSIj5Ofhuqk6eCFxDTtKby83VaXC5Y66nXfKtoaLIo7fUVCDS1SaAYvP32DHCy9Gn-2BW7tJ6JhklOp8egrL8mEbqhFhxjyYWEIlhlKobKKXzxhCe-2Bj6jvp-2F8w5mrwU5qBf94OBrnHsTUijRLk6wkdk9aiCBYyYNWsVTt0JQV-2BQGGjlXoJF2JXpUgkGTulNpsFb2cFbhEol0wOR9U0xRluBnuGY-2FvE-3D');
 
  

 //   Create Single Client
 await page.getByRole('button', { name: 'Create' }).nth(1).click();
 await page.getByRole('menuitem', { name: 'Create client' }).click();
 await page.getByLabel('First Name*').click();
 await page.getByLabel('First Name*').fill('Test');
 await page.getByLabel('Last Name*').click();
 await page.getByLabel('Last Name*').fill('Automation');
 await page.getByLabel('Email*').click();
 await page.getByLabel('Email*').fill('io@gmail.com');
 await page.getByRole('button', { name: 'Continue' }).nth(1).click();
 await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
 await expect(page.getByText('Name'), 'Client created Successfully').toBeVisible();
 await page.pause;

//   Minor client
 await page.waitForTimeout(2000);
 await page.getByRole('button', { name: 'Create' }).nth(1).click();
 await page.getByRole('menuitem', { name: 'Create client' }).click();
 await page.getByLabel('Minor').check();
 await page.getByLabel('First Name*').click();
 await page.getByLabel('First Name*').fill('Test');
 await page.getByLabel('Last Name*').click();
 await page.getByLabel('Last Name*').fill('Auto');
 await page.getByLabel('Email*').click();
 await page.getByLabel('Email*').fill('testauto@gmail.com');
 await page.getByRole('button', { name: 'Next' }).nth(1).click();
 await page.getByLabel('First Name*').click();
 await page.getByLabel('First Name*').fill('Test');
 await page.getByLabel('Last Name*').click();
 await page.getByLabel('Last Name*').fill('Bike');
 await page.getByLabel('Email*').click();
 await page.getByLabel('Email*').fill('testbike@gmail.com');
 await page.getByLabel('Guardian relationship to').click();
 await page.getByLabel('Guardian relationship to').fill('Brother');
 await page.getByRole('button', { name: 'Next' }).nth(1).click();
 await page.getByRole('button', { name: 'Next' }).nth(1).click();
 await page.getByRole('button', { name: 'Create Client' }).nth(1).click();

//   Create Couple Account
 await page.waitForTimeout(2000);
 await page.getByRole('button', { name: 'Create' }).nth(1).click();
 await page.getByRole('menuitem', { name: 'Create client' }).click();
 await page.getByLabel('Couple').check();
 await page.getByLabel('First Name*').click();
 await page.getByLabel('First Name*').fill('Automation');
 await page.getByLabel('Last Name*').click();
 await page.getByLabel('Last Name*').fill('client1');
 await page.getByLabel('Email*').click();
 await page.getByLabel('Email*').fill('automationaclient@gmail.com');
 await page.getByRole('button', { name: 'Next' }).nth(1).click();
 await page.getByLabel('First Name*').click();
 await page.getByLabel('First Name*').fill('Automation');
 await page.getByLabel('Last Name*').click();
 await page.getByLabel('Last Name*').fill('client2');
 await page.getByLabel('Email*').click();
 await page.getByLabel('Email*').fill('automationclient2@gmail.com');
 await page.getByLabel('Phone').click();
 await page.getByLabel('Phone').fill('(546) 734-23454');
 await page.getByRole('button', { name: 'Next' }).nth(1).click();
 await page.getByRole('button', { name: 'Next' }).nth(1).click();
 await page.getByRole('button', { name: 'Create Client' }).nth(1).click();
});
  