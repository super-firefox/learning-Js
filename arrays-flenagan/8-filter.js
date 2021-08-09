let data = [1, 2, null, 3, , 4, 5, 6, ,null, 7, 8];
data.length = 20;
let filterData = data.filter(item => item <= 4 );
let divDate = data.filter(item => item % 2 === 0);
console.log(data);   
console.log(filterData, divDate);   

//! create dense array 
let dense = data.filter(() => true);

//! or deltete elements with undefind and null

let denser = data.filter(item => item !== undefined && item !== null);
console.log(dense,"\n", denser);