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
