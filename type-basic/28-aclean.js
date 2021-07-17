"use strict"

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclear(array) {
  let result = [];
  for(let i=0; i<array.length-1; i++){
    let unique = true;
    console.log(array[i]);
    arr.slice(i+1).map( item => {
      if(isAnagram(array[i], item)) unique = false;
    })

    if(unique) result.push(array[i]);
    console.log(result, unique);
  };
  return result;
}

function isAnagram(str1, str2){
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if(str1.length !== str2.length){
    return false;
  } else {
    for(let char of str2){
      if(!str2.includes(char)){
        return false;
      }
    }
  }
  return true;
}

console.log(aclear(arr));