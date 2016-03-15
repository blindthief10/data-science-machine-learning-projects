var roar = function() {
	function Person(firstName,lastName,age,mate,car) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.mate = mate;
		this.car = car;
	}
	var jake = new Person('Kostas','Diakogiannis',28,false,false);
	var joanne = new Person('Joanne','Kentrou',27,true,false);
	var leonidas = new Person('Leonidas','Kakalis',45,false,true);
	return {firstObj:jake,secondObj:joanne,thirdObj:leonidas};
}

var result = roar();