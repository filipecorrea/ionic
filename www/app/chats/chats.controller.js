app.controller('chats', function($scope, chatsService) {

  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = chatsService.all();

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
});
