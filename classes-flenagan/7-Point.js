function Point(x, y){
    let p = Object.create(Point.methods);
    p.x = x;
    p.y = y;
    return p;
}

Point.methods = {
    toString() {
        return `(${this.x}, ${this.y})`
    }
}

let p1 = Point(10, -9);
console.log(p1.toString());