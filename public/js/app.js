angular.module('musicdb', ['ngRoute', 'flux', 'angularSoundManager'])

.controller('musicdbCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.go = function(path) {
        $location.path(path);
    };
}])

.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './templates/home.html',
    });
});