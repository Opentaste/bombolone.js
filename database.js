/* Database
 * ================================== */
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;
var db = undefined;

exports.db = new Db('node_app', new Server('127.0.0.1', '27017', { safe: true }, { auto_reconnect: true }), { safe: true });