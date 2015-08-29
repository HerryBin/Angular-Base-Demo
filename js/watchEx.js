/**
 * Created by Administrator on 2015/4/8 0008.
 */
var myModule = angular.module('MyModule', []);
myModule.controller('watchController', ['$scope', '$timeout',
    function ($scope, $timeout) {
        var timeout;
        $scope.$watch('username', function (newUserName) {
            if(newUserName){
                if($timeout){
                    $timeout.cancel(timeout);
                }
                timeout=$timeout(function(){
                    $scope.changeUserName='new-----'+newUserName;
                },350);
            }
        })
    }]);

myModule.filter('filter1',function(){
    return function(item){
        return item + 'o(∩_∩)o';
    }
});