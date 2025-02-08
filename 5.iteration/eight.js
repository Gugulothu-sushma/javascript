
//reduce

const myNums=[1,2,3]
const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval :${currval}`);
    return acc+currval
},0)
console.log(myTotal);

//another method
const total=myNums.reduce((acc,currval)=>acc+currval,0)
console.log(total)


const shoppingcard=[{
    itemname:"js",
    price:2999
},{
    itemname:"cpp",
    price:3999
},{
    itemname:"c",
    price:1999
}
]
const pricetopay=shoppingcard.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay)