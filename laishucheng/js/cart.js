$(function() {
	var goods = data.goods;
	for(var i = 0; i < goods.length; i++) {
		$('<div class="cart-list" title=' +
			goods[i].id +
			'><div class="cart-hd"><input type="checkbox" /><em>' +
			goods[i].title +
			'</em></div><div class="cart-items"><dl><dt><img src=' +
			goods[i].imgUrl +
			'/></dt><dd>名称：' +
			goods[i].title +
			'</dd><dd>简介：当你第一次见到c#时，千万不要傻傻地将它读为“c井号”...</dd><dd>定价：￥<span class="price">' +
			goods[i].price +
			'</span></dd></dl><div class="icon-del del-item"><a href="#"></a></div></div><div class="subtotal"><span class="total-price">小计：￥<em>' +
			goods[i].price +
			'</em></span><span class="count"><a href="#" class="icon minus"></a><input id="num" step="1" min="0" value="1" type="number" /><a href="#" class="icon add"></a></span></div></div>').appendTo(".container")
	}
	//	加
	$(".add").click(function() {
		var countN = $(this).siblings("input");
		var val0 = parseInt(countN.val());
		var valN = val0 + 1;
		countN.val(valN);
		var price = parseFloat($(this).parent().parent().siblings(".cart-items").find(".price").text());
		var subprice = price * valN;
		$(this).parent().prev().children("em").text(subprice);
		add();
		return false;
	})
	//	减
	$(".minus").click(function() {
		var countN = $(this).siblings("input");
		var val0 = parseInt(countN.val());
		var valN = val0 - 1;
		countN.val(valN);
		var price = parseFloat($(this).parent().parent().siblings(".cart-items").find(".price").text());
		var subprice = price * valN;
		$(this).parent().prev().children("em").text(subprice);
		add();
		return false;
	})
	//事件处理--删除
	$(".del-item a").click(function() {
		var boo = confirm("确定删除吗？");
		if(boo) {
			$(this).parents(".cart-list").remove();
			add();
			return false;
		}
	})
	//事件处理--全选
	$("#allCheck").click(function() {
		//点击全选--找到所有的多选框--设置属性（获取被点击状态-直接赋值给多选框）
		//prop与attr作用和用法一致，但是是专门来设置特殊属性的
		$(".container input:checkbox").prop("checked", this.checked);
		add();
	})

	//事件处理--反选全选--每一个input在被点击的时候
	//表单专用的选择器 input:checkbox  input:checked,判断状态-找到被选中的input
	function isAll() { //找到所有的多选框绑定事件处理函数
		var allL = $(".container input:checkbox").length; //获取多选框的长度
		var cheL = $(".container input:checked").length; //获取所有的被选中的多选框的长度
		if(allL == cheL) {
			$("#allCheck").prop("checked", true); //如果长度一样，就说明已经全选
		} else {
			$("#allCheck").prop("checked", false);
		}
		add();
	}
	//页面进来就执行一次
	isAll();
	//把函数绑定到多选框的点击事件
	$(".container input:checkbox").click(isAll); //页面打开时，手动触发一次这个事件

	//封装函数-实现小计累加
	function add() {
		//找到所有的被选中的多选框--取出和他相关的小计值--小计值累加
		var allTotle = 0;
		//使用each()--循环取值--根据jq对象的长度实现循环，会执行时会自动传入索引值
		$(".container input:checked").each(function(index) {
			var a = $(".container input:checked").eq(index);
			var aN = parseInt(a.parent().siblings(".subtotal").children(".total-price").children("em").text());
			console.log(aN);
			allTotle = allTotle + aN;
		})
		//把累加结果放在总计处
		$("#totaprice").text(allTotle)
	}

})