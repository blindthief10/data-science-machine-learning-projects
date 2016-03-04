
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

function add() {
	var count = 0,setThis = true, oper = 'Some string';
	function innerCove() {
		count++;
		if (setThis) {
			setThis = false;
		} else {
			setThis = true;
		}
		return setThis;
	}
	return innerCove;
}

function roar() {
	var arr = [1,2,4,5,8,23,31];
	function clearing() {
		arr.map(function(x) {
			return arr[x];
		})
	}
	return clearing;
}

var resultados = roar();
console.log(resultados());

var something = document.body.children;

(function tester() {
		console.log(something[0].children[0].children[2].nodeType);
})();

function rightNextToIt() {
	var count = 0;
	function rendering() {
		count++;
		return count;
	}
	return rendering;
} 

var result = rightNextToIt();
console.log(result());


