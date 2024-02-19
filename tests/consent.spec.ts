import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21zfm8dqDpW9hfOyj68YIj4yFRZIRebH1z-2BXW6o7kBYAMY4fuqrjuNeJmXQh39F8EMnxIXDBWrDlmiHjgm-2BsHlyYqWiFNysdUx-2BMCWvkN0J-2BECfm83QCCkt6ZBTxSuF1KBbkzTRoy4-2BuJCY6C8Wq2D4H-2BdiQBs9RCEKy8w-2BdlMTkauzIYqtwAsNbpqVM37mLuxv5TiQ8545onfV8OOXzQGB3-2B1tm-2Bfm2PA2wKa8LQY-2FNUWHqJEq-2FXne2000xlQJdM2M-3DAUp2_hDR617gYR-2FTAeQ2ywDUJxLoDNehKzqARZypjGGelOH78CTJm08WXw0c1YCwPMYwTH9EhOClf8ubin7-2BnkfycghiVd0R-2BcFpRLf0B25-2FTNPVb9RZ-2BFmC5JdfQy9Xmt2w1BdK96wAMtcgNSLGkSIj5Ofhuqk6eCFxDTtKby83VaXC5Y66nXfKtoaLIo7fUVCDSBVg0xnDgBMP90t2NffWAIRncU2rs10n02NVsbtj4c2L35Zw0TEm70kIf7siY0kImc5w1xlBz4g80vsjvby27ZgeYAywwkeSx2D3CS6PeU9Ywr2pAW-2FnTg7kQHcQ13BsnPblaEhZ-2BuzxuQeQVWiJY3M80LbxWdr2tRP0tjUbq7kb4-2FvWWzsfsTj1CNR3W9TVp');
  await page.locator('div').filter({ hasText: /^Documents$/ }).getByRole('img').click();
  await page.keyboard.press('Control+-');
  await page.keyboard.press('Control+-');
  await page.keyboard.press('Control+-');
  await page.keyboard.press('Control+-');
  await page.keyboard.press('Control+-')
  // await page.locator('div').filter({ hasText: /^Documents$/ }).getByRole('img').click();
  await page.getByRole('button', { name: 'Create new' }).nth(1).click();
  await page.getByText('Consent form', { exact: true }).click();
  await page.getByPlaceholder('type here').click();
  await page.getByPlaceholder('type here').fill('Consent Form');
  await page.getByRole('button', { name: 'Done' }).nth(1).click();
  await page.locator('pre').getByRole('paragraph').click();
  await page.locator('pre div').first().fill('The invention of Braille was a major turning point in the history of disability. The writing system of raised dots used by visually impaired people was developed by Louis Braille in nineteenth-century France. In a society that did not value disabled people in general, blindness was particularly stigmatized, and lack of access to reading and writing was a significant barrier to social participation. The idea of tactile reading was not entirely new, but existing methods based on sighted systems were difficult to learn and use. As the first writing system designed for blind people’s needs, Braille was a groundbreaking new accessibility tool. It not only provided practical benefits, but also helped change the cultural status of blindness. This essay begins by discussing the situation of blind people in nineteenth-century Europe. It then describes the invention of Braille and the gradual process of its acceptance within blind education. Subsequently, it explores the wide-ranging effects of this invention on blind people’s social and cultural lives.');

  // Add Pdf <1mb
  // await page.locator('#root > div > div > div._formContainer_1srfm_1 > div > div._editor_1srfm_16 > input[type=file]').setInputFiles("C:/Users/Rajesh/Downloads/file-example_PDF_1MB.pdf");
  // await page.locator('#root > div > div > div._formContainer_1srfm_1 > div > div._editor_1srfm_16 > div._consentPdfBlock_1srfm_46 > div._pdfContentContainer_1srfm_51 > div._pdfActions_1srfm_56 > button:nth-child(2) > button').click;
// Add Pdf More than >1MB
  await page.locator('#root > div > div > div._formContainer_1srfm_1 > div > div._editor_1srfm_16 > input[type=file]').setInputFiles("C:/Users/Rajesh/Downloads/ehp.1510456.s001.4.5mb.pdf");
  await page.keyboard.down
  await page.keyboard.up
// window.scrollTo(0, document.body.scrollHeight);
// window.scrollTo(0, document.body.scrollTop);
  await page.waitForTimeout(2000);
  // window.scrollTo(0, document.body.scrollHeight);
  await page.getByLabel('Add Provider signature').check();
  await page.getByRole('button', { name: 'Preview' }).nth(1).click();
  await page.keyboard.down
  await page.waitForTimeout(6000);
  
  await page.keyboard.up
  await page.getByRole('button').click();
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await page.waitForTimeout(6000);
  


});

test('test2', async ({ page }) => {

  // await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=iJLSITnNHCJ6B9ua531Ojyn2IgnYPx8D1aQ-2BRS4NUO4iBXMZkJ4QmtOswRn9lZ3jCTvMehiHq8LcPe2DTaVgQ-2BJmguLJ7PmZIcrK3bvpG-2BdrpHK6lCBzUUjCqPqsM4DteOlePmhOyqh84aXtdoJbSmciPxEIAjVQIrhrrVfN21yZS8uRQ99Phd8nuzF6SJc4XVMuazXXQWm3NCCN4AtlJbSFssA0QK7IJdecdxcMj3p8C2u1DuVgyfl9JX4LBeBTR1O-2B-2FabjGXfo-2BKRwuu4PUjZIun81XMRZOr6OQtpX0oX9Jjna9lLPtKowujwnN9FAG1nDa-2BJSeY0aUS-2FVwB0nnNnAVHobmK9t13myEWx9g0yezIelnjfpGzUxs0YkchyT05W1PLqsJy9nmr1rQN-2FB3Q-3D-3Dw1W9_6-2FINxZRg6KhG3dyJk85U1c7eANxlMFjpWIk-2B7CBzQ6cLaE28YiWLoaikHGz1pfa-2BgUEDeIOt52W5DMSi7fBR685dkr9pxtKePgLlH9tvnueCaHEr3fSUwm6DzlciWwN6DTPfB0hp0PLNBscDOFL3lzgX7ZxyvXQa-2FG4q9aFEi4DhjwTscQVoWVpGZ7KXv-2FwF9G5q3Dkin-2BeJ-2BvlQJkGix4v8jVUNFpYnyCNIeYq2fbtqn3uB7FPDBdW8yg2Pd-2B9qFFKHH9B-2BUtWIBmb-2Fq9kNG-2B9-2B4IO5NIZXCIzaRl0qD-2F0DCWXO3lrfiYRTmo4yIxG-2BlvBahQUl8WV2X8T-2B3vT4lBFHfMXFCgG33Ug5UP47X0c-3D');
//   Create Single Client
  await page.getByRole('button', { name: 'Create' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Create client' }).click();
  await page.getByLabel('First Name*').click();
  await page.getByLabel('First Name*').fill('Test');
  await page.getByLabel('Last Name*').click();
  await page.getByLabel('Last Name*').fill('Automation');
  await page.getByLabel('Email*').click();
  await page.getByLabel('Email*').fill('testautomation@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).nth(1).click();
  await page.getByRole('button', { name: 'Create Client' }).nth(1).click();

});