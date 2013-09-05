var db = require('../database').db;

/* Get Main Pages
 * ================================== */

exports.home = function(req, res){
	res.render('home');
};

exports.admin = function(req, res){
	res.render('admin');
};