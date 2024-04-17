import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '../inboxes.txt');

export const writeJSONToFileAsync = async (
  jsonData: string[]
): Promise<void> => {
  try {
    await fs.promises.writeFile(filePath, JSON.stringify(jsonData, null, 2));
    console.log('JSON data written to file successfully.');
  } catch (err) {
    console.error('Error writing to file:', err);
    throw err;
  }
};

export const readJSONFromFileAsync = async (): Promise<string[] | null> => {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data) as string[];
    console.log('JSON data read from file:', jsonData);
    return jsonData;
  } catch (err) {
    console.error('Error reading file:', err);
    return null;
  }
};

export const makeFileEmpty = async () => {
  try {
    await fs.promises.writeFile(filePath, '');
    console.log('File made empty successfully');
  } catch (err) {
    console.log('File made empty unsucessful');
  }
};
