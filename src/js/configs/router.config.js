angular
.module('MarketApp')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'vm'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'vm'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'vm'
  })
  .state('usersEdit', {
    url: '/users/:id/edit',
    templateUrl: '/js/views/users/edit.html',
    controller: 'UsersEditCtrl',
    controllerAs: 'vm'
  })
  .state('tasksIndex', {
    url: '/tasks',
    templateUrl: '/js/views/tasks/index.html',
    controller: 'TasksIndexCtrl',
    controllerAs: 'vm'
  })
  .state('tasksNew', {
    url: '/tasks/new',
    templateUrl: '/js/views/tasks/new.html',
    controller: 'TasksNewCtrl',
    controllerAs: 'vm'
  })
  .state('tasksEdit', {
    url: '/tasks/:id/edit',
    templateUrl: '/js/views/tasks/edit.html',
    controller: 'TasksEditCtrl',
    controllerAs: 'vm'
  })
  .state('tasksShow', {
    url: '/tasks/:id',
    templateUrl: '/js/views/tasks/show.html',
    controller: 'TasksShowCtrl',
    controllerAs: 'vm'
  })
  .state('tasksDelete', {
    url: '/tasks/:id',
    templateUrl: '/js/views/tasks/show.html',
    controller: 'TasksDeleteCtrl',
    controllerAs: 'vm'
  })
;

  $urlRouterProvider.otherwise('/');
}
