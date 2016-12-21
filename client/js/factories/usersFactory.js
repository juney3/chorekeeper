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
          callback(data); 
        }
      });
    }

    // login method
    this.login = function(returnUser, callback){
      console.log('usersFactory has', returnUser);
      $http.post('/user/login', returnUser).then(function(data){
        if (typeof(callback) == 'function'){
          console.log('usersFactory returns', data.data);
          callback(data.data);
        }
      })
    }
  }

  return new UsersFactory();
}]);