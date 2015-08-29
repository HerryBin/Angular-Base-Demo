var myModule=angular.module('myModule',[]);

myModule.controller('myController',['$scope','myService','myFactory','myProvider',
    function($scope,myService,myFactor,myProvide){
        $scope.service=myService.name;

        $scope.factory=myFactor.getFactoryAge();

        $scope.provider=myProvide.getProviderName();

}]);
myModule.service('myService',[function(){
    this.name='myService';
    this.getAge=function(){
        return 19;
    };
}]);

myModule.factory('myFactory',function(){
    var name='myFactory';

    function getAge(){
      return 20;
    }

    return{
        factoryName:name,
        getFactoryAge:getAge
    }
});

myModule.provider('myProvider',function(){
    return {
        $get: function () {
            function GetName(){
                return 'myProvider';
            }

            return{
                getProviderName:GetName
            }
        }
    }
});