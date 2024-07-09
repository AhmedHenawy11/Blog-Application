import dotenv from 'dotenv';
import express from "express"
import expressEjsLayouts from 'express-ejs-layouts';
// Configure dotenv
dotenv.config();

const app = express();
const PORT = 3000;
const expressLayout  = expressEjsLayouts;

//Templating Enginge
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');








//Handling Routes
app.get("/", (req, res) => {
    res.send("<h1>Hello there.</h1>")
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
