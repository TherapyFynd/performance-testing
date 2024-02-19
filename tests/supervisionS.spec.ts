import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21zOrJZkFXdc6ncf1ddo7qzlgbMr8Y3gFqGkaTyF-2BqkKgQVSVyuSOPcUUPHs3A3oHx9nfNBhfM5mispjmXaTRzSR4jwTUQsbrwQAkFDRbyRPfn7Jd0YMfhVGyNmdoO9ryaL1ovGbxE3l51a4aE-2BbhZdug75rARHkFjWZpuVrEbO1yCTj-2BweDtDnXOI-2F9Kiamfxg2Kgw7Z6BZ167vIZA-2Ffmkxeo59QXJMUS-2Bc3quZjwgIOg-3D-3Dwo2v_CMtoljYAl-2FU-2F9u2vr0TdMaR8xhDGarWcmEbfK5h9qXV0sh5B9D5gYY3myK64BpVzmk5CRotiHxe5QYzum7YS2TvleIGUymAvc-2Fb3AuJ1Jx56C8TMTYSlc0HLA5ExkoiX3Z58x-2By5Yljr5ESQisoNYhkGh0L8QPP-2BL6c2z1KfRDqCUTHbINw6olpFtOzgnM2bKckjhvdAfMReOHNEVBIOq9xfmMZUzQRNBuhePK9zs0Up3rDc5R-2FtcmqrlRzuOINC3-2F2oxGb3VIs4r0e7K7bPq7qqnALCT6Kd2SRX6FnWqBw-2Fupu6rZ-2FgA76r2nG6gXGhsqcyTf-2Fe56cirADKaS65cgBwETd5n-2B9c-2FqzsdgNQTkw-3D');
  await page.getByText('Supervision').click();
  await page.getByText('Automation Testing form', { exact: true }).click();
//   await page.getByPlaceholder('Enter your response here').click();
//   await page.getByPlaceholder('Enter your response here').fill('James Willy and Ram Willy');
//   await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.getByRole('button', { name: 'Add signature' }).nth(1).click();
  await page.getByPlaceholder('Sign').click();
  await page.getByPlaceholder('Sign').fill('Supervisor Seen');
  await page.getByRole('button', { name: 'Sign' }).nth(1).click();
  await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click;
//   Filtre section
//   await page.getByRole('tab', { name: 'Session & Notes' }).click();
//   await page.getByLabel('Notes').click();
//   await page.getByRole('option', { name: 'Locked', exact: true }).click();
//   await page.getByLabel('Notes').click();
//   await page.getByRole('option', { name: 'Unlocked' }).click();
//   await page.getByLabel('Notes').click();
//   await page.getByRole('option', { name: 'No-note' }).click();
//   await page.getByLabel('Notes').click();
//   await page.getByRole('option', { name: 'Locked', exact: true }).click();
//   Signed Tab
  await page.getByRole('tab', { name: 'Signed' }).click();
  await page.getByText('Automation Testing form').click();
  await page.locator('#root > div > div > div > div._stickyHeader_8mx9g_22 > div._tiltleNavigation_8mx9g_39 > button > svg > path').click;

});