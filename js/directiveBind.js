/**
 * Created by Administrator on 2015/4/7 0007.
 */
var myModule = angular.module('MyModule', []);

myModule.controller('MyCtrl', ['$scope', function ($scope) {
    $scope.parentFlavor = 'this is from parent controller';
}]);

myModule.directive('drink', function () {
    return {
        restrict: 'AE',
        scope: {
            flavor: '@'
        },
        template: '<div>{{flavor}}</div>'
    }
});

myModule.controller("UserCtrl", function ($scope) {
    $scope.loggedInUser = {name: "Austin Powers"}
});

myModule.directive("myUserDirective", function () {
        return {
            restrict: "E",
            template: "<input ng-model='user.name' /></div>",
            scope: {user: "="},
            link: function (scope) {
                console.log(scope.user);
            }
        };
    }
);

myModule.controller("UserTCtrl", function ($scope) {
    $scope.loggedInUser = {firstName: "zhe", lastName: "xu"};
});
myModule.directive("myUserDirective1", function () {
    return {
        restrict: "E",
        template: "",
        scope: {
            fullName: "@name"
        }
    };
});

myModule.controller("MathCtrl", function ($scope) {
    $scope.add = function (x, y) {
        return x + y;
    };
});
myModule.directive("myAddThings", function () {
    return {
        restrict: "E",
        template: "",
        scope: {
            localFn: "&fn"
        },
        link: function (scope) {
            scope.result = scope.localFn({x: 1, y: 2});
        }
    };
});