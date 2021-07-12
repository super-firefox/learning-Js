"use strict"
function factorial (n) {
    if(n != 1){
      return n*factorial(n-1) ;
    } else {
      return 1;
    }
  }

  console.log(factorial(5));
  console.log(factorial(2));
  console.log(factorial(1));
  console.log(factorial(0));