angular.module('spotifyActions', ['flux'])
.factory('actions', ['spotifyAPI', 'flux', function(spotifyAPI, flux) {
    return {
        getArtists: function(query) {
            spotifyAPI.getData(query, 'artist').then(function(data) {
                flux.dispatch('setArtists', data);
            });
        },

        getAlbums: function(query) {
            spotifyAPI.getData(query, 'album').then(function(data) {
                flux.dispatch('setAlbums', data);
            });
        },

        getTracks: function(query) {
            spotifyAPI.getData(query, 'track').then(function(data) {
                var tracks = data;

                // Get album art for tracks
                spotifyAPI.getAlbums(tracks).then(function(data) {
                    for (var i = 0; i < tracks.length; i++) {
                        tracks[i].images = data[i].data.album.images;
                    }

                    flux.dispatch('setTracks', tracks);
                });
            });
        }
    };
}]);
