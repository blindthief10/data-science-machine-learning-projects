$(document).ready(function() {
	$('#board li').on('click',function() {
		if(turns % 2 === 0) {
			if($(this).hasClass('disable')) {
				alert('This square is unavailable!');
			}else {
			$(this).text('o');
			$(this).addClass('disable o');
			turns++;
			check('o');
			console.log(turns);
			draw();
		}
	}
		else {
			if($(this).hasClass('disable')) {
				alert('This square is unavailable!');
			} else {
			$(this).text('x');
			$(this).addClass('disable x');
			turns++;
			check('x');
			console.log(turns);
			draw();
			}
		}
	});
	$('#reset').on('click',function() {
		newGame();
	});
});

var turns = 0;

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

function draw() {
	if (turns == 9) {
		alert('It seems that we have a tie! Try a new game!');
		turns = 0;
		$('#board li').removeClass('disable');
		$('#board li').text(('+'));
		$('#board li').removeClass('x o');
	}
}

function newGame() {
	var confirmation = confirm('Are you sure you want to start a new game?');
	if(confirmation === true) {
		turns = 0;
		$('#board li').removeClass('disable');
		$('#board li').text(('+'));
		$('#board li').removeClass('x o');
		}
}
