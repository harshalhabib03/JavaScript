/* create new array based on existing array
1. for of
2. for loop
3. while loop
4. do while loop
 */
//Using push method
let enames =['Anil','Karan', 'Rohit']
let new_Enames=[]

for(ename of enames){
    new_Enames.push(ename)
    console.log(ename);
}

// for(let i=0; i<=enames.length-1; i++){
//     new_Enames.push(enames);
//     console.log(enames);
// }