class Calculate {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply (a, b) {
        return a * b;
    }

    divide (a, b) {
        if(b === 0){
            throw new Error(`divide on zero`);
        }
        return a / b;
    }
}

let c = new Calculate();
console.log(
    c.add(10, 5),
    c.subtract(10, 5),
    c.multiply(10, 5),
    c.divide(10, 5)
)