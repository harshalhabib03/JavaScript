//to initialize object values - we required constructor

class Account{
    acc_ID;
    acc_Name;
    acc_Bal;
    constructor(id,name,amount){        
        this.acc_ID = id;
        this.acc_Name = name;
        this.acc_Bal = amount;
    }
}

let a1 = new Account(101, 'Rahul', 50000);    
let a2 = new Account(102, 'Sunil', 55000);
let a3 = new Account(103, 'Anil', 60000);
console.log(a1);
console.log(a2);
console.log(a3);