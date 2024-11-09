class Account{
    acc_Bal = 0;    //property
    deposit_Amount(amount){         //deposit_Amount is method (amount) is parameter
        this.acc_Bal = this.acc_Bal + amount;   //update providing value to acc_Bal
    }
}

let a1 = new Account();
    a1.deposit_Amount(5000);
    console.log(a1);

let a2 = new Account();
    a2.deposit_Amount(15000);
    console.log(a2);

let a3 = new Account();
    a3.deposit_Amount(25000);
    console.log(a3);