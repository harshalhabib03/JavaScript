//Object Merging without spread operator

let emp={id:101,
    name:"Ramesh",
    email:"rahul@gmail.com"
};
let details={
    email:"rahul@ibm.com",
    sal:45000,
    loc:"Banglore"
};

let emp_Details={}

for(key in emp){
    console.log(key, emp[key]);
    emp_Details[key]=emp[key];
}

for(key in details){
    console.log(key, details[key]);
    emp_Details[key]=details[key];
}

console.log(emp_Details);