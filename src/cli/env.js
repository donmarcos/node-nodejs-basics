
import { logMsg } from '../utils.js';
import os from 'node:os';



const parseEnv = () => {
    // Write your code here 
    logMsg({ msg: 'Starting work Env.js' });
    const envVars = process.env;
    //const rssVars = [];

    // Reviewed code for better approach 
    const rssVars = Object.entries(process.env)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`);

    if (rssVars === 0) {
        logMsg({ msg: 'No RSS variables found', type: 'important' });
    } else {
        logMsg({ msg: rssVars.join('; '), type: 'important' });
    }

    logMsg({ msg: 'Ending work Env.js' });

};

parseEnv();
