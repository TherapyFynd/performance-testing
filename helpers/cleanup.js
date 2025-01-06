import { APIRequestContext, request } from '@playwright/test';
import { BASE_BACKEND_URL } from '../localemails.js/const';
import { readJSONFromFileAsync, makeFileEmpty } from './file-helper';
import path from 'path';

(async () => {
  const filePathEmails = path.join(__dirname, 'emails.txt');
  const filePathInboxes = path.join(__dirname, 'inboxes.txt');

  try {
    // Read email and inbox data from files
    const emails= await readJSONFromFileAsync(filePathEmails);
    const inboxes = await readJSONFromFileAsync(filePathInboxes);

    const context= await request.newContext({
      baseURL: BASE_BACKEND_URL,
    });

    // Perform cleanup of accounts
    console.log(`Deleting accounts for ${inboxes.length} inboxes.`);
    await context.delete('/test/user/delete', {
      headers: {
        'Content-Type': 'application/json',
        'x-test-key': 'omnipractice_random_a83500678d',
      },
      data: { emails: inboxes },
    });

    // Clear files after successful cleanup
    console.log('Clearing files...');
    await makeFileEmpty(filePathEmails);
    await makeFileEmpty(filePathInboxes);

    console.log('Cleanup completed successfully!');
  } catch (error) {
    console.error('Error during cleanup:', error);
  }
})();
