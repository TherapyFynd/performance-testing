import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=u001.bGPC89E1b-2BR6sAgrMRX5pMzTpimHaO0PcqcHnBTr7E6JeE7umZJJYtAT4Ru3yUtIyGeZJxrvWFGO44VK1JobPhafLMNpAgQkV7psFozK72DTysm-2BplfKrXsz-2BbbGx-2BmgGKgRCamd7-2B-2B4-2FvoKrBwAOZUfndD2ejX3oLzyZrXuuyhEs70CgPxj6NBSrp3m7Gs0A9DPtIKkW0YQJnkhz6VovDVW-2BghO4XR6-2FpaYrbkgjujNfRPbx93bpdW0A9L9qS3edUGJdjBSVvGggw0W4x3y-2FtvOqrpbRwmDY6GHORO1myJWu-2FA3vQsU2Mr45Z2mkqGqZp93kbQKmFxxIum-2BeIyIBcItJjrxpWlHsxJ6AcK9eBL-2FIFe-2Fr5daVdrv6-2BOm0-2BwBmVLS_JZVIjUX2SdEWxEOAAnjyinUsXz-2FSqntS7cl-2BMrMdA0RDxEXfQ16eBNbSUi7a7ZLAXCBXHSt-2BPu2A57zOQIDjI5OxWdfTAfOIUykZycSV9DzHTbCON8ypsugGD8-2BVQkwU65JetjGEijLLc-2FklG-2FuiMkybS4wvucfAOwK9I0Yp-2BXvDjHOsijFg-2F140odDERFjbD7b14PWXnpaDTqK23iMqeUkP91w-2FDYwWXwmnUEomdaNYM9y-2FVSJUT821TMgtXIWdh2ikoW7B052df-2FC6SFhLZtT6RMU16vmlrnci-2BmjPFYbnw7ulyp7psKGtzP-2FpjuiFTdwrBVNGIIWi8Wpi79P-2B6RjudoNnCP8hNBdvOAf1-2FMU-3D')
   await page.locator('div').filter({ hasText: /^Settings$/ }).getByRole('img').click();
   await page.getByText('Team members').first().click();
   await page.locator('p').filter({ hasText: /^Calendar$/ }).click();
  
  await page.locator('#root > div._layout_10ldc_1 > div._content_10ldc_7 > div > div._acceptingAppointmentsSwitch_ml86x_17 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383').click();
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();
  await page.getByLabel('Monday').check();
  await page.getByLabel('Tuesday').check();
  await page.getByLabel('Wednesday').check();
  await page.getByLabel('Thursday').check();
  await page.getByLabel('Friday').check();
  await page.getByLabel('Saturday').check();
  await page.getByLabel('Sunday').check();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('p').filter({ hasText: /^Calendar$/ }).click();
  await page.getByLabel('Monday').check();
  console.log
});
