class Account{
    constructor(id, name, amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;
    }
}

let a1=new Account(101, 'Raj', 5000);
console.log(a1);
