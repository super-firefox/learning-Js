function curry(func){
    return function curried(...args){
        if(args.length >= func.length){
            return func.apply(this, args)
        } else {
            return function pass(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

function sum(a, b, c){
    return a + b + c;
}

let curriedSum = curry(sum) ;
console.log(curriedSum(5)(7)(4));