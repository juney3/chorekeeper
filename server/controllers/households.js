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
  
  this.retrieve = function(req,res){
    console.log('server side household controller has', req.body);
    Household.findOne( {_user: req.body._id})
      .populate('_user')
      .populate('admin')
      .exec(function(err, household){
      if(err){
        console.log('server side household controller retrieve error', err);
        res.json(err);
      }
      else {
        console.log('server side household controller retrieved household', household);
        res.json(household);

      }
    });
  }
}
module.exports = new HouseholdsController(); 