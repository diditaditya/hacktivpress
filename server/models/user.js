const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: String,
  password: String,
  articles: [{type: Schema.Types.ObjectId, ref: 'Article'}]
});

let User = mongoose.model('User', userSchema);

module.exports = User;
