//Object Merging with spread operator
//duplicates not allowed in object

let emp={
    id:101,
    name:"Ramesh",
    email:"rahul@gmail.com"
};

let details={
    email:"rahul@ibm.com",
    sal:45000,
    loc:"Banglore"
};

let emp_Details={...emp,...details};

console.log(emp_Details);