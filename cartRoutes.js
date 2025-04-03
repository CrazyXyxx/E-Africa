
const express = require('express');
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

const router = express.Router();

// Ajouter un produit au panier
router.post('/add-to-cart', async (req, res) => {
    const { productId, quantity, userId } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const cart = await Cart.findOne({ userId });
        if (cart) {
            const productIndex = cart.products.findIndex(item => item.productId.toString() === productId);
            if (productIndex >= 0) {
                cart.products[productIndex].quantity += quantity;
            } else {
                cart.products.push({ productId, quantity });
              }
