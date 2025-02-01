//imediately invoked function expressions (IIFE)

(function chai(){
    console.log("DB CONNECTED");
}) ();
//global scopes have problems that is pollution so removing pollution from global using this backets () in this

//we can write like this also function using arrow condition
(() =>{
    console.log("DB CONNECTED TWO");
})()
