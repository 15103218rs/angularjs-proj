angular.module('angularApp', ['ui.router', 'ngStorage'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('login', {
        url: '/',
        templateUrl:'views/loginForm.html',
        controller:'loginCtrl',
        resolve: {
            routingresolve: function($q, $localStorage){
                var deferred = $q.defer();
                if(typeof $localStorage.role === "undefined"){
                    deferred.resolve();
                }
                else{
                    deferred.reject();
                }
                return deferred.promise;
            }
        }
    })
    .state('mainpage', {
        url: '/mainpage',
        templateUrl:'views/mainPage.html',
        controller:'mainPageCtrl',
        resolve: {
            routingresolve: function($q, $localStorage){
                var deferred = $q.defer();
                if(typeof $localStorage.role !== "undefined"){
                    deferred.resolve();
                }
                else{
                    deferred.reject();
                }
                return deferred.promise;
            }
        }
    })
    .state('mainpage.dashboard', {
        url: '/dashboard',
        templateUrl:'views/dashboard.html',
        controller:'dashboardCtrl',
        resolve: {
            routingresolve: function($q, $localStorage){
                var deferred = $q.defer();
                if(typeof $localStorage.role !== "undefined" && $localStorage.role == 'admin'){
                    deferred.resolve();
                }
                else{
                    deferred.reject();
                }
                return deferred.promise;
            }
        }
    })
    .state('mainpage.heroeslist',{
        url: '/heroeslist',
        templateUrl:'views/heroesList.html',
        controller:'heroesListCtrl',
        resolve: {
            routingresolve: function($q, $localStorage){
                var deferred = $q.defer();
                if(typeof $localStorage.role !== "undefined"){
                    deferred.resolve();
                }
                else{
                    deferred.reject();
                }
                return deferred.promise;
            }
        }
    })
    .state('mainpage.herodetail', {
        url: '/herodetail/:userid/:username/:parent',
        templateUrl:'views/heroDetail.html',
        controller:'heroDetailCtrl',
        resolve: {
            routingresolve: function($q, $localStorage){
                var deferred = $q.defer();
                if($localStorage.role === "admin"){
                    deferred.resolve();
                }
                else{
                    deferred.reject();
                }
                return deferred.promise;
            }
        }
    });
    $urlRouterProvider.otherwise('/');
});