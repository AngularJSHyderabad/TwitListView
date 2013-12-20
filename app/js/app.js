angular.module('routeManager', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: '/app/partials/login.html',
        controller: 'loginController'
    })
    .when('/twitList', {
        templateUrl: '/app/partials/twitListView.html',
        controller: 'twitListController', //TODO: WHen I make this a component, make it the new controller.
        //resolve:false
    })
    .otherwise({
        redirectTo: '/'
    });
});


var app = angular.module("twitListView", ['routeManager'])
.run(function(){
    console.log('test');
});

