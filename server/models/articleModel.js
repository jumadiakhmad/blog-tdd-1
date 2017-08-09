const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var articleSchema = new Schema({
  author: String,
  title : String,
  content : String,
})

var Article = mongoose.model('articles', articleSchema);

module.exports = Article;
