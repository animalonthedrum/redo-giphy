myApp.service('GifService', function($http) {
  var sv = this;


  sv.returnGif = function() {
    console.log('You can call them the same???!!!');
    var randomURL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=';
    return $http.get(randomURL).then(function(response) {
      console.log('response from giphy', response);
      sv.dataWeWant = response.data.data;
    }); //end .get function

  }; // end randomGif function

  sv.searchGif = function(searchTerm) {
    console.log('entered searchGif funtion on sevice');
    var searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=dc6zaTOxFJmzC';
    return $http.get(searchURL).then(function(response) {
      console.log('resonse from giphy', response);
      sv.searchData = response.data.data;
    });
  }; // end searchGif
}); // end myApp
