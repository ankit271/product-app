import { Request, Response } from 'express';
import Product from '../models/Product';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.render('index', { products });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('product', { product });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.redirect('/products');
  } catch (error) {
    res.status(400).render('add-product', { error: (error as Error).message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.redirect(`/products/${product?.id}`);
  } catch (error) {
    res.status(400).render('edit-product', { 
      error: (error as Error).message,
      product: req.body
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const showAddProductForm = (req: Request, res: Response) => {
  res.render('add-product', { error: null });
};

export const showEditProductForm = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('edit-product', { product, error: null });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};