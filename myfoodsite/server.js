const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database(':memory:');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create the orders table
db.serialize(() => {
    db.run(`CREATE TABLE orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        address TEXT,
        dishes TEXT
    )`);
});

// Handle form submission
app.post('/submit-order', (req, res) => {
    const { name, address, dishes } = req.body;

    db.run(`INSERT INTO orders (name, address, dishes) VALUES (?, ?, ?)`, [name, address, dishes], function(err) {
        if (err) {
            return res.status(500).send('Failed to submit order');
        }
        res.status(200).send('Order submitted successfully');
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
