/**
 * Module dependencies.
 */
var db = require(process.cwd() + '/services/db/mongo');

/**
 * Retrieves tasks.
 */
module.exports.find = function(callback) {
    
    db.tasks.find().toArray(function(err, tasks) {
        if (err) {
            throw err;    
        } 
        
        callback(tasks);
    });
    
};

/**
 * Inserts a task.
 */
module.exports.insert = function(data, callback) {
    
    var document = {title: data.title, completed: false};
    
    db.tasks.insert(document, function(err, result) {
        if (err) {
            throw err;    
        } 
    
        callback(result);
    });
    
};