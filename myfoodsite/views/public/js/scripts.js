document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const dish = document.getElementById('dish').value;

    // Show the order confirmation
    document.getElementById('order-form').style.display = 'none';
    document.getElementById('order-confirmation').style.display = 'block';
    document.getElementById('customer-name').textContent = name;
    document.getElementById('customer-address').textContent = address;
    document.getElementById('customer-dish').textContent = dish;
});
