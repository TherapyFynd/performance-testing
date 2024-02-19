import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21yZuWZnBwsQyRjGAqGn3BpNf6BFKbnexPW8aacLEKL-2FidtrmSH11A7nwCKJCFesslr6jWwnaSuZFHIlrdbbqg7hrrSFI61QZouvsbMHC4Pd2uao-2FXEAmBsnHXFXbkn-2FaLVJVTEPKKH7uaQqwINtu5Q3S0R5IXJnYjBPxvwfEf91bofNIAtRsnwi0PSTBEqSHWXrLvR0zK3maK7nFifmTpNuGH1aMXdsLIHzjihYG6TUN-2F5hSxNsmTjqYf6PaRIzXew-3Dttm8_hDR617gYR-2FTAeQ2ywDUJxLoDNehKzqARZypjGGelOH78CTJm08WXw0c1YCwPMYwTH9EhOClf8ubin7-2BnkfycghiVd0R-2BcFpRLf0B25-2FTNPVb9RZ-2BFmC5JdfQy9Xmt2w1BdK96wAMtcgNSLGkSIj5Ofhuqk6eCFxDTtKby83VaXC5Y66nXfKtoaLIo7fUVCDSAeKKmLZmmZ78UjqjrswYAbtf4H-2BP-2FHAtA9v-2F-2F4XGg-2FhHLO6vN4p17dEItMyylBYXkmEnu-2F8JPuH6Wcm415bfg-2BcQIkn6feKBltOuo33SZggKNiMU8r9-2Bfh5dKjJlMixTt0sm5BZ55GCoUBkwl535QQekSy7JgompJKZyrrLf5jM-3D')
  await page.locator('#root > div._header_1uy0f_1 > div > div:nth-child(4)').click();
  await page.getByRole('menuitem', { name: 'Profile' }).click();
  await page.locator('#root > div._layout_731gc_1 > div._content_731gc_7 > div > div._generalSettingsTab_18vvz_1 > div > div._flexContainer_18vvz_4 > div._userNameDetailsContainer_18vvz_8 > div > div._imagePicker_18vvz_17 > input[type=file]').setInputFiles("C:/Users/Rajesh/Downloads/therapist.jpg");
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.locator('#root > div._header_1uy0f_1 > div > div:nth-child(4)').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  // await page.getByTestId('ArrowBackRoundedIcon').click();
  
  // await page.getByText('Practice settings').click();
  // await page.locator('#root > div._layout_731gc_1 > div._content_731gc_7 > div > div._generalSettingsTab_18vvz_1 > div > div._flexContainer_18vvz_4 > div._userNameDetailsContainer_18vvz_8 > div > div._imagePicker_18vvz_17 > input[type=file]').setInputFiles("C:/Users/Rajesh/Downloads/therapist.jpg");
  // await page.getByRole('button', { name: 'Done' }).nth(1).click();
  // await page.getByRole('button', { name: 'Save' }).nth(1).click();
  // await page.waitForTimeout(3000);
  // await page.locator('#root > div._header_1uy0f_1 > div > div:nth-child(4)').click();
  // await page.getByRole('menuitem', { name: 'Logout' }).click();

});