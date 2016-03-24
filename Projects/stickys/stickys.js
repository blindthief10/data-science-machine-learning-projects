$(document).ready(function() {	
	if (localStorage.getItem('notes')) {
		count = JSON.parse(localStorage.getItem('count'));
		obj = JSON.parse(localStorage.getItem('notes'));
		console.log(obj);
		console.log(count);
	for (var key in JSON.parse(localStorage.getItem('notes'))) {
	$('body').append('<div class="note" data-role="'+JSON.parse(localStorage.getItem('notes'))[key].datarole+'"><div class="close"></div><h4>'+JSON.parse(localStorage.getItem('notes'))[key].title+'</h4><p>'+JSON.parse(localStorage.getItem('notes'))[key].text+'</p><button class="edit" onclick="refer(this.parentNode); editNote(fadeSpeed);">Edit Note</button></div>');
	}
}
	// When clicking the Add Sticky Button create the Modal Form Window 
	// and all the functionality by executing the showForm function!

	$('#newnote').on('click',function() {
		showForm(formContent,fadeSpeed);
	});
	
});
// This is the content that is going to be created each time you try to create a new sticky. 
// It creates the modal window and the form inside with empty text

var formContent = '<div class="modal">' +
			'<span class="closebutton"></span>' +
			'<label id="texter" for="title">Title\'s Note</label><br>' +
			'<input type="text" name="title" placeholder="Put your title here">' +
			'<label id="area" for="text">Note\'s Body Text</label><br>' +
			'<textarea name="text"></textarea>' +
			'<button class="btn">Save Note and Exit</button></div>', 
			fadeSpeed = 500,
			count = 0,
			obj = {};
			

/*The refer function help us keeping a reference with specific element by adding a class to it so it can be easily accessible later.
We do this because we want to have access to the element with inline Javascript. 
*/

function refer(reference) {
		$(reference).addClass('something');
				}

/*This the modal window but with a little bit different content than this of the showForm function.
This is because the content that is loaded is the same but the input and textarea fields are filled with
the current value. Note that this function is triggered only when the users wants to update the note!
*/

function editNote(speed) {
	var updateContent = '<div class="modal">' +
			'<span class="closebutton"></span>' +
			'<label id="texter" for="title">Title\'s Note</label><br>' +
			'<input type="text" name="title" placeholder="Put your title here" value="'+$('.something').find('h4').text()+'">' +
			'<label id="area" for="text">Note\'s Body Text</label><br>' +
			'<textarea name="text">'+$('.something').find('p').text()+'</textarea>' +
			'<button class="btn">Save Note and Exit</button></div>';

	$('body').append('<div class="overlay"></div>');
		$('body').append(updateContent).find('.modal').fadeIn(speed);
	$('.closebutton').on('click',function() {
		$(this).closest('body').find('.overlay').fadeOut(speed);
		$(this).parent().fadeOut(speed);
			setTimeout(function() {
			$('.overlay').remove();
			$('.modal').remove();
		},speed);
	});
	$('.btn').on('click',function() {
	var title = $('input').val(), text = $('textarea').val();		
		if(title === '' || text === '') {
			alert('You must include a title and a text for your note');
		}else {
			$(this).closest('body').find('.overlay').fadeOut(speed);
			$(this).parent().fadeOut(speed);
				setTimeout(function() {
				$('.overlay').remove();
				$('.modal').remove();
			},speed);
			$('body').find('.something').html('<div class="close"></div><h4>'+title+'</h4><p>'+text+'</p><button class="edit" onclick="refer(this.parentNode); editNote(fadeSpeed);">Edit Note</button>');
			$('.note').find('.edit').next().remove();
			$('.something').removeClass('something');
			$('.close').on('click',function() {
				$(this).parent().hide().remove();
			});	
		}
	});
}

/*This is the function that creates the modal window and the form in it's empty mode. The function is triggered
when the users wants to create a new note and Add a new sticky! This function creates also all the buttons and
actions that are created from it and are nested to it.
*/


function showForm(content,speed) {	
	$('body').append('<div class="overlay"></div>');
		$('body').append(content).find('.modal').fadeIn(speed);
	$('.closebutton').on('click',function() {
		$(this).closest('body').find('.overlay').fadeOut(speed);
		$(this).parent().fadeOut(speed);
			setTimeout(function() {
			$('.overlay').remove();
			$('.modal').remove();
		},speed);
	});
	$('.btn').on('click',function() {
		var title = $('input').val(), text = $('textarea').val();
		if(title === '' || text === '') {
			alert('You must include a title and a text for your note');
		}else {
			count++;
			$(this).closest('body').find('.overlay').fadeOut(speed);
			$(this).parent().fadeOut(speed);
				setTimeout(function() {
				$('.overlay').remove();
				$('.modal').remove();
			},speed);
			$('body').append('<div data-role="'+count+'" class="note"><div class="close"></div><h4>'+title+'</h4><p>'+text+'</p><button class="edit" onclick="refer(this.parentNode); editNote(fadeSpeed);">Edit Note</button><div>');
			obj['var'+count] = {datarole:count, title:title, text:text};
			localStorage.setItem('notes',JSON.stringify(obj));
			localStorage.setItem('count',JSON.stringify(count));
			console.log(JSON.parse(localStorage.getItem('notes')));
			$('.note').find('.edit').next().remove();
			$('.close').on('click',function() {
				$(this).parent().hide().remove();
			});	
		}
	});
}




			








