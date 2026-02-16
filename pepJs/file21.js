// const student ={
//     name: "John",
//     age: 21,
//     city:"jalandhar"
// }

// const {city = "Amritsar"} = student
// console.log(city);


const student ={
    name: "John",
    age: 21,
    marks:{
        math:70,
        science:90
    }
}

const {marks:{math}} = student
console.log(math);

const {marks} = student
console.log(marks);