
window.APP.controller("askQuestionCtrl", function($scope, $localStorage, $state){
    $scope.badges = "";
    $scope.question = {
        _id: generateId(),
        badges: [],
        answers: []
    };

    $scope.post = function(){
        let question = $scope.question;
        if(!question.question) return false;
        $scope.question.badges = $scope.badges.split(" ");

        $localStorage.questions.push(question);

        $state.go("base.home");
    }
})