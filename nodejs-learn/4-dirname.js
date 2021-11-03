const {stdout, argv} = process;
const [flag] = argv.slice(2);
if(flag === '-f'){
    stdout.write(__filename);
} else if (flag === '-d') {
    stdout.write(__dirname);
} else {
    stdout.write('Please, run program wiht flag -f or -d');
}