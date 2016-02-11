angular.module('discovery', ['ngAnimate'])
.controller('discoveryCtrl', ['$scope', 'spotifyAPI', function($scope, spotifyAPI) {
    var self = this;

    this.query = {};
    this.artists = [];
    this.albums = [];
    this.tracks = [];
    this.welcome = true;

    this.search = function() {
        this.welcome = false;

        spotifyAPI.getData(this.query.request, 'artist').then(function(data) {
            self.artists = data;
        });

        spotifyAPI.getData(this.query.request, 'album').then(function(data) {
            self.albums = data;
        });

        spotifyAPI.getData(this.query.request, 'track').then(function(data) {
            self.tracks = data;

            // Get album art for tracks
            spotifyAPI.getAlbums(self.tracks).then(function(data) {
                for (var i = 0; i < self.tracks.length; i++) {
                    self.tracks[i].images = data[i].data.album.images;
                }
            });
        });
    };

}]);