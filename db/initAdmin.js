const request = require('request');

var initAdmin = (email,password, callback) => {

  request({
    url: `http://localhost:3000/user/init?mail=${email}&password=${password}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('No se ha podido conectar al Servidor');
    } else {
       callback(body);
    } 
  });
};

module.exports.initAdmin = initAdmin;
