const fs = require('fs');
const path = require('path');
const {stdout} = process;

fs.mkdir(path.join(__dirname, 'notes'), err => {
    if(err) throw err;
    stdout.write("create folder - done \n");
});

fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'Hello world',
    (err) => {
        if(err) throw err;
        stdout.write("create file.txt - done \n");
    }
)

fs.appendFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    ' From append file',
    (err) => {
        if(err) throw err;
        stdout.write("append text - done \n")
    }
)

fs.readFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'utf-8',
    (err, data) => {
        if(err) throw err;
        stdout.write('file read - done \n')
    }
)

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if(err) throw err;
        stdout.write('file rename - dome');
    }
)