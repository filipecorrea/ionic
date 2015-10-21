app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('app.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'app/settings/settings.html',
        controller: 'settings'
      }
    }
  });

});
