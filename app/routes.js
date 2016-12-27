// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route our homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});

// route our about page
router.get('/about', function(req, res) {
  var users = [
    { name: 'Holly', email: 'holly@scotch.io', avatar: 'http://placekitten.com/300/300' },
    { name: 'Chris', email: 'chris@scotch.io', avatar: 'http://placekitten.com/400/400' },
    { name: 'Ado', email: 'ado@scotch.io', avatar: 'http://placekitten.com/500/500' },
    { name: 'Nick', email: 'nick@scotch.io', avatar: 'http://placekitten.com/700/700' }
  ];

  res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {

});
