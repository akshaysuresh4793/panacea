app.controller('CalendarController',['$scope', 'utils', 'dataFactory','$route', 'uiCalendarConfig', function($scope, utils, dataFactory, $route, uiCalendarConfig) {
	$scope.foo = "calendar route";
	// check login
	utils.isLoggedIn();

	$scope.init = function() {
		console.log("init...");
		$scope.calendar = calendar.fullCalendar(options);
	};

	var date = new Date();
 	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();

	/*$scope.eventSources = [{
	"events": [{
			"id": "562e65c5fb0cc1110a6ea143",

			"title": "Test event 2",
			"start": "2017-11-21T15:00:00.000Z",
			"description": "Second event for testing the system",
			"allDay": false
		},
		{
			"id": "562e65c5fb0cc1110a6ea144",
			"title": "Test event 3",
			"start": "2015-11-01T09:00:00.000Z",
			"end": "2015-11-08T12:00:00.000Z",
			"description": "Third event for testing the system",
			"allDay": false
		},
		{
			"id": "562e65c5fb0cc1110a6ea142",
			"title": "Test event 1",
			"start": "2016-01-01T09:00:00.000Z",
			"end": "2016-01-01T12:00:00.000Z",
			"description": "First event for testing the system",
			"allDay": false
		}
	]
}];*/
	// $scope.eventSources = [{"events":[{"id":"1", "title": "foo", "start": "2017-11-21T15:00:00.000Z"}]}];
	var events = [];
	dataFactory.getProducts($scope.houseId)
	 .then(function(response){
         if(response.data.length > 0) {
                $scope.products = response.data;
        	angular.forEach($scope.products, function(val, key) {
			events.push({id:val.id,title:val.name,start:val.expiry,allDay:true});
		});
		
		uiCalendarConfig.calendars["myCalendar"].fullCalendar('addEventSource',events);
	} else {
                 $scope.products = [];
         }
	 })
}]);
