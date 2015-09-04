angular.module('starter.routes', ['ionic'])

.config(function($stateProvider, $urlRouterProvider){

	/*$urlRouterProvider.otherwise(function($injector, $location){
		var $state = $injector.get($state);

		$state.go('main.emps');
	});*/

	$urlRouterProvider.otherwise('main/emps');

	$stateProvider
		
		.state('main', {
			url : '/',
			templateUrl : 'templates/main.html',
			abstract : true,
		})
		.state('main.dash',{
			url : 'main/dash',
			views : {
				'mainContent' : {
					templateUrl : 'templates/dashboard.html',
					controller : 'DashCtrl'
				}
			}
			
		})
		.state('main.emps', {
			url: 'main/emps', 
			views : {
				'mainContent' : {
					templateUrl : 'templates/employees.html',
					controller : 'EmpsCtrl'
				}
			}
			
		})
		.state('main.profile', {
			url: 'main/profile/:empShortname', 
			views : {
				'mainContent' : {
					templateUrl : 'templates/profile.html',
					controller : 'ProfileCtrl'

				}
			}
		})
		;


});