$(document).ready(function() {
	//	首页的logo
	$(".logo-box").mouseenter(function() {
		$(".logo2").stop().animate({
			height: '50px'
		})
	}).mouseleave(function() {
		$('.logo2').stop().animate({
			height: '0'
		})
	})

	//banner 图高度自适应
	function imgResize() {
		var DomWidth = $(window).width();
		var imgHeight = DomWidth * 700 / 2000;
		$(".banner").css("height", imgHeight + "px")
	}
	imgResize()
	window.onresize = function() {
		imgResize()
	}

	//	详情页的侧栏
	$(".sideBar").click(function() {
		$(this).stop().animate({
			right: "0px"
		}).mouseleave(function() {
			$(this).stop().animate({
				right: "-50px"
			})
		})
	})
	//	详情页的返回顶部
	addEventListener("mousewheel", function() {
		var scorller = document.body.scrollTop || document.documentElement.scrollTop;
		if(scorller > 400) {
			$(".backTop").css("display", "block")
		} else {
			$(".backTop").css("display", "none")
		}
		$(".backTop").click(function() {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
			$(".backTop").css("display", "none")
		})
	})
	addEventListener("DOMMouseScroll", function() {
		var scorller = document.body.scrollTop || document.documentElement.scrollTop;
		if(scorller > 400) {
			$(".backTop").css("display", "block")
		} else {
			$(".backTop").css("display", "none")
		}
		$(".backTop").click(function() {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
			$(".backTop").css("display", "none")
		})
	})
})