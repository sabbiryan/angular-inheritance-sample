angular.module("app")
    .controller("AppController",
    [
        "$scope",
        function($scope) {

            $scope.value = "This is from app controller";

        }
    ]);