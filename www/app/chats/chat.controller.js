app.controller('chat', function($scope, $stateParams, chatsService) {
  $scope.chat = chatsService.get($stateParams.chatId);
});
