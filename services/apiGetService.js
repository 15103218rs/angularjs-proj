angular.module('angularApp')
.service('getapihit', function($http){
    this.getrequest=function(apiaddress){
        return $http.get(apiaddress);
    }
});