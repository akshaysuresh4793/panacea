app.controller('ProductController',['$scope','utils', function($scope, utils) {
	$scope.foo = "product route";
	// check login
	utils.isLoggedIn();
}]);
