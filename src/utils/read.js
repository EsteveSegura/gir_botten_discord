import path from 'path';
import fs from 'fs';


function read(file) {

    const input = fs.readFileSync(path.join(__dirname, 'insultos.txt'), 'utf-8')
    .toString()
    .trim()
    .split('\n\n')
    .map((line) => { 
        console.log(line)
    });


    


}