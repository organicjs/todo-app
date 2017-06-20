# todo-app
A sample todo app using OrganicJS

### Install
- git clone https://github.com/organicjs/todo-app.git
- npm install

### Username/Password
- username: alibaba
- password: 40Chor

Note that the username/password is hard coded in AuthController.js file.

### Implemented routes:

- 'get /': 'AuthController.login',
- 'post /': 'AuthController.login',
- 'get /logout': 'AuthController.logout',
- 'get /tasks/home': 'TasksController.home',
- 'get /tasks': 'TasksController.all',
- 'get /tasks/:taskID': 'TasksController.one',
- 'post /tasks': 'TasksController.add',
- 'put /tasks/:taskID': 'TasksController.update',
- 'delete /tasks/:taskID': 'TasksController.remove',
- 'post /tasks/clear': 'TasksController.clear',
- 'patch /tasks/:taskID': 'TasksController.update',

### @todo
Prepare docs for the tutorial and implement test cases for controllers and routes. Also many of the controller methods are still empty stubs. We are on the way!! 
