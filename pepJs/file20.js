//?     ____Destrecturing____   

// names = ["John", "Cathy", "Mike"]
// let [n1, n2] = names;
// console.log(n1);
// console.log(n2);

const student ={
    name: "John",
    age: 21,
}

// const {name,age} = student;
// console.log(name);
// console.log(age);

//Without destrecturing
// console.log(student.name);
// console.log(student.age);


//only property name will work
const {n1, n2} = student;
console.log(n1);//undefined
console.log(n2);//undefined