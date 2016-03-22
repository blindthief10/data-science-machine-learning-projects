$(document).ready(function() {
		calculateHeight('.codeContainer');
		$('#css').on('click',cssShow);
		$('#html').on('click',htmlShow);
		$('#javascript').on('click',javascriptShow);
		$('#result').on('click',resultShow);
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

function cssShow() {
		$(this).toggleClass('active');
		$('#cssContainer').toggle();
		var count = getWidth();
		$('.codeContainer').css('width',100/count + '%');
}


function htmlShow() {
		$(this).toggleClass('active');
		$('#htmlContainer').toggle();
		var count = getWidth();
		$('.codeContainer').css('width',100/count + '%');
}

function javascriptShow() {
		$(this).toggleClass('active');
		$('#javascriptContainer').toggle();
		var count = getWidth();
		$('.codeContainer').css('width',100/count + '%');
}

function resultShow() {
		$(this).toggleClass('active');
		$('#resultContainer').toggle();
		var count = getWidth();
		$('.codeContainer').css('width',100/count + '%');
}


function runShow() {
	$('iframe').contents().find('html').html('<style>'+$('#cssCode').val() + '</style>'+($('#htmlCode').val()));
	document.getElementById('inlineFrame').contentWindow.eval($('#javascriptCode').val());
}




