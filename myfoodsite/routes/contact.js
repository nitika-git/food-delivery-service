const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // You can process the form data here, e.g., save to a database or send an email
    console.log(`Received contact form submission: Name - ${name}, Email - ${email}, Message - ${message}`);
    res.render('contact', { success: true });
});

module.exports = router;
