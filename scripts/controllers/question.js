
window.APP.controller("questionCtrl", function($scope, question){
    $scope.question = question;
    $scope.answer = {};
    $scope.postAnswer = function(){
        if(!$scope.answer.answer) return;

        $scope.question.answers.push($scope.answer);
        $scope.answer = {};

    }
})