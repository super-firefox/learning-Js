"use strict"
class Range {
    constructor(from, to){
        this.from = from;
        this.to = to;
    }

    static parse(s) {
        let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
        if (!matches) {
            throw new TypeError(`Cannot parse Range from "${s}".`);
        }
        return new Range(parseInt(matches[1]), parseInt(matches[2]));
    }

    includes(x) {
        return (this.from <= x) && (x <= this.to);
    }

    *[Symbol.iterator]() { //* зірочка(*) признак генераторної а не звичайної функції
        for(let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }

    toString() {
        return `(${this.from}...${this.to})`;
    }
}

let r = Range.parse('(1...10)');
console.log(r.includes(2)); // => true
console.log(r.toString());
console.log([...r]);