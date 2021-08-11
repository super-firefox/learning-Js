// length
let p = Math.pow;
console.log(p.length); // приймає два аргументи

// name 
console.log(p.name);

//call() and apply()
function sayHi(smile = '') {
    console.log('Hi,', this.name, smile);
}

let obj123 = {name: "Obj123"};
let obj456 = {name: "Obj456"};
sayHi.call(obj123, ":-)");
sayHi.apply(obj456, [";o|"]);

function trace(o, m) {
    let original = o[m];
    o[m] = function(...args){
        console.log(new Date(), "Entering:", m);
        let result = original.apply(this, args);
        console.log(new Date(), "Exiting:", m);
        return result;
    };
}

// bind()
function fb(y) {return this.x + y};
let ob = {x : 1};
let g = fb.bind(ob);
console.log("g(2) = ", g(2)); 
let ob2 = {x: 10, g};
console.log("g(2) = ", g(2)); 

//currying 1
let sum = (x, y) => x+y; //повертає суму двох аргументів
let succ = sum.bind(null, 1); // привязує перший аргумент до 1
console.log("succ(2) =", succ(2)); // => 3: х привязане до 1, а для аргумента у передається 2

// currying 2
function r(y, z) { return this.x + y + z; } 
let gr = r.bind({x: 1}, 2); // Привязуємо this i y
console.log("gr(3) =", gr(3)); // => 6: this.x привязане до 1, y привяхане до 2 і z - до 3
console.log(g.name); // додається префікс bound