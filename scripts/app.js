
window.APP = angular.module("itc-project", [
    'ui.router',
    'ngStorage',
    'angular-content-editable'
]);
//todo: remove this config block
window.APP.run(function($localStorage){
    $localStorage.users = $localStorage.users || [];
});

window.APP.config(function($stateProvider, $locationProvider, $urlRouterProvider){

    $locationProvider.html5Mode(true)
    
    $stateProvider
    .state("login", {
        url: "/login",
        views: {
            "content": {
                templateUrl: "views/login.html",
                controller: "authCtrl"
            }
        }
    })
    .state("signup", {
        url: "/signup",
        views: {
            "content": {
                templateUrl: "views/signup.html",
                controller: "authCtrl"
            }
        }
    })
    .state('base', {
        url: "",
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
            isLogin: function($localStorage, $state, $timeout, $q) {
                if($localStorage.user && $localStorage.user.username){
                    return true;
                }

                return $timeout(function(){
                    $state.go("login");
                    return $q.reject();
                }, 100);
            }
        }
    })
    .state('base.home', {
        url: "/",
        views: {
            "content@^.^": {
                templateUrl: "views/questions.html",
                controller: "questionsCtrl"
            }
        },
    })
    .state('base.home.question', {
        url: ":questionId",
        views: {
            "content@^.^.^": {
                templateUrl: "views/question.html",
                controller: "questionCtrl"
            }
        },
        resolve: {
            question: function($localStorage, $state, $stateParams, $timeout, $q) {
                // $state.go("")
                var question = $localStorage.questions.filter(question => question._id == $stateParams.questionId)[0];
                if(question){
                    return question;
                } 
                return $timeout(function(){
                    $state.go("base.questions");
                    return $q.reject();
                }, 100);
            }
        }
    })
    .state('base.askQuestion', {
        url: "/ask-question",
        views: {
            "content@^.^": {
                templateUrl: "views/askQuestion.html",
                controller: "askQuestionCtrl"
            }
        }
    });

    $urlRouterProvider.otherwise("/")

});

window.APP.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
window.APP.run(function($localStorage){
    $localStorage.questions = $localStorage.questions || [
        {
            _id: generateId(),
            question: "how can i take json data and read it into javascript object?",
            description: ``,
            badges: ["programming", "javascript", "JSON"],
            answers: [{
                answer: "You can convert an JSON file to an object by using JSON.parse",
                description: `hahaha`
            }]
        },
        {
            _id: generateId(),
            question: "how can i take json data and read it into javascript object?",
            description: ``,
            badges: [ "JSON"],
            answers: [{
                answer: "You can convert an JSON file to an object by using JSON.parse",
                description: ``
            }]
        },
        {
            _id: generateId(),
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

function generateId(){
    return Date.now() + Math.floor( Math.random() * 1000 );
}