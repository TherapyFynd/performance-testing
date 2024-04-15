import { test, type Page } from '@playwright/test';
import { deleteAccounts } from '../helpers/api';
import { createdInboxes } from '../helpers/mailsurp';

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test('Performing Cleanup', async ({ request }) => {
  // Delete all account from the database and also from mailsurp
  await deleteAccounts({
    inboxes: createdInboxes,
    request: request,
  });
});
