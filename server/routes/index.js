const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../controllers/user');
const Article = require('../controllers/article');

router.get('/', (req, res) => {
  res.send('up and running');
});

// user endpoints
router.get('/users', User.showAll);
router.get('/user/:id', User.findById);
router.post('/register', User.register);
router.post('/signin', passport.authenticate('local-signin', {session: false}), User.signin);

// article endpoints
router.get('/articles', Article.showAll);
router.get('/article/:id', Article.findById);
router.post('/articles', Article.create);
router.put('/article/:id', Article.update);
router.delete('/article/:id', Article.delete);

module.exports = router;
