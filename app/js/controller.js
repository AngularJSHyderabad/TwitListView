var ctrl = app.controller('twitListController', ['$scope', 'twitListModelService', function(scope, tlms){
	scope.twits = tlms.getAllModelObjects();
}]);
