var crypto = require('crypto');

var salt = crypto.randomBytes(16).toString('hex');

var storedCredentials = {
    username: 'alibaba',
    salt: salt,
    hash: crypto.pbkdf2Sync('40Chor', salt, 10000, 512, 'sha512').toString('hex')
};

function authenticate(username, password) {
    if (username !== storedCredentials.username) {
        return false;
    }
    
    var hash = crypto.pbkdf2Sync(password, storedCredentials.salt, 10000, 512, 'sha512').toString('hex');
    
    if (hash !== storedCredentials.hash) {
        return false;
    }
    
    return true;
}

module.exports.login = function(req, res) {
    if (req.session.auth) {
        return res.redirect('/tasks/home');
    }
    
    if ('post' === req.method.toLowerCase()) {
        if (!req.body || !req.body.username || !req.body.password) {
            return res.render('login', {message: 'Sorry, please provide login details.'});
        }
        
        if (authenticate(req.body.username, req.body.password)) {
            req.session.auth = {username: req.body.username};
            return res.redirect('/tasks/home');
        } else {
            return res.render('login', {message: 'Sorry, but who are you?'});
        }
    }

    return res.render('login', {message: null});
};

module.exports.logout = function(req, res) {
    req.session.auth = null;
    res.redirect('/');
};