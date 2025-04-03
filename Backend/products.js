
const express = require('express');
const Product = require('../models/productModel');

const router = express.Router();

// Route pour récupérer les produits de l'utilisateur
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({ userId: req.userId });  // Filtrer par ID utilisateur
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch products' });
    }
});

// Route pour supprimer un produit
router.delete('/products/:productId', async (req, res) => {
    const { productId } = req.params;
    try {
        await Product.findByIdAndDelete(productId);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete product' });
    }
});

module.exports = router;
