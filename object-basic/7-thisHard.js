"use strict"

let user = {
    name: "Jone",
    hi() {console.log("Hi,", this.name)},
    bye() {console.log("Bye")}
}

user.hi();

// Error
// (user.name == "Jone" ? user.hi : user.bye)();
let hi = user.hi;
let bye = user.bye;
bye();
// hi();