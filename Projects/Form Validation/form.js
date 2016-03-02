$(document).ready(function() {
	$('form').on('submit',function(event) {
		event.preventDefault();
		console.log(checkValidity(emailPattern,$('#email')));
	});
});

function checkValidity(pattern,selector) {
			if (selector.val().match(pattern)) {
				return 'Your email was valid! Well done!';
			}else {
				return 'Invalid email!';
			}
		}

var emailPattern = /^[\w\.]{2,20}@(gmail|yahoo|hotmail)\.(com|gr|net)$/ig;