module.exports.routes = {
  '/': { view: 'pages/testroutes', locals: { layout: true } },
  '/profile': 'UsuarioController.showProfile',
  '/login': { view: 'pages/login', locals: { layout: false } },
  '/signup': 'UsuarioController.showUserForm',
  '/homepage': 'HomepageController.overview',
  '/evaluation': { view: 'pages/evaluation', locals: { layout: true } },
  '/conformist': { view: 'pages/conformist', locals: { layout: true } },
  '/harmonizer': { view: 'pages/harmonizer', locals: { layout: true } },
  '/director': { view: 'pages/director', locals: { layout: true } },
  '/initiator': { view: 'pages/initiator', locals: { layout: true } },
  '/analyst': { view: 'pages/analyst', locals: { layout: true } },
  '/analytical': { view: 'pages/analytical', locals: { layout: true } },
  '/behavioral': { view: 'pages/behavioral', locals: { layout: true } },
  '/conceptual': { view: 'pages/conceptual', locals: { layout: true } },
  '/directive': { view: 'pages/directive', locals: { layout: true } },
  '/decisionForm': { view: 'pages/decisionForm', locals: { layout: true } },

  'GET /signup': 'UsuarioController.showUserForm',
  'POST /signup': 'UsuarioController.create',
  'GET /user/:id': 'UsuarioController.read',
  'POST /login': 'AuthController.login',
  'GET /logout': 'UsuarioController.logout',
  'POST /evaluation': 'ColabController.answer',
  'POST /profile/update-happiness': 'ProfileController.updateHappiness',
  'POST /decisionForm': 'DecisionMakingController.answer',

  'POST /api/v1/user/upload': 'UsuarioController.upload',

  'GET /admin': 'AdminController.showAdminPage',
  'POST /admin/assign-user': 'AdminController.assignUserToTeam',
  'POST /admin/create-team': 'AdminController.createTeam',

  'POST /task': 'HomepageController.createTask',
  'GET /tasks': 'HomepageController.fetchTasks',
  'DELETE /task/:id': 'HomepageController.deleteTask',
  'PUT /task/:id': 'HomepageController.updateTask',
};
