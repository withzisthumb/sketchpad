$(document).ready(function() {
	for (i = 1; i < 257; i++) {
		$('.container').append('<div>');

	}
	$('.container div').addClass('square');
	$('.container div').on('mouseenter', function() {
		var randomColor = '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
		$(this).css('background-color', randomColor);
		$(this).css('border-style', 'none');
	});
	$('#prompt').on('click', function() {
		$('.container div').css('background-color', 'white');
		$('.container div').css('border-style', 'dashed');

	});

});
