$(document).ready(function() {
	var turns = 0;
	$('#board li').on('click',function() {
		if(turns % 2 === 0) {
			if($(this).hasClass('disable')) {
				alert('This square is unavailable!');
			}else {
			$(this).text('o');
			$(this).addClass('disable o');
			check('o');
			turns++;
		}
	}
		else {
			if($(this).hasClass('disable')) {
				alert('This square is unavailable!');
			} else {
			$(this).text('x');
			$(this).addClass('disable x');
			check('x');
			turns++;
			}
		}
	});
});

function check(className) {
	if(
		$('#spot1').hasClass(className) && $('#spot2').hasClass(className) && $('#spot3').hasClass(className) ||
		$('#spot4').hasClass(className) && $('#spot5').hasClass(className) && $('#spot6').hasClass(className) ||
		$('#spot7').hasClass(className) && $('#spot8').hasClass(className) && $('#spot9').hasClass(className) ||
		$('#spot1').hasClass(className) && $('#spot4').hasClass(className) && $('#spot7').hasClass(className) ||
		$('#spot2').hasClass(className) && $('#spot5').hasClass(className) && $('#spot8').hasClass(className) ||
		$('#spot3').hasClass(className) && $('#spot6').hasClass(className) && $('#spot9').hasClass(className) ||
		$('#spot1').hasClass(className) && $('#spot5').hasClass(className) && $('#spot9').hasClass(className) ||
		$('#spot3').hasClass(className) && $('#spot5').hasClass(className) && $('#spot7').hasClass(className) 
		) {
		alert('And the winner is ' + className);
		turns = 0;
		$('#board li').removeClass('disable');
		$('#board li').text('+');
		$('#board li').removeClass('x o');
	}
}