const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SchoolsController = require('./controllers/SchoolsController')
module.exports = (app) => {
  app.post('/register',
  AuthenticationControllerPolicy.register,
  AuthenticationController.register)

  app.post('/login',
  AuthenticationController.login)

  app.get('/schools',
  SchoolsController.index)  
  app.post('/schools',
  SchoolsController.post)
}