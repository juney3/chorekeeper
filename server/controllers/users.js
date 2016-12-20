
var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcryptjs');

function UsersController(){

  this.register = function(req,res){
    // if(req.body.password !== req.body.confirmPassword){
    //   var err = {errors: message: "Password doesn't match your confirmation!"};
    //   res.json(err);
    // }
    
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
}
module.exports = new UsersController(); 