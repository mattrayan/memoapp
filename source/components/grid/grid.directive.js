angular.module('gridDirective', [])
.directive('grid', function() {
    return {
        restrict: 'E',
        templateUrl: './components/grid/grid.html',
        scope: {
            title: '@',
            items: '='
        }
    };
});
