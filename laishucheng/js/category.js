 $(function () { 							   //等待DOM加载完毕.
     var $type = $('.brand-list ul li:gt(8)'); //获得索引值大于8的类型集合对象	
    $type.hide();							   //隐藏上面获取到的jQuery对象。
    $('.more a').click(function () {           //获取显示全部按钮
        if ($type.is(":visible")) {
            $type.hide("fast");                //隐藏$type
            $(this).text("显示全部");          //改变文本
        } else {
            $type.show("fast");                //显示$type
            $(this).text("显示精简");          //改变文本
        }
        return false;					       //超链接不跳转
    })
})