app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'tab-dashboard': {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'dashboard'
      }
    }
  });

});
