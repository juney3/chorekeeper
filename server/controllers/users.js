
var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
  this.index = function(req,res){
    Friend.find({}, function(err, friends){
      if(err){
        console.log("error");
      }
      else{
        res.json(friends);
      }
    })
  };
}
module.exports = new UsersController(); 