import { Request, Response } from 'express';
import { ProductDto } from "../domain/dtos/productDto";

let products: any[] = [];

// Criação dos métodos

//Get
export function listProducts (request: Request, response: Response) {
    return response.json(products);
}

interface GetParams {
    id: string
}

//Get /:id
export function getProduct(request: Request<GetParams>, response: Response) {
    const { id } = request.params;
    const product = products.find((product) => product.id === Number(id));

    if (!product) {
        return response.status(404).json({
            message: 'Product not found!'
        });
    };

    return response.json(product);
}

//Post
export function createProduct(request: Request<{}, {}, ProductDto>, response: Response) {
    const product = request.body;

    if(!product.id) {
        return response.status(400).json({
            field: 'id',
            message: 'Id cannot be empty!'
        })
    };

    if(!product.name) {
        return response.status(400).json({
            message: 'Name cannot be empty!'
        })
    };

    if(!product.price) {
        return response.status(400).json({
            message: 'Price cannot be empty!'
        })
    };

    products.push(product);
    return response.json(product);
}

interface PutParams {
    id: string
}

//Put
export function updateProduct(request: Request<PutParams, {}, ProductDto>, response: Response) {
    const { id } = request.params;
    const productIndex = products.findIndex((product) => product.id === Number(id));

    if(!productIndex) {
        return response.status(404).json({
            message: 'Product not found!'
        });
    }

    products[productIndex].id = request.body.id;
    products[productIndex].name = request.body.name;
    products[productIndex].price = request.body.price;

    return response.json(products[productIndex]);

}

interface DeleteParams {
    id: string
}

//Delete
export function deleteProduct(request: Request<DeleteParams>, response: Response) {
    const { id } = request.params;
    products = products.filter((product) => product.id !== Number(id));

    return response.json({
        message: 'Product deleted!'
    })
}