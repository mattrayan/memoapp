angular.module('discovery', [])
.controller('discoveryCtrl', ['$scope', 'spotifyAPI', function($scope, spotifyAPI) {

    this.query = {};

    this.search = function() {
        spotifyAPI.getArtists(this.query.request).then(function(data) {
            console.log(data);
        });
    };

}]);