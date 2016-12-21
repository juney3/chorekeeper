var mongoose = require('mongoose');
var Household = mongoose.model('Household');

function HouseholdsController(){

  this.create = function(req,res){
    var household = new Household({
      name: req.body.name, 
      _user: req.body._user, 
      _admin: req.body.admin, 
      choreType: req.body.choreType, 
    })
    console.log(household);
    household.save(function(err,result){
      if(err){
        res.json(err); 
      }
      else{
        console.log("successfully saved household");
        res.json(result);
      }
    })
  }
  
}
module.exports = new HouseholdsController(); 