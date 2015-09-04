angular.module('starter.services', ['ionic'])

.factory('empService', function($http, $q){

	var deferred = $q.defer();
	var urlBase = 'http://localhost:8080/employeedemo/webapi'
	var emps = {};

	return {
		getEmps : function(){
			$http.get(urlBase+'/employees')
				.then(function(response){
							deferred.resolve(response.data);
					},function(error){
							deferred.reject(error);
			});
			return deferred.promise; 
			
		},

		getEmp : function(shortname){
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