"use strict"

function Calculator(x, y){
    this.x = +x;
    this.y = +y

    this.sum = function() {
        return this.x + this.y;
    }

    this.mul = function() {
        return this.x * this.y;
    }
}

let newCalc = new Calculator(10, 15);
console.log(newCalc.sum(), newCalc.mul());