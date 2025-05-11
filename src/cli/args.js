import { logMsg } from '../utils.js';
import os from 'node:os';


const parseArgs = () => {
    // Write your code here 
    logMsg({ msg: 'Starting work Args.js' });

    const args = process.argv.slice(2);

    if (args.length === 0) {
        logMsg({ msg: 'No arguments found', type: 'important' });
    }

    for (let i = 0; i < args.length; i += 2) {
        const propName = args[i].slice(2);
        const value = args[i + 1];
        logMsg({ msg: `${propName} is ${value}`, type: 'important' });
    }

    logMsg({ msg: 'Ending work Args.js' });
};

parseArgs();
