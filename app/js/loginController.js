app.controller('loginController', ['$scope','$location', function(scope, location){
	scope.onGoClick = function(){
		location.path('/twitList');
	};
}]);