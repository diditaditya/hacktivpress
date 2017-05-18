const express = require('express');
const router = express.Router();
const passport = require('../helpers/passport');
const User = require('../controllers/user');
const Article = require('../controllers/article');

router.get('/', (req, res) => {
  res.send('up and running');
});

// user endpoints
router.get('/users', User.showAll); // postman ok
router.get('/user/:id', User.findById); // postman ok
router.post('/register', User.register); // postman ok
router.post('/signin', passport.authenticate('local-signin', {session: false}), User.signin); // postman ok
router.post('/user/jwtcheck', User.jwtCheck); //postman ok

// article endpoints
router.get('/articles', Article.showAll); // postman ok
router.get('/article/:id', Article.findById); // postman ok
router.get('/articles/user/:id', Article.findByAuthor); // postman ok
router.post('/articles', Article.create); // postman ok
router.put('/article/:id', Article.update); //postman ok
router.delete('/article/:id', Article.delete); //postman ok

module.exports = router;
