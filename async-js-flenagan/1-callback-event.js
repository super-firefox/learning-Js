const fs = require('fs');
const fsPromises = fs.promises;

let options = {

};

let p1 = fsPromises.access('config.json');

fs.access('config2.json', err => {
    if(err) {
        console.log('false')
    } else {
        console.log('true')
    }
})

fs.readFile('config.json', 'utf-8', (err, text) => {
    if(err) {
        console.log('Could not read config file:', err);
    } else {
        Object.assign(options, JSON.parse(text));
    }

    console.log(options);
})