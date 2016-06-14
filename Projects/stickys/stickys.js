$(document).ready(function() {

	// check if the local storage object is empty or not. If not then load html content with the local storage
	// settings that have been saved from a previous session.

	if (localStorage.getItem('notes')) {
		count = JSON.parse(localStorage.getItem('count'));
		obj = JSON.parse(localStorage.getItem('notes'));
	for (var key in JSON.parse(localStorage.getItem('notes'))) {
	$('body').append('<div class="note" data-role="'+JSON.parse(localStorage.getItem('notes'))[key].datarole+'">'+
		'<div onclick="another(this.parentNode);" class="clojure"></div><h4>'+JSON.parse(localStorage.getItem('notes'))[key].title+'</h4><p>'+JSON.parse(localStorage.getItem('notes'))[key].text+'</p>'+
		'<button class="edit" onclick="refer(this.parentNode); editNote(fadeSpeed);">Edit Note</button></div>');
	}
}

	// Show the form in order to write your note and it's title by clicking on this button.

	$('#newnote').on('click',function() {
		showForm(formContent,fadeSpeed);
	});
});


	// the HTML form content that it is going to be shown after the 'new sticky' button is pressed.

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

function another(referred) {
	$(referred).addClass('storageTempo');
	for (var omega in obj) {
		if (obj[omega].datarole === parseInt($('.storageTempo').attr('data-role'))) {
			delete obj[omega];
		}
	}
	$(referred).hide().remove();
	localStorage.setItem('notes',JSON.stringify(obj));
}

function refer(reference) {
		$(reference).addClass('something');
	}

	// The edit note function triggers after pressing the button 'edit note' on an existing note (see function showForm down!)
	// It shows the form dialog and it captures the existing values both on title and content notes'.
	// You can then edit or re edit form the form and the values will be updated both on screen and the local storage session.

function editNote(speed) {

	// Dialog is going to be shown when the 'edit note' button is pressed (of course the note has to be created before that!)

	var updateContent = '<div class="modal">' +
			'<span class="closebutton"></span>' +
			'<label id="texter" for="title">Title\'s Note</label><br>' +
			'<input type="text" name="title" placeholder="Put your title here" value="'+$('.something').find('h4').text()+'">' +
			'<label id="area" for="text">Note\'s Body Text</label><br>' +
			'<textarea name="text">'+$('.something').find('p').text()+'</textarea>' +
			'<button class="btn">Save Note and Exit</button></div>';

			// Show the form dialog and the overlay

	$('body').append('<div class="overlay"></div>');
	$('body').append(updateContent).find('.modal').fadeIn(speed);
	$('.closebutton').on('click',function() {
		$(this).closest('body').find('.overlay').fadeOut(speed);
		$(this).parent().fadeOut(speed);
			setTimeout(function() {
			$('.overlay').remove();
			$('.modal').remove();
			$('.something').removeClass('something');
		},speed);
	});

	// Save the value of input and textarea, update it and push it to the localStorage object.
	// Validate again if title and content of the note is empty and alert it to the user.

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

			// CHeck out the refer(this.parentNode) function on-click, Class something is a class that is attached to the note that we
			//  want to update. A trick in order to detect which note has been pressed so to show the correct values on the form!
			// the refer function is above, outside this function.

			$('body').find('.something').html('<div class="close"></div><h4>'+title+'</h4><p>'+text+'</p><button class="edit" onclick="refer(this.parentNode); editNote(fadeSpeed);">Edit Note</button>');

			// Using custom html5 data attribute to update correctly the values to the correct local storage object.

			for (var take in obj) {
				if (obj[take].datarole === parseInt($('.something').attr('data-role'))) {
					obj[take].title = title;
					obj[take].text = text;
				}
			}
			localStorage.setItem('notes',JSON.stringify(obj));
			$('.note').find('.edit').next().remove();
			$('.something').removeClass('something');
			$('.close').on('click',function() {
				$(this).parent().addClass('localtempo');

				// Same as above but for deleting notes both from screen and the local storage.
				// We do not want to keep them in local storage because next time we will visit the page it is
				// going to generate notes for each object that 'finds' in local storage.
				for (var y in obj) {
					if (obj[y].datarole === parseInt($('.localtempo').attr('data-role'))) {
					delete obj[y];
					}
				}
				$('.localtempo').hide().remove();
				localStorage.setItem('notes',JSON.stringify(obj));
			});
		}
	});
}

// The form box that is shown after requesting to save a new note.
//  A dialog form is on the screen. There is a validation if either title or note's content is empty.
// If not then the note is saved to the local storage in order to be retrieved afterwards by using the same browser.
// The form dialog then fades out and the note is being shown on screen.

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
			$('.note').find('.edit').next().remove();
			$('.close').on('click',function() {
				$(this).parent().addClass('temporary')
				for (var z in obj) {
					if (obj[z].datarole === parseInt($('.temporary').attr('data-role'))) {
					delete obj[z];
					}
				}
				$('.temporary').hide().remove();
				localStorage.setItem('notes',JSON.stringify(obj));
			});
		}
	});
}
