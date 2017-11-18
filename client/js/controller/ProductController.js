app.controller('ProductController',['$scope','utils', 'dataFactory','$route', function($scope, utils, dataFactory, $route) {
	// check login
	utils.isLoggedIn();
	$scope.session = utils.getSession();
	$scope.houseId = $scope.session.house.id;
	$scope.message = false;
	$scope.add = function(obj) {
		obj.houseId = $scope.houseId;
		dataFactory.insertProduct(obj)
		.then(function(response){
			$scope.message=true;
		});
	}

	dataFactory.getProducts($scope.houseId)
	.then(function(response){
		if(response.data.length > 0) {
			$scope.products = response.data;
		} else {
			$scope.products = [];
		}
	})


	$scope.delete = function(obj) {
		dataFactory.deleteProduct($scope.houseId, obj.id)
		.then(function(response) {
			$route.reload();
		})
	}

	$scope.complete = function() {
		$route.reload();
	}
}]);
