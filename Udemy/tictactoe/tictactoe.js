$(document).ready(function() {
	var turns = 0;
	$('#board li').on('click',function() {
		if(turns % 2 === 0) {
			if($(this).hasClass('x') || $(this).hasClass('o')) {
				alert('This square is unavailable!');
			}else {
			$(this).text('o');
			$(this).addClass('disable o');
			turns++;
		}
	}
		else {
			if($(this).hasClass('x') || $(this).hasClass('o')) {
				alert('This square is unavailable!');
			} else {
			$(this).text('x');
			$(this).addClass('disable x');
			turns++;
			}
		}
	});
});