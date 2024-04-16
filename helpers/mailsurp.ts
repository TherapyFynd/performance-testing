import MailSlurp from 'mailslurp-client';
import { MAILSURP_API_KEY } from '../localemails.js/const';
import { readJSONFromFileAsync, writeJSONToFileAsync } from './file-helper';

export interface IInbox {
  email: string;
  id: string;
}

export const createMailSurpEmail = async () => {
  const mailslurp = new MailSlurp({
    apiKey: MAILSURP_API_KEY,
  });

  try {
    const inbox = await mailslurp.inboxController.createInbox({});
    let data: IInbox[] | null = await readJSONFromFileAsync();
    if (data) {
      data?.push({ email: inbox.emailAddress, id: inbox.id });
    } else {
      data = [{ email: inbox.emailAddress, id: inbox.id }];
    }
    await writeJSONToFileAsync(data);

    console.log(`Mailsurp email created : ${inbox.emailAddress}`);
    return inbox.emailAddress;
  } catch (error) {
    console.log(`Error while creating inbox : `, error);
  }
};

export const deleteMailSurpInboxes = async (ids: string[]) => {
  const mailslurp = new MailSlurp({
    apiKey: MAILSURP_API_KEY,
  });

  try {
    const promise: Promise<void>[] = [];

    ids?.forEach((id) => {
      promise.push(mailslurp.inboxController.deleteInbox({ inboxId: id }));
    });

    await Promise.all(promise);

    console.log(`Mailsurp emails deleted : ${ids?.join(',')}`);
    return true;
  } catch (error) {
    console.log(`Error while deleting inbox ${ids?.join(',')} : `, error);
  }
};
