var sloganText = 'Live Your Dream';
var sloganText2 = 'Wear Your Passion';

var blinkPrintText2 = function(slogan) {
  if (!slogan) {
    return;
  }
  var newText = $('#slogan2').text() + slogan[0],
    newSlogan = slogan.substr(1);

  $('#slogan2').text(newText);
  setTimeout(function() {
    blinkPrintText2(newSlogan);
  }, 100);
};

var blinkPrintText = function(slogan) {
  if (!slogan) {
    blinkPrintText2(sloganText2);
    return;
  }
  var newText = $('#slogan').text() + slogan[0],
    newSlogan = slogan.substr(1);

  $('#slogan').text(newText);
  setTimeout(function() {
    blinkPrintText(newSlogan);
  }, 100);
};

$(document)
  .ready(function() {
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.masonry-grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 200
    });
    blinkPrintText(sloganText);
  })
  .on({
    mouseenter: function() {
      $(this).children('.musk').animate({opacity: 1}, 500);
      $(this).children('.musk').children('span').animate({top: 0}, 500);
    },
    mouseleave: function() {
      $(this).children('.musk').animate({opacity: 0}, 500);
      $(this).children('.musk').children('span').animate({top: '100px'}, 500);
    }
  }, '#lofter, #tuchong, #five-hundred-px');
