
document.addEventListener("DOMContentLoaded", async function() {
    const productListContainer = document.querySelector(".product-list");

    // Récupérer les produits de l'utilisateur (assume que tu as un endpoint API pour cela)
    const response = await fetch('/api/products');
    const products = await response.json();

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        
        productElement.innerHTML = `
            <img src="product.image" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <span>
    
${product.price}</span>
            <button onclick="deleteProduct('product._id')">Delete</button>
            <button onclick="editProduct('${product._id}')">Edit</button>
        `;

        productListContainer.appendChild(productElement);
    });
});

async function deleteProduct(productId) {
    const response = await fetch(`/api/products/${productId}`, { method: 'DELETE' });
    if (response.ok) {
        alert('Product deleted!');
        location.reload();
    } else {
    async function editProduct(productId) 
    window.location.href = `/edit-product.html?id=${productId}`;
}