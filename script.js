let cart = [];

const updateCartCount = () => {
    document.getElementById('cart-count').textContent = cart.length;
};

const addToCart = (productId) => {
    // Simple logic to handle adding products to the cart
    const product = document.querySelector(`.product-item[data-id="${productId}"]`);
    const productName = product.querySelector('h3').textContent;
    const productPrice = product.querySelector('p').textContent;

    cart.push({ id: productId, name: productName, price: productPrice });
    updateCartCount();
};

const addButtons = document.querySelectorAll('.add-to-cart');

addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.closest('.product-item').dataset.id;
        addToCart(productId);
    });
});

window.onload = updateCartCount;
