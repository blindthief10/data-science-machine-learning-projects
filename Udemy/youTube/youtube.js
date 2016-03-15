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


// this is the functiion that we query from the search and request the data by using the Youtube Search API

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
		var nextPageToken = data.nextPageToken, previousPageToken = data.prevPageToken;
		console.log(previousPageToken);
		$.each(data.items, function(i, item) {
			var output = getOutput(item);
			$('#results').append(output);
		});
		var buttons = getButtons(previousPageToken,nextPageToken);
		$('#buttons').html(buttons);
	});
}


// Here is the function that is executed when the next page button is clicked and gets you to the next5 results

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
		var nextPageToken = data.nextPageToken, previousPageToken = data.prevPageToken;
		console.log(previousPageToken);
		$.each(data.items, function(i, item) {
			var output = getOutput(item);
			$('#results').append(output);
		});
		var buttons = getButtons(previousPageToken,nextPageToken);
		$('#buttons').html(buttons);
	});
}

/*Same as the next page but for previous page. Note that the default api does not use a previous
page button if the results are in the first page*/
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
		var nextPageToken = data.nextPageToken, previousPageToken = data.prevPageToken;
		$.each(data.items, function(i, item) {
			var output = getOutput(item);
			$('#results').append(output);
		});
		var buttons = getButtons(previousPageToken,nextPageToken);
		$('#buttons').html(buttons);
	});
}

// Displaying to html page our API results
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

/*Create previous and next page buttons in html page. The previous button is not generated
if the results are on the first page*/

function getButtons(previousPageToken,nextPageToken) {
	var q = $('#query').val();
	if(previousPageToken === undefined) {
		var btnoutput = '<section class="button-container"><button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"' +
		'onclick="nextPage();">Next Page</button></section>';
	}else {
		var btnoutput = '<section class="button-container">'+
		'<button id="prev-button" class="paging-button" data-token="'+previousPageToken+'" data-query="'+q+'"' +
		'onclick="prevPage();">Prev Page</button><button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"' +
		'onclick="nextPage();">Next Page</button></section>';
	}
	return btnoutput;
}

