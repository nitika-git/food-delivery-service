const express = require('express');
const router = express.Router();

router.post('/order', (req, res) => {
    const { name, address, dish } = req.body;
    // Process order (e.g., save to database, send email, etc.)
    res.render('order-confirmation', { name, address, dish });
});

module.exports = router;

