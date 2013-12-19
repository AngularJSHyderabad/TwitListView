var app = angular.module("twitListView", ['ngRoute'])

//TODO: When I make this a component, move to example module.
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/app/partials/twitListView.html',
        controller: 'twitListController' //TODO: WHen I make this a component, make it the new controller.
    })
    .otherwise({
        redirectTo: '/'
    });
});

