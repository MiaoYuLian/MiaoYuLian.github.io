//显示对话框
function showDialog(title, content, w, h) {
    $("body").append('<div id="mask"></div><div id="item"><h5 class="head">' + title + '</h5><div class="body">' + content+'</div></div>');

    //初始化遮罩默认样式
    $("#mask").css({ "position": "absolute", "top": "0px", "left": "0px", "background-color": "black", "opacity": "0.5" }).click(function () {
        //隐藏窗口
        $(this).remove();
        $("#item").remove()
    })
    //窗口大小调整
    $(window).resize(function () {
        dialog(title, content, w, h)
    }).trigger("resize")  //触发resize事件
}
//设置对话框位置
function dialog(title, content, w, h)
{
    //获取文档的高度
    var dh = $(document).height();
    //获取窗口的宽度
    var dw = $(document).width();
    //获取文档的高度
    var height = $(window).height();
    //获取窗口的宽度
    var width = $(window).width();
    //对话框的左边距
    var left = (width - w) / 2;
    //对话框顶部边距
    var top = (height - h) / 2;
    //显示遮罩
    $("#mask").css({ "width": dw + "px", "height": dh + "px" }).show();
    //显示对话框
    $("#item").css({ "left": left + "px", "top": top + "px", "width": w + "px", "height": h + "px" }).show();
}