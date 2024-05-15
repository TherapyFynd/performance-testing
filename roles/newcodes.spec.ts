// test('Notifications ', async () => {
//     await page.locator('div').filter({ hasText: /^Notifications$/ }).getByRole('img').click();
//     await page.waitForTimeout(3000);
//     await page.getByText('Biller 1 has joined your').click();
//     const page1Promise = page.waitForEvent('popup');
//     const page1 = await page1Promise;
//     await page1.getByTestId('message-input').fill('Hi Therapist 1 How are u ');
//     await page1.getByTestId('SendOutlinedIcon').click();
//     await page1.waitForTimeout(3000);
//     await page1.close();

//     await page.getByText('Scheduler 1 has joined your').click();
//     const page2Promise = page.waitForEvent('popup');
//     const page2 = await page2Promise;
//     await page2.getByTestId('message-input').fill('Hi Therapist 1 How are u ');
//     await page2.getByTestId('SendOutlinedIcon').click();
//     await page2.waitForTimeout(3000);
//     await page2.close();
//     await page.waitForTimeout(3000);
//     await page.locator('._header_1dz15_13 > button').click();

