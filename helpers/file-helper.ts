import fs from 'fs';
import { IEmail } from '../localemails.js/emails';

export const writeJSONToFileAsync = async (
  jsonData: string[] | IEmail,
  filePath: string
): Promise<void> => {
  try {
    await fs.promises.writeFile(filePath, JSON.stringify(jsonData, null, 2));
    // console.log('JSON data written to file successfully.');
  } catch (err) {
    console.error('Error writing to file:', err);
    throw err;
  }
};

export const readJSONFromFileAsync = async (
  filePath: string
): Promise<string[] | IEmail | null> => {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data) as string[];
    // console.log('JSON data read from file:', jsonData);
    return jsonData;
  } catch (err) {
    // console.error('Error reading file:', err);
    return null;
  }
};

export const makeFileEmpty = async (filePath: string) => {
  try {
    await fs.promises.writeFile(filePath, '');
    console.log('File made empty successfully');
  } catch (err) {
    console.log('File made empty unsucessful');
  }
};
