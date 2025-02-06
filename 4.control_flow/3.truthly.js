//true condition
const userEmail="sus@gmail.com"
const  userEmail1=[]

if(userEmail){
    console.log("got user email");
}
else{
    console.log("don't have user email")
}

//false condition
//false values=false,0,-0,"",null,undefined,NaN,BigInt 0n

//truthly values="0","false"," ",[],{},function(){}


if(userEmail1.length==0){
    console.log("array is empty")
}

const emptyObj={}
if(Object.keys(emptyObj).length==0){
    console.log("object is empty");
}

//nullish coalescing operation(??):null undefined

let val1;
//val1= 5??10
//val1=null??10
//val1=undefined??15
val1=null??10??15

console.log(val1);

//terniary operator
//condition? true:false

const iceTeaPrice=100
iceTeaPrice>=80?console.log("less than 80"):console.log("more than 80")
