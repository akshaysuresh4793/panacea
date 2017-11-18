var app = angular.module('panacea', ["ngRoute"]);
app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "main.html"
	})
	.when("/login",{
		templateUrl : "login.html"
	})
	.when("/calendar", {
		templateUrl : "calendar.html"
	})
	.when("/product", {
		templateUrl : "product.html"
	})
})
