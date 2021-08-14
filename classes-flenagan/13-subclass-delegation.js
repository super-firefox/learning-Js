class Histogram {
    constructor() {
        this.map = new Map();
    }

    count(key) {
        return this.map.get(key) || 0;
    }

    has(key) {
        return this.count(key) > 0;
    }

    get size() {
        return this.map.size;
    }

    add(key) {
        this.map.set(key, this.count(key) + 1);
    }

    delete(key) {
        let count = this.count(key);
        if(count === 1){
            this.map.delete(key);
        } else if(count > 1){
            this.map.set(key, count - 1);
        }
    }

    [Symbol.iterator]() {
        return this.map.keys();
    }

    keys() {
        return this.map.keys();
    }

    values() {
        return this.map.values();
    }

    entries() {
        return this.map.entries();
    }
}

let histogram = new Histogram();
for(let item of ["apple", "pea", "milk", "fish", "apple", "pea", "pea", "milk"]){
    histogram.add(item);
}

console.log(histogram, histogram.count("pea"), histogram.keys(), histogram.size);