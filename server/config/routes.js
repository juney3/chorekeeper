var users = require('../controllers/users.js');
var houses = require('../controllers/households.js');
var hacks = require('../controllers/hacks.js');

module.exports = function(app){
  app.post('/loggedUser', users.findLogged);
  app.post('/user', users.register); 
  app.post('/user/login', users.login);
  
  app.post('/house', houses.create);
  app.post('/house/household', houses.retrieve);
  app.get('/houses', houses.find);
  app.post('/request', houses.request);
  app.post('/approve', houses.approve); 
  app.post('/decline', houses.decline);

  app.post('/hack', hacks.create);
  app.get('/hacks', hacks.find);
}