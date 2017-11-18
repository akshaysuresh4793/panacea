app.controller('LogoutController', ['$scope','$location', 'utils',function($scope, $location, utils) {
	localStorage.removeItem("session");
	// check login
	utils.isLoggedIn();
}]);
