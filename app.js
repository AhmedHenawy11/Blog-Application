require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');


// config
const app = express();
const PORT = process.env.PORT;
const connectDB = require('./src/config/db')


//routes
const indexRoutes = require('./src/routes/index');

app.use(express.static('public'));
//Templating Enginge
app.use(expressLayout);
app.set('views', '/mnt/main-partition/Work/Projects/Blog-Application/src/views')
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');


//Handling Routes
app.use('', indexRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
