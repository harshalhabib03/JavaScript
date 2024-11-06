function outer(){
    console.log("Good Morning");

    function inner(){
        console.log("Good Night");
    }
    inner();
}
outer();