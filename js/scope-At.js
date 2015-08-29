var myModule=angular.module('MyModule',[]);

myModule.controller('MyCtrl',['$scope',function($scope){
    $scope.equalSymbole='equalsymbole';
    $scope.atSymbole='atSymbole';
}]);

myModule.directive('drink',function(){
    return{
        restrict:'EA',
        scope:{
            'equalsymbole1':'=',
            'atsymbole':'@'
            //把当前属性作为字符串传递，还可以绑定来自外层的scope值
            //在属性值中插入{{}}即可
        },
        template:'<div>{{equalsymbole}}</div>'+
                 '<div><input type="text" ng-model="equalsymbole1"/></div>'/*,
        link:function(scope,element,attrs){
            scope.flavor=attrs.flavor;
        }*/
    }
});

myModule.directive("drink1", function() {
    return {
        restrict:'AE',
        scope:{
            flavor:'='
        },
        template:'<input type="text" ng-model="flavor"/>'
    }
});