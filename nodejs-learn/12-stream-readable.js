const fs = require('fs');
const readableStream = fs.createReadStream('source2.txt', 'utf-8');
let data=''
readableStream.on('data', chunk => data += chunk);
readableStream.on('end', () => console.log('end', data));
readableStream.on('error', (err) => console.log('Error (', err.message), ')')