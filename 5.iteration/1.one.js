//for

for(let i=0;i<=10;i++){
    const element=i;
    if(element==5){
        console.log("5 is best number");
    }
    console.log(element);

}

for(let i=1;i<=10;i++){
    console.log(`outer loop: ${i}`)
    for(let j=0;i<=10;j++){
        //console.log(`inner loop value ${j} and inner loop ${i}`)
        //console.log(i + "*" + j + " = " + i*j);
    }
}

let myArray=["sus","charu","yagna","likki"]
console.log(myArray.length);
for(let i=0;i<myArray.length;i++){
    const element=myArray[i];
    console.log(element);
}


