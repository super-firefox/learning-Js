function curry(f) {
    return function(a){
        return function(b){
            return f(a, b);
        }
    }
}

function sum(a, b){
    return a + b;   
}

//!Результат curry(func) oбгортка function(a)
let currySum = curry(sum);

console.log(currySum(1)(9));