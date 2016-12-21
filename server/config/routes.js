var users = require('../controllers/users.js');
var houses = require('../controllers/households.js');
var hacks = require('../controllers/hacks.js');

module.exports = function(app){
  app.post('/loggedUser', users.findLogged);
  app.post('/user', users.register); 
  app.post('/user/login', users.login);
  
  app.post('/house', houses.create);
  app.get('/houses', houses.find);
  app.post('/request', houses.request);

  app.post('/hack', hacks.create);
  app.get('/hacks', hacks.find);
}