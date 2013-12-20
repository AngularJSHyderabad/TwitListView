app.filter('formatDate', [function(){
	return function(dateValue, format){
		 var formattedDate = new Date(dateValue);
		 var month, year, date;

		 date = formattedDate.getDate();
		 month = formattedDate.getMonth() + 1; 
		 year = formattedDate.getFullYear();		 
		 
		 if(format === 'mmddyyyy'){
		 	return month + '/' + date + '/' + year;
		 }
		 else{
		 	return date + '/' + month + '/' + year;
		 }
	}
}]);