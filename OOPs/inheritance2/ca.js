class CA{
    acc_Bal=0;
    min_Bal=15000;
    constructor(id,name,amount){
        super(id,name);
        this.acc_Bal=amount;
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal;
    }
}

let ca1 = new CA(102, "Kamal", 150000);
console.log(ca1);
console.log(sa1.get_Bal());
console.log(ca1.get_Bal());
