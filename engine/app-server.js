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
	
	app.set('port', process.env.PORT || 3000);
	
	app.listen(app.get('port'), function () {
		console.log('Example app listening on port 3000!');
	});

};