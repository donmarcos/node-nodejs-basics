
//imports 
import fs from 'node:fs/promises';
import path from 'node:path';
import { logMsg, getPathData } from '../utils.js';



const fileName = 'fresh.txt';
const dirName = 'files';
const content = 'I am fresh and young';
const errorMap = {
    EEXIST: 'FS operation failed',
};
const { __dirname } = getPathData(import.meta.url);


const create = async () => {

    logMsg({ msg: 'Starting work create.js' });

    const filePath = path.join(__dirname, dirName, fileName);

    try {
        await fs.writeFile(filePath, content, { flag: 'wx' });
        logMsg({
            msg: `Success : file ${fileName} created`,
        });

    } catch (error) {
        const errorMessage = errorMap[error.code] || error.errorMessage;
        logMsg({
            msg: errorMessage,
            cause: error,
            type: 'error',
        });

    }

    logMsg({ msg: 'Ending work create.js' });
};

await create();
