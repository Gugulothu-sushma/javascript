const coding=["js","rb","python","cpp"]

coding.forEach( function (item){
    console.log(item)

} )
//filters
//it is useful for call functions
//in filter we use {} this brackets so we write return function
//eg:(nums)=>{return num>3} like this
const myNums=[1,2,3,4,5,6]
const newNums=myNums.filter((num)=> num > 3)
console.log(newNums)

const newnums=[]
myNums.forEach((nums)=>{
    if(nums>4){
        newnums.push(nums)
    }
})
console.log(newnums);




