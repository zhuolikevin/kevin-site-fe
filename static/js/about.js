// experience-section
var expPartFadeIn = function(index) {
  var curTag = '#exp-' + index;
  $(curTag + ' > .cbp_tmline')
    .animate({height: (parseInt($(curTag + ' > .cbp_tmlabel')
    .css('margin-bottom').replace(/[^0-9]/ig, '')) + $(curTag + ' > .cbp_tmlabel').height()).toString() + 'px'}, 1000);
  $(curTag + ' > .cbp_tmicon').animate({opacity: 1}, 100);
  $(curTag + ' > .cbp_tmlabel').animate({
    right: '0px',
    opacity: 1
  }, 1000);
  $(curTag + ' > .cbp_tmtime').animate({
    left: '0px',
    opacity: 1
  }, 1000);
};
$(window).scroll(function() {
  if ($(window).scrollTop() >=
    $('#experience-section .section-body').position().top + $('#exp-1').position().top - $(window).height() + 100) {
    expPartFadeIn(1);
  }
  if ($(window).scrollTop() >=
    $('#experience-section .section-body').position().top + $('#exp-2').position().top - $(window).height() + 100) {
    expPartFadeIn(2);
  }
  if ($(window).scrollTop() >=
    $('#experience-section .section-body').position().top + $('#exp-3').position().top - $(window).height() + 100) {
    expPartFadeIn(3);
  }
  if ($(window).scrollTop() >=
    $('#experience-section .section-body').position().top + $('#exp-4').position().top - $(window).height() + 100) {
    expPartFadeIn(4);
  }
  if ($(window).scrollTop() >=
    $('#experience-section .section-body').position().top + $('#exp-5').position().top - $(window).height() + 100) {
    expPartFadeIn(5);
  }
  if ($(window).scrollTop() >=
    $('#experience-section .section-body').position().top + $('#exp-5').position().top - $(window).height() + 100) {
    expPartFadeIn(6);
  }
  if ($(window).scrollTop() >=
    $('#experience-section .section-body').position().top + $('#exp-5').position().top - $(window).height() + 100) {
    expPartFadeIn(7);
  }
});

// skills-section
$('#skl-fe').mouseenter(function() {
  $('.skl-fe').css({
    color: '#222',
    'text-shadow': '2px 2px 1px rgba(0, 0, 0, 0.2)'
  });
}).mouseleave(function() {
  $('.skl-fe').css({
    color: '#808080',
    'text-shadow': 'none'
  });
});
$('#skl-be').mouseenter(function() {
  $('.skl-be').css({
    color: '#222',
    'text-shadow': '2px 2px 1px rgba(0, 0, 0, 0.2)'
  });
}).mouseleave(function() {
  $('.skl-be').css({
    color: '#808080',
    'text-shadow': 'none'
  });
});
$('#skl-lang').mouseenter(function() {
  $('.skl-lang').css({
    color: '#222',
    'text-shadow': '2px 2px 1px rgba(0, 0, 0, 0.2)'
  });
}).mouseleave(function() {
  $('.skl-lang').css({
    color: '#808080',
    'text-shadow': 'none'
  });
});
$('#skl-tools').mouseenter(function() {
  $('.skl-tools').css({
    color: '#222',
    'text-shadow': '2px 2px 1px rgba(0, 0, 0, 0.2)'
  });
}).mouseleave(function() {
  $('.skl-tools').css({
    color: '#808080',
    'text-shadow': 'none'
  });
});

// character-section
$(document).on({
  mouseenter: function() {
    $(this).stop().animate({
      backgroundColor: '#6e6e6e',
      color: '#fff'
    });
  },
  mouseleave: function() {
    $(this).stop().animate({
      backgroundColor: 'transparent',
      color: '#222'
    });
  }
}, '#chara-1, #chara-2, #chara-3, #chara-4');
