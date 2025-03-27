import { Router } from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  showAddProductForm,
  showEditProductForm,
} from '../controllers/productController';

const router = Router();

router.get('/', getProducts);
router.get('/add', showAddProductForm);
router.post('/', createProduct);
router.get('/:id', getProduct);
router.get('/:id/edit', showEditProductForm);
router.post('/:id', updateProduct);
router.post('/:id/delete', deleteProduct);

export default router;