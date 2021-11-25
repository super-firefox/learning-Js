var Cat = (function () {
    return constructor = function (name, weight) {
        if (!weight || !name) {
            throw new Error();
        }
        this.name = name;
        this.weight = weight;
        this.addWeight(this);
        console.log(this.name, this.weight, 'kg');
    }
}());

Object.defineProperty(Cat, 'weights', { value: [], configurable: true, writable: true, enumerable: true });

Object.defineProperty(Cat, 'avarageWeight', {
    value: function () {
        console.log(Cat.weights)
        return Cat.weights.reduce((acum, current) => acum += current.weight, 0) / Cat.weights.length
    },
}
);

Object.defineProperty(Cat.prototype, 'weight', {get: function(){
    console.log('hi get weight')
}, configurable: true})

Object.defineProperty(Cat.prototype, 'weight', {set: function(w){
    console.log('hi set weight', this);
    // weight = w;
}, configurable: true})

Cat.prototype.addWeight = function (cat) {
    Cat.weights.push(cat);
}


new Cat('vasiy', 60);
new Cat('tania', 20);
let g = new Cat('Garri', 10);
console.log(Cat.weights)
console.log(Cat.avarageWeight)
console.log(typeof Cat.avarageWeight)
console.log(typeof Cat.avarageWeight())
console.log(Cat.avarageWeight())
// console.log(g.avarageWeight())
// g.getAvarageWeight();
g.weight
g.weight = 40;
console.log(Cat.avarageWeight())