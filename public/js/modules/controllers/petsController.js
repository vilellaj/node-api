var petsController = angular.module('PetsController', []);

petsController.controller('PetsList', ['$scope', '$http', 
    function ($scope, $http) {
     $http.get('/api/pets')
    .success(function(data) {
        $scope.pets = data;
        console.log(data);
    })
    .error(function(data) {
        console.log('Error: ' + data);
    });
}]);