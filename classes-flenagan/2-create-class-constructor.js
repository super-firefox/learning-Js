function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {
    includes(x) {
        return (this.from <= x) && (x <= this.to);
    },

    [Symbol.iterator]: function* () { //* зірочка(*) признак генераторної а не звичайної функції
        for(let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },

    toString() {
        return `(${this.from}...${this.to})`;
    }
}

//* Приклад використання обєкта діапазона
let r = new Range(1, 3);
console.log(r.includes(2)); // => true
console.log(r.toString());
console.log([...r]);