$(document).ready(function() {
		calculateHeight('.codeContainer');
		$('#css').on('click',containerShow);
		$('#html').on('click',containerShow);
		$('#javascript').on('click',containerShow);
		$('#result').on('click',containerShow);
		$('#runButton').on('click',runShow);
});

function getWidth() {
	return $('.active').length;
}

function calculateHeight(selector) {
	 var windowHeight = $(window).height(),
		menuHeight = $('#menu').height(),
		codeContainerHeight = windowHeight - menuHeight;
		var some = $(selector).height(codeContainerHeight);
		return some;
}

function containerShow() {
		$(this).toggleClass('active');
		$('#' + $(this).attr('id') + 'Container').toggle();
		var count = getWidth();
		$('.codeContainer').css('width',100/count + '%');
}

function runShow() {
	$('iframe').contents().find('html').html('<style>'+$('#cssCode').val() + '</style>'+($('#htmlCode').val()));
	document.getElementById('inlineFrame').contentWindow.eval($('#javascriptCode').val());
}




