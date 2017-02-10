var app = angular.module("app", [])
app.controller("myctrl", function ($scope) {
    $scope.name = "lokesh";
})
.controller("calcCtrl", function ($scope, $rootScope) {
    $scope.sum = function () {
        return $scope.a + $scope.b;
    }
})

;