var app = {};

app.add = function(numbers) {
	var result = 0;
	if(numbers !== undefined && numbers.length)  {
		for(number in numbers) {
			result = result + numbers[number];
		}
		console.log('The result is ' + result);
	}
}



