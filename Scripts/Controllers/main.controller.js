/// <reference path="../angular.js" />

angular.module("blogModule")
    .controller("MainController", [
        "$scope",
        "$location",
        function ($scope, $location) {

            $scope.go = function (url) {
                $location.path(url);
            }

        }
    ]);