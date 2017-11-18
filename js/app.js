var app = angular.module('panacea', ["ngRoute"]);
app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "main.html",
		controller : "MainController"
	})
	.when("/login",{
		templateUrl : "login.html",
		controller : "LoginController"
	})
	.when("/calendar", {
		templateUrl : "calendar.html",
		controller : "CalendarController"
	})
	.when("/product", {
		templateUrl : "product.html",
		controller : "ProductController" 
	})
})

app.factory('dataFactory',['$http', function($http) {
	var hostName = 'localhost';
	var port = '3000';
	var protocol = 'http';
	var baseUrl = protocol + "://" + hostName + ":" + port;

	var dataFactory = {};

	// Products
	dataFactory.getProducts = function() {
		return $http.get(baseUrl + "/" + "Products");
	}

	dataFactory.getProduct = function(id) {
		return $http.get(baseUrl + "/" + "Products/" + id);
	}

	dataFactory.insertProduct = function(obj) {
		return $http.post(baseUrl + "/" + "Products", obj);
	}

	dataFactory.updateProduct = function(id, obj) {
		return $http.put(baseUrl + "/" + "Products/" + id, obj);
	}

	dataFactory.deleteProduct = function(id) {
		return $http.delete(baseUrl + "/" + "Products/" + id);
	}

	 // People
 	dataFactory.getPeople = function() {
        	return $http.get(baseUrl + "/" + "People"); 
	}

	dataFactory.getPerson = function(id) {
        	return $http.get(baseUrl + "/" + "People/" + id);
	}

	dataFactory.insertPerson = function(obj) {
        	return $http.post(baseUrl + "/" + "People", obj);
 	}

	dataFactory.updatePerson = function(id, obj) {
        	return $http.put(baseUrl + "/" + "People/" + id, obj);
	}

	dataFactory.deletePerson = function(id) {
        	return $http.delete(baseUrl + "/" + "People/" + id);
	}

	// Houses
	dataFactory.getHouses = function() {
        	return $http.get(baseUrl + "/" + "Houses");
	}

	dataFactory.getHouse = function(id) {
        	return $http.get(baseUrl + "/" + "Houses/" + id);
	}

	dataFactory.insertHouse = function(obj) {
        	return $http.post(baseUrl + "/" + "Houses", obj);
	}

	dataFactory.updateHouse = function(id, obj) {
        	return $http.put(baseUrl + "/" + "Houses/" + id, obj);
	}

	dataFactory.deleteHouse = function(id) {
        	return $http.delete(baseUrl + "/" + "Houses/" + id);
	}	
}]);
