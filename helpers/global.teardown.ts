import { test } from '@playwright/test';
import { deleteAccounts } from '../helpers/api';
import { makeFileEmpty, readJSONFromFileAsync } from './file-helper';

test('Performing Cleanup', async ({ request }) => {
  const inb = await readJSONFromFileAsync();
  console.log(inb);
  // Delete all account from the database
  await deleteAccounts({
    inboxes: inb!,
    request: request,
  });

  await makeFileEmpty();
});
