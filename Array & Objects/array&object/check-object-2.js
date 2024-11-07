//how to check given object is empty or not?
let user={}
let emp={
    id:101,
    name:"Rahul"
}
if(Object.keys(emp).length > 0){
    console.log("Not Empty Object");
}
else{
    console.log("Give object is empty object");
}