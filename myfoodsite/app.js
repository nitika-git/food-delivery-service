const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/menu'));
app.use('/', require('./routes/about'));
app.use('/', require('./routes/contact'));
app.use('/', require('./routes/order')); // Include the order route

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
