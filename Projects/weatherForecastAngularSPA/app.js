angular.module('weatherApp', ['ngRoute', 'ngResource'])

.service('cityForecast', function() {
	// default city is Athens
	this.city = 'Athens';
})

.controller('homeController', ['$scope', 'cityForecast', '$http', '$location', function($scope, cityForecast, $http, $location) {
	// parsing city from the service and assigning to the scope.
	$scope.city = cityForecast.city;

	// Watching the varialbe city for changes and automatically update it back to the service.
	$scope.$watch('city', function() {
		cityForecast.city = $scope.city;
	});

	// function that is executed when the form is submitted and we change location of the application to the forecast.html
	$scope.submit = function() {
		$location.path('/forecast');
	}
}])

.controller('forecastController', ['$scope', '$http', 'cityForecast', function($scope, $http, cityForecast) {
	$scope.city = cityForecast.city;

	// get request to the OpenWeather API passing three parameters; The city, days of projection, and the API key

	$http.get('http://api.openweathermap.org/data/2.5/forecast/daily', {params:{q: $scope.city, cnt: 7, appid: '16d4785f9c10724266053adb3c29dcfd'}})
	.success(function(response) {
		$scope.weatherData = response;
	});

	// conversion function from Kelvin to Celsius degrees
	$scope.convertCelsius = function(degree) {
		return Math.round(degree-273);
	};

	// Display date properly and humanly readable

	$scope.returnDate = function(date) {
		return new Date(date*1000);
	};

	// execute and return temperature
	$scope.calculate = function(temp) {
		return temp;
	}
}])


// simple and basic routing
.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeController'
		}).when('/forecast', {
			templateUrl: 'templates/forecast.html',
			controller: 'forecastController'
		}).otherwise({
			redirectTo: '/'
		});
});
