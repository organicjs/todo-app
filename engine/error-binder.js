/**
 * OrganicJS - An extensible MVC framework for Node.js web development.
 *
 * @version 1.0.0
 * @author Pradeep T.
 *
 * Copyright(c) 2013 Pradeep T.
 * MIT Licensed
 */

'use strict';

/**
 * Export function.
 *
 * @param {app} The Express instance.
 * @public
 */

module.exports = function(app) {
	
	/**
	 * Set 404
	 */
	app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});
	   
	/**
	 * Set error handler.
	 */
	app.use(function(err, req, res) {
	  // set locals, only providing error in development
	  res.locals.message = err.message;
	  res.locals.error = req.app.get('env') === 'development' ? err : {};
	
	  // render the error page
	  res.status(err.status || 500);
	  res.send('404 Not Found');
	});
	
};