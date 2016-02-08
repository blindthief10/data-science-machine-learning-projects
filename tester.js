
var bigArr = [{firstName:'Kostas', lastName:'Diakogiannis'},{firstName:'Joanne',lastName:'Kentrou'},{firstName:'Jim', lastName:'Reny'}];
	for (var i = 0; i < bigArr.length; i++) {
		for (var x in bigArr[i]) {
			console.log(bigArr[i][x])
			}
		}

var Car = function(brand,nationality) {
	this.brand = brand;
	this.nationality = nationality;
}

var Peugeot = function(model,color,year) {
	this.model = model;
	this.color = color;
	this.year = year;
}

Peugeot.prototype = new Car('Peugeot','France');

var Passau = new Peugeot('Passau','Red',1988);

console.log(Passau);

