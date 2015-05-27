function jane(fahreneit) {
	return (5/9) * (fahreneit-32);
}
document.getElementById("whatever").innerHTML= jane(79);

function jake(kelvin) {
	return (kelvin-273);
}
	document.getElementById("whoever").innerHTML=jake(300);
	
function joke(celsius) {
	return (273+celsius);
}
	document.getElementById("whenever").innerHTML=joke(22);
	
document.getElementById("schedule").innerHTML=Date();