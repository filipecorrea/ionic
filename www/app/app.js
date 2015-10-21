var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    // Hide accessory bar above the keyboard for form inputs
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

});

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'app/template/tab.html'
  });

  // Fallback if no state is provided
  $urlRouterProvider.otherwise('/app/dashboard');

});
