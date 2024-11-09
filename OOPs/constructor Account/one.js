//class is created named Account
class Account{
    //Methods are created
    open_Account(){
        console.log("Account Opened Successfully");
    }
    deposit_Amount(){
        console.log("Amount Deposited");
    }
    withdrawl_Amount(){
        console.log("Insatisfied Balance");
    }
    get_Bal(){
        console.log("Server Busy");
    }
    get_statement(){
        console.log("Pay 50");
    }
    close_Account(){
        console.log("Balance insatisfied deposit more");
    }
}

//object is created
let a1 = new Account();         
    //methods are called by creating object named a1
    a1.open_Account();          
    a1.deposit_Amount();
    a1.withdrawl_Amount();
    a1.get_Bal();
    a1.get_statement();
    a1.close_Account();
