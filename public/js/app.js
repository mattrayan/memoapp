angular.module('musicdb', ['ui.router', 'flux', 'angularSoundManager'])

.controller('musicdbCtrl', ['$scope', '$location', function($scope, $location) {
    // Controller code
}])

.config(function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('/');

   $stateProvider
    .state('discovery', {
        url: '/',
        templateUrl: './templates/home.html'
    });

});