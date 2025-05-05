import fs from 'node:fs/promises';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';

const dirName = 'files';
const oldFileName = 'wrongFilename.txt';
const newFileName = 'properFilename.md';
const { __dirname } = getPathData(import.meta.url);

const errorMap = {
    ENOENT: 'FS operation failed',
    EEXIST: 'FS operation failed',
};

const rename = async () => {
    // Write your code here 
    logMsg({ msg: 'Starting work rename.js' });
    const oldPath = path.join(__dirname, dirName, oldFileName);
    const newPath = path.join(__dirname, dirName, newFileName);

    if (!(await isFileExists(oldPath))) {
        logMsg({
            msg: `${errorMap.EEXIST}. The File ${newFileName} does not exist`,
            type: 'error',
        });
        return;
    }

    if ((await isFileExists(newPath))) {
        logMsg({
            msg: `${errorMap.EEXIST}. The File ${newFileName} already exist`,
            type: 'error',
        });
        return;
    }

    try {
        await fs.rename(oldPath, newPath);
        logMsg({ msg: `Success: file ${oldFileName} renamed to ${newFileName}` });
    } catch (error) {
        const errorMessage = errorMap[error.code] || error.errorMessage;
        logMsg({
            msg: errorMessage,
            cause: error,
            type: 'error',
        });
    }


    logMsg({ msg: 'Ending work rename.js' });
};

function isFileExists(filePath) {
    return fs
        .access(filePath)
        .then(() => true)
        .catch(() => false);
}

await rename();
