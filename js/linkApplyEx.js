var myModule = angular.module('MyModule', []);
myModule.controller('ctrl1',function($scope){
    $scope.loadData1=function(){
        console.log('test1.......');
    }
});

myModule.controller('ctrl2',function($scope){
    $scope.loadData2=function(){
        console.log('test2.......');
    }
});

myModule.directive('loader',function(){
    return {
        restrict:'AE',
        link:function(scope,ele,attrs){
            ele.bind('mouseenter',function(event,a,b,c){
                scope.$apply(attrs.howtoload);
            });

          /*  ele.bind('mouseenter', function(event) {
                //scope.loadData();
                // scope.$apply("loadData()");
                // 注意这里的坑，howToLoad会被转换成小写的howtoload
                scope.$apply(attrs.howtoload);
            });*/
        }
    }
});
