let multNumber = function(x: number, y: number): number {
    return x * y;
}

console.log(multNumber(7, 9));

let total = function (input: number[]): number {
    let total: number = 0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(total([1, 2, 3]));