const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const articles = require('./routes/articles');
const users = require('./routes/users');

const app = express();

mongoose.connect('mongodb://localhost/blog');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: ' ));
db.once('open', function(){
  console.log('we are connected');
})
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/articles', articles);
app.use('/users', users);

app.listen(3000);
