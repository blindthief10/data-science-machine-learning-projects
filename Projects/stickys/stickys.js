$(document).ready(function() {
	var formContent = '<div class="modal">' +
			'<div class="closebutton"></div>' +
			'<label id="texter" for="title">Title\'s Note</label><br>' +
			'<input type="text" name="title" placeholder="Put your title here">' +
			'<label id="area" for="text">Note\'s Body Text</label><br>' +
			'<textarea name="text"></textarea>' +
			'<button class="btn">Save Note and Exit</button></div>';
	
	$('#newnote').on('click',function() {
		$('body').append('<div class="overlay"></div>');
		$('body').append(formContent).find('.modal').fadeIn(350);
	});
});	