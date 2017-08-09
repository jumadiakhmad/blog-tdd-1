var Article = require('../models/articleModel');

function getAllArticles(req,res) {
  Article.find((err,articles) => {
    if(err) res.status(500).send(err)
    res.send(articles)
  })
}

function getSingleArticle(req,res) {
  Article.findById(req.params.id
  , (err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result)
  })
}

function createArticle(req,res) {
  Article.create({
    author : req.body.author,
    title : req.body.title,
    content : req.body.content
  },(err,result) => {
    if(err) res.send(err)
    res.send(result);
  })
}

function updateArticle(req,res) {
  Article.find({
    _id : req.params.id
  }, (err,result) => {
    Article.update({
      _id : req.params.id
    }, {
      $set : {
        author : req.body.author,
        title : req.body.title,
        content : req.body.content
      }
    }, function(err,result){
      if(err) res.send(err)
      res.send(result);
    })
  })
}

function deleteArticle(req,res) {
  Article.remove({
    _id : req.params.id
  }, (err,result) => {
    if(err) res.send(err)
    res.send(result);
  })
}


module.exports = {
  getAllArticles, getSingleArticle, createArticle, updateArticle,deleteArticle
}
