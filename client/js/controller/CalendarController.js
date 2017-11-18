app.controller('CalendarController',['$scope', 'utils', function($scope, utils) {
	$scope.foo = "calendar route";
	// check login
	utils.isLoggedIn();
}]);
