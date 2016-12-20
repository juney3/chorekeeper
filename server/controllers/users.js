
var mongoose = require('mongoose');
var User = mongoose.model('User');


function UsersController(){

  this.register = function(req,res){
    console.log("req.body is ",req.body);
  }
}
module.exports = new UsersController(); 