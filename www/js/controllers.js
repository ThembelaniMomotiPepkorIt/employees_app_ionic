angular.module('starter.controllers', ['ionic', 'starter.services'])

.controller('AppCtrl', function(empService){
	console.log('AppCtrl');
})

.controller('DashCtrl', function($scope){
	console.log('DashCtrl');
})

.controller('EmpsCtrl', function($scope, empService, $stateParams){
	console.log('EmpCtrl');
	var employees = {};
	
	empService.getEmps()
		.then(function(data){
				employees = data;
				
				$scope.employees = employees;
			},function(error){
				console.log(error.status+' '+ error.statusText);
				throw error;
			});	

	
})

.controller('ProfileCtrl', function($scope, empService, $stateParams){
	console.log('ProfileCtrl');
	var profile = {};
	var shortname = $stateParams.empShortname;

	console.log(shortname);
	
	empService.getEmp(shortname)
		.then(function(data){
				profile = data;
				
				$scope.profile = profile;	
				console.log(profile);
			},function(error){
				console.log(error.status+' '+ error.statusText);
				throw error;
			});	

	
})
