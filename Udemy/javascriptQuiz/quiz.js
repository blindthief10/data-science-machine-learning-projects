function submitAnswers(total,score,answers) {
	var q1 = document.forms['quizForm']['q1'].value,
	q2 = document.forms['quizForm']['q2'].value,
	q3 = document.forms['quizForm']['q3'].value,
	q4 = document.forms['quizForm']['q4'].value,
	q5 = document.forms['quizForm']['q5'].value;

	for (var i = 1; i <= total; i++) {
		if(eval('q' + i) == null || eval('q' + i) == '') {
			alert('You missed  question ' + i + '.');
			return false;
		}
	}

	for (var j = 1; j <= total; j++) {
		if(eval('q' + j) == answers[j - 1]) {
			score++;
		}
	}
	return 'You found ' + score + ' out of ' + total + '.';
}


$(document).ready(function() {
$('#sub').on('click',function(event) {
	event.preventDefault();
	$('#results').html('<h3>' + submitAnswers(5,0,['b','a','d','b','d']) + '</h3>');
	});
});


