//passing string as argument 
let calc = (a,b, op)=>{
    if(op === 'sum'){   
        return a+b;
    }
    if(op === 'multi'){
        return a*b;
    }
}
let r1 = calc(10,20, "sum");    //here sum is an argument
console.log(r1);    
let r2 = calc(10,20, "multi");  //here multi is an argument
console.log(r2);