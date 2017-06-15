var myApp = angular.module('myApp', []);


myApp.controller('GifController', function(GifService) {
  console.log();
  var vm = this;

  vm.randomGif = function() {
    console.log('In randomGif');
    GifService.returnGif().then(function() {
      console.log('back in controller');
      vm.image = GifService.dataWeWant;
      console.log('we got the goods:', vm.image);

    }); //end returnGif
  }; // end randomGif

  vm.searchGif = function(searchTerm) {
    console.log('I\'m searching');
    GifService.searchGif(searchTerm).then(function(returnGifs) {
      console.log('back in controller');
      vm.search = GifService.searchData;
      console.log('vm.search', vm.search);
    }); //end get funciton
    searchVal = " ";
  }; //end searchGif

}); // end controller
