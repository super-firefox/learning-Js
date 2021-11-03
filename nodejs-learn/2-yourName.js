const {stdin, stdout} = process;

stdout.write("What your name?\n");
stdin.on('data', (data) => {
    const dataStringified = data.toString();
    stdout.write(`Hello ${dataStringified.split('').reverse().join('')}\n`);
    process.exit();
});

process.on('exit', () => {
    stdout.write('Bye');
})

