const marvel_heros=["thor","ironman"]
const dc_heros=["superman","falsh"]

//marvel_heros.push(dc_heros);

//console.log(marvel_heros)
//console.log(marvel_heros[2][1])

//merging two array use concat//

const allHeros=marvel_heros.concat(dc_heros)
console.log(allHeros);

//spread all array with out any bracked in middle//
const another_array=[1,2,3,4,[6,7,8],9,[3,2,5]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)
//it's array or not //
console.log(Array.isArray("sus"))//this is not array
//this is array//
console.log(Array.from("sus"))
console.log(Array.from({name:"sus"}))//interesting case//

//writen a new array from set of elements//
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
