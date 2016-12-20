
var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcryptjs');

function UsersController(){

  this.register = function(req,res){
    var user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName, 
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8)), 
      email: req.body.email
    })
    user.save(function(err,data){
      if(err){
        console.log("error" ,err);
        res.json(err);
      }
      else{
        res.json({data:data});
      }
    })
  }
}
module.exports = new UsersController(); 