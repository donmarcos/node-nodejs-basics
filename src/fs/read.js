import fs from 'node:fs/promises';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';

const encoding = 'utf8';
const dirName = 'files';
const fileName = 'fileToRead.txt';
const { __dirname } = getPathData(import.meta.url);
const filePath = path.join(__dirname, dirName, fileName);

const errorMap = {
    ENOENT: 'FS operation failed',
};

const read = async () => {
    // Write your code here 
    logMsg({ msg: 'Starting work Read.js' });

    try {
        const content = await fs.readFile(filePath, encoding);
        logMsg({ msg: content, type: 'important' });
        logMsg({ msg: 'Success: Files content printed' });

    } catch (error) {
        const errorMessage = errorMap[error.code] || error.errorMessage;
        logMsg({
            msg: errorMessage,
            cause: error,
            type: 'error',
        });
    }


    logMsg({ msg: 'Endig work Read.js' });

};

await read();
