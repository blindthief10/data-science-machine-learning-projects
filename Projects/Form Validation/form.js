$(document).ready(function() {
	$('form').on('submit',function(event) {
		event.preventDefault();
		alert(checkValidity(emailPattern,$('#email')));
	});
});

function checkValidity(pattern,selector) {
			if (selector.val().match(pattern)) {
				return 'Your email was valid! Well done!';
			}else {
				return 'Ποιον πας να κοροιδέψεις ρε καραγκιόζη; Σοβαρέψου!!';
			}
		}

var emailPattern = /^[\w\.]{2,20}@(gmail|yahoo|hotmail)\.(com|gr|net)$/ig;

var app = {
	getWeather: function(location) {
		var promise = $.Deferred();
		$.ajax('/weather',{
			type:'GET',
			data: {obj:location},
			dataType:'json',
			success: function(response) {
				promise.resolve(response.weather);
			},
			error:function(data) {
				promise.reject(data);
			}
		});
		return promise;
	}
}

$('selector').on('click',function() {
	var loc = $('select').data('location');
	app.getWeather(loc).done(function() {
		$('sel').html(response);
	});
})