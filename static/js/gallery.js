var sloganText = 'ONE PERSON, ONE CAMERA, ONE FOOT OF WORLD';

var blinkPrintText = function(slogan) {
  if (!slogan) {
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
