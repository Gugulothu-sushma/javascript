//if

if(2!=3){
    console.log("executed");

}
const temperature=21
if(temperature==20){
    console.log("less than 40")
}
console.log("temperature is greater than 40")

const score=200
if(score>100){
    var power="fly"
    console.log("user power :",power)
}
console.log("user power :",power)

const balance=1000
if(balance<500){
    console.log("less than 500")
}else if(balance<700){
    console.log("less than 700")
}
else if(balance<900){
    console.log("less than 900")
}
else{
    console.log("less than 1100")
}
//and condition
const userloggedin=true
const debitcard=true
if(userloggedin&&debitcard){
    console.log("allow to buy course");
}
//or condition
const email=true
const number=false
if(userloggedin||debitcard){
    console.log("allow to buy course");
}

