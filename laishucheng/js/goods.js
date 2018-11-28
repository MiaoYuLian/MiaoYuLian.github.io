$(function () {
    //如果有查询关键词请求当前页面拼接查询字段提交给接口
    var searchText = GetQueryString("key") ? "?key="+GetQueryString("key") : "";
    $.ajax({
        url: "data/goods.json"+searchText,
        type: "get",
        dataType: "json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                $(".goods-items ul").append("<li>"+
                    "<a href=\"detail.html?id="+data[i].id+"\">"+
                    "	<em><img src=\""+data[i].imgUrl+"\"/></em>"+
                    "	<span>"+data[i].title+"</span>" +
                    "	<span>￥" + data[i].price +"</span>" +
                    "	<span>" + data[i].reviews + "条评论  <i>" + data[i].rate +"%好评</i></span>" +
                    "</a>" +
					"</li>");
            }
        }
    })

    //详情页选项卡
	$('.detail-content').eq(0).show()//默认展开第1个
	$('.detail-hd li').click(function(){	
		$(this).addClass('active').siblings().removeClass('active')
		var i=$('.detail-hd li').index(this);//让li当前索引等于i
		$('.detail-content').eq(i).show().siblings('.detail-content').hide()//eq()表示获取第几个元素
	})
})