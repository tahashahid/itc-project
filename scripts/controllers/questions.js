
window.APP.controller("questionsCtrl", function($scope, $localStorage){
    $scope.questions = $localStorage.questions;
    $scope.searchQuery = {};

    $scope.getBadges = function(){
        var badges = {};
        $scope.questions.forEach(
            question => question.badges.forEach(
                badge => badges[badge] = true
            )
        );
        return Object.keys(badges);
    }

    $scope.submitQuery = function($event, searchText){
        $event.preventDefault();
        $scope.searchQuery.$ = searchText.$;
        return false;
    }
})