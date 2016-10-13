
$(function()
{
// 一、商品分类 悬浮函数
    var $kindLi=$("#main-mid>.list>ul li");
    var $kindLevel2=$("#main-mid>.level2");
    $kindLi.hover(function()
    {
        var indexLi=$kindLi.index(this);
        $kindLevel2.eq(indexLi).show();
        $(this).addClass("white-back");
        $(this).children("a").addClass("red-font-a").attr("color","red");
    },function()
    {
        $kindLevel2.hide();
        $(this).removeClass("white-back");
        $(this).children("a").removeClass("red-font-a");
    });

    //商品分类悬浮函数 结束
    $kindLevel2.hover(function(){
        $(this).show();
    },function(){
        $(this).hide();
    });

//二、 大图片切换函数

    var test=1;
    var $bigLogos=$("#main-mid .big-logo img");          //图片组
    var $bigButtons= $("#main-mid .big-logo .button-union");    //按钮组
    var indexIMG=0;
    var $circleLi=$("#main-mid  .big-logo  .circle  li");
    var imgLen=$circleLi.length;
    var adTimer=null;

 //  2.0 立即刷新出第一张照片  若无该函数，则需要等待一定时间才可刷出第一张照片

    $circleLi.mouseover(function()
    {
        indexIMG=$circleLi.index(this); //当前LI索引值
        showImg(indexIMG);
        test=1;
    }).eq(0).mouseover();

    //2.1  图片手动切换和自动轮播
    $circleLi.hover(function()
    {
        if(adTimer)
        {
            clearInterval(adTimer);
        }
        indexIMG=$circleLi.index(this); //当前LI索引值
        showImg(indexIMG);
        test=1;
    },function()
    {
        autoPlay();
    }).eq(0).trigger("mouseleave");


    //2.2 鼠标滑动到图片时，按钮显示，且图片停止轮播，停在当前图片
    $("#main-mid .big-logo div").hover(function()
    {
        $bigButtons.show();
        if(adTimer)
        {
            clearInterval(adTimer);
        }
    },function()
    {
        $bigButtons.hide();
        autoPlay();
    });


    // 2.3 按钮点击  手动切换图片
    $bigButtons.click(function()
    {
        var indexOfButt= $bigButtons.index(this);
           clearInterval(adTimer);
        if(test!=0)
        {
            if(indexIMG==0)
            { indexIMG=imgLen-1;}
            else
            { indexIMG--;}
            test=0;
        }
        if(indexOfButt==0)   //向左点击，显示前一张图片
        {
            if(indexIMG==0)
            { indexIMG=imgLen-1;}
            else
            { indexIMG--;}
        }
        if(indexOfButt==1)   //向右点击
        {
            if(indexIMG==(imgLen-1))
            { indexIMG=0;}
            else
            { indexIMG++;}
        }
        showImg(indexIMG);
        $bigButtons.show();
    });


//   2.4 大图区域所调用的子函数
    function showImg(indexParam)     //需要写在$(function里面)
    {
        $bigLogos.eq(indexParam).stop(true,true).show().siblings().hide();
        $circleLi.eq(indexParam).addClass("red-back").siblings().removeClass("red-back");
    }

    function autoPlay()    //自动轮播函数
    {
        adTimer =setInterval(function()
        {
            showImg(indexIMG);
            var $circleThis= $circleLi.eq( indexIMG);
            $circleThis.addClass("red-back").siblings().removeClass("red-back");
            indexIMG++;
            if( indexIMG==imgLen)
                indexIMG=0;
        },3000);
        test=1;    //为了 按钮切换图片的判断
    }

// 三、 中间 四张小图片
    // 3.1  鼠标悬浮时， 按钮出现
    var $btns=$("#mid-logo .logo-run .btn");    //按钮对象
    var $pic4gr=$("#mid-logo .logo-run .pic-4");  //4组图片
    var  groupLength=$pic4gr.length;
    var indexOfGR=0;
    $("#mid-logo .logo-run").hover(function()
    {
        $btns.show();
    },function()
    {
        $btns.hide();
    })
    // 3.2 鼠标点击时，切换图片组
    $btns.click(function()
    {
        var indexOfBtns= $btns.index(this);
        var  $currentGroup=$("#mid-logo .logo-run .pic-4:visible"); //当前展示的组
        // 尝试 var  currentGroup=$pic4gr.(:visible);
        indexOfGR=$pic4gr.index($currentGroup);    //当前展示组的Index
        if(indexOfBtns==0)   //向左点击，显示前一张图片
        {
            if(indexOfGR==0)
            {
                indexOfGR= groupLength-1;
            }
            else
            {
                indexOfGR--;
            }
        }
        if(indexOfBtns==1)   //向右点击
        {
            if(indexOfGR==(groupLength-1))
            {
                indexOfGR= 0;
            }
            else
            {
                indexOfGR++;
            }
        }
        $pic4gr.eq(indexOfGR).show().siblings().not("button").hide();
    });


//  四、顶部  我的京东/手机京东等下拉菜单
   var $liDown=$("#top .top-main  .top-right .title-service .detail-down");   //li中可下拉的区域，共5个
    var $toplink=$("#top .top-main  .top-right  .detail-down .down");   //悬浮的区域  共5个

    $liDown.hover(function()
    {
        $(this).find(".dd-text").addClass("dd-text-add");
        var index0fliDown=$liDown.index(this);
        $toplink.eq(index0fliDown).show();
    },function()
    {
        var index0fliDown=$liDown.index(this);
        $(this).find(".dd-text").removeClass("dd-text-add");
        $toplink.eq(index0fliDown).hide();

    });
//五、天天特价 自动滚动
    var $showUL=$("#dayP .dayP-right .run-ul");
    var $showLI=$("#dayP .dayP-right .run-ul .distance");
    var time=null;
    var currentLength=$showUL.position().top;
    $("#dayP .dayP-right").hover(function()
    {
       clearInterval(time);
    },function()
    {
        time=setInterval(function(){messagesShow();},3000);
    }).eq(0).trigger("mouseleave");

    function  messagesShow()
    {
       if (currentLength==-140)
       {
           $showUL.css("top","-560px");
           //此处宜直接使用参数，不宜再使用动画进行设置
       }
        $showUL.stop(true,true).animate({top:"+=140px"},1000,function (){currentLength=$showUL.position().top});
        //注意 currentLength=$showUL.position().top 需要写在回调函数里，否则会比动画先执行
    }


    // 六、通过ajax 动态获取留言
    var $commentShow=$("#dayP .dayP-right .run-ul .distance .run-mess a");
    var pepleNum=$commentShow.length;
    var i=0;
    $.post("messages.html",function(data,textStatus)
    {
        var $text=$(data).find("p");
        for(i=0;i<pepleNum;i++)
        {
            $commentShow.eq(i).text($text.eq(i).text());
        }
    })

////七、送货地址 函数
    var $address=$("#top .top-main .top-left");
    var $moreAddress=$("#top .top-main .top-left .pull");
    var $allAddress=$("#top .top-main .top-left .pull a");
    $address.hover(function()
    {
             $moreAddress.show();
             $(this).find("p").addClass("add-p");
        $allAddress.click(function()
        {
            var addressText=$(this).text();
            $address.find("span").text(addressText);
            return false;
        });
    },function()
    {
        $moreAddress.hide();
        $(this).find("p").removeClass("add-p");
    });



////

    })
