import fs from 'node:fs/promises';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';
import os from 'node:os';

const dirName = 'files';
const { __dirname } = getPathData(import.meta.url);
const dirPath = path.join(__dirname, dirName);

const errorMap = {
    ENOENT: 'FS operation failed',
};


const list = async () => {
    // Write your code here 
    logMsg({ msg: 'Starting work List.js' });


    try {
        const files = await fs.readdir(dirPath);
        logMsg({ msg: files.join(os.EOL), type: 'important' });
        logMsg({ msg: 'Success: Files List printed' });

    } catch (error) {
        const errorMessage = errorMap[error.code] || error.errorMessage;
        logMsg({
            msg: errorMessage,
            cause: error,
            type: 'error',
        });
    }


    logMsg({ msg: 'Ending work List.js' });
};

await list();
