let mySet = new Set();
mySet.add(1).add(2).add(3).add(1).add("name").add(NaN);
console.log(mySet);

for(let item of mySet) {
    console.log(item);
}

for(let item of mySet.keys()) {
    console.log(item);
}

for(let item of mySet.values()) {
    console.log(item);
}

for(let [key, value] of mySet.entries()) {
    console.log(key, value);
}