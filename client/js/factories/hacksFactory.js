app.factory('hacksFactory', ['$http', function($http) {
  // constructor for our factory
  var hacks = [];
  var house = {};

  function HacksFactory(){
    var _this = this;
    this.create = function(hack,callback){
      console.log(hack);
      $http.post('/hack', hack).then(function(data){
        if (typeof(callback) == 'function'){
          callback(data.data);
        }
      });
    };

    this.find = function(callback){
      $http.get('/hacks').then(function(data){
        if(typeof(callback) == 'function'){
          callback(data);
          hacks = data; 
        }
      })
    }

    
  }

  return new HacksFactory();
}]);