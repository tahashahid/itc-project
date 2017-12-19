
window.APP.controller("headerCtrl", function($scope, $localStorage){
    $scope.userName = `${$localStorage.user.username} ${$localStorage.user.lastName || " "}`;
})