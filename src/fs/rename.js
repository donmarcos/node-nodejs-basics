import fs from 'node:fs/promises';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';

const dirName = 'files';
const oldFilename = 'wrongFilename.txt';
const newFilename = 'properFilename.md';
const { __dirname } = getPathData(import.meta.url);

const errorMap = {
    ENOENT: 'FS operation failed',
    EEXIST: 'FS operation failed',
};

const rename = async () => {
    // Write your code here 
    logMsg({ msg: 'Starting work rename.js' });






    logMsg({ msg: 'Ending work rename.js' });
};

await rename();
