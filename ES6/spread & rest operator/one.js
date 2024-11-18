//Array Creating

let users=[101,102,103,104];
let employees=[...users];   //extract & copy
console.log(employees);

//Array Merging
let a=[10,20,30,40,50];
let b=[30,40,50];

let c=[...a,...b];
console.log(c);

//Array Extending properties
let x=[10,20,30,40];
let y=[40,50,60];

let z=[...x];