angular.module("blogModule")
    .controller("PostController", [
        "$scope",
        "$routeParams",
        function ($scope, $routeParams) {
            $scope.post = $scope.posts.filter(function (post) {
                return post.id == $routeParams.id;
            })[0];
        }
    ]);