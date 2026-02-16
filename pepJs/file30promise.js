
// function f1(){
//     console.log("This is f1 function");
// }
// function f2(){
//     console.log("This is f2 function");
// }

// f1()
// f2()

//👉 Synchronous = Blocking, one task at a time.eg one after other
//👉 Asynchronous = Non-blocking, tasks can run in background.


// function f1(){
//     setTimeout(() => {
//     console.log("Helllo mewwwn!");
//     }, 1000);   
// }

// function f2(){
//     console.log("This is f2");
// }
// f1()
// f2() // It will run first than f1 will run




function makePayment(){
    setTimeout(() => {
    console.log("payment has been prosessed !");
    }, 1000);   
}

function conformation(){
    console.log("order has been placed sucessfully!");
}
makePayment()
conformation() 

