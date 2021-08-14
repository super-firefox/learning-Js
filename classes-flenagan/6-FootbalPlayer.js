class FootballPlayer {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age,
        this.height = height;
        this.weight = weight;
    }

    getAge() {return `${this.name} is age ${this.age}`};
    getHeight() {return `${this.name} is ${this.height}cm`};
    getWeight() {return `${this.name} weighs ${this.weight}kg`};
}

const p1 = new FootballPlayer("David Jones", 25, 175, 75);
console.log(p1.getAge());
console.log(p1.getHeight());
console.log(p1.getWeight());