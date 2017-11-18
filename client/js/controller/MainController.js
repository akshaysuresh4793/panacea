app.controller('MainController', ['$scope','utils',function($scope, utils) {
	$scope.foo = "main route";
	// check login
	utils.isLoggedIn();
}]);
