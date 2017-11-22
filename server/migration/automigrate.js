var loopback = require('loopback');
var app = module.exports = loopback();
module.exports = function (app) {
   app.dataSources.backend.automigrate();
   console.log("Performed automigration.");
}
