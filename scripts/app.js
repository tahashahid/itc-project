
window.APP = angular.module("itc-project", [
    'ui.router',
    'ngStorage'
]);
//todo: remove this config block
window.APP.run(function($localStorage){
    $localStorage.user = {
        name: "test user",
        password: "123"
    }
});

window.APP.config(function($stateProvider, $locationProvider, $urlRouterProvider){

    $locationProvider.html5Mode(true)
    
    $stateProvider
    .state("login", {
        url: "/login",
        views: {
            "content": {
                templateUrl: "views/login.html"
            }
        }
    })
    .state("signup", {
        url: "/signup",
        views: {
            "content": {
                templateUrl: "views/signup.html"
            }
        }
    })
    .state('base', {
        url: "/",
        views: {
            header: {
                templateUrl: "views/header.html",
                controller: "headerCtrl"
            }
            // footer: {
            //     templateUrl: "footer.html",
            //     controller: "footerCtrl"
            // }
        },
        resolve: {
            isLogin: function($localStorage, $state) {
                // $state.go("")
                return $localStorage.user && $localStorage.user.name;
            }
        }
    })
    .state('base.home', {
        url: "home",
        views: {
            content: {
                templateUrl: "views/home.html",
                controller: "homeCtrl"
            }
        }
    })
    .state('base.questions', {
        url: "questions",
        views: {
            "content@^.^": {
                templateUrl: "views/questions.html",
                controller: "questionsCtrl"
            }
        },
    })
    .state('base.questions.question', {
        url: ":questionId",
        views: {
            "content@^.^.^": {
                templateUrl: "views/question.html",
                controller: "questionCtrl"
            }
        },
    });

    $urlRouterProvider.otherwise("/")

});

window.APP.run(function($localStorage){
    $localStorage.questions = $localStorage.questions || [
        {
            question: "how can i take json data and read it into javascript object?",
            description: ``,
            badges: ["programming", "javascript", "JSON"],
            answers: [{
                answer: "You can convert an JSON file to an object by using JSON.parse",
                description: ``
            }]
        },
        {
            question: "how can i take json data and read it into javascript object?",
            description: ``,
            badges: [ "JSON"],
            answers: [{
                answer: "You can convert an JSON file to an object by using JSON.parse",
                description: ``
            }]
        },
        {
            question: "how can i take json data and read it into javascript object?",
            description: ``,
            badges: [ "javascript"],
            answers: [{
                answer: "You can convert an JSON file to an object by using JSON.parse",
                description: ``
            }]
        }
    ];
});
$(() => angular.bootstrap(document, ['itc-project'] ));
