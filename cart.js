
document.addEventListener('DOMContentLoaded', async function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const userId = '123'; // Remplace par l'ID réel de l'utilisateur

    const response = await fetch(`/api/cart?userId=userId`);
    const cart = await response.json();

    cart.products.forEach(item => 
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        cartItemElement.innerHTML = `
            <img src="{item.productId.image}" alt="item.productId.name">
            <div class="cart-item-details">
                <h2>{item.productId.name}</h2>
                <p>item.productId.description</p>
                <span>Price:item.productId.price</span>
                <span>Quantity:{item.quantity}</span>
            </div>
        `;

        cartItemsContainer.appendChild(cartItemElement);
    });
});

async function checkout() {
    const userId = '123'; // Remplace par l'ID réel de l'utilisateur
    const response = await fetch('/api/cart/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId })
    });
  const data = await response.json();
    if (response.ok) {
        alert(data.message);
    } else {
        alert('Failed to place order');
    }
}
