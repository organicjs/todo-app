/**
 * Module dependencies.
 */
var TasksModel = require('../models/TasksModel');

/**
 * Tasks home.
 */
module.exports.home = function(req, res) {
    res.render('welcome');    
};

/**
 * Returns all tasks.
 */
module.exports.all = function(req, res) {
    TasksModel.find(function(tasks) {
        res.render('tasks',
            {
                errorMessage: req.flash('errorMessage'),
                successMessage: req.flash('successMessage'),
                tasks: tasks
            }
        ); 
    });
};

/**
 * Returns the specified task.
 */
module.exports.one = function(req, res) {
    res.send('Coming soon...');    
};

/**
 * Creates a new task.
 */
module.exports.add = function(req, res) {
    if (!req.body || !req.body.title) {
        req.flash('errorMessage', 'Please provide a title.');
        res.redirect('/tasks');
        return;
    }
    
    TasksModel.insert(req.body, function() {
        res.redirect('/tasks');    
    });
};

/**
 * Updates/Patches the specified task.
 */
module.exports.update = function(req, res) {
    res.send('Coming soon...');    
};

/**
 * Deletes the specified task.
 */
module.exports.remove = function(req, res) {
    req.flash('successMessage', 'Deleted Task ID: ' + req.body.taskID);
    res.redirect('/tasks');
};

/**
 * Clears all completed tasks.
 */
module.exports.clear = function(req, res) {
    res.send('Coming soon...');    
};