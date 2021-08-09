let data = ["ant", "Bug", "cat", "Dog"];

data.sort((s, t) => {
    let a = s.toLowerCase();
    let b = t.toLowerCase();
    return a < b ? -1 : 1;
})
console.log(data);