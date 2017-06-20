/**
 * Module dependencies.
 */
var mongo = require('mongoskin');

/**
 * Holds the database connection instance.
 */
var db = mongo.db('mongodb://localhost:27017/todo');

/**
 * Let us bind the 'tasks' collection for ease of use.
 */
db.bind('tasks');

/**
 * Export the database connection instance.
 */
module.exports = db;