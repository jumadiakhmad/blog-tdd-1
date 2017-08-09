const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema ({
  name: String,
  username: String,
  email: String,
  password: String
})

var Users = mongoose.model('users', userSchema);

module.exports = Users;
