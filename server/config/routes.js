var users = require('../controllers/users.js');
var houses = require('../controllers/households.js');

module.exports = function(app){
  app.post('/loggedUser', users.findLogged);
  app.post('/user', users.register); 
  app.post('/user/login', users.login);
  
  app.post('/house', houses.create);
  app.post('/house/household', houses.retrieve);
}