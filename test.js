 //DONT READ CODE  CODE
 //--> Let const var
//  console.log("Animesh")

//  console.log ("Kya be lawde kaise ho? ")

//  const AccountId = "1234556789"
//  let AccountEmail = "animesh@gmail.com"
//  var AccountPassword = "12345" // isue with var in block and functional scope
//  let AccountState;//value assign nhi mkatlab undefined hai ye


//  //  AccountId = "9876543210" // const cant be changed
//  AccountEmail = "Ani12345@gmail.com"
//  AccountPassword = "54321"

 
//  console.table([AccountId, AccountEmail,AccountPassword])

//  console.log(AccountId)
//  console.log(AccountState)
 
//  "use strict"  // matlab use newer version of js
// alert(3+3);

/*
  //-->Datatypes and ECMA standards

let name = "Animesh"; // (String)
let age = 25; // (Number)
let isDeveloper = true; // (Boolean)
// (null)=> Standalone value
// (undefined)=>
// (Symbol) =>unique



console.table([name, age,isDeveloper,])


console.log(typeof name); 
console.log(typeof null) // =>object  (default in js like older version)
console.log(typeof undefined)  //=>undefined
*/

//->Datatyope conversion confusion

// let num = "23";
// console.log(typeof num)
// let valueInNumber = Number (num);// Converting string to number
// console.log(typeof valueInNumber);



                                                            //RESTART//




  // ___________________________________________     MATHS     ___________________________________________

//  console.log(Math);
//  console.log(Math.abs(-4)); //negative --> positive
 
// console.log(Math.round(4.6)); //5 rounding off to nearest integer
// console.log(Math.round(4.2));//4 

// console.log(Math.ceil(9.9));//10  -->Uppar value hamesha
// console.log(Math.ceil(9.1));//10

// console.log(Math.floor(4.9));// 4 --> niche wala value hamesha
// console.log(Math.floor(4.1));//4

// console.log(Math.sqrt(25));

// console.log(Math.max(1,3,5,7,9));
// console.log(Math.min(1,3,5,7,9));

// console.log(Math.random());
// console.log((Math.random())*10); //Ye zero se 9 tal dega and zero bhi sakta hao
// console.log(((Math.random())*10)  + 1  ); // for avoiding zero

// console.log(Math.floor((Math.random())*10) + 1  ); // for avoiding zero and only integer value

// //Agar kisi range me random value lena ho tab

// const min = 10;
// const max = 20;

// console.log( Math.floor((Math.random()*(max - min) + 1)) + min) // Between 10-20



 // ___________________________________________     DATES     ___________________________________________

// let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());



// let myNewDate = new Date(2023, 1, 24);
// console.log(myNewDate.toDateString()); //Fri Feb 24 2023

// let myDate2 = new Date("02-21-2025");
// console.log(myDate2.toLocaleString()); //21/2/2025, 12:00:00 am


// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1643723400000 milisecomds

// console.log(Math.floor(Date.now()/1000)); // 1643723400000

// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() +  1); //yahan month zero se start hota hai so 1 add kar dete hain tab exact date milta hai
// console.log(newDate.getDay() ); //returns a number from 0 (Sunday) to 6 (Saturday)
// console.log(newDate.getDay() + 1 ); //returns a number from 0 (Sunday) to 6 (Saturday)

// console.log(newDate.getDate());



 // ___________________________________________     ARAYS     ___________________________________________

// const myArray = [1,2,3,4,5,"Animesh"];
// console.log(myArray[5]);

// const myArray2 = new Array(1 ,4,5,6);
// console.log(myArray2[2]);


// myArray.push(6);
// myArray.push(7);
// console.log(myArray);

// myArray.pop();//Removing last element
// console.log(myArray);

// myArray.unshift(9);//Adding elemenyt in the starting
// console.log(myArray);
// myArray.shift(); //Removing element from starting
// console.log(myArray); 

// console.log(myArray.includes(9)); // it is asking 9 included or not //false

// const newArray = myArray.join()
// console.log(myArray);
// console.log(newArray); //1,2,3,4,5,Animesh,6 // in the form of strings

//  //SLICE SPLICE

// const myArray = [1,2,3,4,5,"Animesh"];
// console.log(myArray);
// const myn1 = myArray.slice(1,3); // ish range ka excluding last
// console.log(myn1);
// const myn2 = myArray.splice(1,3);
// console.log(myn2); //esh range ka starting se end tak
// console.log(myArray);


// const Arr1 = [1,2,3];
// const Arr2 = [4,5,6];

// Arr1.push(Arr2);
// console.log(Arr1);

// Arr1.concat(Arr2);  //Array ke ander arrar aajayega
// console.log(Arr1);  //Array ke ander arrar aajayega

// const Arr = [1, 2 ,[3,4,5], [6, 7,[8,9]]];
// const realArr =  Arr.flat(2); //depth dete hain jab complicated ho to infinity de dete hain
// console.log(realArr);
   
// console.log(Array.isArray("Animesh"));
// console.log(Array.from("Animesh")); //Array ban jarta hai

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3));// sabka ek Array bana dega


// const arr1 = ["Animesh","pranav",];
// const arr2 = ["Pooja","Anshu","priyanshu"];

// const merge = [...arr1, ...arr2]; //Spred oprator
// console.log(merge);

 // ___________________________________________     objects     ___________________________________________console.log ("Animesh");

//  Object literals 


 const mySym = Symbol("key1")  // Declaring Symbol data type


 const jsUser = {
    [mySym]: "myKey1", //Using Symbol as a key use []
    name: "Animesh",
    age: 20,
    location: "Smp",
    email: "animesh@gmail.com",
    "fullName": "Animesh Thakur", // Interviewer can ask
 }


 console.log(jsUser.mySym);
 console.log(jsUser.name);
 console.log(jsUser["age"]); //ish method me as a String hi dena hoga
 console.log(jsUser["email"]);

 console.log(jsUser["fullName"]); //In objectkeys are already treted as string


 jsUser.email = "animesh1234@gmail.com"; // can change value 
 console.log(jsUser.email);

 Object.freeze(jsUser); // after this value cant cahnge 
 jsUser.email = "pran@gmail.com";
 console.log(jsUser.email); // output-> animesh1234@gmail.com value is not changed


// const tinderUser = new Object()  //Singelton object 


// const tinderUser = {}  //non singolton object
// tinderUser.id = "123abc"
// tinderUser.name = "Rockey"
// tinderUser.isloggedIn = false

// console.log(tinderUser)

// const regularUser = {
//     email: ""
// }






 // ___________________________________________     Functions     ___________________________________________console.log ("Animesh");

// function CalcCartPrice(...num){
//   return num;
// }

// console.log(CalcCartPrice(100, 200, 400, 600, 765));



//PASSING ANY OBJ INTO FUNCTION

// const user = {
//   username: "Animesh",
//   price: 1000
// }

// function handleobj(anyobj){
//   console.log(`Username is ${anyobj.username} and price is ${anyobj.price}.`);

// }
// handleobj(user);

// console.log(addone(10)); // can beaccessed before initialization
// function addone(num){
//   return num + 1;
// }

// console.log(addtwo(10)); //can't accesed before initialization
// const addtwo = function(num){
//   return num + 2;
// }
// console.log(addtwo(10));

// const user = {
//   username: "Animesh",
//   price: 999,

//   welcomeMessage: function(){
//     console.log(`Welcome to Our website, ${this.username}`); //this ->current context 
//   }
// }

// user.welcomeMessage();//Welcome to Our website Animesh
// user.username = "pranav";
// user.welcomeMessage();//Welcome to Our website Pranav -->current context changed


//___________________________________________  *ARROW FUNCTION*   ___________________________________________

// const addTwo = ( num1, num2) => {
//   return num1 + num2 ;
// }
// console.log(addTwo(5,7));

// const addTwo = ( num1, num2) =>  num1 + num2 ; //Implicit return
// console.log(addTwo(5,7));

//IMMEDIATELY INVOCKED FUNCTION EXPRESSION (IIFE)
// (function Db(){   // named IIFE
//   console.log(`Database connected`);
// })(); //why ; -> This fn doesnt where to stop , so it will stop at the end of the script and will be executed only once.

// (() => {        //Simple or unnamed IIFE
//   console.log(`Database connected02`);
// })(); // Also working with Arrow function

// ((name) => {
//   console.log(`Our Admin is ${name}`);
// })("Animesh");



//___________________________________________      ___________________________________________

// let str1 = "Animesh ";
// let str2 = "Anand";
// let str3 = str1 + str2;

// console.log(str3);

// let str1 = "Animesh ";

// let age = 21;

// console.log()


// console.log(1 + "1")  //11
// console.log("1" + 1) //11
// console.log("1" + 2 + 3); //123
// console.log( 1 +2 + "3") //33
// console.log(  ) ;







