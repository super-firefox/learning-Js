//! Фабрична функція яка повертає новий обєкт діапазона
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

//* Приклад використання обєкта діапазона
let r = Range(1, 3);
console.log(r.includes(2)); // => true
console.log(r.toString());