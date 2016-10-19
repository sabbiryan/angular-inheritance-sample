angular.module("app")
    .controller("ChieldController",
    [
        "$scope", "$controller",
        function($scope, $controller) {
            $controller("ParentController", { $scope: $scope });

            $scope.value = "This is from chield controller";

            $scope.chieldModel = $scope.model;

        }
    ]);