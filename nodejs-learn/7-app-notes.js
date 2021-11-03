const path = require('path');
const fs = require('fs');
const { argv, stdout } = process;

class Notes {
    constructor(pathFile, title, content) {
        this.pathFile = pathFile;
        this.title = title;
        this.content = content;
        this.notes = [];
    };

    init() {
        fs.writeFileSync(
            this.pathFile,
            '[]',
            err => {
                if (err) console.log('file NOT create');
                console.log('file create');
            })
    }

    list() {
        fs.readFile(this.pathFile, 'utf-8', (err, text) => {
            if(err) console.log(err.message);
            this.notes = JSON.parse(text);
            this.notes.forEach((item, index) => console.log(`${index+1}. ${item.title}`));
        })
    }

    view() {
        fs.readFile(this.pathFile, 'utf-8', (err, text) => {
            if(err) console.log(err.message);
            this.notes = JSON.parse(text);
            const note = this.notes.find(item => item.title === this.title);
            note ? console.log(note.content) : console.log('note not find');
        })
    }

    remove() {
        fs.readFile(this.pathFile, 'utf-8', (err, text) => {
            if(err) console.log(err.message);

            this.notes = JSON.parse(text);
            let index = this.notes.findIndex(item => item.title === this.title);
            if(index > -1){
                this.notes.splice(index, 1);
                fs.writeFile(this.pathFile, JSON.stringify(this.notes), err => {
                    if(err) console.log(err.message);
                });
            } else {
                console.log('note not find')
            }
            console.log(this.notes)
        })
    }

    create() {
        console.log('create');
        fs.access(this.pathFile, fs.constants.F_OK, err => {
            
            if (err) {
                this.init()
            }

            fs.readFile(this.pathFile, 'utf-8', (err, data) => {
                if (err) {
                    console.log('read err0r')
                } else {
                    this.notes = JSON.parse(data);
                    const note = {
                        "title": this.title,
                        "content": this.content
                    }
                    this.notes.push(note);
                    const save = JSON.stringify(this.notes);
                    fs.writeFile(this.pathFile, save, err => {
                        if (err) {
                            console.log("Err0r writeFile");
                        } else {
                            console.log("save new note")
                        }
                    })
                }
            })
        })
    }
}

const pf = path.join(__dirname, 'notes.json');
const [command2, title2, content2] = argv.slice(2);
new Notes(pf, title2, content2)[command2]();