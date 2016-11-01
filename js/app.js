(function(){
    var app = angular.module('site', []);

    app.controller('NavigationController', function(){
        this.currPage = 0;

        this.setPage = function(pageNum){
            this.currPage = pageNum;
        }
    });

    app.directive('home', function(){
        return{
            restrict: "E",
            templateUrl: "mainPage.html"
        };
    });

    app.directive('aboutMe', function(){
        return{
            restrict: "E",
            templateUrl: "aboutMe.html"
        };
    });

    app.directive('work', function(){
        return{
            restrict: "E",
            templateUrl: "work.html"
        };
    });

})();