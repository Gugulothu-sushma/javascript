//let a=10
//const b=20
//var c=30
var c=300   // outside this part is global scope
let a=300

if(true){             //{} ==scopes,// in side the if condition that is block scope
    let a=10
    const b=20
    console.log("INNER: ",a)
   // var c=30
}     


//console.log(a);//a is not printing because it is used in if condition not using outside 
//console.log(b);
console.log(c);

//function in also is there another function
function one(){
    const username="swara"
    function two (){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()   //call function
}
one()

if(true){
    const username="swara"
    if(username=="swara"){
        const website="youtube"
        console.log(username + website)
    }
    //console.log(website);this is not run because not there user scopes for this
}
//console.log(usename); this is not run because not there user scopes for this

//+++++++++++ intersting +++++++++++++

function addone(num){
    return num+1
}
//addone()
console.log(addone(5))

//addone not declare before function because function not run decalre after function only



