angular.module('starter.services', ['ionic'])

.factory('EmpService', function($http){
	var emps;

	return {
		getEmps : function(){
			return $http.get('http://localhost:8080/employeedemo/webapi/employees').then(function(data){
				emps = data;

				return emps;
			});

		}
	}
})