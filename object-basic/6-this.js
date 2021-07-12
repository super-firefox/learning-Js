"use strict"
let user = {name: "Jone",};
let admin = {name: "Admin"};

function sayHi(){
    console.log("Hi, " + this.name);
}

sayHi();

user.func = sayHi;
admin.func = sayHi;

user.func();
admin["func"]();