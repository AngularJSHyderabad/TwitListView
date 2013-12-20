app.directive('twitMessageDirective', function(){
	return{
		restrict: 'A',
		templateUrl:'/app/partials/twitMessage.html',
		scope:{
			twitMessage:'='
		},
		link: function(scope, element, attr){
			console.log(scope.twitMessage.createUser.profilePictureUrl);
		}
	};
});