const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Home Routes

router.get('', async (req, res) => {
  const locals = {
    title: "NodeJs Blog",
    description: "Simple Blog created with NodeJs, Express & MongoDb."
  }

  try {
    const data = await Post.find();
    res.render('index', { locals, data });
  } catch (error) {
    console.log(error);
  }

});


// Post routes
router.get('/post/:id',async(req, res) => {
  try {
    const locals = {
      title: "NodeJs Blog",
      description: "Simple Blog created with NodeJs, Express & MongoDb."
    }
    // the id in the requesr
    let slug = req.params.id
    // Get post by its id
    const postData = await Post.findById({_id: slug});

    res.render('post',{locals, postData})
  } catch (error) {
    console.error(error);
  }
  
})


// search
router.post('/search',async(req, res) => {
  try {
    const locals = {
      title: "NodeJs Blog",
      description: "Simple Blog created with NodeJs, Express & MongoDb."
    }
    // the id in the requesr
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");
    const words = searchNoSpecialChar.split(/\s+/).filter(Boolean); // Split by spaces and remove empty strings
    const regexPattern = words.map(word => `(?=.*${word})`).join(''); // Create a pattern to match all words in any order
    const regex = new RegExp(regexPattern, 'i');
    
    const data = await Post.find({
      $or: [
        { title: { $regex: regex }},
        { body: { $regex: regex }}
      ]
    });
    res.render("search", {
      data,
      locals,
    });
    console.log(data);

  } catch (error) {
    console.error(error);
  }
  
})



//about
router.get('/about',(req, res) => {
    res.render('about')
})

module.exports = router;

































// function insertPostData () {
//     Post.insertMany([
//       {
//         title: "Building APIs with Node.js",
//         body: "Learn how to use Node.js to build RESTful APIs using frameworks like Express.js"
//       },
//       {
//         title: "Deployment of Node.js applications",
//         body: "Understand the different ways to deploy your Node.js applications, including on-premises, cloud, and container environments..."
//       },
//       {
//         title: "Authentication and Authorization in Node.js",
//         body: "Learn how to add authentication and authorization to your Node.js web applications using Passport.js or other authentication libraries."
//       },
//       {
//         title: "Understand how to work with MongoDB and Mongoose",
//         body: "Understand how to work with MongoDB and Mongoose, an Object Data Modeling (ODM) library, in Node.js applications."
//       },
//       {
//         title: "build real-time, event-driven applications in Node.js",
//         body: "Socket.io: Learn how to use Socket.io to build real-time, event-driven applications in Node.js."
//       },
//       {
//         title: "Discover how to use Express.js",
//         body: "Discover how to use Express.js, a popular Node.js web framework, to build web applications."
//       },
//       {
//         title: "Asynchronous Programming with Node.js",
//         body: "Asynchronous Programming with Node.js: Explore the asynchronous nature of Node.js and how it allows for non-blocking I/O operations."
//       },
//       {
//         title: "Learn the basics of Node.js and its architecture",
//         body: "Learn the basics of Node.js and its architecture, how it works, and why it is popular among developers."
//       },
//       {
//         title: "NodeJs Limiting Network Traffic",
//         body: "Learn how to limit netowrk traffic."
//       },
//       {
//         title: "Learn Morgan - HTTP Request logger for NodeJs",
//         body: "Learn Morgan."
//       },
//     ])
//   }
//   insertPostData();