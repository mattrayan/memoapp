angular.module('gridDirective', [])
.directive('grid', function() {
    return {
        restrict: 'E',
        templateUrl: './components/grid/grid.html',
        scope: {
            title: '@',
            items: '='
        },
        controllerAs: 'vm',
        controller: ['$scope', function($scope) {
            console.log($scope.items);
            this.title = $scope.title;
            this.items = $scope.items;
        }]
    };
});
