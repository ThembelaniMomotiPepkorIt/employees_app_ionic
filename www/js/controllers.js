angular.module('starter.controllers', ['ionic', 'starter.services'])

.controller('AppCtrl', function(){
	console.log('AppCtrl');
})

.controller('DashCtrl', function($scope){
	console.log('DashCtrl');
})

.controller('EmpsCtrl', function($scope, empService){
	console.log('EmpCtrl');
	var employees = {};
	
	empService.getEmps()
		.then(function(data){
				employees = data;
				console.log(employees);	
				$scope.employees = employees;
	}, function(error){
		console.log(error.status+' '+ error.statusText);
		throw error;
	});

	
})

.controller('ProfileCtrl', function($scope, empService){
	console.log('ProfileCtrl');
	var profile = {};
	
	empService.getEmp()
		.then(function(data){
				profile = data;
				console.log(profile);	
				$scope.profile = profile;
	}, function(error){
		console.log(error.status+' '+ error.statusText);
		throw error;
	});
})
