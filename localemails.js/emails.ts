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
  customroleEmail?: string;
  billerEmail?: string;
  schedulerEmail?: string;
  intakeadminroleEmail?: string;
  minorclient?: string;
  guardinclient?: string;
  couplemaleclient?: string;
  couplefemaleclient?: string;
  combinerole1?: string;
  combinerole2?: string;
  billingsection?: string;
  therapist1?: string;
  therapist2?: string;
  therapist3?: string;
  therapist4?: string;
  therapist5?: string;
  therapist6?: string;
  therapist7?: string;
  therapist8?: string;
  therapist9?: string;
  therapist10?: string;
  therapist11?: string;
  therapist12?: string;
  therapist13?: string;
  therapist14?: string;
  therapist15?: string;
  therapist16?: string;
  therapist17?: string;
  therapist18?: string;
  therapist19?: string;
  therapist20?: string;
  practice2?: string;
  practice3?: string;
  practice4?: string;
  practice5?: string;
  supervisor1?: string;
  supervisor2?: string;
  supervisor3?: string;
  supervisor4?: string;
  supervisor5?: string;
  
  
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
