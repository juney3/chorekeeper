
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

  this.login = function(req,res) {
    // console.log('server UsersController has login data', req.body);
    User.findOne( {email: req.body.email}, function(err, user){
      if(err) {
        // console.log('server UsersController login error', err);
        res.json(err);
      }
      if (user == null) {
        // console.log('no user found');
        res.json({errors: 'User not found in database - Please register'})
      }
      else{
        user.confirmPassword(req.body.password, function (err, isMatch){
          if (err) {
            // console.log('server UsersController pw confirmation error', err);
            res.json(err);
          }
          else {
            // console.log(isMatch);
            res.json(user);
          }
        })
      }
    })
  }
}

module.exports = new UsersController(); 