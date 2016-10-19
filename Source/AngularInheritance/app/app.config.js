
angular.module("app", ["ui.router"])
    .config([
        "$urlRouterProvider", "$stateProvider",
        function ($urlRouterProvider, $stateProvider)
        {

            $urlRouterProvider.otherwise("/");


            $stateProvider.state("root",
                {
                    abstract: true,
                    url: "",
                    template: "<div ui-view class='container-fluid'></div>"
                })
                .state("root.app",
                {
                  url: "",
                  views: {
                        "": {
                            templateUrl: "partials/app.tpl.html",
                            controller: "AppController"
                        }
                    }
                })
                .state("root.parent",
                {
                    url: "/parent",
                    views: {
                        "": {
                            templateUrl: "partials/parent.tpl.html",
                            controller: "ParentController"
                        }
                    }
                })
                .state("root.chield",
                {
                    url: "/chield",
                    views: {
                        "": {
                            templateUrl: "partials/chield/chield.tpl.html",
                            controller: "ChieldController"
                        }
                    }
                });
        }
    ]);