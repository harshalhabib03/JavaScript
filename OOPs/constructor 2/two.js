class Account{
    acc_ID;
    acc_Name;
    min_Bal=500;
    acc_Bal;
    constructor(id,name,amount){  
        this.acc_ID = id;
        this.acc_Name = name;
        this.acc_Bal = amount;      
    }
    open_Account(){
        console.log("Account opened successfully")
    }
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal+amount
    }
    withdrawl_Amount(amount){
        this.acc_Bal = this.acc_Bal-amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
    close_Account(){
        console.log("Account Closed")
    }
}

let a1 = new Account(101, 'Rahul', 50000);    
a1.open_Account();
a1.deposit_Amount(15000);
a1.withdrawl_Amount(0);
console.log(a1.get_Bal());

let a2 = new Account(102, 'Sunil', 55000);
a2.open_Account();
a2.deposit_Amount(15000);
a2.withdrawl_Amount(0);
console.log(a2.get_Bal());
