

//IIFE for Angular Module
;(function(){

  angular.module('allSearch', ['ngRoute'],
    function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'partials/landing.html',
          controller: function ($location, $rootScope){
            //some codes here
          },
          controllerAs: 'landing'
        })
        .when('/result', {
          templateUrl: 'partials/results.html',
          controller: function ($location, $rootScope){
            //some codes here
          },
          controllerAs: 'results'
        })
        .when('/item', {
          templateUrl: 'partials/item.html',
          controller: function ($location, $rootScope){
            //some codes here milestone 2
          },
          controllerAs: 'item'
        })
    })

//IIFE for Angular Module ends
})();
