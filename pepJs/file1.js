console.log("Hello Duniya")

// let a=5;
// let b=6;
// let c= a + b;
// console.log("a + b = " + c)

//comments: 
//multiline conmment
/*console.log("line 1")
console.log("line 2")
console.log("line 3")
*/

// name ="John"
// console.log("Hello " + name)
// console.log(`Hello ${name}`)


//clg->console.log



//Oprators
// let a=10
// let b = 5

// console.log("Sun = " + a+b)
// console.log("diff = " + (a-b))
// console.log("mul = " + a*b)
// console.log("div = " + a/b)
// console.log("modulo " + a%b)

//Comparoson oprator
// console.log(a>b);
// console.log(a<b);
// console.log(a<=b);
// console.log(a>=b);


// let x ="10"
// let y=10

// console.log(x==y); //comare value only
// console.log(x===y);// compare value and data type


//Logical oprators
// console.log(a>b && a<b); //both concn should be true
// console.log(a>b || a<b); //any one should be true

// console.log(!a>b);


//IF-ELSE   
// if(a>b){
//     console.log("a is greator");
// }else{
//     console.log("b is greator");
// }

// if(a>b) console.log("a is greator");
// else console.log("b is greator");   //it will work for one line only

 //?           ____Day02____           

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }


// let i=1;
// while(i<=5){
//     i++
//     console.log(i); //2, 3
//     if(i==3){
//         break;
//     }
// }


// let i=1;
// while(i<=5){
//     i++
//     if(i==3){
//          continue; //3 skiped
//     }
//     console.log(i)
// }


// for(let i=1;i<=5;i++){
//     console.log(i);
//     if(i==3){
//         break;
//     }
// }


// for(let i=1;i<=5;i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i);
// }



// sing for loop priint 5,10...30?
// let n=5;
// for(let i=1;i<=6;i++){
//     console.log(n*i);
// }
// for(let i=5;i<=30;i+=5){
//     console.log(i);
// }



//              ____Function____                    
// function greet(){
//     console.log("Good morning");
// }
// greet();

// function greet(name){
//     console.log("Hello " + name);
// }

// greet("Animesh"); //we are passsing argumet and we can change every time we are calling
// greet("pranav")

// function greet(name, place){
//     // console.log("My name is " + name + ". I am from " + place);
//     console.log(`My name is ${name}. I am from ${place}`);
// }

// greet("Animesh" , "Bihar")


//Write a function to accept two numbers and print sum?
// function sum(a, b){
//     console.log("Sum = "+ (a+b));
// }
// sum(3,5)


// function add(x,y){
//     return x+y;
// }
// let result = add(5,7); //While returnig we have to store in some variable
// console.log(result);

// console.log("Table of Two");
// for(let i=1;i<=10;i++){
//     console.log(2*i);
// }



//?Diffrences bt slet var and const
// var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.
// let: Declares variables with block scope, allowing updates but not re-declaration within the same block.
// const: Declares block-scoped variables that cannot be reassigned after their initial assignment.





//Let-> block scope
// let a =10;
// console.log(a);
// a=20;
// console.log(a);

// let a=10;
// function f1(){
//     let a=20
//     console.log(a);
// }
// console.log(a);
// f1()


// let a=10;
// function f1(){
//     let a=20
//     if(3>1){
//         let a=30
//         console.log(a);
//     }
//     console.log(a);
// }
// f1()
// console.log(a);



//Var


var a=10;
function f1(){
    var a=20
    if(3>1){
        var a=30
        console.log(a);
    }
    console.log(a);
}
f1()
console.log(a);

// var a=10


// const a =10;
// console.log(a);
// a=20; //Reassigning not possible
// console.log(a);
