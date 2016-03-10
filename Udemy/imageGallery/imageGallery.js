$(document).ready(function() {
	$('nav').on('click','a',function() {
		$('nav li').removeClass('current');
		$(this).parent().addClass('current');
		$('h1#heading').text($(this).text());
		var category = $(this).text().toLowerCase().replace(' ','-'),
		speed = 300;
		if (category === 'all-projects') {
			$('#gallery li').hide().fadeIn(speed).removeClass('hidden');
		}else {
			$('#gallery li').each(function() {
				if(!$(this).hasClass(category)) {
					$(this).hide().addClass('hidden');
				}else {
					$(this).hide().fadeIn(speed).removeClass('hidden');
				}
			});
		}
		return false;
	});
	$('#gallery li').on('mouseenter',function() {
		var title = $(this).data('title'),desc = $(this).data('desc');
		$(this).find('a').append('<section class="overlay"><h3>'+title+'</h3><p>'+desc+'</p>');
		$('.overlay').fadeIn(350);
	});
	$('#gallery li').on('mouseleave',function() {
		$(this).children('.overlay').fadeOut(500);
		$('.overlay').fadeOut(350).remove();
	});
});