user = new Object();
user2 = {}
user.name = "John";
user["surname"] = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

function isEmpty(obj) {
    for (let key in obj){
        return false;
    }
    return true;
}

console.log(isEmpty(user2));
console.log(isEmpty(user));