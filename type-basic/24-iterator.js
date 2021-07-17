"use strict"
let range = {
    from: 1,
    to: 5,
    [Symbol.iterator] : function() {
        return ({
            curent: this.from,
            last: this.to,
            next(){
                if(this.curent<=this.last){
                    return {done: false, value: this.curent++}
                } else {
                    return {done: true}
                }
            }
        })
    }
}

for(let item of range){
    console.log(item);
}