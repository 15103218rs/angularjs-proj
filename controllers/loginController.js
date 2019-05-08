angular.module('angularApp')
.controller('loginCtrl', ['$scope', '$rootScope', '$state','$localStorage', function($scope, $rootScope, $state,$localStorage){
    $scope.message=false;
    $scope.login=function(isvalid){
        if(isvalid){
            if($scope.loginemail=='admin@jungleworks.com' && $scope.loginpassword=='123456'){
                $localStorage.role='admin';
                $state.go('mainpage');
            }
            else if($scope.loginemail=='user@jungleworks.com' && $scope.loginpassword=='123456'){
                $localStorage.role='user';
                $state.go('mainpage');
        
            }
            else{
                $scope.message=true;
            }
        }
    }
    $scope.removemessage=function(){
        $scope.message=false;
    }
    
}]);