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
  therapist21?: string;
  therapist22?: string;
  therapist23?: string;
  therapist24?: string;
  therapist25?: string;
  therapist26?: string;
  therapist27?: string;
  therapist28?: string;
  therapist29?: string;
  therapist30?: string;
  therapist31?: string;
  therapist32?: string;
  therapist33?: string;
  therapist34?: string;
  therapist35?: string;
  therapist36?: string;
  therapist37?: string;
  therapist38?: string;
  therapist39?: string;
  therapist40?: string;
  therapist41?: string;
  therapist42?: string;
  therapist43?: string;
  therapist44?: string;
  therapist45?: string;
  therapist46?: string;
  therapist47?: string;
  therapist48?: string;
  therapist49?: string;
  therapist50?: string;

  practice1?: string;
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
