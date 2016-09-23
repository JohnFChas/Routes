angular.module("blogModule")
    .controller("PostController", [
        "$scope",
        "$routeParams",
        function ($scope, $routeParams) {
            $scope.newComment = {};

            $scope.post = $scope.posts.filter(function (post) {
                return post.id == $routeParams.id;
            })[0];

            $scope.addComment = function () {
                $scope.post.comments.push($scope.newComment);
                $scope.newComment = {};

                $scope.savePosts();
            }
        }
    ]);