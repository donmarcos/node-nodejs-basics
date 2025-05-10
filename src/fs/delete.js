import fs from 'node:fs/promises';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';

const dirName = 'files';
const fileName = 'fileToRemove.txt';
const { __dirname } = getPathData(import.meta.url);

const errorMap = {
    ENOENT: 'FS operation failed',
};


const remove = async () => {
    // Write your code here 
    logMsg({ msg: 'Starting work delete.js' });

    const filePath = path.join(__dirname, dirName, fileName);
    try {
        await fs.unlink(filePath);
        logMsg({ msg: `Success : File ${fileName} was deleted` })
    } catch (error) {
        const errorMessage = errorMap[error.code] || error.errorMessage;
        logMsg({
            msg: errorMessage,
            cause: error,
            type: 'error',
        });
    }


    logMsg({ msg: 'Ending work delete.js' });
};

await remove();
