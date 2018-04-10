$(document).ready(function() {
  var slides = $('.slide');
  var currentIndex = 0;

  var prevButton = $('.slide-control-prev');
  var nextButton = $('.slide-control-next');

  var checkDisabled = function() {
    if ((currentIndex + 1) > (slides.length - 1)) {
      prevButton.attr('disabled', true);
    } else {
      prevButton.attr('disabled', false);
    }

    if ((currentIndex - 1) < 0) {
      nextButton.attr('disabled', true);
    } else {
      nextButton.attr('disabled', false);
    }
  };

  checkDisabled();

  prevButton.on("click", function() {
    var currentSlide = $(slides[currentIndex]);
    var prevSlide = $(slides[currentIndex + 1]);
    prevSlide.css('margin-left', 0);

    currentSlide.css('margin-left', '-100%');
    currentIndex++;

    checkDisabled();
  });

  nextButton.on("click", function() {
    var currentSlide = $(slides[currentIndex]);
    var nextSlide = $(slides[currentIndex - 1]);
    nextSlide.css('margin-left', 0);

    currentSlide.css('margin-left', '100%');
    currentIndex--;

    checkDisabled();
  });

  var navList = $('.nav .nav-list');
  var navLink = $('.nav .fa-bars');

  navLink.on("click", function() {
    navList.toggle();
  });

  var releaseMarginTop = $('.slide .release');

  function calcHeight() {
    var headerHeight = $('.header').height();
    releaseMarginTop.css('margin-top', headerHeight + 40);
  }

  setTimeout(calcHeight, 200);
  $(window).on('resize', calcHeight);

  $(".release-play-button").modalVideo();
});
