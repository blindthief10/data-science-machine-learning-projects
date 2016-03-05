$(document).ready(function() {
		var speed = 350, slider = $('#slider');
		$('.slide').first().addClass('active');
		$('.slide').hide();
		$('.active').show();
		function goNext(selectedClass,oppositeClass,meth) {
		if ($('.active').hasClass(selectedClass)) {
			slider.find('.active').fadeOut(speed).addClass('previous');
			slider.find('.previous').removeClass('active');
			slider.find('.' + oppositeClass).fadeIn(speed).addClass('active');
			slider.find('.previous').removeClass('previous');
		} else {
		slider.find('.active').fadeOut(speed).addClass('previous');
		slider.find('.previous').removeClass('active');
		slider.find('.previous').next().fadeIn(speed).addClass('active');
		slider.find('.previous').removeClass('previous');
			}
		}
	$('#next').on('click', function(event) {
		event.preventDefault();
		goNext('last','first');
	});
	$('#prev').on('click', function(event) {
		event.preventDefault();
		if ($('.active').hasClass('first')) {
			slider.find('.active').fadeOut(speed).addClass('previous');
			slider.find('.previous').removeClass('active');
			slider.find('.last').fadeIn(speed).addClass('active');
			slider.find('.previous').removeClass('previous');
		} else {
		slider.find('.active').fadeOut(speed).addClass('previous');
		slider.find('.previous').removeClass('active');
		slider.find('.previous').prev().fadeIn(speed).addClass('active');
		slider.find('.previous').removeClass('previous');
		}
	});
	setInterval(function() {
		goNext('last','first');
	},5000);
});