var changeFa = function(tag) {
  $('#left-nav-section > ul > li > i').removeClass('fa-circle');
  $('#left-nav-section > ul > li > i').addClass('fa-circle-o');
  var tagToChange = '#nav-' + tag + ' > i';
  $(tagToChange).removeClass('fa-circle-o');
  $(tagToChange).addClass('fa-circle');
};
$(window).scroll(function() {
  if ($(window).scrollTop() >= $('#experience-section').position().top * 0.75) {
    $('#left-nav-section').css('opacity', '1');
  } else {
    $('#left-nav-section').css('opacity', '0');
  }
  if ($(window).scrollTop() <= $('#experience-section').position().top - 0.5 * $(window).height()) {
    changeFa('about');
  } else if ($(window).scrollTop() > $('#experience-section').position().top - 0.5 * $(window).height() &&
  $(window).scrollTop() <= $('#skills-section').position().top - 0.5 * $(window).height()) {
    changeFa('exp');
  } else if ($(window).scrollTop() > $('#skills-section').position().top - 0.5 * $(window).height() &&
  $(window).scrollTop() <= $('#characters-section').position().top - 0.5 * $(window).height()) {
    changeFa('skl');
  } else {
    changeFa('chara');
  }
});
$(document)
  .on({
    mouseenter: function() {
      $('#nav-about > span').animate({opacity: 1}, 100);
    },
    mouseleave: function() {
      $('#nav-about > span').animate({opacity: 0}, 100);
    },
    click: function() {
      $('html, body').animate({scrollTop: 0}, 'slow');
    }
  }, '#nav-about > i')
  .on({
    mouseenter: function() {
      $('#nav-exp > span').animate({opacity: 1}, 100);
    },
    mouseleave: function() {
      $('#nav-exp > span').animate({opacity: 0}, 100);
    },
    click: function() {
      $('html, body').animate({scrollTop: $('#experience-section').position().top - 50}, 'slow');
    }
  }, '#nav-exp > i')
  .on({
    mouseenter: function() {
      $('#nav-skl > span').animate({opacity: 1}, 100);
    },
    mouseleave: function() {
      $('#nav-skl > span').animate({opacity: 0}, 100);
    },
    click: function() {
      $('html, body').animate({scrollTop: $('#skills-section').position().top - 50}, 'slow');
    }
  }, '#nav-skl > i')
  .on({
    mouseenter: function() {
      $('#nav-chara > span').animate({opacity: 1}, 100);
    },
    mouseleave: function() {
      $('#nav-chara > span').animate({opacity: 0}, 100);
    },
    click: function() {
      $('html, body').animate({scrollTop: $('#characters-section').position().top - 50}, 'slow');
    }
  }, '#nav-chara > i');

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

// characters-section
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
