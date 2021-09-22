function someDiv(number1, number2){
    for(let i = 1; i <= number1; i++){
      if(number1 % i === 0 && number2 % i === 0){
        console.log(i)
      }
    }
}

someDiv(15, 20);
console.log('-----')
someDiv(7, 21);
console.log('-----')
someDiv(24, 36);
console.log('-----')
someDiv(20, 21);