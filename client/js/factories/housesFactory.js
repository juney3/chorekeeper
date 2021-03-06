app.factory('housesFactory', ['$http', function($http) {
  // constructor for our factory
  var houses = [];
  var house = {};
  var user = {};
  var choreTypes = [];

  function HousesFactory(){
    var _this = this;
    this.create = function(newHouse,callback){
      console.log(newHouse);
      $http.post('/house', newHouse).then(function(data){
        if (typeof(callback) == 'function'){
          callback(data.data);
        }
      });
    };

    // retrieve household method
    this.retrieve = function(user, callback){
      $http.post('/household', user).then(function(household){
        if(typeof(callback) == 'function'){
          callback(household.data);
          choreTypes = household.data.choreType;
        }
      });
    };

    this.retrieveChores = function(callback){
      callback(choreTypes);
    }

    this.find = function(callback){
      $http.get('/houses').then(function(data){
        if(typeof(callback) == 'function'){
          callback(data);
          houses = data; 
        }
      })
    }

    this.request = function(data,callback){
      $http.post('/request', data).then(function(data){
        if(typeof(callback) == 'function'){
          callback(data.data);
        }
      })
    }

    this.approve = function(user,callback){
      $http.post('/approve', user).then(function(data){
        if(typeof(callback) == 'function'){
          callback(data.data);
        }
      })
    }

    this.decline = function(user,callback){
      $http.post('/decline', user).then(function(data){
        if(typeof(callback) == 'function'){
          callback(data.data);
        }
      })
    }

    
  }

  return new HousesFactory();
}]);