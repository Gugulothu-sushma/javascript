//dates
let myDate=new Date()
//console.log(myDate)
//console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
//typeof date
console.log(typeof myDate);

let myCreateDate=new Date(2025,0,27)
console.log(myCreateDate.toDateString());


let myTimeStamp=Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
//date in seconds
console.log(Math.floor(Date.now()/1000));

//month and day
let newDate=new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//new month and day
//....
