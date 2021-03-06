const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

let userControl = {
  showAll: function(req, res) {
    User.find({}).populate('articles').exec(function(err, users) {
      if(err) {
        res.send(err);
      } else {
        if (users) {
          res.send(users);
        } else {
          let response = {
            status: 'failed',
            message: 'there is no user registered'
          };
          res.send(response);
        }
      }
    });
  },
  findById: function(req, res) {
    User.findById(req.params.id).populate('articles').exec(function(err, user) {
      if(err) {
        res.send(err);
      } else {
        if(user) {
          res.send(user);
        } else {
          let response = {
            status: 'failed',
            message: 'user is not found'
          };
          res.send(response);
        }
      }
    });
  },
  register: function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    if(username && password) {
      User.findOne({username: username}, function(err, user) {
        if(err) {
          res.send(err);
        } else {
          if(user) {
            let response = {
              status: 'failed',
              message: 'username is already taken'
            };
            res.send(response);
          } else {
            bcrypt.hash(password, saltRounds, function(err, hash) {
              if(err) {
                res.send(err);
              } else {
                let newUser = new User({
                  username: username,
                  password: hash,
                  articles: []
                });
                newUser.save(function(err) {
                  if(err) {
                    res.send(err);
                  } else {
                    let response = {
                      status: 'success',
                      message: 'username is successfully registered',
                      user: newUser
                    };
                    res.send(response);
                  }
                });
              }
            });
          }
        }
      });
    } else {
      let response = {
        status: 'failed',
        message: 'username and password are required'
      };
      res.send(response);
    }

  },
  signin: function(req, res) {
    if(req.user.status === "failed") {
      res.send({status: req.user.status, message: req.user.message});
    }
    if(req.user.status === "success"){
      res.send(req.user)
    } else {
      res.send('error');
    }
  },
  jwtCheck: function(req, res) {
    let token = req.body.token;
    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
      if(err) {
        res.send(err);
      } else {
        res.send(decoded);
      }
    });
  }
}

module.exports = userControl;
