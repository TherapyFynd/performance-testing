import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=u001.bGPC89E1b-2BR6sAgrMRX5pMCAFLd0GRFBAYQ-2Bw1BvVCRkjRzLfazgIk4E2lBlnyAxXk5-2BRHNgvVvGfhBFxf5VhakbAxrCoxcVKgy6Z3QoRWtMTzXYn1YKaWR0BoTpK-2FrYF8cFmi5zIXcO2snbtxLLT4FO7BT2mjtxhoZOTsvNrzLkrrty-2F2uU4fVnrnAb68G-2B5F2qX4H6WWtfYya0q1OfB3BW3Yink-2Bb38OrhzSK6J7FwMemji-2FFzcR4aqT-2Bqio2nQkRZ9kdEXYPzULg9P7-2FSy8joHTSX9o5jAk9ZFh2-2BJX-2FuBj-2FmlIHce9ePVtwxAlaz8sgj6CkaDUqTFe90hA71qd9iHlAtGdE4XbQGRyPRCJKKbN5iBS88a5-2BjpHYDbOXghaQ-2BtQZ-2BOhw6cWFtGdECBQ-3D-3D2m4K_x1ETFGoAZ5RrGfYvXcBpFghIEI-2FhXVtT0Wr6a96O0JjHEE0-2BJUA68HuwNWxTkSn-2FzN77PFTrdZwf02BPEymqWkv-2FIV3TYB2OZiiY15R2rfbkQBgO0gv7Sm-2B8oT2IYyhAphmLf81hNiblQhsWoVxFa-2FAYZrodN9wN1Rj4J78q5nXB3cGfYD-2BQ9-2FJg4RaKNhArlnmdoDA0bj9pMDyuQKpMUo4OMd-2BRstHIMs3FFXgrvIXCHxp6LNw1547yw-2BSCR3HA4rpikVY-2FBGNBhuZSLNqzok5wj7VL9Vnj4Zl96Tbkga9zeriV2wBlvZqW7jqXVD6BPLH8p-2B4iWIWKLrtIuEvRdEmOkrzZEqK-2Br8v5lea8tNc-3D');
    await page
          .locator('div')
          .filter({ hasText: /^Calendar$/ })
          .getByRole('img')
          .click();
          await page.getByRole('button', { name: 'Availability' }).nth(1).click();

          try {
            await page.locator('#root > div._layout_1p3av_1 > div._content_1p3av_7 > div._calendarSettings_1fo8k_1 > div > div.primary-b1-bold._subTitle_1fo8k_28 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383').click();
          } catch (error) {
            console.log('Failed to find first locator, trying second locator');
            await page
              .locator(
                '#root > div._layout_1p3av_1 > div._content_1p3av_7 > div._calendarSettings_1fo8k_1 > div > div.primary-b1-bold._subTitle_1fo8k_28 > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-ink383 > span.MuiSwitch-thumb.css-19gndve'
              )
              .click();
            }
          
            
             
          await page.waitForTimeout(2000);
          await page.getByLabel('Monday').check();
  await page.getByLabel('Tuesday').check();
  await page.getByLabel('Wednesday').check();
  await page.getByLabel('Thursday').check();
  await page.getByLabel('Friday').check();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
});