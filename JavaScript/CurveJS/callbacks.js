var x = 10;

var counter = setInterval(function() {	
	document.getElementById('demo').innerHTML = x;
	if(x < 1) {
		document.getElementById('time').innerHTML = "Time has passed more than you think!";
		clearInterval(counter);
	}
	
	x = x - 1; 
}, 1000);



