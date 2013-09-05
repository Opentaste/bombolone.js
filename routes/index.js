var db = require('../database').db;

/* Get Home Page
 * ================================== */

exports.index = function(req, res){
	console.log(db.databaseName);
  res.render('index');
};