module.exports = function(router) {
	
    /**
	 * Prohibit direct access to tasks.
	 */
	router.use('/tasks*', function(req, res, next) {
        if(!req.session.auth) {
            return res.redirect('/');
        }
        
        next();
    });
	
};