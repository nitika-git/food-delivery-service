const express = require('express');
const router = express.Router();

router.get('/menu', (req, res) => {
    res.render('menu');
});

module.exports = router;
