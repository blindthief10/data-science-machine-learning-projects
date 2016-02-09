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

var result = add();
console.log(result());