
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String, // URL de l'image
        required: true
    },
    category: {
        type: String,
        required: true
    },
    userId: {
        type: String, // ID de l'utilisateur qui a ajouté le produit
        required: true
    }
});

module.exports = mongoose.model("Product", productSchema);
