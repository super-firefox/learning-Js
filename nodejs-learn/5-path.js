const path = require('path');
console.log(`
    ${path.basename(__filename)},
    ${path.dirname(__filename)},
    ${path.extname(__filename)},
    ${path.parse(__filename)},
    ${path.join(__dirname, 'test', 'igor.js')},
    ${path.resolve(__dirname, './test', './igor.js')}
`);

    console.log();
