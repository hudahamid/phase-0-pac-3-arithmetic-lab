function add(a,b){
let sum=a+b;
return sum;
}

function subtract(a,b){
    let result=a-b;
    return result;
    
}
function multiply(a,b){
    let result=b*a;
    return result;
}
function divide(a,b){
    let result=a/b;
    return result;
}
function increment(n){
    n++;
    return n;
}
function decrement(n){
    n--;
    return n;
}

function  makeInt(n){
   
    // parseInt(n);
    // return n;
    return parseInt(n, 10);
}
function  preserveDecimal(n){
   
   
    return  parseFloat(n);
}

add(2,3);
subtract(2, 5) ;
multiply(4, 3);
divide(6, 2);
increment(3);
decrement(3);
makeInt("4");
makeInt("nonsense!");
preserveDecimal("80.123999");
