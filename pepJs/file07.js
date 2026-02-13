const products = [
  { id: 1, name: "Product 1", desc: "This is description", price: 100, category: "Laptop" },
  { id: 2, name: "Product 2", desc: "This is description", price: 120, category: "Desktop" },
  { id: 3, name: "Product 3", desc: "This is description", price: 150, category: "Keyboard" },
  { id: 4, name: "Product 4", desc: "This is description", price: 100, category: "Mouse" },
  { id: 5, name: "Product 5", desc: "This is description", price: 120, category: "Desktop" },
  { id: 6, name: "Product 6", desc: "This is description", price: 150, category: "Laptop" }
];

const cart = []
function addToCart(pid) {
//   cart.push(products.find(product => product.id === pid))
    const product = products.find((product) => product.id === pid);
    cart.push({...product, quantity:1});
    //How to add quantity as well?
}

function increment(pid){
    const item = cart.find(item => item.id ===pid)
    if (item) {
    item.quantity++;
  }
}

function decrement(pid){
    const item = cart.find(item => item.id ===pid)
    if (item) {
    item.quantity--;
  }

}

function placeOrder() {
  if (cart.length === 0) {
    console.log("Cart is empty!");
    return;
  }

  const totalAmount = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const order = {
    orderId: Date.now(),
    items: [...cart],
    totalAmount: totalAmount,
    orderDate: new Date()
  };

  console.log("Order Placed Successfully!");
  console.log(order);

  // Clear cart after order
  cart.length = 0;
}

addToCart(1)
addToCart(3)
addToCart(5)
// console.log(cart);


increment(1)
increment(5)


decrement(1)
decrement(5)

// console.log(cart);



placeOrder()