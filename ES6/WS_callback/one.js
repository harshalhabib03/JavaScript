let goToGoa = (success, failure)=>{
    let acc_Bal =10000;
    if(acc_Bal >=10000){
        success('Go to Goa');
    }
    else{
        failure('Go Home');
    }
}
goToGoa(
    (msg)=>{
        console.log(msg)
    },
    (err)=>{
        console.log(err)
    }
)