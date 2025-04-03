
// Assurez-vous que Firebase est initialisé avant d'utiliser ce fichier (si nécessaire).
// Vous pouvez aussi utiliser un backend Node.js pour gérer les requêtes, si c'est ce que vous souhaitez.

const productForm = document.getElementById('productForm');

// Lorsque le formulaire est soumis
productForm.addEventListener('submit', async (event) => {
    event.preventDefault();  // Empêche le rechargement de la page lors de la soumission du formulaire

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').files[0];
    const category = document.getElementById('category').value;

    if (!name || !description || !price || !image || !category) {
        alert("Please fill in all fields.");
        return;
    }

    // Créer un objet FormData pour envoyer l'image et les autres informations
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);  // Ajouter l'image du produit
    formData.append('category', category);

    // Envoie des données au serveur pour ajouter le produit
    try {
        const response = await fetch('https://your-backend-api-url.com/add-product', {
            method: 'POST',
            body: formData,  // Envoi des données sous forme de FormData (qui inclut l'image)
        });

        const result = await response.json();
        
        if (response.ok) {
            alert("Product added successfully!");
            window.location.href = "index.html";  // Redirige l'utilisateur vers la page d'accueil
        } else {
            alert(`Error: ${result.message || "Failed to add product"}`);
        }
    } catch (error) {
        console.error("Error adding product:", error);
        alert("Something went wrong. Please try again later.");
    }
});
