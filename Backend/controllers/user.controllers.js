const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.register =  (req,res,next) => {
  var user = new User();
  user.fname = req.body.fname;
  user.lname = req.body.lname;
  user.email = req.body.email;
  user.role = req.body.role;
  user.password = req.body.password;
  user.save((err,doc) => {
    if(!err)
    res.send(doc);
  });
}