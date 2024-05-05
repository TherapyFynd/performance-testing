import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=u001.bGPC89E1b-2BR6sAgrMRX5pMCAFLd0GRFBAYQ-2Bw1BvVCRkjRzLfazgIk4E2lBlnyAxXk5-2BRHNgvVvGfhBFxf5VhakbAxrCoxcVKgy6Z3QoRWtMTzXYn1YKaWR0BoTpK-2FrYF8cFmi5zIXcO2snbtxLLT4FO7BT2mjtxhoZOTsvNrzLRheMXX-2Bch1vIzGFWTjxQV-2BhV-2BgkpJr7yDBVhF3gzaTOhlL56Y6yIuNEleYYJBkOayxGyy-2FQ8U3NVyUi16pWLBGehTbVllhGz9G6LbYl1XWXK0xwjf2JAM1TPFLLnvnNShL0sEIn098-2BenAEZ1fkcE-2FK1N7ZdrNM3-2B0lo-2F1LyPDIdaSHh8SlBv9e-2FhiIDljt9xx62rI-2Fo1QWnz-2BunBvsAaM3qpurosH787Qg-2BqemGgpYi49Re0Vp1UbS75RuXZolo-3DqE2O_Gar1XziZ-2FC-2BZCWonDWJYk-2BSsWiCx-2FrMYpNPHDopm-2Ft86XWlhd51n0iFAHcrvCkeIrp96NfwB75rMM8ZJ0Czpdjzj62t0oFb9Wjx2Ljf57QUd33uioGdIOTt66b59OfQZNiI5VUNqVC5LkUNObSrivQomEHXLMUwzczEZXqZoKSGAgpTZ6muOJQH5eYg2vUryz6-2BmswNYfZTdW3BYj2XvfgSqXBzK9FpWkB6EVuxIvJcWdNU9CVqqfeB3z3xpgwJzFkWyC6bl80TPhIRmfXYiQbNMt-2BE-2F9DNfPdX7S0HlK5JnYgG6pk5mElYL-2BYFQc65hpcKkbK7DhCSuUVsnn32dcYzBFEJv96aMK5PaeNoCo6i6rbGWVQsgm7NTvRO906RO');
  await page.locator('div').filter({ hasText: /^Clients$/ }).getByRole('img').click();
  await page.getByText('Automation Test').click();
  await page.getByRole('button', { name: 'Info & settings' }).nth(1).click();
  await page.getByRole('tab', { name: 'Insurance Eligibility' }).click();
  await page.waitForTimeout(6000);
  await page.getByRole('button', { name: 'Verify Benefits' }).nth(1).click();
  await page.getByRole('button', { name: 'View Log' }).nth(1).click();
  await page.locator('._header_q5khp_1 > .MuiButtonBase-root').click();
  await page.getByRole('button', { name: 'Share' }).nth(1).click();
  await page.getByLabel('Select Team Member').click();
  await page.getByRole('combobox', { name: 'Select Team Member' }).fill('Ther');
  await page.getByRole('option', { name: 'icon Therapist 1' }).click();
  await page.getByPlaceholder('Type message here').click();
  await page.getByPlaceholder('Type message here').fill('Hey Testing name');
  await page.getByRole('button', { name: 'Share' }).nth(1).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Share' }).nth(1).click();
  await page.getByLabel('Client').check();
  await page.getByPlaceholder('Type message here').click();
  await page.getByPlaceholder('Type message here').fill('Hey Name Send it ');
  await page.getByRole('button', { name: 'Share' }).nth(1).click();


  // Task Board Features
  
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://u8165692.ct.sendgrid.net/ls/click?upn=u001.bGPC89E1b-2BR6sAgrMRX5pMCAFLd0GRFBAYQ-2Bw1BvVCRkjRzLfazgIk4E2lBlnyAxXk5-2BRHNgvVvGfhBFxf5VhakbAxrCoxcVKgy6Z3QoRWtMTzXYn1YKaWR0BoTpK-2FrYF8cFmi5zIXcO2snbtxLLT4FO7BT2mjtxhoZOTsvNrzJyWin851K6C-2FLfEX15TkRNDX8659kGwT10mzUC1EGqsBobY9BnYSMsFAtRLKpQclZqWRHRNYwv6eGRV-2BaTw8XFjUDT-2Buh0aNvnbRf3W4hZG9fhRTe3ZG1SVGKmPzZ3-2FzDfWY6f47nVj5SCngeYWKxJlhK8b6pZO0d-2BVoe4QphE76Aza3vqOCu7UO2VqnFgeouDK7glBiWwdgNLuTh8rdw4hewX-2FqvuKg8hyN5OI-2B0fa-2BWIN6-2F4-2FvA1kpmtcPzFj6s-3Drahv_Gar1XziZ-2FC-2BZCWonDWJYk-2BSsWiCx-2FrMYpNPHDopm-2Ft86XWlhd51n0iFAHcrvCkeIrp96NfwB75rMM8ZJ0Czpdjzj62t0oFb9Wjx2Ljf57QUd33uioGdIOTt66b59OfQZNiI5VUNqVC5LkUNObSrivQomEHXLMUwzczEZXqZoKSGAgpTZ6muOJQH5eYg2vUryz6-2BmswNYfZTdW3BYj2XvfrSFej3MU2cDLoRa-2FRP7Z69kqLoQcHwbkmFWX-2BC7h81Ytf3-2FfStUSYoBFCHl3c2pBDvZMX1Wgg0zshDYFVVtanlnQQz619uK4DPoK-2FwrUSDEz-2FRy-2FVjTVEQ5HAivJMTdZAOMdmBg5cCmauJaNg55PZq6xuFmYhteeHQ4h0oabVKL');
  await page.locator('div').filter({ hasText: /^Tasks$/ }).getByRole('img').click();
  try {
    await page.locator('._viewTypeChips_wopqc_18 > div:nth-child(3)').click();
  } catch (error) {
    console.log('Failed to find first locator, trying second locator');
    await page.getByRole('heading', { name: 'List View' }).click();
  }
//   await page.locator('._viewTypeChips_wopqc_18 > div:nth-child(3)').click();
//   await page.getByRole('heading', { name: 'List View' }).click();
  await page.getByRole('button', { name: 'Add Task' }).nth(1).click();
  await page.getByPlaceholder('Task Name').click();
  await page.getByPlaceholder('Task Name').fill('Testing Task');
  await page.getByPlaceholder('Add Description').click();
  await page.getByPlaceholder('Add Description').fill('Testing the Task in Automation codes');
  await page.getByRole('button', { name: 'user icon Add Subtask' }).click();
  await page.locator('div').filter({ hasText: /^Subtask Add Subtask$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Subtask Add Subtask$/ }).getByRole('textbox').fill('Here Iam Adding subsask');
  await page.getByRole('button', { name: 'user icon Assign to' }).click();
  await page.getByText('Intake Admin', { exact: true }).click();
  await page.getByRole('button', { name: 'calendar icon Due Date' }).click();
  await page.getByRole('gridcell', { name: '3', exact: true }).click();
  await page.getByText('Set Priority').click();
  
//   await page.getByRole('banner').getByTestId('priority_flag_image').click();
  await page.getByRole('menuitem', { name: 'Urgent' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('menuitem', { name: 'InProgress' }).click();
  await page.getByRole('button', { name: 'assignee icon' }).click();
  await page.locator('p').filter({ hasText: /^Intake Admin$/ }).click();
  await page.getByRole('button', { name: 'Task priority flag' }).click();
  await page.getByRole('menuitem', { name: 'Urgent' }).click();
  await page.getByRole('button', { name: 'Create Task' }).nth(1).click();
  await page.waitForTimeout(3000);

  await page.getByText('Testing Task').click();
  await page.getByRole('button', { name: 'user icon Add Subtask' }).click();
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('Hey I am testing again');
  await page.locator('footer').filter({ hasText: 'Send' }).getByRole('textbox').click();
  await page.locator('footer').filter({ hasText: 'Send' }).getByRole('textbox').fill('Hey I am adding here @');
  await page.getByText('scheduler 1').click();
  await page.getByRole('button', { name: 'Send' }).nth(1).click();
  await page.getByRole('button', { name: 'Save changes' }).nth(1).click();
  await page.getByRole('heading', { name: 'Calendar View' }).click();
  await page.getByRole('button', { name: 'Month' }).nth(1).click();
  await page.getByText('Testing Task').click();
  await page.getByRole('button', { name: 'user icon Add Subtask' }).click();
  await page.locator('div:nth-child(4) > ._subtaskInput_8b4c7_21 > ._commentEditor_13dy9_1 > ._commentInputField_13dy9_11 > div > div > textarea').click();
  await page.locator('div:nth-child(4) > ._subtaskInput_8b4c7_21 > ._commentEditor_13dy9_1 > ._commentInputField_13dy9_11 > div > div > textarea').fill('Hey Testing noob');
  await page.getByRole('button', { name: 'Save changes' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.locator('.primary-ca-bolder').first().click();
  await page.getByText('Testing Task').click();
  await page.getByRole('button', { name: 'user icon Add Attachment' }).click();
  await page.locator('footer').filter({ hasText: 'Send' }).getByRole('textbox').click();
  await page.locator('footer').filter({ hasText: 'Send' }).getByRole('textbox').fill('@');
  await page.getByRole('option', { name: 'scheduler 1' }).click();
  await page.locator('footer').filter({ hasText: '@scheduler 1 @scheduler 1 Send' }).getByRole('textbox').fill('@scheduler 1 Added here again');
  await page.getByRole('button', { name: 'Send' }).nth(1).click();
  await page.locator('header').filter({ hasText: 'Activity' }).getByRole('button').click();
  await page.getByRole('button', { name: 'My Task' }).nth(1).click();
  await page.getByRole('heading', { name: 'List View' }).click();
  await page.getByRole('button', { name: 'All Tasks' }).nth(1).click();
  await page.locator('._addMoreAssignee_7qhwk_61 > img').first().click();
  await page.locator('span').filter({ hasText: 'Owner Team' }).getByRole('paragraph').click();
  await page.getByRole('button', { name: 'My Task' }).nth(1).click();
  await page.getByRole('button', { name: 'All Tasks' }).nth(1).click();
  await page.getByRole('button', { name: 'Group by' }).nth(1).click();
  await page.getByText('Status').click();
  await page.getByRole('button', { name: 'Group by' }).nth(1).click();
  await page.locator('p').filter({ hasText: 'Assigned To' }).click();
  await page.getByRole('button', { name: 'Group by' }).nth(1).click();
  await page.locator('p').filter({ hasText: 'Due Date' }).click();
  await page.getByRole('button', { name: 'Group by' }).nth(1).click();
  await page.locator('p').filter({ hasText: 'Priority' }).click();
  
});