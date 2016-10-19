angular.module("app")
    .controller("ParentController",
    [
        "$scope",
        function($scope) {

            $scope.value = "This is from parent controller";

            $scope.model = {Id: 1, Name: "Parent"};

            $scope.method = function() {
                return "This is from parent controller method";
            }

            $scope.save = function(data) {
                alert(data);
            }

        }
    ]);