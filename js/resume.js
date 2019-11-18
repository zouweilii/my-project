 $(function () {
            // 导航栏
            $("#dowebok").fullpage({
                sectionsColor: ['#f6f6f6', '#f6f6f6', '#f6f6f6', '#f6f6f6', '#f6f6f6'],
                anchors: ['page1', 'page2', 'page3', 'page4','page5'],
                menu: '#menu',
                afterLoad:function(anchorLink,index){
                    // index 序号 从一开始 当前屏的序号
                    //about me 部分显示效果--索引选择器
                    $('.section').eq(index-1).addClass('now');
                    // $(".section:eq("+index+"-1)").addClass('now');
                    if(anchorLink=="page3"&&index==3){
                        $(".skills-html").animate({"width":"85%","opacity":"1"},"slow");
                        $(".skills-css").animate({"width":"85%","opacity":"1"},"slow");
                        $(".skills-js").animate({"width":"80%","opacity":"1"},"slow");
                        $(".skills-jq").animate({"width":"85%","opacity":"1"},"slow");
                        $(".skills-ajax").animate({"width":"65%","opacity":"1"},"slow");
                    };
                    if(anchorLink=="page4"&&index==4){
                        $(".life-ul").animate({"opacity":"1"},"slow");
                    };
                },
                 // 最好在组件初始完毕或者插件内容渲染完毕时
                afterRender:function(){
                   $('.contact .once').on('click',function(){
                       /*2.点击再来一次重置动画跳回第一页*/
                       /*动画怎么怎么进行的？*/
                       /*2.1 加now  类*/
                       /*2.2 加leaved  类*/
                       /*2.3 加show 类*/
                       $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                       /*2.4 加css属性  后果：加一个style属性*/
                       /*2.5 用jquery方法  show() fadeIn() 后果：加一个style属性*/
                       $('.content [style]').removeAttr('style');
    
                       /*跳回第一页*/
                       $.fn.fullpage.moveTo(1);
                   });
                }
            });
            // 点击图片，显示信息
            $(".information").hide();
            $(".photograph").on('click',function(){
            $(".information").show(500);
            });
            // 鼠标进入和离开about中的每一个li
            $(".about-ul>li").mouseenter(function(){
                $(this).css({"margin-top": "-20px","cursor":"pointer"});
            }).mouseleave(function(){
                $(this).css({"margin-top": ""});
            });
            $('.life-ul>li>img').mouseenter(function(){
                $('.life-ul>li>img').css({"opacity":"0.2"});
                $(this).css({"opacity":"1","width":"110%","transform":"scale(1.5,1.5)"});
            }).mouseleave(function(){
                $('.life-ul>li>img').css({"opacity":"1","width":"100%","transform":"scale(1,1)"});
            });
           
        });