$(document).ready(function() {
	var totalWidth = 0, positioned = [];
	$('#slides .slide').each(function(i) {
		positioned[i] = totalWidth;
		totalWidth += $(this).width();
		if (!$(this).width) {
			alert('Please provide something with width!');
			return false;
		}
	});
	$('#slides').width(totalWidth);
	$('#menu ul li a').on('click',function(e) {
		$('li.product').removeClass('active').addClass('inactive');
		$(this).parent().addClass('active');
		var pos = $(this).parent().prevAll('.product').length;
		$('#slides').stop().animate({
			marginLeft: -positioned[pos]+'px'
		},450);
		e.preventDefault();
		if(!autoScroll) {
			clearInterval(itvl);
		}
	});
	$('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');
	var current = 1;
		function autoScroll() {
			if(current === -1) {
				return false;
			}else {
				$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);
				current++;
			}
		}
		var duration = 4;
		var itvl = setInterval(function() {
			autoScroll();
		},duration*1000);
});