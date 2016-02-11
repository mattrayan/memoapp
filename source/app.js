angular.module('musicdb', ['ui.router', 'flux', 'angularSoundManager', 'ngMaterial', 'discovery', 'gridDirective', 'spotifyService', 'spotifyActions', 'spotifyStore', 'lodash'])

.controller('musicdbCtrl', ['$scope', '$location', function($scope, $location) {
    // Controller code
}])

.config(function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('/');

   $stateProvider
    .state('discovery', {
        url: '/',
        templateUrl: './states/discovery/discovery.html',
        controller: 'discoveryCtrl',
        controllerAs: 'vm'
    });

});