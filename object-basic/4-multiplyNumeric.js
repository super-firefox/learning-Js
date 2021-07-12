"use strict"

let menu = {
    width: 400,
    height: 600,
    title: "My menu"
}

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key]) == "number"){
            obj[key] *=2;
        }
    }
}

console.log(menu);
multiplyNumeric(menu);
console.log(menu);