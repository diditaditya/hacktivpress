const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  title: String,
  category: String,
  content: String,
  createdAt: Date
});

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;
