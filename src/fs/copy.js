// imports  and clean up of code 
import fs from 'node:fs/promises';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';


const sourceDirname = 'files';
const targetDirname = 'files_copy';
const { __dirname } = getPathData(import.meta.url);

const ERR_FS_OPERATION_FAILED = 'FS operation failed';
const errorMap = {
    ENOENT: 'FS operation failed',
    EEXIST: 'FS operation failed',
    ERR_FS_CP_EEXIST: 'FS operation failed',
};

const copy = async () => {
    // Write your code here 
    logMsg({ msg: 'Starting work copy.js' });

    const sourcePath = path.join(__dirname, sourceDirname);
    const targetPath = path.join(__dirname, targetPath);

    try {
        await fs.cp(sourcePath, targetPath, {
            recursive: true,
            errorOnExist: true,
            force: false,
        });
        logMsg({
            msg: `Success: Directory '${sourceDirname}' copied to '${targetDirname}'`
        });
    } catch (error) {
        const errorMessage = errorMap[error.code] || error.errorMessage;
        logMsg({
            msg: errorMessage,
            cause: error,
            type: 'error',
        });
    }


    logMsg({ msg: 'Ending work copy.js' });
};

await copy();
