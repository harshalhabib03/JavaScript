//Array Destructuring

let a=10;
let b=20;

//with third variable
// let c=a;
//     a=b;
//     b=c;

//with destructuring
[b,a] = [a,b];

console.log(a);
console.log(b);