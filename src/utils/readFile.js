const path = require('path');
const fs = require('fs');

function readFile(file) {

  const words =  fs.readFileSync(path.join(__dirname, '..', file), 'utf-8')
    .toString()
    .trim()
    .split('\r\n');

    return lowercased = words.map( word => 
         word.toLowerCase()
    );
   




}

module.exports = {readFile}