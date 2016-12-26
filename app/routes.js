// require express
var express = require('express');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route our homepage
router.get('/', function(req, res) {
  res.send('Hello World!');
});

// route our about page
router.get('/about', function(req, res) {
  res.send('Hello World, I am the about page!');
});

router.get('/contact');
router.post('/contact');
