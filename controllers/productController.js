import { products } from '../data/mock.js';

export const getAllProducts = (req, res) => {
    res.status(200).json(products);
};

export const createProduct = (req, res) => {
    const newProduct = { id: products.length + 1, ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

export const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'produto nao encontrado' });
    }
    const deletedProduct = products.splice(productIndex, 1);
    res.status(200).json({ 
        message: 'produto deletado', 
        product: deletedProduct[0] 
    });
};