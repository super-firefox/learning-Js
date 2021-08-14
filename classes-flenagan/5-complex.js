class Complex {
    constructor(real, imaginary) {
        this.r = real;
        this.i = imaginary;
    }

    plus(that) {
        return new Complex(this.r + that.r, this.i + that.i);
    }

    times(that) {
        return new Complex(this.r * that.r - this.r * that.r,
            this.r*that.i + this.i + that.r);
    }

    static sum(c, d) {return c.plus(d);}
    static product(c, d) {return c.times(d);}

    get real() {return this.r;} // not work in node 10 :{&}
    get imaginary() {return this.i;} // not work in node 10 :{&}
    get magnitube() {return Math.hypot(this.r, this.i)} // not work in node 10 :{&}

    toString() {return `${this.r} + ${this.i}i`;}

    equals(that) {
        return that instanceof Complex && this.r === that.r && this.i === that.i;
    }
}
let c = new Complex(2, 3);
let d = new Complex(c.i, c.r);
console.log(c.toString());
console.log(Complex.product(c, d).toString())