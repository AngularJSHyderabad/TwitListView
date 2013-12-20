app.controller('loginController', function($scope, $location, $rootScope){

	$scope.twitterHandle = "";
	$scope.password = "";

	$scope.onGoClick = function(){
		$rootScope.$broadcast('loginAttempt',{userId: $scope.twitterHandle, password: $scope.password});
		$location.path('/twitList');
	};
});