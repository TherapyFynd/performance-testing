import MailSlurp from 'mailslurp-client';
import { MAILSURP_API_KEY } from '../localemails.js/const';

export interface IInbox {
  email: string;
  id: string;
}

export const createdInboxes: IInbox[] = [];

export const createMailSurpEmail = async () => {
  const mailslurp = new MailSlurp({
    apiKey: MAILSURP_API_KEY,
  });

  try {
    const inbox = await mailslurp.inboxController.createInbox({});
    createdInboxes.push({ email: inbox.emailAddress, id: inbox.id });
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
    console.log(createdInboxes);
    const promise: Promise<void>[] = [];

    ids?.forEach((id) => {
      promise.push(mailslurp.inboxController.deleteInbox({ inboxId: id }));
    });

    await Promise.all(promise);

    return true;
  } catch (error) {
    console.log(`Error while deleting inbox ${ids?.join(',')} : `, error);
  }
};
