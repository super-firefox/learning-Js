let range = {
    from: 2,
    to: 9,

    [Symbol.iterator](){
        this.current = this.from;
        return this;
    },

    next(){
        if(this.current <= this.to){
            return {done: false, value: this.current++}
        } else {
            return {done: true}
        }
    }
}

for(let item of range){
    console.log(item);
}