angular.module('starter.routes', ['ionic'])

.config(function($stateProvider, $urlRouterProvider){

	/*$urlRouterProvider.otherwise(function($injector, $location){
		var $state = $injector.get($state);

		$state.go('main.emps');
	});*/

	$urlRouterProvider.otherwise('main/dash');

	$stateProvider
		
		.state('main', {
			url : '/',
			templateUrl : 'templates/main.html',
			abstract : true,
		})
		.state('main.dash',{
			url : 'main/dash',
			views : {
				'dash-tab' : {
					templateUrl : 'templates/dashboard.html',
					controller : 'DashCtrl'
				}
			}
			
		})
		.state('main.emps', {
			url: 'main/emps', 
			views : {
				'dash-tab' : {
					templateUrl : 'templates/employees.html',
					controller : 'EmpCtrl'
				}
			}
			
		});


});