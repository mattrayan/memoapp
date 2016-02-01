angular.module('discovery', [])
.controller('discoveryCtrl', ['$scope', function($scope) {
    
    this.search = function() {
        console.log('Search');
    }
    
}]);