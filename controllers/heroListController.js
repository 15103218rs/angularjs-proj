angular.module('angularApp')
.controller('heroesListCtrl', ['$scope', '$rootScope', '$localStorage', 'getapihit', '$state', function($scope, $rootScope, $localStorage, getapihit, $state){
    $rootScope.dashboardActive="";
    $rootScope.heroesActive="active";
    var showdom=false;
    var apipromise=getapihit.getrequest('https://reqres.in/api/users?page=1');
    apipromise.then(function successCallback(response) {
        $scope.heroesdata=response.data.data;

        apipromise=getapihit.getrequest('https://reqres.in/api/users?page=2');
        apipromise.then(function successCallback(response){
            var heroes=response.data.data;
            for(var i=0;i<heroes.length;i++){
                $scope.heroesdata.push(heroes[i]);
            }
            
            apipromise=getapihit.getrequest('https://reqres.in/api/users?page=3');
            apipromise.then(function successCallback(response){
                heroes=response.data.data;
                for(var i=0;i<heroes.length;i++){
                    $scope.heroesdata.push(heroes[i]);
                }

            },function errorCallback(response){

            });

        },function errorCallback(response){

        });

    },function errorCallback(response){

    });
    $scope.changeColorMenu=function(valid){
        this.customStyle = {};
        if(valid=='true'){
            if($localStorage.role == 'admin')
            this.customStyle.style = {"color":"green"};
            else if($localStorage.role == 'user')
            this.customStyle.style = {"color":"red"};
        }
        else
        this.customStyle.style = {"color":""};
        
    }
    $scope.getdetails=function(userdetails){
        $scope.id=userdetails.id;
        $scope.fullname=userdetails.first_name+" "+userdetails.last_name;
        showdom=true;
    }
    $scope.showdetails=function(){
        $state.go('mainpage.herodetail', {userid:$scope.id, username:$scope.fullname, parent:'h'});
    }
    $scope.showoptions=function(){
        return ($localStorage.role == 'admin') && showdom;
    }


}]);