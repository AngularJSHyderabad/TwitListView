var validateRouteChange = {
    data: function($q, $rootScope){
        var deferrer = $q.defer();
        $rootScope.$on('loginAttempt', function(event,data){
            if(data.userId === 'sample' && data.password === 'sample'){
                deferrer.resolve('success');
            }
            else{
                deferrer.reject('fail');
            }
        });
        return deferrer.promise;
    }
};

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
        resolve:validateRouteChange
    })
    .otherwise({
        redirectTo: '/'
    });
});


var app = angular.module("twitListView", ['routeManager'])
.run(function(){
    console.log('test');
});

