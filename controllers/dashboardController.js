angular.module('angularApp')
.controller('dashboardCtrl', ['$scope', '$state', '$rootScope', 'getapihit', function($scope, $state, $rootScope, getapihit){
    $rootScope.heroesActive="";
    $rootScope.dashboardActive="active";
    var apipromise=getapihit.getrequest('https://reqres.in/api/users?page=1');
    apipromise.then(function successCallback(response) {
        $scope.heroesdata=response.data.data;

        apipromise=getapihit.getrequest('https://reqres.in/api/users?page=2');
        apipromise.then(function successCallback(response){
            var heroes=response.data.data;
            $scope.heroesdata.push(heroes[0]);

        },function errorCallback(response){

        });

    },function errorCallback(response){

    });


}]);