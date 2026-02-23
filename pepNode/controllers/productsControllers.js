const getProducts = (req, res) => {
    res.send("This is GET request of product");
};

const createProduct = (req, res) => {
    res.send("This is POST request of product");
};

export default {
    getProducts,
    createProduct
};