"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.listProducts = void 0;
let products = [];
// Criação dos métodos
//Get
function listProducts(request, response) {
    return response.json(products);
}
exports.listProducts = listProducts;
//Get /:id
function getProduct(request, response) {
    const { id } = request.params;
    const product = products.find((product) => product.id === Number(id));
    if (!product) {
        return response.status(404).json({
            message: 'Product not found!'
        });
    }
    ;
    return response.json(product);
}
exports.getProduct = getProduct;
//Post
function createProduct(request, response) {
    const product = request.body;
    if (!product.id) {
        return response.status(400).json({
            message: 'Id cannot be empty!'
        });
    }
    ;
    if (!product.name) {
        return response.status(400).json({
            message: 'Name cannot be empty!'
        });
    }
    ;
    if (!product.price) {
        return response.status(400).json({
            message: 'Price cannot be empty!'
        });
    }
    ;
    products.push(product);
    return response.json(product);
}
exports.createProduct = createProduct;
//Put
function updateProduct(request, response) {
    const { id } = request.params;
    const productIndex = products.findIndex((product) => product.id === Number(id));
    if (!productIndex) {
        return response.status(404).json({
            message: 'Product not found!'
        });
    }
    products[productIndex].id = request.body.id;
    products[productIndex].name = request.body.name;
    products[productIndex].price = request.body.price;
    return response.json(products[productIndex]);
}
exports.updateProduct = updateProduct;
//Delete
function deleteProduct(request, response) {
    const { id } = request.params;
    products = products.filter((product) => product.id !== Number(id));
    return response.json({
        message: 'Product deleted!'
    });
}
exports.deleteProduct = deleteProduct;
