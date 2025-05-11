import { logMsg } from '../utils.js';
import os from 'node:os';


const parseArgs = () => {
    // Write your code here 
    logMsg({ msg: 'Starting work Args.js' });

    const args = process.argv.slice(2);

    if (args.length === 0) {
        logMsg({ msg: 'No arguments found', type: 'important' });
    }

    // we do this +2 since when using npm there are already two initial values 
    // being passed on to Node and  per the requirements we are not to be concerned
    // about those 
    // use console.log(process.argv) to see a full list of arguments being passed 
    for (let i = 0; i < args.length; i += 2) {
        const propName = args[i].slice(2);
        const value = args[i + 1];
        logMsg({ msg: `${propName} is ${value}`, type: 'important' });
    }

    logMsg({ msg: 'Ending work Args.js' });
};

parseArgs();
