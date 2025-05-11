
import { logMsg } from '../utils.js';
import os from 'node:os';



const parseEnv = () => {
    // Write your code here 
    logMsg({ msg: 'Starting work Env.js' });
    const envVars = process.env;
    const rssVars = [];

    for (let key in envVars) {
        if (key.startsWith('RSS_')) {
            rssVars.push(`${key}=${envVars[key]}`);
        }
    }

    if (rssVars === 0) {
        logMsg({ msg: 'No RSS variables found', type: 'important' });
    } else {
        logMsg({ msg: rssVars.join(os.EOL), type: 'important' });
    }

    logMsg({ msg: 'Ending work Env.js' });

};

parseEnv();
