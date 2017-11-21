var app = angular.module('panacea', ["ngRoute","ui.calendar","ui.bootstrap"]);
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
	.when("/products", {
		templateUrl: "product.html",
		controller: "ProductController"
	})
	.when("/product/new", {
		templateUrl : "new.html",
		controller : "ProductController" 
	})
	.when("/logout", {
		templateUrl : "login.html",
		controller : "LogoutController"
	})
})

app.factory('dataFactory',['$http', function($http) {
	var hostName = '172.17.0.2';
	var port = '3000';
	var protocol = 'http';
	var api = "api";
	var baseUrl = protocol + "://" + hostName + ":" + port + "/" + api;

	var dataFactory = {};

	// Products
	dataFactory.getProducts = function() {
		return $http.get(baseUrl + "/" + "Products");
	}

	dataFactory.getProduct = function(id) {
		return $http.get(baseUrl + "/Houses" + "/" + id + "/" + "products");
	}

	dataFactory.insertProduct = function(obj) {
		return $http.post(baseUrl + "/" + "Products", obj);
	}

	dataFactory.updateProduct = function(id, obj) {
		return $http.put(baseUrl + "/" + "Products/" + id, obj);
	}

	dataFactory.deleteProduct = function(id, fk) {
		return $http.delete(baseUrl + "/Houses" + "/" + id + "/" + "products/" + fk);
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

	dataFactory.login = function(obj) {
		return $http.post(baseUrl + "/" + "Users/login", JSON.stringify(obj));
	}

	return dataFactory;	
}]);

app.service('utils',[function() {
	utils = {}
	utils.isLoggedIn = function(obj) {
		if(localStorage.getItem("session") == null) {
			window.location.href = "#!/login";
		}
	}

	utils.getSession = function() {
		utils.isLoggedIn();
		return JSON.parse(localStorage.getItem("session"));	
	}	
	return utils;
}])
