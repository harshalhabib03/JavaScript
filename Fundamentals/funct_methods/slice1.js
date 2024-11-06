//Returns a copy of a section of an array. For both start and end, 
//of a negative index can be used to indicate an offset from the end of the array

let uids=[101,102,103,101,102,103,104,105,106];

let new_uids=uids.slice(2,6);   //[103,101,102,103]
console.log(new_uids);