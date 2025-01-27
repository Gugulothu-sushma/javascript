 //array
 const myarr=[0,1,2,3,4,5]
 const myHeors=["sus","swara"]

 const myarr2= new Array(1,2,3)

 console.log(myarr[0]);
 console.log(myHeors[0]);

 //array methods
 myarr.push(6)
 myarr.push(7)
 myarr.pop()

myarr.unshift(9)
myarr.shift()

 console.log(myarr);
//array is there or not
 console.log(myarr.includes(5));

 const newarr=myarr.join()
 console.log(myarr)
console.log(typeof newarr)


//slice,splice

console.log("A",myarr);
const myn1=myarr.slice(1,3)
console.log(myn1);
console.log("B",myarr);

const myn2=myarr.splice(1,3)
console.log(myn2);


