
window.APP = angular.module("itc-project", [
    'ui.router'
]);

window.APP.config(function($stateProvider, $locationProvider, $urlRouterProvider){

    $locationProvider.html5Mode(true)
    
    $stateProvider
    .state("login", {
        url: "/login",
        views: {
            "content@": {
                templateUrl: "views/login.html"
            }
        }
    })
    .state("signup", {
        url: "/signup"
    })
    .state('home', {
        url: "/",
        views: {
            header: {
                controller: "headerCtrl",
                templateUrl: "header.html"
            },
            content: {
                controller: "bodyCtrl",
                templateUrl: "body.html"
            },
            footer: {
                controller: "footCtrl",
                templateUrl: "footer.html"
            }
        },
        resolve: {
            isLogin: function($localStorage, $state) {
                // $state.go("")
                return $localStorage.user && $localStorage.name;
            }
        }
    });

    $urlRouterProvider.otherwise("/")

});

// angular.boot strap(document, ['itc-project']);