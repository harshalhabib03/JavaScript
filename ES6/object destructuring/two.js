//Object Destructuring

let state={
    emp:{
        id:101,
        name:"Kabir",
        sal:45000
    },
    product:{
        p_name:"Galaxy",
        price:25000
    }
}

//console.log(state.emp.name);

let {emp} = state;
let {name} = emp;

console.log(name); //read object property like a variable