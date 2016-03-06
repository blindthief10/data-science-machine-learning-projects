$(document).ready(function() {
		var speed = 350, slider = $('#slider');
		$('.slide').first().addClass('active');
		$('.slide').hide();
		$('.active').show();
		function goNext(selectedClass,oppositeClass,classActivate,previousClass) {
		if ($('.' + classActivate).hasClass(selectedClass)) {
			slider.find('.' + classActivate).fadeOut(speed).addClass(previousClass);
			slider.find('.'+previousClass).removeClass(classActivate);
			slider.find('.' + oppositeClass).fadeIn(speed).addClass(classActivate);
			slider.find('.'+previousClass).removeClass(previousClass);
		} else {
		slider.find('.' + classActivate).fadeOut(speed).addClass(previousClass);
		slider.find('.'+previousClass).removeClass(classActivate);
		selectedClass === 'last' ? slider.find('.'+previousClass).next().fadeIn(speed).addClass(classActivate) : 
		slider.find('.'+previousClass).prev().fadeIn(speed).addClass(classActivate);
		slider.find('.'+previousClass).removeClass(previousClass);
			}
		}
	$('#next').on('click', function() {
		goNext('last','first','active','previous');
	});
	$('#prev').on('click', function() {
		goNext('first','last','active','previous');
	});
	setInterval(function() {
		goNext('last','first','active','previous');
	},5000);
});
