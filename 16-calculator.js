function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
    }
    this.calculator = function (str) {
        let expresion = str.split(" ");
        let num1 = +expresion[0];
        let num2 = +expresion[2];
        let op = expresion[1]

        if(!this.methods[op] || isNaN(num1) || isNaN(num2)) {
            return NaN;
        }
        
        return this.methods[op](num1, num2);
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    }
}

let calc = new Calculator;
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(
    calc.calculator("3 + 9"),
    calc.calculator("3 * 9"),
    calc.calculator("3 / 9"),
    calc.calculator("3 ** 4"),
    calc.calculator("a - 4"),
);