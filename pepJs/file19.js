//!
const numbers = [10, 20, 30, 40, 50]

// let n1 = numbers[0]
// let n2 = numbers[1]
// console.log(n1);
// console.log(n2);

//Another method called -> Destructuring
// const [n1,n2] = numbers
// console.log(n1);
// console.log(n2);

//Spread Oprator
// const [n1,n2,...n3] = numbers
// console.log(n1);
// console.log(n2);
// console.log(n3);

//Skipping values
// const [n1,,n2] = numbers
// console.log(n1);
// console.log(n2);

//default value
const [n1,n2,n3=10] = numbers
console.log(n1);
console.log(n2);
console.log(n3);