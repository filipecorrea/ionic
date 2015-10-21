app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('app.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'app/chats/chats.html',
        controller: 'chats'
      }
    }
  })

  .state('app.chat', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'app/chats/chat.html',
        controller: 'chat'
      }
    }
  });

});
