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


// var a=10;
// function f1(){
//     var a=20
//     if(3>1){
//         var a=30
//         console.log(a);
//     }
//     console.log(a);
// }
// f1()
// console.log(a);

// var a=10


// const a =10;
// console.log(a);
// a=20; //Reassigning not possible
// console.log(a);


// firstName = "John" //camel case
// first_name = "John"
// FirstName = "John"



// let a=10
// let name ="Animesh";
// let flag =true
// let rating = 4.5
// let score =null
// let city

// console.log(typeof a);//number
// console.log(typeof name);//string
// console.log(typeof flag);//boolean
// console.log(typeof rating);//number
// console.log(typeof score);//object
// console.log(typeof city);//undefined

// let a = "10";
// console.log(typeof a);//string


// let num = Number(a) //typecasting
// console.log(typeof num);



// let a ="true";
// console.log(typeof a);
// let flag = Boolean(a)
// console.log(typeof flag)

// let a = 10;
// console.log(typeof a);
// let str = String(a)
// console.log(typeof str);

// let a = function greet(){
//     console.log("Hello world");
// }
// console.log(a); //functiona as a expression
// a()



//*     ___Arrow function____

// let greet = () =>{
//     console.log("Hello Mr.");
// }
// greet()


// let add = (a,b) =>{
//     console.log(a+b);
// }
// add(4,5)


// const add = (a,b) =>{
//     return a+b;
// }
// const result = add(5,4);
// console.log("sum = " +  result);


// const add =(a,b) => a + b;
// const result = add(5,4);
// console.log(result);


// const sqr = (a) => a*a;
// const result = sqr(5);
// console.log(result);

// const sqr = (a) =>{
//     return  a*a;
// };
// const result = sqr(5);
// console.log(result);



//*     ____Object in js____

// const student = {
//     name:"Animesh",
//     age:21
// }
// console.log(student)
// console.log(student.name);
// console.log(student.age);

// student.city = "Delhi"
// console.log(student); // city added in the object

// student.city ="Mumbai"
// console.log(student); //city changed

// //spread oprator ->using modifying a existing object
// const obj = {...student,city:"Jalandhar"}
// console.log(obj);




// let items = () =>{
//     return 10
// }
// const result = items()
// console.log(result);





//*             ____Array____               
const names = ["Animes", "Shivam", "pranav"]
// console.log(names);
// console.log(names[0]);
// names.push("Newname")
// console.log(names);

const arr = [...names, "ganesh"]
console.log(arr);





