module.exports = function(app) {
	
    var csrf = require('csurf');
	var session = require('express-session');
	var bodyParser = require('body-parser');
	var cookieParser = require('cookie-parser');
    var connectFlash = require('connect-flash');
    var methodOverride = require('method-override');
    
	/**
	 * Use body-parser.
	 */
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	
	/**
	 * Use method-override for spoofing form methods.
	 */
	app.use(methodOverride(function (req) {
		if (req.body && typeof req.body === 'object' && '_method' in req.body) {
			var method = req.body._method;
			delete req.body._method;
			return method;
		}
	}));
	
	/**
	 * Use cookie-parser.
	 */
	app.use(cookieParser('weird-cookie-secret'));
	
	/**
	 * Use express-session.
	 */
	app.use(session({
		secret: 'i-stole-your-cat',
		cookie: {maxAge: 3600000},
		resave: false,
		saveUninitialized: true
	}));
	
	/**
	 * Use connect-flash.
	 */
	app.use(connectFlash());
	
	/**
	 * Use csrf protection.
	 */
	app.use(csrf());
	
	/**
	 * Make the csrf token available as a response local. 
	 */
	app.use(function(req, res, next) {
		res.locals._csrf = req.csrfToken();
		next();
	});
	
};	