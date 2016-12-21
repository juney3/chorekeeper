app.factory('housesFactory', ['$http', function($http) {
  // constructor for our factory
  var houses = [];
  var house = {};

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

    
  }

  return new HousesFactory();
}]);