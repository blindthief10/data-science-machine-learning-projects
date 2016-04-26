angular.module('weatherApp', ['ngRoute', 'ngResource'])

.service('cityForecast', function() {
	this.city = 'Athens';
})

.controller('homeController', ['$scope', 'cityForecast', '$http', '$location', function($scope, cityForecast, $http, $location) {
	$scope.city = cityForecast.city;
	$scope.$watch('city', function() {
		cityForecast.city = $scope.city;
	});
	$scope.submit = function() {
		$location.path('/forecast');
	}
}])

.controller('forecastController', ['$scope', '$http', 'cityForecast', function($scope, $http, cityForecast) {
	$scope.city = cityForecast.city;
	$http.get('http://api.openweathermap.org/data/2.5/forecast/daily', {params:{q: $scope.city, cnt: 7, appid: '16d4785f9c10724266053adb3c29dcfd'}})
	.success(function(response) {
		$scope.weatherData = response;
	});
	$scope.convertCelsius = function(degree) {
		return Math.round(degree-273);
	};
	$scope.returnDate = function(date) {
		return new Date(date*1000);
	};

	$scope.calculate = function(temp) {
		return temp;
	}
}])

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