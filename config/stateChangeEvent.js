angular.module('angularApp')
.run(['$rootScope', '$state', '$localStorage', function($rootScope, $state, $localStorage){ 
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) { 
        if(toState.name == 'login') { 
            $state.go('mainpage');
        }
        if(toState.name == 'mainpage' || toState.name == 'mainpage.heroeslist' || toState.name == 'mainpage.dashboard'){
            $state.go('login');
        }
        if(toState.name == 'mainpage.herodetail'){
            $state.go('mainpage.heroeslist')
        }
    }); 
}]);