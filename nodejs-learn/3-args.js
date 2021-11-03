const {argv, stdin, stdout, exit} = process;
console.log("Input two number");
const flag = argv[2];

function sum(a, b){
    return `${a} + ${b} = ${a+b}`;
}

function mult(a, b){
    return `${a} * ${b} = ${a*b}`;
}

stdin.on('data', (data) => {
    dataStringified = data.toString();
    let [a, b] = dataStringified.split(' ');
    let result;
    if(flag === '-s'){
        result = sum(+a, +b);
    } else if(flag === '-m'){
        result = mult(+a, +b);
    }
    stdout.write(result);
    exit();
});