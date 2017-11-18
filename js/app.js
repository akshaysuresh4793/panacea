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
