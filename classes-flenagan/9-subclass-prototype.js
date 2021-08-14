//! Range
function Range(from, to) {
    let r = Object.create(Range.methods);
    r.from = from;
    r.to = to;
    return r;
}

Range.methods = {
    includes(x) {
        return (this.from <= x) && (x <= this.to);
    },

    *[Symbol.iterator]() { //* зірочка(*) признак генераторної а не звичайної функції
        for(let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },

    toString() {
        return `(${this.from}...${this.to})`;
    }
}

//! Span
function Span (start, span) {
    let s = Object.create(Range.prototype);
    if (span >= 0 ) {
        this.from = start;
        this.to = start + span;
    } else {
        this.to = start;
        this.from = start + span;
    }

    return s;
}

Span.prototype.constructor = Span;

Span.prototype.toString = function() {
    return `(${this.from}...${this.to-this.from})`;
};

//* Робимо Span підкласом Range
let s = Span(10, 5);
console.log(s.toString());
// for(let item of s){
//     console.log(item);
// }
