class SA{
    acc_Bal=0;
    min_Bal=5000;
    constructor(id,name,amount){
        super(id, name);
        this.acc_Bal=amount;
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal;
    }
}

let sa1 = new SA(101, "Rahul", 5000);
console.log(sa1);
