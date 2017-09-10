$(function () {
	// checkScreenResolution();
	popups();
});

var THEMES_AMOUNT = 6;

function checkScreenResolution() {
	var resolutions = {
		'1082' : '768',
		'1366' : '970',
		'1443' : '1025',
		'1680' : '1193',
		'1920' : '1363'
	};
	
	var currentResolution = {
		'width' : window.screen.width,
		'height': window.screen.height
	};
	
	var	randomNumber = getRandomInt(1, THEMES_AMOUNT), height,
		backgroundFilename = 'none';
		
	for (var width in resolutions) {
		height = resolutions[width];
		
		if (height >= currentResolution.height && width >= currentResolution.width) {
			backgroundFilename = 'url(i/backgrounds/' + randomNumber + '/' + width + 'x' + height + '.jpg)';
			break;
		}
	}
	
	$('body').css('background-image', backgroundFilename);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function popups() {
	var popupControls = $('.popup-control'),
		overlays = $('.popup-overlay'),
		images = $('.popup-image');

	popupControls.bind('click', function (e) {
		e.preventDefault();

        var index = $(this).data('index');
        var overlay = $('.popup-overlay-' + index);
        var image = $('.popup-image-' + index);

		overlay.fadeIn('fast', function () {
			image.fadeIn('fast');
		});
	});
	
	overlays.bind('click', hide);
	
	$(document).bind('keydown', function (e) {
		if (e.keyCode == 27) {
			hide();
		}
	});
	
	function hide () {
		images.fadeOut('fast');
		overlays.fadeOut('slow');
	}
}
