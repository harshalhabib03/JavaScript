class Test{
    constructor(){          //constructor executes automatically when invoking
        console.log("Welcome");
    }
    m1(){
        console.log("GM");
    }
}
let t1 = new Test()
let t2 = new Test()
let t3 = new Test()
t1.m1();
t1.m1();
t1.m1();
