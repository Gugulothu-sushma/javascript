
function sayMyName(){
console.log("H");
console.log("A");
console.log("R");
console.log("S");
console.log("H");
}
sayMyName()//printed out put 

//function addTwoNumber(number1,number2){
   // console.log(number1+number2);
//}
//const result=addTwoNumber(3,4)//this is function call 
//console.log("result: ",result);//not print output so use another funbction

//function addTwoNumber(number1,number2){
    //let result=number1+number2;
    //return result;
//}
//const result=addTwoNumber(3,4)
//console.log("Result:",result);

function loginUserMessage(username="sus"){
    if(!username){
        console.log("please enter a username");
        return 
    }
    return "{username} just logged in"
}
console.log(loginUserMessage("sus"))