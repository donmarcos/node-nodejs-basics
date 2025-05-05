// imports  and clean up of code 
import fs from 'node:fs/promises';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';


const sourceDirname = 'files';
const targetDirname = 'files_copy';
const { __dirname } = getPathData(import.meta.url);

const errorMap = {
    ENOENT: 'FS operation failed',
    EEXIST: 'FS operation failed',
    ERR_FS_CP_EEXIST: 'FS operation failed',
};

const copy = async () => {
    // Write your code here 
    logMsg({ msg: 'Starting work copy.js' });

    logMsg({ msg: 'Ending work copy.js' });
};

await copy();
