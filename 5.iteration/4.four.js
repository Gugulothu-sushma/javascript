const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    switch:"switch by apple"
}
for(const key in myObject){
    console.log(`${key} for ${myObject[key]}`);
}

//using array
const programming=["js","cpp","python","c"]
for(const key in programming){
    console.log(`${key} for ${programming[key]}`);
}

