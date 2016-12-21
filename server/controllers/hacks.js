var mongoose = require('mongoose');
var Hack = mongoose.model('Hack');

function HacksController(){

  this.find = function(req,res){
    console.log("in the server");
    Hack.find({}, function(err, data){
      if(err){
        console.log('errors');
      }
      else{
        res.json(data);
      }
    })
  }

  this.create = function(req,res){
    console.log("REQ BODY",req.body); 
    Hack.create(req.body);
  }

  
}
module.exports = new HacksController(); 