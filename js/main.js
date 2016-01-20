

//IIFE for Angular Module
;(function(){

// api_key=h2pvd6aird6eyightaep43ep

  var ETSY_URL = "https://openapi.etsy.com/v2/listings/active?api_key=ni9kjewbs64vj56ctfx3183d&keywords=pomodoro";
  var EBAY_URL = "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=KarloEle-2fd0-4085-b251-a387abad622d&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=pomodoro%20timer"

  var ETSY_OFF = "api/etsy/pomodoro.json";
  var EBAY_OFF = "api/ebay/pomodoro.json";

  angular.module('allSearch', ['ngRoute'],
    function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'partials/landing.html',
          controller: function ($location, $rootScope){
            //some codes here
            $rootScope.ph = "Pomodoro";
            $rootScope.item = {};
          },
          controllerAs: 'landing'
        })
        .when('/result', {
          templateUrl: 'partials/results.html',
          controller: function ($location, $rootScope, $http, $scope){

            $http.get(ETSY_OFF)
              .then(function (response){
                $scope.etsyResult = response.data.results;
                console.log($scope.etsyResult);
              },
              function(){
                console.log("error from etsy");
              }
            )

            $http.get(EBAY_OFF)
              .then(function (response){
                $scope.ebayResult = response.data.findItemsByKeywordsResponse[0].searchResult[0].item;
                console.log($scope.ebayResult);
              },
              function(){
                console.log("error from etsy");
              }
            )


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
