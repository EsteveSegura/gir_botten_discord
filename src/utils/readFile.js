const path = require('path');
const fs = require('fs');

function readFile(file) {

  return fs.readFileSync(path.join(__dirname, '..', file), 'utf-8')
    .toString().toLowerCase()
    .split('\r\n');

}

module.exports = {readFile}