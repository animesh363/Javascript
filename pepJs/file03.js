//const products =["prodict1","prodict2","prodict3"]
const products = [
    {id: 1, name:"product 1", dec:"This is description1",price:1000},
    {id: 2, name:"product 2", dec:"This is description2",price:1200},
    {id: 3, name:"product 3", dec:"This is description3",price:1500}
]

const cart = []
// products.forEach((product) => console.log(product));


products.forEach((product) =>{
    product.quantity = 1;
    product.total = product.price * product.quantity;
    cart.push(product)
});

console.log(cart);