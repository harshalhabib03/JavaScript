//Returns a copy of a section of an array. For both start and end, 
//a negative index can be used to indicate an offset from the end of the array.

let enames=["Anil", "Karan", "Bhavesh", "Pradeep", "shashi", "kumar", "nagesh"];

let new_name=enames.slice(3,6);     //[ 'Pradeep', 'shashi', 'kumar' ]
console.log(new_name);