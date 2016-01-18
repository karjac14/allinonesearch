

//IIFE for Angular Module
;(function(){

  angular.module('allSearch', ['ngRoute'],
    function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'landing.html',
          controller: function ($location, $rootScope){
            //some codes here
          },
          controllerAs: 'landing'
        })
        .when('/result', {
          templateUrl: 'results.html',
          controller: function ($location, $rootScope){
            //some codes here
          },
          controllerAs: 'results'
        })
        .when('/item', {
          templateUrl: 'details.html',
          controller: function ($location, $rootScope){
            //some codes here milestone 2
          },
          controllerAs: 'details'
        })
    })

//IIFE for Angular Module ends   
})();
