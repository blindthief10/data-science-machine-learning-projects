$(document).ready(function() {
	$('button').on('click', function(e) {
		e.preventDefault();
		$('#specified').fadeToggle(350);
	});
});