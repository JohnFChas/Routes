/// <reference path="../angular.js" />

angular.module("blogModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";
        }
    ]);