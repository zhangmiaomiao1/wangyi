$(function(){
    $("#fullpage").fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        navigation:true,
        navigationTooltips:["第一屏","第二屏","第三屏","第四屏"],
        //滑动的动画效果
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        afterLoad: function(anchorLink, index){
            //滑到当前屏的时候
            //anchorLink 是锚链接的名称
            //index 是section的索引，从1开始计算
            if(index == 1){
                $(".con1-1").css({transform:"translate(0,-55%)","opacity":1});
                $(".con1-2").css({transform:"translate(0,-55%)","opacity":1});
                $(".con1-3").css({transform:"translate(0,5%)","opacity":1});
                $(".con1-4").css({transform:"scale(1,1)","opacity":1});
                $(".con1-5 p").css({opacity:1,transform:"translate(0,0)"});
            }
            if(index==2){
                $(".con2-1").css({transform:"translate(-40%,-0%)","opacity":1});
                $(".con2-2").css({transform:"translate(40%,-0%)","opacity":1});
                $(".con2-3").css({transform:"translate(0,-150%)","opacity":1});
                $(".con2-4").css({transform:"scale(1,1)","opacity":1});
                $(".con2-5 strong").css({transform:"scale(1,1)","opacity":1});
                $(".con2-6 p").css({opacity:1,transform:"translate(0,0)"});
            }
            if(index==3){
                $(".con3-1").css({transform:"translate(-60%,-0%)","opacity":1});
                $(".con3-5 p").css({transform:"translate(60%,-0%)","opacity":1});
                $(".con3-4 strong").css({transform:"scale(1,1)","opacity":1});
                $(".con3-6").css({transform:"scale(1,1)","opacity":1});
                $(".con3-2").css({"opacity":1});
                $(".con3-3").css({"opacity":1});
            }
            if(index==4){
                $(".con4-1").css({transform:"translate(0,-120%)","opacity":1});
                $(".con4-2").css({transform:"translate(0,-120%)","opacity":1});
                $(".con4-3").css({transform:"scale(1,1)","opacity":1});
                $(".con4-4 strong").css({transform:"scale(1,1)","opacity":1});
                $(".con4-5 p").css({opacity:1,transform:"translate(0,0)"});
            }
            if(index==5){
                $(".con5-1").css({transform:"translate(120%,-0%)","opacity":1});
                $(".con5-1 h4").css({transform:"translate(25%,-0%)","opacity":1});
                $(".con5-1 p").css({transform:"translate(30%,-0%)","opacity":1});

                $(".con5-2").css({transform:"translate(55%,-0%)","opacity":1});
                $(".con5-2 h4").css({transform:"translate(25%,-0%)","opacity":1});
                $(".con5-2 p").css({transform:"translate(25%,-0%)","opacity":1});
                $(".con5-3").css({transform:"translate(-50%,0%)","opacity":1});
                $(".con5-3 h4").css({transform:"translate(-10%,0%)","opacity":1});
                $(".con5-3 p").css({transform:"translate(-10%,0%)","opacity":1});
                $(".con5-4").css({transform:"translate(-120%,-0%)","opacity":1});
                $(".con5-4 h4").css({transform:"translate(-30%,0%)","opacity":1});
                $(".con5-4 p").css({transform:"translate(-30%,0%)","opacity":1});
                $(".con5-5").css({transform:"scale(1,1)","opacity":1});
                $(".con5-6 strong").css({transform:"scale(1,1)","opacity":1});
            }
            if(index==6){
                $(".con6-1").css({transform:"scale(1,1)","opacity":1});
                $(".con6-2 strong").css({transform:"scale(1,1)","opacity":1});
                $(".con6-3 p").css({transform:"translate(-60%,-0%)","opacity":1});
                $(".con6-4").css({transform:"translate(140%,-0%)","opacity":1});
                $(".con6-5").css({transform:"translate(0%,50%)","opacity":1});
            }
            if(index==7){
                $(".con7-1").css({transform:"scale(1,1)","opacity":1});
                $(".con7-2 strong").css({transform:"scale(1,1)","opacity":1});
                $(".con7-5").css({transform:"translate(0%,-100%)","opacity":1});
                $(".con7-6").css({transform:"translate(0%,-190%)","opacity":1});
                $(".con7-7 p").css({transform:"translate(0%,-410%) scale(1,1)","opacity":1});
            }
            if(index==8){
                $(".con8-1").css({transform:"scale(1,1)","opacity":1});
                $(".con8-2 strong").css({transform:"scale(1,1)","opacity":1});
                $(".con8-4 p").css({opacity:1,transform:"translate(0,0)"});
                $(".con8-5").css({opacity:1,transform:"translate(-30%,-30%)"});
                $(".con8-6").css({opacity:1,transform:"translate(-40%,-30%)"});
                $(".con8-7").css({opacity:1,transform:"translate(-50%,-30%)"});
            }
            if(index==9){
                $(".con9-1 strong").css({transform:"scale(1,1)","opacity":1});
                $(".con9-2").css({transform:"scale(1,1)","opacity":1});
                $(".con9-3").css({transform:"scale(1,1)","opacity":1});
                $(".con9-4").css({opacity:1,transform:"translate(150%,0%)"});
                $(".con9-5").css({"opacity":1});
                $(".con9-5 p").css({"opacity":1});
                $(".con9-6").css({opacity:1,transform:"translate(-150%,0%)"});
            }
            if(index==10){
                //$(".con1-4").css({transform:"scale(1,1)","opacity":1});
                $(".con10-1").css({transform:"scale(1,1)","opacity":1});
                $(".con10-2").css({transform:"scale(1,1)","opacity":1});
                $(".con10-3").css({transform:"translate(0,-350%)","opacity":1});
            }
        },
        onLeave: function(index,direction){
            if(index == "1" ){
                $(".con1-1").css({transform:"translate(0,0)","opacity":0});
                $(".con1-2").css({transform:"translate(0,0)","opacity":0});
                $(".con1-3").css({transform:"translate(0,0)","opacity":0});
                $(".con1-4").css({transform:"scale(0,0)","opacity":0});
                $(".con1-5 p").css({opacity:0,transform:"translate(0,0)"});
            }
            if(index=="2"){
                $(".con2-1").css({transform:"translate(0,0)","opacity":0});
                $(".con2-2").css({transform:"translate(0,0)","opacity":0});
                $(".con2-3").css({transform:"translate(0,0)","opacity":0});
                $(".con2-4").css({transform:"scale(0,0)","opacity":0});
                $(".con2-5 strong").css({transform:"scale(0,0)","opacity":0});
                $(".con2-6 p").css({opacity:0,transform:"translate(0,0)"});
            }
            if(index=="3"){
                $(".con3-1").css({transform:"translate(0%,-0%)","opacity":0});
                $(".con3-5 p").css({transform:"translate(0%,-0%)","opacity":0});
                $(".con3-4 strong").css({transform:"scale(0,0)","opacity":0});
                $(".con3-6").css({transform:"scale(0,0)","opacity":0});
                $(".con3-2").css({"opacity":0})
                $(".con3-3").css({"opacity":0});
            }
            if(index==4){
                $(".con4-1").css({transform:"translate(0,0)","opacity":0});
                $(".con4-2").css({transform:"translate(0,0)","opacity":0});
                $(".con4-3").css({transform:"scale(0,0)","opacity":0});
                $(".con4-4 strong").css({transform:"scale(0,0)","opacity":0});
                $(".con4-5 p").css({opacity:0,transform:"translate(0,0)"});
            }
            if(index==5){
                $(".con5-1").css({transform:"translate(0%,0%)","opacity":0});
                $(".con5-1 h4").css({transform:"translate(0%,-0%)","opacity":0});
                $(".con5-1 p").css({transform:"translate(0%,-0%)","opacity":0});
                $(".con5-2").css({transform:"translate(0%,0%)","opacity":0});
                $(".con5-2 h4").css({transform:"translate(0%,-0%)","opacity":0});
                $(".con5-2 p").css({transform:"translate(0%,-0%)","opacity":0});
                $(".con5-3").css({transform:"translate(0%,0%)","opacity":0});
                $(".con5-3 h4").css({transform:"translate(0%,-0%)","opacity":0});
                $(".con5-3 p").css({transform:"translate(0%,-0%)","opacity":0});
                $(".con5-4").css({transform:"translate(0%,0%)","opacity":0});
                $(".con5-4 h4").css({transform:"translate(0%,-0%)","opacity":0});
                $(".con5-4 p").css({transform:"translate(0%,-0%)","opacity":0});
                $(".con5-5").css({transform:"scale(0,0)","opacity":1});
                $(".con5-6 strong").css({transform:"scale(0,0)","opacity":1});
            }
            if(index==6){
                $(".con6-1").css({transform:"scale(0,0)","opacity":0});
                $(".con6-2 strong").css({transform:"scale(0,0)","opacity":0});
                $(".con6-3 p").css({transform:"translate(0%,-0%)","opacity":0});
                $(".con6-4").css({transform:"translate(0%,-0%)","opacity":0});
                $(".con6-5").css({transform:"translate(0%,0%)","opacity":0});
            }
            if(index==7){
                $(".con7-1").css({transform:"scale(0,0)","opacity":0});
                $(".con7-2 strong").css({transform:"scale(0,0)","opacity":0});
                $(".con7-5").css({transform:"translate(0%,0%)","opacity":0})
                $(".con7-6").css({transform:"translate(0%,0%)","opacity":0})
                $(".con7-7 p").css({transform:"translate(0%,0%) scale(0,0)","opacity":0});
            }
            if(index==8){
                $(".con8-1").css({transform:"scale(0,0)","opacity":0});
                $(".con8-2 strong").css({transform:"scale(0,0)","opacity":0});
                $(".con8-4 p").css({opacity:0,transform:"translate(0,0)"});
                $(".con8-5").css({opacity:0,transform:"translate(30%,30%)"});
                $(".con8-6").css({opacity:0,transform:"translate(40%,30%)"});
                $(".con8-7").css({opacity:0,transform:"translate(50%,30%)"});
            }
            if(index==9){
                $(".con9-1 strong").css({transform:"scale(0,0)","opacity":0});
                $(".con9-2").css({transform:"scale(0,0)","opacity":0});
                $(".con9-3").css({transform:"scale(0,0)","opacity":0});
                $(".con9-4").css({opacity:1,transform:"translate(0%,0%)"});
                $(".con9-5").css({"opacity":0});
                $(".con9-5 p").css({"opacity":0});
                $(".con9-6").css({opacity:1,transform:"translate(0%,0%)"});
            }
            if(index==10){
                $(".con10-1").css({transform:"scale(0,0)","opacity":0});
                $(".con10-2").css({transform:"scale(0,0)","opacity":0});
                $(".con10-3").css({transform:"translate(0,0%)","opacity":0});
            }

        }
    });
});