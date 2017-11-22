var loopback = require('loopback');
var app = module.exports = loopback();
module.exports = function (app) {
   app.dataSources.mysql.autoupdate();
   console.log("Performed autoupdate.");
}
