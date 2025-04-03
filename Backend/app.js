
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const Product = require("./models/productModel");

const app = express();
const port = 5000;

// Connecter à MongoDB
mongoose.connect("mongodb+srv://davidjnior2000:<david2006>@e-africa.nuoak6r.mongodb.net/?retryWrites=true&w=majority&appName=E-Africa", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Error connecting to MongoDB:", err));

// Configuration de Multer pour gérer l'upload d'images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');  // Dossier où les images seront stockées
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);  // Nom unique pour chaque image
    }
});

const upload = multer({ storage: storage });

// Middleware pour analyser les données JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads')); // Permet d'accéder aux fichiers téléchargés via URL

// Route pour ajouter un produit
app.post("/add-product", upload.single("image"), async (req, res) => 
    const  name, description, price, category  = req.body;
    const image = req.file ? req.file.path : null;  // Récupérer le chemin de l'image téléchargée

    try 
        const newProduct = new Product(
            name,
            description,
            price,
            image,
            category,
            userId: req.body.userId  // ID de l'utilisateur connecté
        );

        await newProduct.save();
        res.status(200).json( message: "Product added successfully" );
     catch (error) 
        res.status(500).json( message: "Failed to add product", error: error.message );
    );

// Démarrer le serveur
app.listen(port, () => 
    console.log(`Server running on port ${port}`);
});
