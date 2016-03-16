function roar() {
	function Person(firstName,lastName,age,mate,car) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.mate = mate;
		this.car = car;
	}
	
 	var Jake = function(job) {
 		this.job = job;
 	}
 	Jake.prototype = new Person('Kostas','Diakogiannis',28,false,false);
	var joanne = new Person('Joanne','Kentrou',27,true,false);
	var leonidas = new Person('Leonidas','Kakalis',45,false,true);
	var unemployed = new Jake(false);
	return {firstObj:Jake,secondObj:joanne,thirdObj:leonidas,fourthObj:unemployed};
}

var result = roar();
var creation = document.createElement('<div>');
document.body.appendChild(creation);