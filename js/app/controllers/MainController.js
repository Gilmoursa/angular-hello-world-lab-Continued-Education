function MainController($scope) {
     $scope.name="Austin",
     $scope.email="austin@example.com",
     $scope.phone="(123) 456-7890"
}
angular
    .module('app')
    .controller('MainController', MainController);