const double = x => x * 2;
const square = x => x * x;
const increment = x => ++x;
//* Tradition approach
let output1 = double(2);
let output2 = square(output1);
console.log(output2);
//* variant two
let output_final = square(double(2));
console.log(output_final);

//* function composition of any number of functions
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
//* function composition
let output_final_compose = compose(square, double, increment)(2);
console.log(output_final_compose);

let map = new Map ();
function cache(func) {
  return function(...args){
//     console.log(map, map.has(func.toString()))
//     console.log(Array.isArray(args));
//     console.log(Array.from(args));
//     console.log('>>>', Array.from(args).map(item => objToString(item)))
    let key = func.toString() + Array.from(args).map(item => {
      if(Array.isArray(item)){
        return objToString(item)
      }
      return item.toString();
      
    }).join("");
    if(map.has(key)){
      return map.get(key);
    } else {
      let result = func(...args);
      map.set(key, result );
      return result;
    }
  }
}

function objToString(obj, result){
  for(let o of obj){
    if(typeof o === 'object'){
      console.log(objToString(o, result))
        result = objToString(o, result);
    } else {
        result += o.toString()
    }
  }
  return result;
}

// console.log(objToString([1,2,3,[2,3], 6, [7,8, [10,11]]]), '')