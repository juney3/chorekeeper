app.factory('usersFactory', ['$http', function($http) {
  // constructor for our factory
  var users = [];
  var user = {};
  function UsersFactory(){
    var _this = this;
    this.create = function(newUser,callback){
      $http.post('/user', newUser).then(function(data){
        if (typeof(callback) == 'function'){
          console.log("in the factory ",data.data);
          callback(data.data);
        }
      });
    };
  }

  return new UsersFactory();
}]);