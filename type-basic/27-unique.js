function unique(arr) {
    let set = new Set(arr);
    let result = [];
    set.forEach((value) => result.push(value));
    return result;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
let uniqueArr = unique(values);
console.log(uniqueArr);