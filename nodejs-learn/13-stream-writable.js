const fs = require('fs');
const input = fs.createReadStream('source.txt');
const output = fs.createWriteStream('output.txt');

input.on('data', chunk => output.write(chunk));
input.on('error', err => console.log(err.message));