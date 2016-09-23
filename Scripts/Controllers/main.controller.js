/// <reference path="../angular.js" />

angular.module("blogModule")
    .controller("MainController", [
        "$scope",
        "$location",
        function ($scope, $location) {
            $scope.posts = [];

            $scope.savePosts = function () {
                var jsonString = JSON.stringify($scope.posts);
                localStorage.setItem("posts", jsonString);
            }

            $scope.loadPosts = function () {
                var data = localStorage.getItem("posts");
                if (data)
                    $scope.posts = JSON.parse(data);
            }

            $scope.go = function (url) {
                $location.path(url);
            }

            $scope.loadPosts();
        }
    ]);