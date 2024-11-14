class Parent{
    constructor(){
        console.log("Parent class -constructor")
    }
    m1(){
        console.log("Parent class -m1 method");
    }
}
class Child extends Parent{
    constructor(){
        super();
        console.log("Child class -constructor");
    }
    m2(){
        console.log("Parent class -m2 method");
    }
}
let c1= new Child();
c1.m1();
c1.m2();