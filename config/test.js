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
 * Export configurations.
 */
module.exports = {
	/**
	 * Split your application into individual components/modules for ease of
	 * maintainability. For example, if you decide to split your new blog engine
	 * into three components: api, frontend, and backend, you need to tell the
	 * framework about your route prefixes and their corresponding component.
	 *
	 * @example:
	 *
	 * '/': 'frontend',
	 * '/admin': 'backend,
	 * '/api/v1: 'api/v1',
	 * '/api/v2': 'api/v2'
	 *
	 * The format must be: 'urlPrefix': 'componentDirectory'
	 */
	components: { 
		
	},
	express: {
		'view engine': 'ejs', 
		'extension': 'html', // change it to ejs if delimeter required
		'view cache': false
	}
};