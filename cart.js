let cart = JSON.parse(localStorage.getItem('cart')) || [];

const updateCart = () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
        totalPrice += parseFloat(item.price.replace('$', ''));
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
};

const checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', () => {
    alert('Checkout process is not implemented yet.');
});

window.onload = updateCart;
