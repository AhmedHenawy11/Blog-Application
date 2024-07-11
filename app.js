require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');


// config
const app = express();
const PORT = process.env.PORT


//routes
const indexRoutes = require('./routes/index');

app.use(express.static('public'));
//Templating Enginge
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


//Handling Routes
app.use('', indexRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
