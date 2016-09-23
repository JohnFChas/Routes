/// <reference path="../angular.js" />

angular.module("blogModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";
            $scope.newPost = {
                title: "",
                body: "",
                comments: []
            };

            $scope.addPost = function () {
                // Two ways to set a more or less unique id on the new post
                //$scope.newPost.id = $scope.posts[$scope.posts.length - 1].id + 1
                $scope.newPost.id = Date.now();
                $scope.posts.push($scope.newPost);
                $scope.newPost = {};

                $scope.savePosts();
            }

            $scope.removePost = function (index) {
                $scope.posts.splice(index, 1);

                $scope.savePosts();
            }
        }
    ]);