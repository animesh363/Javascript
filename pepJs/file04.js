// //const products =["prodict1","prodict2","prodict3"]
// const products = [
//     {id: 1, name:"product 1", dec:"This is description1",price:1000},
//     {id: 2, name:"product 2", dec:"This is description2",price:1200},
//     {id: 3, name:"product 3", dec:"This is description3",price:1500}
// ]

// const cart = []
// products.forEach((product) =>{
//     const obj = {
//         ...product,
//         quantity:1,
//         total:product.price * product.quantity,
//     };
//     // cart = [...cart, obj]
// });

// console.log(cart);




//const products =["prodict1","prodict2","prodict3"]
const products = [
    {id: 1, name:"product 1", dec:"This is description1",price:1000},
    {id: 2, name:"product 2", dec:"This is description2",price:1200},
    {id: 3, name:"product 3", dec:"This is description3",price:1500}
]
const cart = products.map((product) =>{
    const obj = {
        ...product,
        quantity:1,
        total:product.price * product.quantity,
    };
    return obj
});
console.log(cart);
