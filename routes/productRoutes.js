import express from 'express';
import * as productControl from '../controllers/productController.js';

const router = express.Router();

router.get('/', productControl.getAllProducts);
router.post('/', productControl.createProduct);


router.delete('/:id', productControl.deleteProduct);

export default router;