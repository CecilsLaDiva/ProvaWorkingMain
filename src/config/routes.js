
/* eslint-disable linebreak-style */
/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const UsuarioController = require("../api/controllers/UsuarioController");

module.exports.routes = {
  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

 '/': { view: 'pages/testroutes', locals: { layout: true } },
  '/profile': { view: 'pages/profile', locals: { layout: true } },
  '/login': { view: 'pages/login', locals: { layout: false } },
  '/signup': { view: 'pages/signup', locals: { layout: false } },
  '/homepage': { view: 'pages/homepage', locals: {layout: true}},
  '/evaluation': {view: 'pages/evaluation', locals: {layout: true} },
  '/conformist': { view: 'pages/conformist', locals: {layout: true}},
  '/harmonizer': { view: 'pages/harmonizer', locals: {layout: true} },
  '/director': {view: 'pages/director', local: {layout: true}},
  '/initiator': { view: 'pages/initiator', local: {layout: true}},
  '/analyst': { view: 'pages/analyst', local: {layout: true}},
  '/analytical': { view: 'pages/analytical', local: {layout: true}},
  '/behavioral': { view: 'pages/behavioral', local: {layout: true}},
  '/conceptual': { view: 'pages/conceptual', local: {layout: true}},
  '/directive': { view: 'pages/directive', local: {layout: true}},
  '/decisionForm': { view: 'pages/decisionForm', local: {layout: true}},
  
  
  'GET /homepage': 'HomepageController.overview',
  'GET /signup': 'UsuarioController.showUserForm',
  'POST /signup': 'UsuarioController.create',
  'GET /user/:id': 'UsuarioController.read',
  'POST /login': 'AuthController.login',
  'GET /logout': 'UsuarioController.logout',
  'POST /evaluation': 'ColabController.answer',
  'GET /profile': 'ProfileController.showProfile',
  'POST /profile/update-happiness': 'ProfileController.updateHappiness',
  'POST /decisionForm': 'DecisionMakingController.answer',
  
  //test routes
  'POST /api/v1/user/upload': 'UsuarioController.upload',
  'POST /user/create': 'UsuarioController.create',
  'GET /user/signup': 'UsuarioController.showUserForm',
  'GET /profile': 'ProfileController.showProfile',
  'POST /profile/update-happiness': 'ProfileController.updateHappiness',

  'GET /admin': 'AdminController.showAdminPage',
  'POST /admin/assign-user': 'AdminController.assignUserToTeam',
  'POST /admin/create-team': 'AdminController.createTeam',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  // task routes
  'POST /task': 'HomepageController.createTask',
  'GET /task': 'HomepageController.fetchTasks',
  'DELETE /task/:id': 'HomepageController.deleteTask',  // delete task route
  'PUT /task/:id': 'HomepageController.updateTask', // update task route
};
