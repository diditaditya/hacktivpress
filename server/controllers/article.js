const Article = require('../models/article');

let articleControl = {
  showAll: function(req, res) {
    Article.find({}).populate('author').exec(function(err, articles) {
      if(err) {
        res.send(err);
      } else {
        if (articles) {
          res.send(articles);
        } else {
          let response = {
            status: 'failed',
            message: 'there is no article'
          };
          res.send(response);
        }
      }
    });
  },
  findById: function(req, res) {
    Article.findById(req.params.id).populate('author').exec(function(err, article) {
      if(err) {
        res.send(err);
      } else {
        if(article) {
          res.send(article);
        } else {
          let response = {
            status: 'failed',
            message: 'article is not found'
          };
          res.send(response);
        }
      }
    });
  },
  findByAuthor: function(req, res) {
    Article.find({author: req.params.id}).populate('author').exec(function(err, articles) {
      if(err) {
        res.send(err);
      } else {
        res.send(articles);
      }
    });
  },
  create: function(req, res) {
    let title = req.body.title;
    let author = req.body.author;
    let category = req.body.category;
    let content = req.body.content;
    if(title && author && category && content) {
      let newArticle = new Article({
        title: title,
        author: author,
        category: category,
        content: content,
        createdAt: new Date()
      });
      newArticle.save(function(err) {
        if(err) {
          res.send(err);
        } else {
          let response = {
            status: 'success',
            message: 'article is successfully created',
            article: newArticle
          };
          res.send(response);
        }
      });
    } else {
      let response = {
        status: 'failed',
        message: 'author, title, category, and content are required'
      };
      res.send(response);
    }

  },
  update: function(req, res) {
    Article.findById(req.params.id, function(err, article) {
      if(err) {
        res.send(err);
      } else {
        if(article) {
          let title = req.body.title || article.title;
          let author = article.author;
          let category = req.body.category || article.category;
          let content = req.body.content || article.content;
          Article.update({_id: req.params.id}, {$set:{
            title: title,
            author: author,
            content: content,
            category: category
          }}, function(err, updated) {
            if(err) {
              res.send(err);
            } else {
              let response = {
                status: 'success',
                message: 'article is successfully updated',
              };
              res.send(response);
            }
          });
        } else {
          let response = {
            status: 'failed',
            message: 'article is not found'
          };
          res.send(response);
        }
      }
    });
  },
  delete: function(req, res) {
    Article.remove({_id: req.params.id}, function(err, removed) {
      if(err) {
        res.send(err);
      } else {
        res.send(removed);
      }
    });
  }

}

module.exports = articleControl;
