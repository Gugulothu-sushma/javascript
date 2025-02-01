const user = {
    username:"hitesh",
    price:990,
    welcomeMessage:function(){
        console.log('${this.usename},welcome to website');
        console.log(this)
    }
}
// user.welcomeMessage()
//  user.username="sam"
//  user.welcomeMessage()
console.log(this)

// function chai(){
//     console.log(this);
// }
// chai()

const chai=function(){
    let username="sus"
    console.log(this.username);
}
chai()

//arrow function
//two methods

const addOne =(num1,num2) => {
    return num1 + num2
}

const addTwo =(num1,num2) =>(num1 + num2)


console.log(addOne(3,4))
console.log(addTwo(3,4))




