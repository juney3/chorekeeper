var users = require('../controllers/users.js');

module.exports = function(app){
  
  app.post('/user', users.register); 
  
}