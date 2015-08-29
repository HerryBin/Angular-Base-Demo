var myModule=angular.module('MyModule',[]);

myModule.directive('superman',function(){
    return{
        scope:{},
        restrict:'EA',
        controller:function($scope){
            $scope.skills=[];
            this.addStrength=function(){
                $scope.skills.push('strength');
            };
            this.addSpeed=function(){
                $scope.skills.push('Speed');
            };
        },

        link:function(scope,ele,attrs){
            ele.bind('mouseenter',function(){
                console.log(scope.skills);
            })
        }
    }
});

myModule.directive('strength',function(){
    return{
        require:'^superman',
        link:function(scope,ele,attrs,superCtrl){
            superCtrl.addStrength();
        }
    }
});

myModule.directive('speed',function() {

    return{
        require:'^superman',
        link:function(scope,ele,attrs,superCtrl){
            superCtrl.addSpeed();
        }
    }
});
