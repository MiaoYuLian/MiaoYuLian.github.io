/*首页广告效果*/
$(function () {
    //banner图自适应
    $(window).resize(computeWidth).trigger("resize")
    //广告轮播图
    imgSlider();
})
//广告轮播图
function imgSlider()
{
    //获取轮播图片数量
    var len = $(".banner-box > img").length;
    var index = 0;
    var adTimer;
    //滑入 停止动画，滑出开始动画.
    $('.carousel').hover(function () {
        clearInterval(adTimer);
    }, function () {
        adTimer = setInterval(function () {
            showImg(index)
            index++;
            if (index == len) { index = 0; }
        }, 3000);
    }).trigger("mouseleave");
}
//广告图片滚动到指定位置
function showImg(index) {
    var adHeight = $(".carousel").height();
    $(".banner-box").stop(true, false).animate({ top: -adHeight * index }, 1000);
}
//banner图自适应
function computeWidth()
{
    var domWidth = $(window).width();
    $('.banner-box img').css('width', domWidth);
    $('.banner-box').css('height', $('.banner-box img').height() * 3);
    $(".carousel").css("height", $('.banner-box img').height()+"px");
}