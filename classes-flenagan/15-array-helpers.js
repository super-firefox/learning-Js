Object.assign(Array.prototype, {
    square(){
      return this.map(item => item**2);
    },
    cube(){
      return this.map(item => item**3);
    },
    sum(){
      return this.reduce((acum, current) => acum + current, 0);
    },
    average(){
      return this.length ? this.sum()/this.length: NaN;
    },
    even(){
      return this.filter(item => item%2 === 0)
    },
    odd(){
      return this.filter(item => item%2 != 0)
    }
  })
  
  var numbers = [1, 2, 3, 4, 5];
 console.log( numbers.square());
 console.log( numbers.cube());
 console.log( numbers.sum());
 console.log( numbers.average());
 console.log( numbers.even());
 console.log( numbers.odd());
