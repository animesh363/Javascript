//Hoisting
//var is hoisted and automatically initialized with undefined.
//let ->They are hoisted but kept in the Temporal Dead Zone (TDZ), so you cannot use them before declaration.


//Var: Hoisted + initialized with undefined
// var name
// name="Animesh"
// console.log(name);


///hoisting with let and const

// let name
// name ="Animesh"
// console.log(name);



//const → Same as let but cannot reassign
// console.log(name);
// const name ="Animesh"


//Fir function
// greet()
// function greet(){
//     console.log("Hello Duniyan!");//✅ with regular function
// }




greet()
const greet = ()=>{
    console.log("Hellooooo!");// ❌ will not work for arrow function
}


//* Execution phases
//1)Creation phase->JavaScript scans the code and stores variables and functions in memory (hoisting happens here)
//2)Execution phase->JavaScript runs the code line by line and assigns values / executes functions.