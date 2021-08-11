'use strict'

function max(){
    if(this.a < this.b) {
        this.result = this.b;
    } else {
        this.result = this.a;
    }

    let printMax = () => {
        console.log("=>", this.result);
    }

    printMax();
    return this;
}


let obj = {
    a: 100,
    b: 500,
    max,
}

// console.log(obj.max());
obj.max();



