/**
 * Created by chenxin on 16/10/6.
 */

$(function(){

//商品分类 悬浮函数

    var $kindLi=$("#main-mid>.list>ul>li");
    var $kindLevel2=$("#main-mid>.level2");
    $kindLi.hover(function(){
        var indexLi=$kindLi.index(this);
        $kindLevel2.eq(indexLi).show();
        $(this).addClass("white-back");
        $(this).children("a").addClass("red-font-a").attr("color","red");

},function(){
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





})