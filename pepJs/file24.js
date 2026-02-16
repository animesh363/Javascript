const names =["Animesh","pranav","Suman","Satyam"]  //Array Literal Syntax
// const names = new Array("Animesh","pranav","Suman","Satyam") //second methd of creating a array -> Array Constructor.


// console.log(names);
// names.push("naveen")
// console.log(names);

// names.pop()
// console.log(names);

// names.shift("Vivek") //will remove first element
// console.log(names);

// names.unshift("Vaibhav") //will add ai begening 
// console.log(names);
//Shift and unshift is slower b,z of rearrangement as compared to push and pop


console.log(names.reverse());

const numbers = [6,8,3,5,6,]
// console.log(numbers.sort((a,b) =>a-b));
// console.log(numbers.sort((a,b) =>b-a));

// console.log(numbers.indexOf(6));
// console.log(numbers.lastIndexOf(6));

console.log(numbers.includes(5)); //will check existance of value and return true/false
console.log(numbers.slice(1,4)); 

