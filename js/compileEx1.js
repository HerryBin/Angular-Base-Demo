/**
 * Created by Administrator on 15-4-6.
 */
var myModule=angular.module('myModule',[]);
myModule.directive('alotofHello',function(){
    return{
        restrict:'A',
        compile:function(ele,attrs,transclude){
            console.log('指令编译');
            ele.click=function(scope){
                console.log('click');
            };
            var tpl=ele.children().clone();
            /*for(var i=0;i<attrs.alotonums;i++){
                ele.append(tpl.clone());
            }*/
            return function(scope,el,attrs,controller){
                console.log('指令链接');
            }
        },
        link:function(){
            console.log("我自己的link函数...");
        }
    }
});

myModule.directive('linkHello',function(){
    return{
        restrict:'E',
        template:'<div>Hello,Link</div>',
        link:function(scope,ele,attr,controller){
           ele.on('mouseenter',function(){
                console.log("mouse enter");
            })

            ele.on('click',function(){
                console.log("onclick");
            });
        }
    }
});
myModule.directive('repeater', function() {
    return {
        restrict: 'A',
        compile: function(el, attrs, transclude) {
            //这里开始对标签元素自身进行一些变换
            console.log("repeat...compile...");

            var tpl = el.children().clone();
            for (var i = 0; i < attrs.repeater - 1; i++) {
                el.append(tpl.clone());
            }

            //返回link函数
            return function(scope, el, attrs, controller) {
                console.log("repeat...link...");
            }
        }
    }
});