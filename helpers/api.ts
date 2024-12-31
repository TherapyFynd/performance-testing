import { APIRequestContext } from '@playwright/test';
import {
  BASE_BACKEND_URL,
  isRunningOnLocal,
  localPort,
} from '../localemails.js/const';

export const generatePasswordlessLoginLink = async ({
  email,
  request,
}: {
  email: string;
  request: APIRequestContext;
}) => {
  try {
    const data = await request.post(
      `${BASE_BACKEND_URL}/test/get-passwordless-login-link-by-email`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-test-key': `omnipractice_random_a83500678d`,
        },
        data: isRunningOnLocal
          ? {
              email: email,
              isTestMode: true,
              localPort: localPort,
            }
          : { email: email, isTestMode: true },
      }
    );

    const c = await data.text();
    console.log(`Passwordless link generated for ${email}`);
    return c;
  } catch (error) {
    console.log(`Error while generating passwordless link for ${email}`, error);
    
  }
};

// const deleteAccounts = async ({
//   inboxes,
//   request,
// }: {
//   inboxes: string[];
//   request: APIRequestContext;
// }) => {
//   try {
//     const emails = inboxes;

//     await request.delete(`${BASE_BACKEND_URL}/test/user/delete`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'x-test-key': `omnipractice_random_a83500678d`,
//       },
//       data: { emails: emails },
//     });

//     console.log(`Account deleted (${emails?.length}) : ${emails?.join(',')} `);
//     return true;
//   } catch (error) {
//     console.log(`Error while deleting emails`, error);
//   }
// };
