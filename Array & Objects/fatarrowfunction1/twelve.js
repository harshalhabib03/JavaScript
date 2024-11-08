//function not override if we give same name and invoking function two times
//output is given data

var wish = () => {
    console.log("GM");
}
wish()

var wish = () => {
    console.log("GA");
}
wish()