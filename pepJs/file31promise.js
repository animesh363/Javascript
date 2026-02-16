function makePayment(f){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Payment has been received");
            resolve()
        },3000)
    });
  
}

function sentConformation(){
    console.log("order has been placed sucessfully!");
}

//makePayment(sentConformation); 

//callback hell -> A callback is a function passed inside another function, which runs after a task is completed.


makePayment()
    .then(()=>sentConformation())
    .catch((err)=>console.log(err));



