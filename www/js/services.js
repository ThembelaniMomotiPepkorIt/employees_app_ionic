angular.module('starter.services', ['ionic'])

.factory('empService', function($http, $q){

	var urlBase = 'http://localhost:8080/employeedemo/webapi'
	var emps = {};
	var empShortname = ''

	return {
		getEmps : function(){
			var deferred = $q.defer();
			$http.get(urlBase+'/employees')
				.then(function(response){
							deferred.resolve(response.data);
					},function(error){
							deferred.reject(error);
			});
			return deferred.promise; 
			
		},

		getEmp : function(shortname){
			var deferred = $q.defer();
			$http.get(urlBase+'/employees/'+shortname)
				.then(function(response){
							deferred.resolve(response.data);
					},function(error){
							deferred.reject(error);
			});
			return deferred.promise; 
		}
	}
});