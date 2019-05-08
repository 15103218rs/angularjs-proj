angular.module('angularApp')
.controller('heroDetailCtrl', ['$scope', '$state', '$rootScope', '$stateParams', 'postapihit', function($scope, $state, $rootScope, $stateParams, postapihit){
    $rootScope.heroesActive="";
    $rootScope.dashboardActive="";
    $scope.id=$stateParams.userid;
    $scope.name=$stateParams.username;
    var parentpage=$stateParams.parent;
    $scope.goback=function(){
        if(parentpage=='d')
        $state.go('mainpage.dashboard');
        else
        $state.go('mainpage.heroeslist')

    }
    $scope.submitdetails=function(isvalid){
        if(isvalid){
            var apipromise=postapihit.postrequest($scope.name, $scope.userjob);
            apipromise.then(function successCallback(response){
                $state.go('mainpage.dashboard');
            });
            
        }
    }

}]);