
var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcryptjs');

function UsersController(){

  this.register = function(req,res){
    
    var user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName, 
      password: req.body.password, 
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

  this.findLogged = function(req,res){
    User.findOne({_id: req.body._id}, function(err, user){
      console.log(user);
      res.json(user);
    })
  }
}
module.exports = new UsersController(); 