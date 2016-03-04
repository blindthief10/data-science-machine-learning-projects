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