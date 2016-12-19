app.factory('usersFactory', function($http) {
  // constructor for our factory
  var users = [];
  var user = {};
  function UsersFactory(){
    var _this = this;
    this.create = function(newUser,callback){
      
      $http.post('/users', newUser).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };

  return new UsersFactory();
});