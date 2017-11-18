app.controller('LoginController',['$scope', '$location', 'dataFactory', function($scope, $location, dataFactory) {
	$scope.message=false;
	$scope.login = function(obj) {
		console.log(obj);
		person = {};
		dataFactory.login(obj)
		.then(function(response) {
			person = response.data;
			dataFactory.getPerson(person.userId)
			.then(function(response) {
				dataFactory.getHouse(response.data.houseId)
				.then(function(response) {
					person.house = response.data;
					localStorage.setItem("session", JSON.stringify(person));
					console.log(localStorage.getItem("session"));
					$location.path("/");
				})	
			})
		}, function(error) {
			$scope.message=true;
		});
		
	}
}]);
