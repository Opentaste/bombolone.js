/* Module dependencies
 * ================================== */
var express = require('express'),
	routes = require('./routes'),
  api = require('./routes/api'),
  consolidate = require('consolidate'),
  swig = require('swig'),
  http = require('http'),
  path = require('path');


var app = module.exports = express();


/* Configuration
 * ================================== */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('.html', consolidate.swig);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
   app.use(express.errorHandler());
};

// production only
if (app.get('env') === 'production') {
  // TODO
}; 

/* Routes
 * ================================== */
app.get('/', routes.index);


/* Routes Api
 * ================================== */
app.get('/api/content', api.content);


/* Routes Others
 * ================================== */
app.get('*', routes.index);


/* Start Server
 * ================================== */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});