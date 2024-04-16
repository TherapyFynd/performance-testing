import { test } from '@playwright/test';
import { deleteAccounts } from '../helpers/api';
import { createdInboxes } from '../helpers/mailsurp';

test('Performing Cleanup', async ({ request }) => {
  // Delete all account from the database and also from mailsurp
  await deleteAccounts({
    inboxes: createdInboxes,
    request: request,
  });
});
