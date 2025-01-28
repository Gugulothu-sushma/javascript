//singleton

//object literals

const mysym=Symbol("key1")


const jsuser={
    name:"sus",//key:value
    mysym:"mykey1",
    location:"jaipur",
    email:"sus2@gmail.com",
    isLoggedIn :false,
    lastLogininDays:["mon","tue"]

}
console.log(jsuser["email"])
console.log(jsuser.email);
console.log(jsuser.mysym)
console.log(typeof jsuser.mysym)

//changing object and freeze first on or second one//
jsuser.email="swara24@gmail.com"
//Object.freeze(jsuser)
jsuser.email="swara5@gmail.com"
console.log(jsuser)

//using function//
jsuser.greeting=function(){
    console.log("hello js user");
}
jsuser.greetingtwo=function(){
    console.log('hello js user, ${this.name}');
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
