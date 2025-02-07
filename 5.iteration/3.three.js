//for of

//["","",""] //strings
//[{},{},{}] //objects

const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num)
}

const greetings="hello world";
for(const greet of greetings){
    console.log(`each char is ${greet}`)
    console.log(greet)
}

//maps
const map=new Map()
map.set("IN","India") //(key,value)
map.set("USA","united state")
map.set("Fr","france")
console.log(map);

for(const [key ,value] of map){
    console.log(key,":-",value)
}

