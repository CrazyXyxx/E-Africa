
const express = require("express");
const router = express.Router();
const Product = require("./models/productModel");
router.post("/add-product", async (req, res) => {
    const { name, description, price, image, category, userId } = req.body;

    try {
        const newProduct = new Product({
            name,
            description,
            price,
            image,
            category,
            userId
        });
        await newProduct.save();
        res.status(200).send("Product added successfully.");
    } catch (error) {
        res.status(500).send("Error adding product.");
    }
});

module.exports = router;
