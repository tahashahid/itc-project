
window.APP.controller("headerCtrl", function($scope, $localStorage, $state){
    $scope.userName = `${$localStorage.user.username} ${$localStorage.user.lastName || " "}`;

    $scope.logout = function(){
        $localStorage.user = null;
        $state.go("login");
    }
})