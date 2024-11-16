//create new array with even no.
let nums = [1,2,3,4,5,6,7,8,9,10];

/* let even_nums=[];

for(num of nums){
    if(num%2 === 0){
        even_nums.push(num);
    }
} */

let even_nums=nums.filter((num)=>{
    return num%2 === 0;
})

console.log(even_nums);