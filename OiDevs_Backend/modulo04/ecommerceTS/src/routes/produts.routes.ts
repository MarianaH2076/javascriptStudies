import { Router } from "express";
import { 
    listProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
 } from "../controllers/products.controllers";


const productsRouter = Router();

productsRouter.get('/', listProducts);
productsRouter.get('/:id', getProduct);
productsRouter.post('/', createProduct);
productsRouter.put('/:id', updateProduct);
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;