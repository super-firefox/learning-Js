"use strict"

function checkSpam(str){
    let lowerStr = str.toLowerCase()
    return lowerStr.includes("xxx") || lowerStr.includes("viagra"); 
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));