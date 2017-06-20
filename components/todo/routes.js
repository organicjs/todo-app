module.exports = {
    
    /**
     * TasksController
     *
     * Routes inspired by Google Tasks API.
     */
    'get /': 'AuthController.login',
    'post /': 'AuthController.login',
    'get /logout': 'AuthController.logout',
    'get /tasks/home': 'TasksController.home',
    'get /tasks': 'TasksController.all',
    'get /tasks/:taskID': 'TasksController.one',
    'post /tasks': 'TasksController.add',
    'put /tasks/:taskID': 'TasksController.update',
    'delete /tasks/:taskID': 'TasksController.remove',
    'post /tasks/clear': 'TasksController.clear',
    'patch /tasks/:taskID': 'TasksController.update',
    	
};


/**
 * @todo Think for chainable route handlers like app.route().
 *
 * get|post|put /foo, Foo.action
 */

/**
 * Notes: HTTP Response Codes 200s -> Success, 300s -> Redirects, 400s -> Client Errors, 500s -> Server Issues.
 *
 * Also see: http://docs.telerik.com/platform/backend-services/javascript/apireference/RESTfulAPI/error_codes.html
 *
 * 200 OK: Request successfull, but response includes some content.
 * 202 Accepted: Request accepted, but not committed yet.
 * 204 No Content: Request committed, but response includes no content.
 * 205 Reset Content: Request committed, no response content, client should refresh/reset view.
 *
 * 301 Moved Permanently:
 * 302 Found:
 * 304 Not Modified: Request cached.
 * 307 Temporary Redirect: Temporary redirections.
 * 308 Permanent Redirect: Permanent redirections.
 *
 * 400 Bad Request: Request syntax malformed, query stribg misformatted, the server cannot or will not process the request due to something that is perceived to be a client error.
 * 401 Unauthorized: Request not authorized.
 * 402 Payment Required: Please pay first.
 * 403 Forbidden: Authentication failure, invalid app key/id.
 * 404 Not Found: Resource does not exist.
 * 405 Method Not Allowed: Request method not allowed.
 * 409 Conflict: CRUD duplications.
 * 412 Precondition Failed: Missing request data, such as when uploading, 
 *
 * 500 Internal Server Error: Mismatched server configuration.
 * 503 Service Unavailable: Server is down.
 */