document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded");

    const cartButton = document.getElementById('cart-button');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartButton = document.getElementById('close-cart');
    const checkoutButton = document.getElementById('checkout-btn');

    cartButton.addEventListener('click', () => {
        cartSidebar.classList.add("open");
    });

    closeCartButton.addEventListener('click', () => {
        cartSidebar.classList.remove("open");
    });

    loadFromStorage();
});




function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        
        const imageElement = document.createElement('img');
        imageElement.src = item.imageUrl;
        imageElement.alt = item.productName;
        itemElement.appendChild(imageElement);

        const detailsElement = document.createElement('span');
        detailsElement.textContent = `${item.productName} - Quantity: ${item.quantity} - Price: $${item.price}`;
        itemElement.appendChild(detailsElement);

        cartItemsContainer.appendChild(itemElement);
    });

    document.getElementById('total-price').textContent = cart.totalPrice;
}





let cart = {
    items: [],
    totalPrice: 0
};

function addToCart(productName, quantity, price, imageUrl) {
    const item = { productName, quantity, price, imageUrl };
    cart.items.push(item);
    cart.totalPrice += quantity * price;
    updateCartDisplay();
    saveCartToStorage();
}