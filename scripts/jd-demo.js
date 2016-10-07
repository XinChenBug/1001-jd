/**
 * Created by chenxin on 16/10/6.
 */

$(function()
{
//商品分类 悬浮函数
    var $kindLi=$("#main-mid>.list>ul>li");
    var $kindLevel2=$("#main-mid>.level2");
    $kindLi.hover(function()
    {
        var indexLi=$kindLi.index(this);
        $kindLevel2.eq(indexLi).show();
        $(this).addClass("white-back");
        $(this).children("a").addClass("red-font-a").attr("color","red");
    },function()
    {
        //var indexLi=$kindLi.index(this);
        //$kindLevel2.eq(indexLi).hide();
        $kindLevel2.hide();
        $(this).removeClass("white-back");
        $(this).children("a").removeClass("red-font-a");
    })

    //商品分类悬浮函数 结束
    $kindLevel2.hover(function(){
        $(this).show();
    },function(){
        $(this).hide();
    })

// 大图片按钮
    var $bigLogos=$("#main-mid .big-logo img");
    var $bigButtons= $("#main-mid .big-logo button")

    $bigLogos.hover(function()
    {
        $bigButtons.show();
    },function()
    {
        $bigButtons.hide();
    })
//图片手动切换
    var indexIMG=0;
    var $circleLi=$("#main-mid  .big-logo  .circle  li");
    var imgLen=$circleLi.length;
    var adTimer=null;
    $circleLi.mouseover(function()
    {
        indexIMG=$circleLi.index(this); //当前LI索引值
        showImg(indexIMG);
    }).eq(0).mouseover();


    // 图片自动轮播
    $circleLi.hover(function()
    {
        if(adTimer)
        {
            clearInterval(adTimer);
        }
    },function()
    {
        adTimer=setInterval(function()
        {
            showImg(indexIMG);
            indexIMG++;
            if( indexIMG==imgLen)
                indexIMG=0;
        },2000);
    }).eq(0).trigger("mouseleave");


    function showImg(indexParam)
    {
        $bigLogos.eq(indexParam).show().siblings().not("ul").hide();
    }
})

