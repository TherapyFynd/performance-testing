import path from 'path';
import { BASE_EMAIL_NAMESPACE, TAG_NAMESPACE } from '../localemails.js/const';
import { readJSONFromFileAsync, writeJSONToFileAsync } from './file-helper';

export interface IInbox {
  email: string;
  id: string;
}

function generateRandomText(length: number): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomText = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }
  return randomText;
}

export const createNewEmail = async () => {
  try {
    const randomText = generateRandomText(5);
    const email = BASE_EMAIL_NAMESPACE.replace(TAG_NAMESPACE, randomText);
    const filePath = path.join(__dirname, '../inboxes.txt');
    let data = await readJSONFromFileAsync(filePath);
    if (data) {
      (data as string[])?.push(email);
    } else {
      data = [email];
    }
    await writeJSONToFileAsync(data, filePath);

    // console.log(`Email created : ${email}`);
    return email;
  } catch (error) {
    console.log(`Error while creating inbox : `, error);
  }
};

// Not used
// export const deleteMailSurpInboxes = async (ids: string[]) => {
//   const mailslurp = new MailSlurp({
//     apiKey: MAILSURP_API_KEY,
//   });

//   try {
//     const promise: Promise<void>[] = [];

//     ids?.forEach((id) => {
//       promise.push(mailslurp.inboxController.deleteInbox({ inboxId: id }));
//     });

//     await Promise.all(promise);

//     console.log(`Mailsurp emails deleted : ${ids?.join(',')}`);
//     return true;
//   } catch (error) {
//     console.log(`Error while deleting inbox ${ids?.join(',')} : `, error);
//   }
// };
