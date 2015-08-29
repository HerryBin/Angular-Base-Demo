var myModule = angular.module("MyModule", []);

myModule.controller('fatherController',['$scope',function($scope){
    $scope.fatherName='I am from angular,from the controller';
}]);

myModule.directive('strDirective',function(){
    return{
        restrict:'AE',
        scope:{
            directiveStr:'@'
        },
        template:'<div>Hello everyone!<h1>{{directiveStr}}</h1></div>'
    }
});