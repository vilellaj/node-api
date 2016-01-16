var petFinder = angular.module('petFinder', ['ngRoute', 'PetsController']);

petFinder.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/pets', {
        templateUrl: '../views/finder.html',
        controller: 'PetsList'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/pets'
      });
  }]);