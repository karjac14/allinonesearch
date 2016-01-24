

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

            var results = this;
            // results.etsyResult = {};
            // results.ebayResult = {};

            //get etsy api
            $http.get(ETSY_OFF)
              .then(function (response){
                results.etsyResult = response.data.results;
                console.log(results.etsyResult.length);

              },
              function(){
                console.log("error from etsy");
              }
            );

            //get ebay api
            $http.get(EBAY_OFF)
              .then(function (response){
                results.ebayResult = response.data.findItemsByKeywordsResponse[0].searchResult[0].item;
                console.log(results.ebayResult.length);

              },
              function(){
                console.log("error from ebay");
              }
            );

            //new object
            results.combinedResult = {};

            //load new object after sucess get on ebay and etsy
            results.load = function (){
              results.combinedResult.countsCombined = results.etsyResult.length + results.ebayResult.length;
              console.log(results.combinedResult.countsCombined);
            }













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
