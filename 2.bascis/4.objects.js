//const tinderuser=new Object()

const tinderuser={}
tinderuser.id="1234"
tinderuser.name="sus"
tinderuser.isLoggedIn=false
console.log(tinderuser)


//one obect in another object//
const regularuser={
    email:"sus2@gmail.com",
    fullname:{
        username:{
            firstname:"sus",
            sceondname:"gugu"
        }
    }

}
console.log(regularuser.fullname.username.firstname);


//merge objects//
const obj1={1:"a",2:"g"}
const obj2={3:"s",4:"u"}
//const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)//(target,source),we consider this {} empty target.
console.log(obj3);

//array in object
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty("isLoggedIn"))

const course={
    coursename:"js",
    price:"1000"
}

console.log(course.price);



