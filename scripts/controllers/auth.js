
window.APP.controller("authCtrl", function($scope, $localStorage, $state){
    $scope.signup = function(){
        const user = {
            _id: generateId(),
            username: $scope.username,
            password: $scope.password,
            email: $scope.email,
            dob: $scope.dob
        }
        $localStorage.users.push(user);
        $localStorage.user = user;
        $state.go("base.home");
    }

    $scope.login = function(){
        const user = $localStorage.users.filter(
                    user => (user.username == $scope.username) 
                    && (user.password == $scope.password) 
            )[0];
        if(user){
            $localStorage.user = user;
            $state.go("base.home");
        }
    }
})