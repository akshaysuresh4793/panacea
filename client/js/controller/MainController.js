app.controller('MainController', ['$scope','utils','dataFactory', function($scope, utils, dataFactory) {
	// check login
	utils.isLoggedIn();
	
	$scope.session = utils.getSession();

	$scope.address = $scope.session.house.address;
}]);
