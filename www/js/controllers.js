angular.module('starter.controllers', ['ionic', 'starter.services'])

.controller('AppCtrl', function(){
	console.log('AppCtrl');
})

.controller('DashCtrl', function($scope){
	console.log('DashCtrl');
})

.controller('EmpCtrl', function($scope, EmpService){
	var employees;
	console.log('EmpCtrl');

	console.log(EmpService.getEmps());
	
	EmpService.getEmps().then(function(data){
		employees = data;
	});
	console.log(employees);
	
	})
