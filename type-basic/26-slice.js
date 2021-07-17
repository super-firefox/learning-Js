"use strict"

function slice(str, start, end){
    return Array.from(str).slice(start, end).join("");
}

let str = '𝒳😂𩷶';
console.log(str); 
console.log(slice(str, 1, 3)); 