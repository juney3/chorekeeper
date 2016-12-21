app.factory('usersFactory', ['$http', function($http) {
  // constructor for our factory
  var users = [];
  var loggedUser = [];
  var user = {};

  function UsersFactory(){
    var _this = this;
    this.create = function(newUser,callback){
      $http.post('/user', newUser).then(function(data){
        if (typeof(callback) == 'function'){
          callback(data.data);
        }
      });
    };

    this.find = function(user,callback){
      $http.post('/loggedUser', user).then(function(data){
        if(typeof(callback) == 'function'){ 
          callback(data.data);
        }
      })
    }
  }

  return new UsersFactory();
}]);