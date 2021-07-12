"use strict"

let user = {
    name: "Jone",
    age: 30,
    sayBye: function(){
        console.log("Bye-bye,", this.name);
    },
    howAreYou(){
        console.log(user.name + ",","How are you? ");
    }
}

user.sayHi = function(){
    console.log("Hello,", this.name);
}

user.sayHi();
user.sayBye();
user.howAreYou();

let newuser = user;
newuser.name = "Pete";
user = {
    surname: "Snowgras",
};

user = null;
newuser.sayHi();
// newuser.howAreYou(); // Error Cannot read property 'name' of null
newuser.sayBye()


