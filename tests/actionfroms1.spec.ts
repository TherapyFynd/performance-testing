import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=u001.bGPC89E1b-2BR6sAgrMRX5pMCAFLd0GRFBAYQ-2Bw1BvVCRkjRzLfazgIk4E2lBlnyAxXk5-2BRHNgvVvGfhBFxf5VhakbAxrCoxcVKgy6Z3QoRWtMTzXYn1YKaWR0BoTpK-2FrYF8cFmi5zIXcO2snbtxLLT4FO7BT2mjtxhoZOTsvNrzJft9wbbgSWa8xv8kP38Sz2tyHgY8pXwuyuK-2BlejJvvi4uaI0byVfMiUcECBCGhCVWvw9Dl4oRoPaHbg2PZR-2Bm78lOJ-2Be5wWNyVeLGobLPg6MbUKjwv2Y5WpjAcDIOQrrozD3-2Ffz3vSreHSHKPvtrTat4rsNEEqQBHdmcFzhJgQOPhoJObkkjnBxnDT0xu1HJLL32NZ-2Fb5E28gqZbmIksxb7yJARIRFb31CHWCiu-2BWt1mvbU4Rf0sOavmcoJzZS0kM-3DSLeJ_uLqUKMjGf-2FblSSYMh7L-2FbOL63DrPetOgU241TdWia32pUGsIvdm1-2FJaaYM7-2BohmxGQUS1WQh475PhJ2PD9omY3njic6JdXVmcURRxyR56P7hnUSUiCdCK2iXuruscwcverK4pKBkWXwOR7YLc19qCDLAeG6gceGl8c7kVN-2BoTLIDe5JH7hahYPYfw8qwquZGHMZqJGA5czUA4ZM4VS-2F7-2F08akTulW2aqLOTTf8-2F4QIHdsJtMZCJmUJGmCMHEkspFQ47YywA3-2BX9sJRQQ-2FW4nBXayUZx68QmM7-2BJDyayCewv4RzUy5tS2q0cNqPa8qnaHO0-2BkG70c1CoQtTMj0U6g-2BTW7flhItJlAEbZ23W8KiU4-3D');

//   await page.locator('div').filter({ hasText: /^Documents$/ }).getByRole('img').click();
//   await page.getByRole('button', { name: 'My intake packet' }).nth(1).click();
//   await page.getByRole('button', { name: 'Add new' }).nth(1).click();
//   await page.getByRole('tab', { name: 'My Forms' }).click();
//   await page.getByLabel('Select forms').click();
//   await page.getByRole('combobox', { name: 'Select forms' }).fill('Question');
//   await page.getByRole('option', { name: 'Question Form' }).click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
//   await page.reload();
//   await page.waitForTimeout(1000);

//   await page.getByRole('tab', { name: 'Minor' }).click();
//   await page.getByRole('button', { name: 'Add new' }).nth(1).click();
//   await page.getByRole('tab', { name: 'My Forms' }).click();
//   await page.getByLabel('Select forms').click();
//   await page.getByRole('combobox', { name: 'Select forms' }).fill('Question Form');
//   await page.getByRole('option', { name: 'Question Form' }).click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
//   await page.reload();
//   await page.waitForTimeout(1000);

//   await page.getByRole('tab', { name: 'Couple' }).click();
//   await page.getByRole('button', { name: 'Add new' }).nth(1).click();
//   await page.getByRole('tab', { name: 'My Forms' }).click();
//   await page.getByLabel('Select forms').click();
//   await page.getByRole('combobox', { name: 'Select forms' }).fill('Question Form');
//   await page.getByRole('option', { name: 'Question Form' }).click();
//   await page.getByRole('button', { name: 'Add' }).nth(1).click();
//   await page.reload();
//   await page.waitForTimeout(1000);
//   await page.getByTestId('ArrowBackRoundedIcon').click();

// Action form
// await page.locator('#root > div._layout_731gc_1 > div._content_731gc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path').click();
await page.locator('div').filter({ hasText: /^Documents$/ }).getByRole('img').click();
await page.getByRole('tab', { name: 'Private' }).click();
await page.getByText('Questionnaires').click();
await page.locator('#root > div._layout_731gc_1 > div._content_731gc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path').click();
await page.getByRole('menuitem', { name: 'Send' }).click();
await page.getByLabel('Select Clients').click();
await page.getByRole('option', { name: 'test (RK) - test noob' }).click();
await page.getByRole('combobox', { name: 'Select Clients' }).click();
await page.getByRole('button', { name: 'Send' }).nth(1).click();
await page.reload();
await page.waitForTimeout(1000);

await page.locator('#root > div._layout_731gc_1 > div._content_731gc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path').click();
await page.getByRole('menuitem', { name: 'Preview' }).click();
await page.locator('.MuiButtonBase-root').first().click();

await page.locator('#root > div._layout_731gc_1 > div._content_731gc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path').click();
await page.getByRole('menuitem', { name: 'Rename' }).click();
await page.getByPlaceholder('type here').clear();
await page.getByPlaceholder('type here').fill('Question Form');
await page.reload();
await page.waitForTimeout(1000);
// await page.getByRole('button', { name: 'Rename' }).nth(1).click();

await page.locator('#root > div._layout_731gc_1 > div._content_731gc_7 > div._formsList_faptv_1 > div._formCardsContainer_faptv_30 > div > div._content_q8wpx_10 > div > svg > path').click();
await page.getByRole('menuitem', { name: 'Edit' }).click();
await page.getByRole('button', { name: 'Save' }).nth(1).click();




});