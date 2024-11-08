fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    //console.log(typeof(data));  //object type data 
    console.log(data); 
    // console.log(data[5].id);
})
.catch((err) => {
    console.log(err.message);
})