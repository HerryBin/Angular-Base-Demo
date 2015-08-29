var myModule=angular.module('MyModule',[]);

myModule.controller('scopeController',['$scope',function(scope){
    scope.sayHello=function(name){
        alert('hello-------'+name);
    }
}]);

/*
myModule.directive('greeting',function(){
    return{
        restrict:'AE',
      */
/*  scope:{
            greet:'&'//传递一个来自父亲的scope函数，稍后调用
        },*//*

scope:true,
        template:'<input type="text" ng-model="userName"/></br>'+
            '<button ng-click="sayHello(userName)" >Greet</button></br>'
    }
});
*/

myModule.directive("greeting", function() {
    return {
        restrict:'AE',
        scope:{
            greet:'&'
        },
        template:'<input type="text" ng-model="userName" /><br/>'+
        '<button class="btn btn-default" ng-click="greet({name:userName})">Greeting</button><br/>'
    }
});
