
const coding=["js","rb","python","cpp"]

//foreach==callback
coding.forEach( function (item) {
    console.log(item)

} )
//another methods
coding.forEach((item)=>{
    console.log(item)
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


