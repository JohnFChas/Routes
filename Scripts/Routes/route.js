/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("blogModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider

                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController"
                })

                .when("/About", {
                    templateUrl: "Views/About.html",
                    controller: "AboutController"
                });
        }
    ]);