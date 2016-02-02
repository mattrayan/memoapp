angular.module('spotifyService', [])
.factory('spotifyAPI', ['$http', '$q', function($http, $q) {
    // Spotify Web API endpoint: https://developer.spotify.com/web-api/endpoint-reference/

    var config = {
        headers: {
            'X-Mashape-Key': 'HxFuT1PGc1msh9eSKHg2vzJhATGDp1sRXxmjsnZ5LqALBcafTd',
			'Accept': 'text/plain'
        }
    }

    return {
        getArtists: function(query) {
            var self = this;
            var deferred = $q.defer();

            $http.get('https://api.spotify.com/v1/search?q=' + query + '&type=artist').then(success, error);

            function success(response) {
                deferred.resolve(response.data.artists.items);
            }

            function error(response) {
                console.log(response);
                deferred.reject(response);
            }

            return deferred.promise;
        }

    };
}]);
