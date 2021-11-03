const {stdout, stdin} = process;
stdout.write('I am BatMan \n');
// stdin.on('data', data => stdout.write("+" + data));
process.on('exit', (code) => {
    if(code === 0){
        stdout.write('Good');
    } else {
        stdout.write(Bad);
    }
});
// process.on('exit', () => stdout.write('Lucky day!!'));
