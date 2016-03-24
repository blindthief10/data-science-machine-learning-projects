$(document).ready(function() {	
	if (localStorage.getItem('notes')) {
		count = JSON.parse(localStorage.getItem('count'));
		obj = JSON.parse(localStorage.getItem('notes'));
	for (var key in JSON.parse(localStorage.getItem('notes'))) {
	$('body').append('<div class="note" data-role="'+JSON.parse(localStorage.getItem('notes'))[key].datarole+'">'+
		'<div onclick="another(this.parentNode);" class="clojure"></div><h4>'+JSON.parse(localStorage.getItem('notes'))[key].title+'</h4><p>'+JSON.parse(localStorage.getItem('notes'))[key].text+'</p>'+
		'<button class="edit" onclick="refer(this.parentNode); editNote(fadeSpeed);">Edit Note</button></div>');
	}
}

	$('#newnote').on('click',function() {
		showForm(formContent,fadeSpeed);
	});
});

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
			$('.something').removeClass('something');
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




			








