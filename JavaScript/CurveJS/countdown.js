// Creating the object

var app = {};


// The function assigns the countdown

app.countdown = function(settings) {
	var interval,
	counter = 0,
	startAt = 0,
	endAt = 0;

	if(settings === undefined) {
		console.log('Please input some settings.');
	}
	else {
		if(settings.startAt === undefined || settings.endAt === undefined) {
			console.log('Settings are required in order to proceed.')
		}
		else {
			startAt = parseInt(settings.startAt);
			endAt = parseInt(settings.endAt);

			if(!isNaN(startAt) && !isNaN(endAt)) {
				counter = startAt;
				interval = setInterval(function() {
					if(counter < endAt) {
						console.log('Time has passed more than you thought!');
						clearInterval(interval);
					}
					else {
						console.log(counter);
					}
					counter = counter - 1;
				}, 1000);
			}
		}
	}
}

