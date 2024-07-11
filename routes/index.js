const express = require('express');
const router = express.Router();


router.get('', (req, res) => {
    const locals = {
        title: "Home",
        description: "Blog created with Node.js, Express & MongoDB"
    } 
    res.render('index', locals);
})

module.exports = router;