let a = [];
a[0] = "zero";
a[1] = "one";
console.log(a, "length =", a.length);

//! push() and unshift()

a.push("two");
a.unshift("minus one");
console.log(a, "length =", a.length);

//! pop() and shift()
a.pop();
a.shift();
console.log(a, "length =", a.length);

//! delete
delete a[0];
console.log("zero" in a);
console.log(a, "length =", a.length);