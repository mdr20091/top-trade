import expressAsyncHandler from 'express-async-handler';
import Product from '../model/productModel.js';

//@desc Fetch all products
//@route GET api/products
//@access public
const getProducts = expressAsyncHandler(async (req, res) => {
  const product = await Product.find({});
  res.json(product);
});

//@desc Fetch all products
//@route GET api/products/:id
//@access public
const getProductById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProductById, getProducts };
