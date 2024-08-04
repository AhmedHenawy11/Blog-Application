const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');



router.get('/admin', async (req, res) => {
    try {
        const locals = {
            title: "Admin",
            description: "Simple Blog created with NodeJs, Express & MongoDb."
        }

        res.render('admin/index', { locals, layout: '../views/layouts/admin' });
    } catch (error) {
        console.log(error);
    }
});

router.post('/admin', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        if (username === 'admin' && password === 'password') {
            res.redirect('/')
        }else{
            res.redirect('/admin')
        }
    } catch (error) {
        console.log(error);
    }
});



module.exports = router;
