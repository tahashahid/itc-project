
window.APP.controller("headerCtrl", function($scope, $localStorage){
    $scope.userName = `${$localStorage.user.name} ${$localStorage.user.lastName || " "}`;
})