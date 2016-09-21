/// <reference path="../angular.js" />

angular.module("blogModule")
    .controller("MainController", [
        "$scope",
        "$location",
        function ($scope, $location) {
            $scope.posts = [];

            for (var i = 0; i < 10; i++) {
                $scope.posts.push({
                    id: i + 1,
                    title: "Post " + (i + 1),
                    body: "Post " + (i + 1) + " body"
                });
            }

            $scope.go = function (url) {
                $location.path(url);
            }
        }
    ]);