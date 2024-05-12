// 16 Emails will Require for all roles

import path from 'path';
import {
  readJSONFromFileAsync,
  writeJSONToFileAsync,
} from '../helpers/file-helper';



/** New constants */

export interface IEmail {
  therapistEmail?: string;
  supervisorEmail?: string;
  clientEmail?: string;
  intakeAdminEmail?: string;
  practiceAdminEmail?: string;
  billerEmail?: string;
  schedulerEmail?: string;
  intakeadminroleEmail?: string;
  minorclient?: string;
  guardinclient?: string;
  couplemaleclient?: string;
  couplefemaleclient?: string;
  
}

export const readEmails = async (): Promise<IEmail | {}> => {
  const filePath = path.join(__dirname, '../emails.txt');

  let data = await readJSONFromFileAsync(filePath);

  return data ? (data as IEmail) : {};
};

export const setEmails = async (email: IEmail) => {
  const filePath = path.join(__dirname, '../emails.txt');
  await writeJSONToFileAsync(email, filePath);
};
