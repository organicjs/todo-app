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
 * Module ependencies.
 */
var path = require('path');
var express = require('express');

/**
 * @var Holds route prefixes and their targets.
 */
var activeComponents = null;

/**
 * Export AppBinder.
 *
 * @public
 */
module.exports = function(app) {
	activeComponents = app.get('config').components;
	new AppBinder(app);
};

/**
 * Binds current app instance to routes and router level middlewares.
 *
 * Say if you are developing a blog engine with two components, client and admin.
 * Each of these to components will have their own routes.js and middlewares.js
 * files. Instead of manually requiring these files, the AppBinder object will require
 * them on you behalf, and bind with the Express instance.
 *
 * @param {app} The Express instance.
 * @private
 */
function AppBinder(app) {
	/**
	 * @property {app} The express instance. 
	 */
	this.app = app;
	
	/**
	 * @property {Object} Contains current route details.
	 */ 
	this.routeMeta = {};
	
	/**
	 * @property {String} Contains the name of current target component.
	 */
	this.activeComponent = '';
	
	/**
	 * Binds routes specified in the routes.js file per component.
	 */
	this.bindRoutes();
}

/**
 * It creates a router inside and mounts it (app.use) into your app instance.
 *
 * This method binds defined routes with the express.Router() instance, thereby
 * decoupling route handlers with the route definitions itself.
 */
AppBinder.prototype.bindRoutes = function() {
	var self = this;
	
	Object.keys(activeComponents).forEach(function(component) {
		self.activeComponent = activeComponents[component];
		self.app.use(component, self.getExpressRouter());
	});
};

/**
 * This method performs binding of routes and middlewares and returns the
 * express.Router instance.
 *
 * @returns {express.Router} The Express Router instance.
 */
AppBinder.prototype.getExpressRouter = function() {
	var self = this;
	var router = express.Router();
	var routes = require(path.join('../components', self.activeComponent, 'routes'));
	
	// bind rourter level middlewares.
	var middleware = require(path.join('../components', self.activeComponent, 'middlewares'));
	middleware(router);
	
	// bind routes per component.
	Object.keys(routes).forEach(function(routeTemplate) {
		self.setRouteMeta(routeTemplate, routes[routeTemplate]);
		
		var method = self.routeMeta.method;
		var path = self.routeMeta.path;
		var handler = self.routeMeta.handler;
		var action = self.routeMeta.action;

		router[method](path, handler[action]);
	});
	
	return router;
};

/**
 * It sets the routes meta-data for the current componentby delegating the task to
 * two other helpers.
 *
 @returns {void}
 */
AppBinder.prototype.setRouteMeta = function(routeTemplate, handlertemplate) {
	this.setRouteMethodAndPath(routeTemplate);
	this.setRouteHandlerAndAction(handlertemplate);	
};

/**
 * This helper determines the request method and url for current request.
 *
 * @returns {void}
 */
AppBinder.prototype.setRouteMethodAndPath = function(routeTemplate) {
	var parts = routeTemplate.split(' ');
	
	this.routeMeta.method = parts[0].toLowerCase();
	this.routeMeta.path = parts[1];
};

/**
 * This helper dertermines the assigned controller and action for the current route.
 *
 * @returns {void}
 */
AppBinder.prototype.setRouteHandlerAndAction = function(handlerTemplate) {
	var parts = handlerTemplate.split('.');

	this.routeMeta.handler = require(path.join('../components', this.activeComponent, 'controllers', parts[0]));
	this.routeMeta.action = parts[1];
};