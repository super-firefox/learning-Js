function curry(func){
    return function(a){
        return function(b){
            return function(c){
                return func(a, b, c)
            }
           
        }
    }
}
function log(data, importance, message){
    console.log(`[${data.getHours()}:${data.getMinutes()}] [${importance}] ${message}`);
}

//!! normal use
log(new Date(), 'DEBAG', "some debug") 

//! curring use
let logCurry = curry(log); //!
logCurry(new Date())("DeBUG")("some debug");

let logNow = logCurry(new Date());
logNow("INFO")("message");