function add(x){
    function inAdd(y){
      return x+y;
    }
    return inAdd;
  }

  console.log(add(10)(-3));

var theInstructions = "console.log('Hello World'); var x = 100";

var F=new Function (theInstructions);

return(F());
