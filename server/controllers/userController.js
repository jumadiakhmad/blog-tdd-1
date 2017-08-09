const Users = require('../models/userModel');

function getAllUsers(req,res) {
  Users.find((err,users) => {
    if(err) res.status(500).send(err)
    res.send(users)
  })
}

function getOneUsers(req,res) {
  let _id = req.params.id
  Users.findById(_id, (err,user) => {
    if(err) res.status(500).send(err)
    res.send(user)
  })
}

module.exports = {
  getAllUsers, getOneUsers
}
