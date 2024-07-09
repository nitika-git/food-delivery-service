document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const contactForm = document.getElementById('contactForm');

    if (orderForm) {
        orderForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Order submitted successfully!');
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Message sent successfully!');
        });
    }
});

