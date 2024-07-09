document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const dish = this.dataset.dish;
            cart.push(dish);
            updateCart();
        });
    });

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                cart.splice(index, 1);
                updateCart();
            });
            li.appendChild(removeButton);
            cartItemsContainer.appendChild(li);
        });
    }

    document.getElementById('order-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const dishes = cart.join(', ');

        fetch('/submit-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, address, dishes })
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            window.location.href = 'order-confirmation.html?' + new URLSearchParams({ name, address, dish: dishes }).toString();
        })
        .catch(error => console.error('Error:', error));
    });
});
