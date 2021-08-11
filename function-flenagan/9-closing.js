//! checkscope
let scope = 'глобальна область видимості';
function checkscop () {
    let scope = 'локальна область видимості';
    function f() {
        return scope;
    }
    return f;
}
console.log(checkscop()());

//! uniqueInteger
let uniqueInteger = (function() {
    let counter = 0;
    return function(){
        return counter++;
    }
} ());
uniqueInteger(); // => 0
uniqueInteger(); // => 1
console.log(uniqueInteger()); // => 2

//! counter
function counter() {
    let n = 0;
    return {
        count: function() { return n++;},
        reset: function() { n = 0;}
    }
}
let c = counter();
let d = counter();
console.log(c.count());
console.log(d.count());
c.reset();
console.log(c.count());
console.log(d.count());

//! addPrivateProperty
function addPrivateProperty(o, name, predicate){
    let value;
    o[`get${name}`] = function() {
        return value;
    };

    o[`set${name}`] = function (v){
        if(predicate && !predicate(v)) {
            throw new TypeError(`set${name}: недопустиме значення ${v}`);
        } else {
            value = v;
        }
    }
}

let o = {};
addPrivateProperty(o, "Name", x => typeof x === "string");
o.setName("Frank");
console.log(o.getName());