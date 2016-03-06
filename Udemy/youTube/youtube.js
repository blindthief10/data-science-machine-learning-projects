$(document).ready(function() {
	$('#query').on('focus',function() {
		$(this).animate({
			width:'100%',
		},350);
		$('#search-btn').animate({
			right:'10px'
		},500);
	});
	$('#query').on('blur',function() {
		if($(this).val() === '') {
		$(this).animate({
			width:'45%'
		},400);
		$('#search-btn').animate({
			right:'360px'
		},400, function() {});
		}
	});
	$('#search-form').on('submit',function(event) {
		event.preventDefault();
		search();
	})
});



function search() {
	var q = $('#query').val();
	$('#results').html('');
	$('buttons').html('');

	//use the get method for youtube api

	$.get('https://www.googleapis.com/youtube/v3/search',{
		part:'snippet, id',
		q: q,
		type: 'video',
		key: 'AIzaSyATwnllqOI9vDBM3hGiXwmnJQzxA-cFa5M'
	}, function(data) {
		var nextPageToken = data.nextPageToken, previousPageToken = data.previousPageToken;
		$.each(data.items, function(i, item) {
			var output = getOutput(item);
			$('#results').append(output);
		});
		var buttons = getButtons(previousPageToken,nextPageToken);
		$('#buttons').html(buttons);
	});
}

function nextPage() {
	var token = $('#next-button').data('token'), q = $('#query').val();
	$('#results').html('');
	$('buttons').html('');

	//use the get method for youtube api

	$.get('https://www.googleapis.com/youtube/v3/search',{
		part:'snippet, id',
		q: q,
		pageToken: token,
		type: 'video',
		key: 'AIzaSyATwnllqOI9vDBM3hGiXwmnJQzxA-cFa5M'
	}, function(data) {
		var nextPageToken = data.nextPageToken, previousPageToken = data.previousPageToken;
		$.each(data.items, function(i, item) {
			var output = getOutput(item);
			$('#results').append(output);
		});
		var buttons = getButtons(previousPageToken,nextPageToken);
		$('#buttons').html(buttons);
	});
}

function prevPage() {
	var token = $('#prev-button').data('token'), q = $('#query').val();
	$('#results').html('');
	$('buttons').html('');

	//use the get method for youtube api

	$.get('https://www.googleapis.com/youtube/v3/search',{
		part:'snippet, id',
		q: q,
		pageToken: token,
		type: 'video',
		key: 'AIzaSyATwnllqOI9vDBM3hGiXwmnJQzxA-cFa5M'
	}, function(data) {
		var nextPageToken = data.nextPageToken, previousPageToken = data.previousPageToken;
		$.each(data.items, function(i, item) {
			var output = getOutput(item);
			$('#results').append(output);
		});
		var buttons = getButtons(previousPageToken,nextPageToken);
		$('#buttons').html(buttons);
	});
}

function getOutput(item) {
	var unique = item.id.videoId;
	var title = item.snippet.title;
	var description = item.snippet.description;
	var thumb = item.snippet.thumbnails.high.url; 
	var channelTitle = item.snippet.channelTitle;
	var videoDate = item.snippet.publishedAt; 

	console.log(unique);
	var generated = '<li><section class="list-left"><img src="'+thumb+'"></section>' +
					'<section class="list-right"><h3><a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/' + unique + '">'+title+'</a></h3><small>By <span class="cTitle">'+ channelTitle +'</span>'+
					'on' + videoDate + '</small><p>'+ description + '</p></section></li><section class="clearfix"></section> ';
				return generated;
}

function getButtons(prevPageToken,nextPageToken) {
	var q = $('#query').val();
		var btnoutput = '<section class="button-container">'+
		'<button id="prev-button" class="paging-button" data-token="'+prevPageToken+'" data-query="'+q+'"' +
		'onclick="prevPage();">Prev Page</button><button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"' +
		'onclick="nextPage();">Next Page</button></section>';
	return btnoutput;
}

