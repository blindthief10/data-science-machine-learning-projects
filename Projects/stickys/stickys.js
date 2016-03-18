$(document).ready(function() {
	var formContent = '<div class="modal">' +
			'<span class="closebutton"></span>' +
			'<label id="texter" for="title">Title\'s Note</label><br>' +
			'<input type="text" name="title" placeholder="Put your title here">' +
			'<label id="area" for="text">Note\'s Body Text</label><br>' +
			'<textarea name="text"></textarea>' +
			'<button class="btn">Save Note and Exit</button></div>', speed = 500;
	
	$('#newnote').on('click',function() {
		$('body').append('<div class="overlay"></div>');
		$('body').append(formContent).find('.modal').fadeIn(speed);
		$('.closebutton').on('click',function() {
			$(this).closest('body').find('.overlay').fadeOut(speed);
			$(this).parent().fadeOut(speed);
			setTimeout(function() {
				$('.overlay').remove();
				$('.modal').remove();
			},1000);
		});
		$('.btn').on('click',function() {
			var title = $('input').val(), text = $('textarea').val();
			if(title === '' || text === '') {
				alert('You must include a title and a text for your note');
			}else {
				$(this).closest('body').find('.overlay').fadeOut(speed);
				$(this).parent().fadeOut(speed);
				setTimeout(function() {
					$('.overlay').remove();
					$('.modal').remove();
			},1000);
				$(this).closest('body').append('<div class="note"></div>');
			}
		});
	});
});	



